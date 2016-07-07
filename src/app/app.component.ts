import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AngularFire, AngularFireAuth, FirebaseAuthState } from 'angularfire2'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
  title = 'Stupid Message Thing';

  constructor(
    private af: AngularFire,
    private router: Router) {}

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        this.router.navigate(['/chat']);
      }
      else {
        this.router.navigate(['/login'])
      }
    });
  }

  loguser() {
    this.af.auth.subscribe(user => console.log(user));
  }

  logout() {
    this.af.auth.logout();
  }
}
