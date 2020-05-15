import { Component, OnInit } from '@angular/core';
import { LoginService } from './login /login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rotas com Login';
  constructor(private authService: LoginService) {}
  
  private showNavBar: boolean = false;

  ngOnInit(){
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
         if(mode !== null) {
           this.showNavBar = mode;
         }
      }
    );
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {   
    this.authService.logout();
  }
}
