import { Server } from "socket.io";


export class SocketServerProvider {

    private instance : any;
    private SocketServerProvider() {
    }
    public getInstance() : SocketServerProvider{
        return this.instance || this.createServer(); 
    }


    private createServer() {
        this.instance = new Server(3001);
        return this.instance;
    }
}



