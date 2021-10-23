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

let sew = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');
let SEWQU = ('*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By ' + Details.BOTNAME + '👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n            *Clear Ribbon*\n    _👑by      ' + Details.BOTNAME + '👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Details.BOTNAME + '👑_\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ\n*************************************')
let FINAL = "THIS IS AN ANTISAPM (anti lag),"
let MuteSew = "Trying to close group,"
let MUT = ".mute"
let TAG = ".tag"
let SCRIPTBYSEW = "Running Clear Reban Script."

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

SewQueen['IntroduceCMD']({pattern: 'antispam', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, input) => {

  var msg = await message.reply('❉Safe Mode Activating....');

  await message.client.sendMessage(
    message.jid,MuteSew, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCRIPTBYSEW, MessageType.text);

        await message.client.sendMessage(
          message.jid,SEWQU, MessageType.text);

           await message.client.sendMessage(
             message.jid,SEWQU, MessageType.text);
            
             await message.client.sendMessage(
                message.jid,TAG, MessageType.text);

          await message.client.sendMessage(
              message.jid,SEWQU, MessageType.text);

                        
  }));
SewQueen['IntroduceCMD']({pattern: 'antispam', fromMe: false, delownsewcmd: false, desc: sew,}, (async (message, input) => {
var us = await checkUsAdmin(message)
if (!us) return;
  var msg = await message.reply('❉Safe Mode Activating....');

  await message.client.sendMessage(
    message.jid,MuteSew, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCRIPTBYSEW, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,SEWQU, MessageType.text);
         await message.client.sendMessage(
            message.jid,SEWQU, MessageType.text);
             await message.client.sendMessage(
                message.jid,TAG, MessageType.text);
          await message.client.sendMessage(
              message.jid,SEWQU, MessageType.text);
  }));
