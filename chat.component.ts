import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ChatserviceService} from '../services/chatservice.service';
import {NgForm} from '@angular/forms';
import {ChatMessageDto} from '../model/chatMessageDto';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  input;
  constructor(public chatService: ChatserviceService) { }

  ngOnInit(): void {
 //   this.chatService.setupSocketConnection();
    this.chatService.openWebSocket();
  }
  /*sendMessage() {
    if (this.input) {
      this.chatService.sendMessage(this.input);
      this.input = '';
    }
  }*/
  ngOnDestroy(): void {
    this.chatService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.chatService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}
