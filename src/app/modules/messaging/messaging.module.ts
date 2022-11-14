import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagingComponent} from './messaging.component';
import {HeaderComponent} from './components/header/header.component';
import {ChatsComponent} from './components/chats/chats.component';
import {ChatComponent} from './components/chat/chat.component';
import {ChatDashboardComponent} from './components/chat-dashboard/chat-dashboard.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MessagingService} from "./services/messaging.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MessagingRoutingModule} from "./messaging-routing.module";


@NgModule({
  declarations: [
    MessagingComponent,
    HeaderComponent,
    ChatsComponent,
    ChatComponent,
    ChatDashboardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagingRoutingModule
  ],
  providers: [
    MessagingService,
  ],
})
export class MessagingModule {
}
