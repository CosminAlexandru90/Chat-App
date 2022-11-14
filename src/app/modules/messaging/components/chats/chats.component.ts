import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessagingService} from "../../services/messaging.service";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  @Input() chats: any;
  @Input() currentUser: string = '';

  @Output() selected=new EventEmitter();

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit(): void {
  }

  }
