import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-textbox',
  templateUrl: 'textbox.component.html',
  styleUrls: ['textbox.component.css']
})
export class TextboxComponent implements OnInit {
  private messages: FirebaseListObservable<any[]>
  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.messages = this.af.database.list('/messages');
  }

  send(text: string) {
    this.messages.push({text: text});
  }
}
