const http = require('http');

http.createServer((req,res)=>{

    //res.setHeader('Content-Disposition','attachment;filename=lista.csv');
    //res.writeHead(200,{'Content-Type':'application/csv'})
    //res.writeHead(200,{'Content-Type':'application/json'})

    // const persona={
    //     id:2,
    //     nombre:'Keith'
    // }

    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto:',8080);