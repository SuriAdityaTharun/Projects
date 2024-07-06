import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  registerUser(user: any) {
    throw new Error('Method not implemented.');
  }

  isUserLoggedIn: boolean;
  loginStatus:any;

  constructor(private http:HttpClient) {

    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
   }

  getAllCountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  customerLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8085/customerLogin/' + emailId + '/' + password).toPromise();
  }

  regsiterCustomer(customer: any): any {
    return this.http.post('http://localhost:8085/addCustomer', customer);
  }

  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }  
  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }
}

