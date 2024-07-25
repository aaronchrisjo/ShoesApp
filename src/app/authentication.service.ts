import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router:Router) { 
    this.loggedIn.next(!!localStorage.getItem('token'));
  }

  login(username:string, password:string): Observable<boolean>{
    if(username==='user' && password==='pass'){
      localStorage.setItem('token','your-shoe-token-here');
      this.loggedIn.next(true);
      return new Observable<boolean>((observer)=>{
        observer.next(true);
        observer.complete();
      });
    }
    else{
      this.loggedIn.next(false);
      return new Observable<boolean>((observer)=>{
        observer.next(false);
        observer.complete();
      })
    }
  }

  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login'])
  }

  isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
