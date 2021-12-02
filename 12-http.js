const http = require('http')
const server = http.createServer((req,res)=> {
    // console.log(req);
    // res.write('welcome to your home page')
    // res.end()
    if (req.url === '/') {
        res.end('welcome to your home page')
    }
    if (req.ull === '/about') {
        res.end('here is a short history')
    }
    res.end(`
    <h1> OOOops</h1>
    <p> We can't find the page your looking for </p>
    <a href="/">back home</a>
    `)
})
server.listen(1000)