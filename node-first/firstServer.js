const express = require('express')

const app = express()

app.get('/dogs', (req, res) => {
    return res.send("BoRK BoRK")
})

app.listen(3000, function(){
    console.log("app on port 3000")
})