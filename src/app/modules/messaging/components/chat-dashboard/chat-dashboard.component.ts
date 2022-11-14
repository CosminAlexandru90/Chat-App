import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.css']
})
export class ChatDashboardComponent implements OnInit {
  @Input() members: string[] | undefined;
  @Input() admins: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
