const Express = require("express")
const app = Express()
const json = require("./api/answers.json")

const PORT = 4000
console.log(json)

app.use(Express.json())
app.use(Express.urlencoded())


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})


app.get("/json", (req, res) => {
    res.send(json)
})

