import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./login/services/auth.service";
import {Injectable} from "@angular/core";

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AppActivateGuard implements CanActivate{
  constructor(
    private router: Router,
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    if (sessionStorage.length > 0){
      return true;
    }

    this.router.navigateByUrl('/login');

    return false;
  }

}
