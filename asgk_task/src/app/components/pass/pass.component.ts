import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { Message, Pass } from '../../models';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class PassComponent {
  @Output() onPushMessageEvent = new EventEmitter<Message>();
  @Input() pass: Pass;
  messageText: string;
  datePush: string;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.keyboard = false;
  }

  onOpen(content: any) {
    this.modalService.open(content);
  }

  onPushMessage() {
    if (!this.datePush) {
      this.datePush = new Date().toLocaleDateString('sv');
    }

    this.onPushMessageEvent.emit({
      user_id: this.pass.user_id,
      date_start: this.datePush,
      push_message: this.messageText,
    });

    this.modalService.dismissAll();
  }
}
