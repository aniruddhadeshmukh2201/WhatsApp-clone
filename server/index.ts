import { SocketServerProvider } from './server';

function initilize() {
    let socketServerProvider =  new SocketServerProvider();
    let io : any = socketServerProvider.getInstance();

    io.on('connection', (socket : any) => {
        socket.emit('connect', socket.id);
    });
}

initilize();

