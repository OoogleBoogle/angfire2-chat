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
export class AppComponent {   
  constructor(
    public af: AngularFire,
    private router: Router) { }

}
