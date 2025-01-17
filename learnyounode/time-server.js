'use strict'
import * as net from 'net';

const server = net.createServer((socket) => {
    socket.end(getTD()+'\n');
})

server.listen(process.argv[2])

const getTD = () => {
    let dateStr = '';
    let myDate = new Date(); 
    dateStr = myDate.getFullYear() + '-' + myDate.getMonth()+1 + '-' + myDate.getDate() + ' ';
    dateStr += myDate.getHours().toString().padStart(2, '0') + ':' + myDate.getMinutes().toString().padStart(2, '0');
    return dateStr;
}
