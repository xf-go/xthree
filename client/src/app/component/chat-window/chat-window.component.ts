import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit {

  ws: WebSocket;
  newMsg: string;
  email: string;
  username: string;
  joined = false;
  chatContent: string
  msgList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.ws = new WebSocket('ws://127.0.0.1:8080/ws');
    this.ws.onopen = () => {
      console.log("Connection open ...")
    }
    this.ws.onmessage = (evt) => {
      console.log("onmessage: " + evt.data)
      this.msgList.push(evt.data);
    }
    this.ws.onclose = () => {
      console.log('Connection close !!!')
    }
  }

  join() {
    this.joined = true;
  }

  send() {
    console.log(this.newMsg)
    this.ws.send(
      JSON.stringify({
        email: this.email,
        username: this.username,
        message: this.newMsg
      }));
    this.newMsg = '';
  }
}
