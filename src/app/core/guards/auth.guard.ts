import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService,
              private router: Router) { }


  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$
              .pipe(
                tap(resp => {
                  if (!resp) this.router.navigateByUrl('/home');
                })
              );
  };

  canLoad(): Observable<boolean> {
    return this.auth.isAuthenticated$
              .pipe(
                tap(resp => {
                  if (!resp) this.router.navigateByUrl('/home');
                })
              );
  };
}
