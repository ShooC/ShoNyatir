/*
Thanks To
Pembuat Base ( Irfan )
Pengembang Script Bot ( KirBotz )

Jangan Hapus Thanks To Di Atas
*/

const fs = require("fs")
const { color } = require("../../ACTION/STORAGE/ACC/color")
const chalk = require('chalk')

global.gopayno = "6285607831412" //Jika Tidak Punya Jangan Ganti Tar Error
global.danano = "6285607831412" //Jika Tidak Punya Jangan Ganti Tar Error
global.shopeepayno = "6285607831412" //Jika Tidak Punya Jangan Ganti Tar Error
global.nomerOwner = "6285607831412" //Bebas ganti 
global.namaOwner = "Sho" //Bebas ganti
global.namaBot = "Slime Bot" //Bebas ganti asal jangan pake font
global.copyright = "Slime Bot × Sho" //Bebas ganti
global.creAtor = "6285607831412@s.whatsapp.net" //Jangan Ganti Tar Error
global.wm = "ボ S L I M E ⁴̅⁰͍⁴̵" // Jangan Ganti Ini Thanks To
global.autoJoin = true
global.publik = true
global.simi = false
global.docType = "pdf"
global.Ttk = "```"
global.tdksopan = ["bang","Bang","bng","bg","Bng","Bg","Woi","woi","p","P","Pe","pe"]
global.sendbot = ["slimebot","slime","slimee","slimebotz","rimuru","rimuruu","slimebotwa","bot","Bot"]
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync(`./ACTION/IMAGE/thumb.png`)
global.qris = fs.readFileSync(`./ACTION/IMAGE/qris.jpg`)
global.thumbsewa = fs.readFileSync(`./ACTION/IMAGE/sewabot.png`)
require("../../ACTION/STORAGE/ACC/tiktok")
require("../../ACTION/STORAGE/ACC/jadibot")
require("../../ACTION/STORAGE/ACC/removebg")
require("../../ACTION/STORAGE/ACC/ffstalk")
require("../../ACTION/STORAGE/ACC/mlstalk")
require("../../ACTION/STORAGE/ACC/githubstalk")
require("../../ACTION/STORAGE/ACC/igstalk")
require("../../ACTION/STORAGE/ACC/npmstalk")
require("../../ACTION/STORAGE/ACC/savefrom")
require("../../ACTION/STORAGE/ACC/styletext")
require("../../ACTION/STORAGE/ACC/upload")
require("../../ACTION/STORAGE/ACC/photooxy")
require("../../ACTION/STORAGE/ACC/ephoto")
require("../../ACTION/STORAGE/ACC/cerpen")
require("../../ACTION/STORAGE/ACC/gdrive")
require("../../ACTION/STORAGE/ACC/obfus")
require("../../ACTION/STORAGE/ACC/santedgc")
require("../../ACTION/STORAGE/ACC/santedpc")
require("../../ACTION/STORAGE/ACC/vn")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})