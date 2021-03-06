import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable()
export class AuthGuard implements CanActivate {
   
    constructor(
       private router: Router,
       private authService: LoginService) {}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | boolean {
        if(this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/signin']); 
        return false;
    }
       
}