/* 
Sew Queen Whatsapp Bot    

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License;

Coded By Ravindu Manoj
*/
let DataPack = require('sew-queen-pro/export/output');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let GBLACK =require('sew-queen-pro/grp')
let {CheckUpdatesWeb, sendMessageownerMSG, sendMessageADSMSG, sendMessageBotOn, sendMessageGreetingMSG, sendMessageMSGMSG, sendMessageBlackListMSG, sendMessageBIOMSG} = require('sew-queen-pro/sources/dc/sew')
let fs = require('fs');
let os = require('os');
let got = require('got');
let SQQA = require('./SQ-QA')
let WorkType = Details.WORKTYPE == 'public' ? ' PUBLIC' : ' PRIVATE'
let lanGuage = Details.LANG == 'SI' ? 'SINHALA' : 'ENGLISH'
let path = require("path");
let chalk = require('chalk');
let {WAConnection, MessageOptions, MessageType, Mimetype, Presence, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, waChatKey, mentionedJid, processTime, prepareMessageFromContent, relayWAMessage } = require('@adiwajshing/baileys');  
let {Message, StringSession, Image, Video} =  require('sew-queen-pro/sources/dc/Wa-Base/');
let { DataTypes } = require('sequelize');
let { getMessage } = require("./DataBase/greetings");
let Heroku = require('heroku-client');
let simpleGit = require('simple-git');
let heroku = new Heroku({
    token: Details.HEROKU.API_KEY
});
let git = simpleGit();
let baseURI = '/apps/' + Details.HEROKU.APP_NAME;

