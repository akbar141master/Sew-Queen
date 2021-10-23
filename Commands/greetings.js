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
let DataB = require('../DataBase/greetings');
let DATA = DataHelp.dataGet('greetings');

SewQueen['IntroduceCMD']({pattern: 'welcome$', fromMe: true, desc: DATA.WELCOME_DESC}, (async (message, input) => {
    var hg = await DataB.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,DATA.NOT_SET_WELCOME,MessageType.text);
    } else {
        await message.client.sendMessage(message.jid,DATA.WELCOME_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

SewQueen['IntroduceCMD']({pattern: 'welcome (.*)', fromMe: true, dontAdCommandList: true}, (async (message, input) => {
    if (input[1] === '') {
        return await message.client.sendMessage(message.jid,DATA.NEED_WELCOME_TEXT);
    } else {
        if (input[1] === 'delete') { await message.client.sendMessage(message.jid,DATA.WELCOME_DELETED,MessageType.text); return await DataB.deleteMessage(message.jid, 'welcome'); }
        await DataB.setMessage(message.jid, 'welcome', input[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,DATA.WELCOME_SETTED,MessageType.text)
    }
}));

SewQueen['IntroduceCMD']({pattern: 'goodbye$', fromMe: true, desc: DATA.GOODBYE_DESC}, (async (message, input) => {
    var hg = await DataB.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.client.sendMessage(message.jid,DATA.NOT_SET_GOODBYE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,DATA.GOODBYE_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

SewQueen['IntroduceCMD']({pattern: 'goodbye (.*)', fromMe: true, dontAdCommandList: true}, (async (message, input) => {
    if (input[1] === '') {
        return await message.client.sendMessage(message.jid,DATA.NEED_GOODBYE_TEXT,MessageType.text);
    } else {
        if (input[1] === 'delete') { await message.client.sendMessage(message.jid,DATA.GOODBYE_DELETED,MessageType.text); return await DataB.deleteMessage(message.jid, 'goodbye'); }
        await DataB.setMessage(message.jid, 'goodbye', input[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,DATA.GOODBYE_SETTED,MessageType.text)
    }
}));
