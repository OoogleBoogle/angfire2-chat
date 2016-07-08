import { Component, AfterViewChecked } from '@angular/core';
import { TextboxComponent, MessageBoxComponent } from '../shared'

@Component({
  moduleId: module.id,
  selector: 'app-messaging-area',
  templateUrl: 'messaging-area.component.html',
  styleUrls: ['messaging-area.component.css'],
  directives: [TextboxComponent, MessageBoxComponent]
})
export class MessagingAreaComponent implements AfterViewChecked {

  constructor() {}

  ngAfterViewChecked() {
    let container = document.querySelector('.message-container');
    container.scrollTop = container.scrollHeight;
  }
}
