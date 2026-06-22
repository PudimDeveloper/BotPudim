const mineflayer = require("mineflayer")

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

