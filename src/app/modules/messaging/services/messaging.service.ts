import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from 'rxjs';
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private readonly BASE_URL = 'http://localhost:3000/chats';

  constructor(private http: HttpClient) {
  }

  getChat(chatId:number):Observable<any> {
    return this.http.get(`${this.BASE_URL}/${chatId}`);
  }

  getChats():Observable<any> {
    return this.http.get(`${this.BASE_URL}`);
  }

  update(chat: any, messages:Message[]):Observable<any> {
    return this.http.patch(`${this.BASE_URL}/${chat}`, {"messages":messages});
  }

}
