import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

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

  constructor(
    public af: AngularFire,
    public router: Router) {}

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user)  {
        console.log("There's a user", user);
        this.userName = user.auth.displayName;
        this.avatar = user.auth.photoURL;
        this.router.navigate(['/chat'])
      } else {
        console.log("No User", user);
        this.router.navigate(['/login']);
      }
    });
  }

  signup() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
