const mineflayer = require("mineflayer")
const express = require("express")

const app = express()

function criarBot() {
    const bot = mineflayer.createBot({
        host: "eradocobre.aternos.me",
        port: 61001,
        username: "PudimBot"
    })

    bot.on("spawn", () => {
        console.log("Conectado")
    })

    bot.on("end", () => {
        console.log("Desconectado. Reconectando em 1s...")

        setTimeout(criarBot, 1000)
    })

    bot.on("error", err => {
        console.log(err)
    })
    return bot
}

criarBot()

app.get("/", (req, res) => {
    res.send("PudimBot online")
})

app.listen(3000, () => {
    console.log("Web server iniciado")
})
