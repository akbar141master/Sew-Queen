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
let DATA = DataHelp.dataGet('tagall');
    SewQueen['IntroduceCMD']({ pattern: 'scan ?(.*)', fromMe: WorkType, desc: DATA.SCAN}, (async (message, input) => { 

        if (input[1] == '') return await message.client.sendMessage(message.jid, DATA.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(input[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + input[1] + '``` \n' + DATA.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,'```' + input[1] + '``` \n' + DATA.UNSUC, MessageType.text);
        }
    }));