import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class UserinfoGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const _id = next.params['_id'];
    let users = this.dataService.getData();

    if (users.length !== 0 && users[_id]) {
      return true;
    } else {
      this.router.navigate(['users','error']);
      return false;
    }

  }
}
