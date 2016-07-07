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
  public userName: string; 
  public avatar: string;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(user => { 
      this.userName = user.auth.displayName;
      this.avatar = user.auth.photoURL;
    });
   }

  ngOnInit() {
    this.messages = this.af.database.list('/messages');    
  }

  send(text: string) {
    this.messages.push({
      text: text,
      userName: this.userName,
      avatar: this.avatar
    });
  }
}
