import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    template: `<p [ngStyle]="{backgroundColor:getColor()}" [ngClass]="{online: serverStatus === 'online' }"> from template {{serverID}} {{ getServerStatus()}} <p>`,
    styles: [`
    .online {
        color: yellow;
    }
    `]
})
export class ServerComponent{

    serverID = 10;
    serverStatus = '';
    getServerStatus(): string {
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor(): string{
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
