

global.namaown = "Dqrsc"
global.namabot = "ãguentãr"
global.versisc = "2.0"
global.owner = ["62882000012868"]
global.tele = "t.me/Dqrsc"
global.url = "t.me/Dqrsc"
global.namastore = "Dqrsc"
global.dqr = "WhatsApp.com"

// Global Simbol
global.simbol = "⩟ -"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 5
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})