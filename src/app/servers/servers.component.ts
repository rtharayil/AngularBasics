import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  enable = false;
  serverEnabled = false;
  serversStatus = 'no servers are added';
  serverName = 'happy' ;

  servers = ['server 1', 'server 2'];
  constructor() {
    setTimeout( () => {
      this.enable = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  OnClickButton(): void{
    this.serverEnabled = true;
    this.serversStatus = 'Yes servers are added' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event ): void{
    console.log(event);
    }

}
