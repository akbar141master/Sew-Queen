/* 

Sew Queen Whatsapp Bot                       

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License;

Coded By Ravindu Manoj

*/ 

let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification, WAConnectionTest, WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys');
let fs = require('fs');
let os = require('os');
let ffmpeg = require('fluent-ffmpeg');
let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let DataHelp = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { thumbnail } = require('sew-queen-pro/sources/dc/media/thumbnail');  
let simpleGit = require('simple-git');
let git = simpleGit();
let Heroku = require('heroku-client');
let { PassThrough } = require('stream');
let heroku = new Heroku({ token: Details.HEROKU.API_KEY })
let DATA = DataHelp.dataGet('updater');


SewQueen['IntroduceCMD']({pattern: 'update$', fromMe: true, dontAdCommandList: true, desc: DATA.UPDATER_DESC}, (async (message, input) => {
    await git.fetch();
    var commits = await git.log([Details.BRANCH + '..origin/' + Details.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            DATA.UPDATE, MessageType.text
        );    
    } else {
        var degisiklikler = DATA.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '▫️ ' + commit.date.substring(0, 10) + ':\n' + commit.message + '\n✧' + commit.author_name + '➣\n\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            degisiklikler + '```', MessageType.text
        ); 
    }
}));
var Action = ''
if (Details.LANG == 'SI') Action = '*✨SEW QUEEN✨ අප්ඩේට්වෙමින් පවතියි!*'
if (Details.LANG == 'EN') Action = '*✨Sew Queen✨ is Updating!*'

SewQueen['IntroduceCMD']({pattern: 'update now$', fromMe: true, dontAdCommandList: true, desc: DATA.UPDATE_NOW_DESC}, (async (message, input) => {
    await git.fetch();
    var commits = await git.log([Details.BRANCH + '..origin/' + Details.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            DATA.UPDATE, MessageType.text
        );    
    } else {
        var on_progress = false
        if (on_progress) return await message.client.sendMessage(message.jid,Action,MessageType.text)
        var guncelleme = await message.reply(DATA.UPDATING);
        if (Details.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Details.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,DATA.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,DATA.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Details.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Details.HEROKU.API_KEY + "@"
            )
            on_progress = true
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Details.BRANCH);

            await message.client.sendMessage(
                message.jid,DATA.UPDATED, MessageType.text);

            await message.sendMessage(DATA.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,DATA.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Unsuccessful!*\n*why:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
}));
