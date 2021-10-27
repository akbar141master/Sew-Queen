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
let DATA = DataHelp.dataGet('_plugin');
let NDATA = DataHelp.dataGet('updater');
let Heroku = require('heroku-client');
let Db = require('../DataBase/cmd');


let heroku = new Heroku({
    token: Details.HEROKU.API_KEY
});


let baseURI = '/apps/' + Details.HEROKU.APP_NAME;
SewQueen['IntroduceCMD']({
        pattern: 'install ?(.*)', 
        fromMe: WorkType, 
       dontAdCommandList: true,
  //    disc: 💔
        }, 
(async (message, input) => { 
if (input[1] === '') return await message.sendMessage(DATA.NEED_URL + '.install sew')
    try {
        var url = new URL(input[1]);
    } catch {
        return await message.sendMessage(DATA.INVALID_URL);
    }
    
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }

    var response = await got(url);
    if (response.statusCode == 200) {
        var plugin_name = response.body.match(/IntroduceCMD\({.*pattern: ["'](.*)["'].*}/);
        if (!plugin_name.length) {
        if (plugin_name.length >= 1) {
            plugin_name = "sewqueen__" + plugin_name[1];
        } else {
            plugin_name = "sewqueen__" + Math.random().toString(36).substring(8);
        } 
        } else {
            plugin_name = "sewqueen__" + Math.random().toString(36).substring(8);
            }

        fs.writeFileSync('./Commands/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('./' + plugin_name);
            return await message.sendMessage(DATA.INVALID_PLUGIN + ' ```' + e + '```');
        }

        await Db.installPlugin(url, plugin_name);
        await message.client.sendMessage(message.jid, DATA.INSTALLED, MessageType.text);
    }
})); 
