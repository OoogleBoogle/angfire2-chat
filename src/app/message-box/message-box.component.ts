import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-message-box',
  templateUrl: 'message-box.component.html',
  styleUrls: ['message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.messages = this.af.database.list('/messages');
  }
}
