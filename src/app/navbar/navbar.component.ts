import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title: string = "Stupid Chat Thing";
  public userName: string;
  public avatar: string;

  constructor(public af: AngularFire) {}

  ngOnInit() {
    if (this.af.auth) {
      this.af.auth.subscribe(user => {
        if (user) {
          this.userName = user.auth.displayName;
          this.avatar = user.auth.photoURL;
        }
      })
    }
  }

  signup() {
    this.af.auth.login();
  }
}
