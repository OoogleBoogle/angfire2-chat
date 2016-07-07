import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AngularFire, AngularFireAuth, FirebaseAuthState } from 'angularfire2'
import { NavbarComponent } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Stupid Message Thing';
  private loggedIn: boolean;

  constructor(
    private af: AngularFire,
    private router: Router) {}
    
  ngOnInit() {
    console.log("Init fired");
    
    this.af.auth.subscribe(user => {
      if (user) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
        this.router.navigate(['/login'])
      }
    });
  }

  ngAfterViewInit() {
    if (this.loggedIn) {
      this.router.navigate(['/chat']);
    }
  }
}
