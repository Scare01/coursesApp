import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  isLogin = true;
  userName = "Ivan";
  loginText = "Login";
  logoutText = "Logout";
}