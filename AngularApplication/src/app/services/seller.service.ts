import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { login, SignUp } from '../../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  api = 'http://localhost:3000/seller';
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginerror = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router,@Inject(PLATFORM_ID) private platformId: SellerService) { }
  userSignUp(data: SignUp) {
    this.http.post(this.api, data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['/seller-home']);
    });
  }
  reloadSeller(){
    if (isPlatformBrowser(this.platformId)){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }
}
userLogin(data : login){
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe: 'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length){
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['/seller-home']);    }
      else{
        this.isLoginerror.emit(true)
        console.warn("login failed")
    }
  })

}
}
