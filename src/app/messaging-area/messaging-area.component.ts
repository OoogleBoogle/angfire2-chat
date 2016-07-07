import { Component, OnInit } from '@angular/core';
import { TextboxComponent, MessageBoxComponent } from '../shared'

@Component({
  moduleId: module.id,
  selector: 'app-messaging-area',
  templateUrl: 'messaging-area.component.html',
  styleUrls: ['messaging-area.component.css'],
  directives: [TextboxComponent, MessageBoxComponent]
})
export class MessagingAreaComponent { }
