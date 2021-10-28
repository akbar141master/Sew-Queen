/* 
🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲
🎲 Sew Queen Whatsapp Bot                       
🎲 ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙
🎲 Telegram: t.me/RavinduManoj
🎲 Facebook: https://www.facebook.com/ravindu.manoj.79
🎲 Licensed under the  GPL-3.0 License;
🎲 ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙ ⚙
🎲 Coded By Ravindu Manoj
🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲
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
let Language = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true
let { thumbnail } = require('../media/thumbnail');  
let SEWA = 'need word'
let SEWB = 'Successfully Changed'
let CLR_DESC = 'Chat clear'
const { ReplyMessegedelete, sendMessageResetgroup, sendMessageJoingroup,
        sendMessageKickgroup, sendMessageAddgroup, sendMessagePromogroup,
        sendMessageDimogroup, sendMessageMutegroup, sendMessageUnmutgroup, 
        sendMessageDpgroup, sendMessageGetstatus, sendMessageClearlist, sendMessageTextboom, 
        sendMessageMpboom, sendMessageJpboom, sendMessageStickboom, sendMessageVidboom, 
        sendMessagecommgrp, sendMessagediffgrp } = require('sew-queen-pro/sources/dc/cmd/admin');
//const { sendMessagebadckickdata, sendMessageinbokickdata, sendMessagedatacopykick} = require('sew-queen-pro/sources/dc/cmd/bad');

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Details.HEROKU.API_KEY
});
let baseURI = '/apps/' + Details.HEROKU.APP_NAME;
// ==========================ɢʀᴏᴜᴘ ᴄʟᴏɴᴇ ===========
SewQueen['IntroduceCMD']({
        pattern: 'boomstop',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {

    await QueenSEW.client.sendMessage(QueenSEW.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await QueenSEW.client.sendMessage(QueenSEW.jid, error.message, MessageType.text);
});
}));
// ===============================ᴅᴇʟᴇᴛᴇ==========
const DEL_DESC = "Deletes The Replied Message Send By The Bot"
SewQueen['IntroduceCMD']({
        pattern: 'del ?(.*)',
        fromMe: WorkType,
        desc: DEL_DESC},
(async (QueenSEW, input) => {
await ReplyMessegedelete(QueenSEW, input)
}))
//================================ʙᴏᴏᴍ=========
SewQueen['IntroduceCMD']({
        pattern: 'boomtext ?(.*)',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
await sendMessageTextboom(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'boomaudio$',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
await sendMessageMpboom(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'boomphoto$',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
await sendMessageJpboom(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'boomstic$',
        fromMe: true,
        dontAdCommandList: true },
(async (QueenSEW, input) => {    
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
await sendMessageStickboom(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'boomvid$',
        fromMe: true,
        dontAdCommandList: true },
(async (QueenSEW, input) => {
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
await sendMessageVidboom(QueenSEW, input)
}));
//================================ᴄʟᴇᴀʀ=========
SewQueen['IntroduceCMD']({
        pattern: 'clear ?(.*)',
        fromMe: true,
        desc: CLR_DESC,
        usage: '.clear // .clear 94718281xxx // .clear 94718281xxx-12345678@g.us'},
(async (QueenSEW, input) => {
 await sendMessageClearlist(QueenSEW, input)
}));
//================================ꜱᴛᴀᴛᴜꜱ=========
SewQueen['IntroduceCMD']({
        pattern: 'getst$',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
    await sendMessageGetstatus(QueenSEW, input)
}));
//================================ʙᴀᴅ ᴋɪᴄᴋ=========
/*
SewQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        dekownsewcmd: false},
(async (QueenSEW, input) => {
await sendMessagebadckickdata(QueenSEW, input)
}));
//================================ᴄᴏᴘʏ ʏᴀ ᴋɪᴄᴋ 😆=========
SewQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        dekownsewcmd: false},
(async (QueenSEW, input) => {
await sendMessagedatacopykick(QueenSEW, input)
}));
//================================ɪɴʙᴏx ʙʟᴏᴄᴋ=========
 if (Details.INBO == 'true') {
SewQueen['IntroduceCMD']({on: 'text',
        fromMe: false,
        dekownsewcmd: false,
        onlyPm: true },
(async (QueenSEW, input) => {
await sendMessageinbokickdata(QueenSEW, input)
}));

}
*/
//================================ꜰᴏʀ ɢʀᴏᴜᴘ=========
SewQueen['IntroduceCMD']({
        pattern: 'comm ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (QueenSEW, input) => { 
await sendMessagecommgrp(QueenSEW, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'diff ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (QueenSEW, input) => { 
await sendMessagediffgrp(QueenSEW, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'join ?(.*)',
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {  
await sendMessageJoingroup(QueenSEW, input)
    }));
SewQueen['IntroduceCMD']({
        pattern: 'reset ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
await sendMessageResetgroup(QueenSEW, input)
  }));
SewQueen['IntroduceCMD']({
        pattern: 'kick ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
await sendMessageKickgroup(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'add(?: |$)(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
await sendMessageAddgroup(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'promote ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
await sendMessagePromogroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'demote ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
await sendMessageDimogroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'mute ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
await sendMessagesendMessageMutegroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'unmute ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
await sendMessagesendMessageUnmutgroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'invite ?(.*)',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
    var im = await checkImAdmin(QueenSEW);
    if (!im) return await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await QueenSEW.client.groupInviteCode(QueenSEW.jid);
    await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));
SewQueen['IntroduceCMD']({
        pattern: 'name ?(.*)',
        onlyGrpSew: true,
        fromMe: true,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
    var im = await checkImAdmin(QueenSEW);
    if (!im) return await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (input[1] === '') return await QueenSEW.client.sendMessage(QueenSEW.jid,SEWA);
    await QueenSEW.client.groupUpdateSubject(QueenSEW.jid, input[1]);
    await QueenSEW.client.sendMessage(QueenSEW.jid,SEWB,MessageType.text);
    }
));

SewQueen['IntroduceCMD']({
        pattern: 'dp',
        fromMe: true,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {    
await sendMessageDpgroup(QueenSEW, input)
}));

if (Details.GRPMANAGE == 'true') {

SewQueen['IntroduceCMD']({
        pattern: 'reset ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;
await sendMessageResetgroup(QueenSEW, input)
  }));
SewQueen['IntroduceCMD']({
        pattern: 'kick ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;
await sendMessageKickgroup(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'add(?: |$)(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;
await sendMessageAddgroup(QueenSEW, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'promote ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessagePromogroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'demote ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessageDimogroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'mute ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessageMutegroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'unmute ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessageUnmutgroup(QueenSEW, input)
}));

SewQueen['IntroduceCMD']({
        pattern: 'invite ?(.*)',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
    var im = await checkImAdmin(QueenSEW);
    if (!im) return await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await QueenSEW.client.groupInviteCode(QueenSEW.jid);
    await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));
SewQueen['IntroduceCMD']({
        pattern: 'name ?(.*)',
        onlyGrpSew: true,
        fromMe: false,
        dontAdCommandList: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;
    var im = await checkImAdmin(QueenSEW);
    if (!im) return await QueenSEW.client.sendMessage(QueenSEW.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (input[1] === '') return await QueenSEW.client.sendMessage(QueenSEW.jid,SEWA);
    await QueenSEW.client.groupUpdateSubject(QueenSEW.jid, input[1]);
    await QueenSEW.client.sendMessage(QueenSEW.jid,SEWB,MessageType.text);
    }
));

SewQueen['IntroduceCMD']({
        pattern: 'dp',
        fromMe: false,
        dontAdCommandList: true,
        onlyGrpSew: true},
(async (QueenSEW, input) => {  
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessageDpgroup(QueenSEW, input)
}));
        /*
SewQueen['IntroduceCMD']({
        pattern: 'comm ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (QueenSEW, input) => { 
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessagecommgrp(QueenSEW, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'diff ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
  //    disc: 
        }, 
(async (QueenSEW, input) => { 
var us = await checkUsAdmin(QueenSEW)
if (!us) return;  
await sendMessagediffgrp(QueenSEW, input)
})); 
*/
if (Details.LANG == 'EN') {
SewQueen['IntroduceCMD']({
        pattern: 'admin$',
        fromMe: false,
        dekownsewcmd: false,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
            var us = await checkUsAdmin(QueenSEW)
if (!us) return;
            await QueenSEW.sendMessage(`*✨✨♔♕ADMIN COMMAND♕♔✨✨*

      

      ┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
      ┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
      ╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
      ┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
      ┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
      ┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
      ┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
      ┈╰━━━━╲╱━━━━╯┈╳ɴ
        ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ ❤
*******************************************

*ALL COMMANDS👇👇👇⋆｡˚ ⁀➷★✼☆｡* ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

*🇱🇰 Command:* .warn
*✨ Description:* Give Some One To Warn... anyone warned ${Details.WARNCOUNT} times.. after he/she will kick the group automatically..

*🇱🇰 Command:* .dp
*✨ Description:* Change the Group Display picture

*🇱🇰 Command:* .kick
*✨ Description:* kick someone in the group. Reply to message or tag a person to use command.

*🇱🇰 Command:* .reset
*✨ Description:* reset the group link

*🇱🇰 Command:* .add
*✨ Description:* Adds someone to the group.

*🇱🇰 Command:* .promote
*✨ Description:* Makes any person an admin.

*🇱🇰 Command:* .demote
*✨ Description:* Takes the authority of any admin.

*🇱🇰 Command:* .mute
*✨ Description:* Mute the group chat. Only the admins can send a message.

*🇱🇰 Command:* .unmute
*✨ Description:* Unmute the group chat. Anyone can send a message.

*🇱🇰 Command:* .invite
*✨ Description:* Provides the group's invitation link.

*🇱🇰 Command:* .name
*✨ Description:* Change the Group Name

*🇱🇰 Command:* .dp
*✨ Description:* Change the Group Display Picture

*🇱🇰 Command:* .tag
*✨ Description:* Tags everyone in the group.


┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
┈╰━━━━╲╱━━━━╯┈╳ɴ
  ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ
  
  `);
    }));
}
if (Details.LANG == 'SI') {
SewQueen['IntroduceCMD']({
        pattern: 'admin$',
        fromMe: false,
        dekownsewcmd: false,
        dontAdCommandList: true},
(async (QueenSEW, input) => {
        var us = await checkUsAdmin(QueenSEW)
if (!us) return;
            await QueenSEW.sendMessage(`*✨✨♔♕ඇඩ්මින් කමාන්ඩ්♕♔✨✨*



      ┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
      ┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
      ╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
      ┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
      ┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
      ┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
      ┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
      ┈╰━━━━╲╱━━━━╯┈╳ɴ
        ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ ❤
*******************************************

*සියලු කමාන්ඩ් 👇👇👇⋆｡˚ ⁀➷★✼☆｡* ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

*🇱🇰 කමාන්ඩ්:* .warn 
*✨ විස්තර:* කෙනෙකුට අනතුරු ඇගවීමක් කිරීමට යොදා ගනියි.. ඔහුට ${Details.WARNCOUNT} වරක් අනතුරු ඇගවූ පසු.. ඔහුව ස්වයංක්‍රීයව සමූහයෙන් ඉවත් වේ...

*🇱🇰 කමාන්ඩ්:* .dp
*✨ විස්තර:* ගෲපයේ Display Picture වෙනස් කරයි

*🇱🇰 කමාන්ඩ්:* .kick
*✨ විස්තර:* කෙනෙකු ගෲප් එකෙන් ඉවත් කල හැක.

*🇱🇰 කමාන්ඩ්:* .reset
*✨ විස්තර:* ගෲප් ලින්කුව වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .add
*✨ විස්තර:* කෙනෙකු ගෲප් එකකට ඇතුලත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .promote
*✨ විස්තර:* කෙනෙකුට ඇඩ්මින් ලබා දීම සදහා යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .demote
*✨ විස්තර:* කෙනෙකුගෙන් ඇඩ්මින් ඉවත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .mute
*✨ විස්තර:* ගෲප් එක මියුට් කල හැක.

*🇱🇰 කමාන්ඩ්:* .unmute
*✨ විස්තර:* ගෲප් එක unmute කරයි.

*🇱🇰 කමාන්ඩ්:* .invite
*✨ විස්තර:* ගෲප් එකෙහි ඉන්වයිට් ලින්ක් එක ලබා ගත හැක.

*🇱🇰 කමාන්ඩ්:* .name
*✨ විස්තර:* ගෲප් එකෙහි නාමය වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .dp
*✨ විස්තර:* ගෲප් එකෙහි ප්‍රොෆයිල් ෆොටෝ එක වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .tag
*✨ විස්තර:* ගෲප් එකේ සිටින අය ටැග් කිරීමට භාවිත කරන්න.


┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
┈╰━━━━╲╱━━━━╯┈╳ɴ
  ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ`);
    }));
}
}
