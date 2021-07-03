// REQUIRED MODULES
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    
    var reqUrl = req.url;
    var content, statusCode;
    
    if(reqUrl == '/'){
        statusCode = 200;
        content = '<h1>Home Page</h1>';
        content += '<p>Welcome to Node Website</p>';
    }else {
        statusCode = 404;
        content = '<h1>Not Found</h1>';
        content += '<p>Requested page is under construction</p>';
    }

    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(content);

});

server.listen(process.env.PORT,()=>{
    console.log(`server is listing on PORT: ${process.env.PORT} under ${process.env.NODE_ENV} Enviroment`);
})