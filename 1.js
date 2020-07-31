const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})




app.post("/kubus", (req,res) => {

    let sisi = Number(req.body.sisi) 

    let luaspermukaankubus = Math.pow(sisi,2) * 6
    let volumekubus = Math.pow(sisi,3)

    let response = {
        sisi: sisi,
        volumekubus: volumekubus, 
        luaspermukaankubus: luaspermukaankubus,
    }

    res.json(response)
})

app.post("/balok", (req,res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi) 

    let luaspermukaanbalok = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi)
    let volumebalok = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luaspermukaanbalok: luaspermukaanbalok,
        volumebalok: volumebalok,
    }

    res.json(response)
})

app.post("/prisma_segitiga", (req,res) => {

    let alas = Number(req.body.alas)
    let tinggi = Number(req.body.tinggi)
    let tinggiprisma = Number(req.body.tinggiprisma) 

    let luasalas = alas * tinggi / 2
    let luassisi = alas * tinggiprisma * 3
    let luaspermukaanprismasegitiga =    luasalas * 2 + luassisi * 3 
    let volumeprismasegitiga = luasalas * tinggi

    let response = {
        alas: alas,
        tinggi: tinggi,
        tinggiprisma: tinggiprisma,
        luasalas: luasalas,
        luassisi: luassisi,
        luaspermukaanprismasegitiga: luaspermukaanprismasegitiga,
        volumeprismasegitiga: volumeprismasegitiga,
    }

    res.json(response)
})

app.post("/limas_segiempat", (req,res) => {

    let sisi = Number(req.body.sisi)
    let tinggilimas = Number(req.body.tinggilimas) 

    let luassisiprisma = sisi * tinggilimas / 2
    let luaspermukaanlimasegiempat = Math.pow(sisi,2) + luassisiprisma * 4
    let volumelimassegiempat = Math.pow(sisi,2) * tinggilimas / 3

    let response = {
        sisi: sisi,
        tinggilimas: tinggilimas,
        luassisiprisma: luassisiprisma,
        luaspermukaanlimasegiempat: luaspermukaanlimasegiempat,
        volumelimassegiempat: volumelimassegiempat,
    }

    res.json(response)
})