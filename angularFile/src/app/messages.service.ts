import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  Add(message: string){
    this.messages.push(message)
  }

  Clear(){
    this.messages = [];
  }
}
