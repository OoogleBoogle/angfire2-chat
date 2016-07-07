import { Component, OnInit } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire,
              public router: Router) {}

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        this.router.navigate(['/chat']);
      }
    })
  }
}
