import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-message-box',
  templateUrl: 'message-box.component.html',
  styleUrls: ['message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  public messages: FirebaseListObservable<any[]>;
  public userID: string;

  constructor(private af: AngularFire) { 
    af.auth.subscribe(user => {
      this.userID = user.auth.displayName;
      console.log(this.userID);
    });
  }

  ngOnInit() {
    this.messages = this.af.database.list('/messages');
  }
}
