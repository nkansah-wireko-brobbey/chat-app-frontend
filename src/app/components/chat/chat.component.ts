import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { IMessage } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  message: string = "" as string;

  messages: string[] = [] as string[];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
      this.listMessages()
  }

  public sendMessage(): void {
    // Send message to the server
    this.chatService.sendMessage(this.message)
    this.message = "";
  }

  public listMessages(): void {
    // List messages from the server
    this.chatService.listMessages().subscribe({
      next:(response: IMessage)=>{
        this.messages.push(response.data)
      }
    })
  }

}
