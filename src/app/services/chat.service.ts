import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private socket: Socket
  ) { }

  public sendMessage(message: string): void {
    // Send message to the server
    this.socket.emit('message', message);
  }

  public listMessages() {
    // List messages from the server

    return this.socket.fromEvent<IMessage>('messages');
  }
}
