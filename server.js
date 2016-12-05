const http = require('http')
const express = require('express')

const app = express()

app.get('/', (req, res) => {

    const ip = req.ip.replace(/^.*:/, '')
    const conn = req.connection.remoteAddress
    const soft = req.headers['user-agent']
    const lang = req.headers['accept-language'].split(',')[0]
    
    res.type('json')
    res.end(JSON.stringify({
        ipaddress: ip,
        language: lang,
        software: soft
    }))
})

http.createServer(app).listen(8080, () =>{
    console.log('http server started at port 8080')
})