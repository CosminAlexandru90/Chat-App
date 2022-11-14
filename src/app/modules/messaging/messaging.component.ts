import { Component, OnInit } from '@angular/core';
import {MessagingService} from "./services/messaging.service";
import {Message} from "./models/message.model";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  currentUser:string = 'Ion';
  messages: Message[] | undefined;
  currentChat: number | undefined;
  chats: any;
  members: string[] | undefined;
  admins: string[] | undefined;

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.loadChats();
    this.loadChat();
  }

  loadChats() {
    this.messagingService.getChats().subscribe((chats: any) => {
      this.chats = chats;
      this.chats.forEach((chat: { members: string[]; }) => {
        // @ts-ignore
        chat.members = chat.members.filter(el => el !== `${this.currentUser}`)
      });
    })
  }

  loadChat() {
    if(this.currentChat){
    this.messagingService.getChat(this.currentChat).subscribe((chat: any) => {
        this.messages = chat.messages;
        // @ts-ignore
      this.members=chat.members;
        // @ts-ignore
      this.admins=chat.admins;
      }
    );
    }
  }

  selectChat($event: any) {
    this.currentChat=$event;
    this.loadChat()

  }


  submitMessage($event: string):void {
    if(this.messages){
      this.messages.push(
        {
          "id": this.messages.length + 1,
          "author": `${this.currentUser}`,
          "content": $event,
          "date": "1661421408529"
        }
      )
      this.messagingService.update(this.currentChat, this.messages).subscribe(() => this.loadChat());
    }
  }

}
