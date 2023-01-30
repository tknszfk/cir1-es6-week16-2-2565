const http = require('http')
const { type } = require('os')

const server = http.createServer(function(req,res){
if(req.url == '/'){
    res.writeHead(200,{'Content-Type':'Text/plain'})
    res.write('Home page')
    res.end()
}else if(req.url == '/about'){
    res.writeHead(200,{'Content-Type':'Text/plain'})
    res.write("about page")
    res.end()
}else if(req.url == '/admin'){
    res.writeHead(200,{'Content-Type':'Text/plain'})
    res.end()
}else{
    res.end('Invalid Requset!')
}


})

PORT = process.env.PORT|| 5000
server.listen(5000,function(){
    console.log(`Server running at http://localhost:5000`)
})