import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Message} from "../../models/message.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  //inputMessage!: string;
  inputMessageForm!: FormGroup;
  @Input() messages: Message[] | undefined;
  @Input() currentUser: string = '';

  @Output() message=new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.inputMessageForm = new FormGroup<any>({
      'inputMessage': new FormControl(),
    });
  }

  onSubmit() {
    if (this.inputMessageForm.value.inputMessage) this.message.emit(this.inputMessageForm.value.inputMessage);
    this.inputMessageForm.reset();
  }
}
