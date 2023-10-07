import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import  jwtDecode  from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any>=new BehaviorSubject('');


  constructor(private _httpClient:HttpClient ,private _router:Router) {
    //to check if i have data in local storage so that its kept in order not to go back to signup when logged in
    if(localStorage.getItem("userToken")){
      this.getUserData()
    }
   }


getUserData(){
  let encodedData=JSON.stringify(localStorage.getItem("userToken"));
  let decodedData=jwtDecode(encodedData);
  console.log("decodedData",decodedData);
  
  this.userData.next(decodedData);
}

register(userData:any):Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
}

login(userData:any):Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
}


logOut()
{
  localStorage.removeItem("userToken");
  this.userData.next(null);
  this._router.navigate(['/login'])
}
}
