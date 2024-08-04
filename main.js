const TelegramBot = require('node-telegram-bot-api')
const token = "7211662496:AAG_G2gKdM3RCpEstER8rPnu1TOAepOhLDw"
const options = {
    polling : true
}

const hamdaniBot = new TelegramBot(token, options )


const star = "/"
const adventure = new RegExp(`^${star}adventureanime$`)
const isekai = new RegExp(`^${star}isekaianime$`)
const romance = new RegExp(`^${star}romanceanime$`)
const mecha = new RegExp(`^${star}robotanime$`)
const mulai = new RegExp(`^${star}start$`)
const halo = new RegExp(`^${star}halo$`)
const anime = new RegExp(`^${star}anime$`)
const judul = new RegExp(`^${star}judulanime$`)
const awalan = `Selamat datang di hamanime_bot!
Bakayarooooooooo

Berikut adalah kode perintah :

/start : untuk memulai
/halo : untuk menyapa
/anime :untuk daftar top anime
/adventureanime : untuk daftar anime adventure(petualangan/action)
/romanceanime : untuk daftar anime romantis
/robotanime : untuk daftar anime mecha
/isekaianime : untuk datar anime isekai

hamanime_bot juga bisa pantun dan memberikan motivasi lohh..
Bakayaroooo....

Berikut adalah daftar perintahnya :

!pantun : untuk memberikan pantun random
!motivasi: untuk memberikan motivasi" keren

hamanime_bot dibuat oleh HAMDANI😊.....`


hamdaniBot.onText(halo, (panggil) =>{
    hamdaniBot.sendMessage(panggil.from.id, `Halo ${panggil.from.username}
Selamat datang di hamanime_bot
Silahkan nikmati fitur yang tersedia
Terimakasih sudah mampir.....`)
})

hamdaniBot.onText(mulai , (panggil) => {
    hamdaniBot.sendMessage(panggil.from.id, awalan)
})

hamdaniBot.onText(adventure, async(panggil)=>{
    const advanime= "https://kitsu.io/api/edge/anime?filter[categories]=adventure"
    const apicall = await fetch (advanime)
    rsc = await apicall.json()
    {rsc.data.map (data=>{
        return (
            image = data.attributes.posterImage.original,
            animeadv = `${data.attributes.titles.en} | ${data.attributes.titles.en_jp} | ${data.attributes.titles.ja_jp} `,
            hamdaniBot.sendPhoto(panggil.from.id, image, {
                caption : animeadv
            })
        )
    })}
    // console.log(rsc)
})

hamdaniBot.onText(romance, async(panggil)=>{
    const advanime= "https://kitsu.io/api/edge/anime?filter[categories]=romance"
    const apicall = await fetch (advanime)
    rsc = await apicall.json()
    {rsc.data.map (data=>{
        return (
            image = data.attributes.posterImage.original,
            animeadv = `${data.attributes.titles.en} | ${data.attributes.titles.en_jp} | ${data.attributes.titles.ja_jp} `,
            hamdaniBot.sendPhoto(panggil.from.id, image, {
                caption : animeadv
            })
        )
    })}
    // console.log(rsc)
})
hamdaniBot.onText(isekai, async(panggil)=>{
    const advanime= "https://kitsu.io/api/edge/anime?filter[categories]=isekai"
    const apicall = await fetch (advanime)
    rsc = await apicall.json()
    {rsc.data.map (data=>{
        return (
            image = data.attributes.posterImage.original,
            animeadv = `${data.attributes.titles.en} | ${data.attributes.titles.en_jp} | ${data.attributes.titles.ja_jp} `,
            hamdaniBot.sendPhoto(panggil.from.id, image, {
                caption : animeadv
            })
        )
    })}
    // console.log(rsc)
})

hamdaniBot.onText(mecha, async(panggil)=>{
    const advanime= "https://kitsu.io/api/edge/anime?filter[categories]=mecha"
    const apicall = await fetch (advanime)
    rsc = await apicall.json()
    {rsc.data.map (data=>{
        return (
            image = data.attributes.posterImage.original,
            animeadv = `${data.attributes.titles.en} | ${data.attributes.titles.en_jp} | ${data.attributes.titles.ja_jp} `,
            hamdaniBot.sendPhoto(panggil.from.id, image, {
                caption : animeadv
            })
        )
    })}
    // console.log(rsc)
})

hamdaniBot.onText(anime, async(panggil) => {
    const topanime = "https://api.jikan.moe/v4/top/anime"
    const apicall = await fetch (topanime)
    const response = await apicall.json()
    
    {response.data.map(data=> {
      return(
        // yolo = data.title, data.episodes, data.source, data.title_japanese, data.popularity, data.rank, data.synopsis,
        yolo = `${data.title} | ${data.title_japanese}`,
        
        gambar = data.images.webp.image_url,
        hamdaniBot.sendPhoto(panggil.from.id, gambar, {
            caption:yolo
        })
      )
    })}
})