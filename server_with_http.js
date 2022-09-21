const http = require('http');
// function myRequestListnener(request,response){
//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//         });
//         response.end('Hello World');
// }
http.createServer((req,res) =>{
    
    logger();
    res.writeHead(200, {
        'Content-Type': 'text/plain'
        });
        res.end('Bye World!!!');
    
    
}).listen(3000);
function logger(){
    console.log("Recive Request");
}