let SewQueenDB = Details.DATABASE.define('SewQueen', {
        info: {
                type: DataTypes.STRING,
                allowNull: false
        },
        value: {
                type: DataTypes.TEXT,
                allowNull: false
        }
});
fs.readdirSync('./DataBase/').forEach(plugin => {
        if (path.extname(plugin).toLowerCase() == '.js') {
                require('./DataBase/' + plugin)
        }
})
let Commandsdb = require('./DataBase/cmd');
var OWN = {
        ff: '94785435462,94785457519'
}
String.prototype.format = function () {
        var i = 0,
                args = arguments;
        return this.replace(/{}/g, function () {
                return typeof args[i] != 'undefined' ? args[i++] : '';
        })
};
if (!Date.now) {
        Date.now = function () {
                return new Date().getTime();
        }
}
Array.prototype.remove = function () {
        var what, a = arguments,
                L = a.length,
                ax;
        while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                }
        }
        return this;
};
async function sewQueen(webversion) {
        await Details.DATABASE.sync();
        var StrSes_Db = await SewQueenDB.findAll({
                where: {
                        info: 'StringSession'
                }
        });
        const DataKey = new WAConnection();
        DataKey.version = webversion || [2, 2140, 12];
        let Session = new StringSession();
        await sendMessageownerMSG(DataKey)
        await sendMessageBIOMSG(DataKey)
        await sendMessageADSMSG(DataKey)
      DataKey.logger.level = Details.DEBUG ? 'debug' : 'warn';
        var Lostdb;
        if (StrSes_Db.length < 1) {
                Lostdb = true;
                DataKey.loadAuthInfo(Session.deCrypt(Details.SESSION));
        } else {
                DataKey.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
        }
        DataKey.on('credentials-updated', async () => {
                let authInfo = DataKey.base64EncodedAuthInfo();
                if (StrSes_Db.length < 1) {
                        await SewQueenDB.create({
                                info: "StringSession",
                                value: Session.createStringSession(authInfo)
                        });
                } else {
                        await StrSes_Db[0].update({
                                value: Session.createStringSession(authInfo)
                        });
                }
        })
        DataKey.on('connecting', async () => {
                console.log(`${chalk.bold.rgb(238, 7, 230)('S')}${chalk.bold.rgb(4, 252, 29)('E')}${chalk.bold.rgb(252, 4, 37)('W ')}${chalk.bold.rgb(21, 4, 252)('Q')}${chalk.bold.rgb(0, 255, 255)('U')}${chalk.bold.rgb(255, 0, 127)('E')}${chalk.bold.rgb(76, 0, 153)('E')}${chalk.bold.rgb(255, 255, 0)('N')}
${chalk.white.bold('Version:')} ${chalk.red.bold(Details.VERSION)}
${chalk.blue.italic('🎲 TRY TO LOGIN WHATSAPP... PLEASE WAIT...')}`);
        });
        DataKey.on('open', async () => {
                console.log(chalk.bold.rgb(238, 7, 230)('✬ LOGIN SUCCESSFUL!'));
                console.log(chalk.blueBright.italic('⚓ PASSWORD CHECKING⚓'));
                if (Details.SEWRR == 'raviya') {
                        console.log(chalk.green.bold('✯ PASSWORD VERIFIED✯'))
                } else if (Details.SEWRR !== 'raviya') {
                        throw new Error("Wrong password !!");
                        throw new Error("Wrong password !!");
                        throw new Error("Wrong password !!");
                        throw new Error("Wrong password !!");
                        throw new Error("Wrong password !!");
                        return;
                }
            console.log(chalk.blueBright.italic('✬ INSTALLING COMMANDS & LANGUAGE'));
            console.log(chalk.blueBright.italic('✬ COMMANDS INSTALLED!'));
            console.log(chalk.bold.rgb(252, 4, 37)('✓ ' + lanGuage + ' LANGUAGE INSTALLED!'))
                var Commands = await Commandsdb.PluginDB.findAll();
                Commands.map(async (plugin) => {
                        if (!fs.existsSync('./Commands/' + plugin.dataValues.name + '.js')) {
                                console.log(plugin.dataValues.name);
                                var response = await got(plugin.dataValues.url);
                                if (response.statusCode == 200) {
                                        fs.writeFileSync('./Commands/' + plugin.dataValues.name + '.js', response.body);
                                        require('./Commands/' + plugin.dataValues.name + '.js');
                                }
                        }
                });
   
                fs.readdirSync('./Commands').forEach(plugin => {
                        if (path.extname(plugin).toLowerCase() == '.js') {
                                require('./Commands/' + plugin);
                        }
                });
                console.log(chalk.bold.rgb(238, 7, 230)('🇱🇰 SRI LANKA 🇱🇰'));
                console.log(chalk.green.bold('🎲 SEW QUEEN IS' + WorkType + ' 🎲'));
                await sendMessageBotOn(DataKey)
        })
        DataKey.on('chat-update', async m => {
                if (!m.hasNewMessage) return;
                if (!m.messages && !m.count) return;
                let msg = m.messages.all()[0];
                if (Details.NO_ONLINE) {
                        await DataKey.updatePresence(msg.key.remoteJid, Presence.unavailable)
                }
                await sendMessageGreetingMSG(DataKey, getMessage, msg)
                if (Details.BLOCKCHAT !== false) {
                var abc = Details.BLOCKCHAT + ', sewqueen-ravindumanoj'.split(',');                            
                if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
                }
                if (GBLACK.ALL_GROUP !== 'raviya') {     
                var sup = GBLACK.ALL_GROUP;                            
                if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
                }
                await sendMessageBlackListMSG(DataKey, msg)
                await sendMessageMSGMSG(DataKey, msg, OWN, SQQA)
        });
        try {
                await DataKey.connect();
        } catch {
                if (!Lostdb) {
                        console.log(chalk.red.bold('Loading Old Version Session...'))
                        DataKey.loadAuthInfo(Session.deCrypt(Details.SESSION));
                        try {
                                await DataKey.connect();
                        } catch {
                                return;
                        }
                }
        }
}
async function StartSewQueen() {
    const CheckWebUpdate = await CheckUpdatesWeb()
    sewQueen(CheckWebUpdate)
}
StartSewQueen()
