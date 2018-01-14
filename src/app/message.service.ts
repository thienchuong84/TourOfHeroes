import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  // constructor() { }

  // cách viết y chang 1 model

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
