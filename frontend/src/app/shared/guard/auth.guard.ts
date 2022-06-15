import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}
    canActivate(
        _next: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLogged$.getValue() !== true) {
            this.router.navigate(['auth']);
        }

        return true;
    }
}
