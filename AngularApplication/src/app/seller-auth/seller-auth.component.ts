import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private sellerservice: SellerService, private router: Router) { }
  showLogin = false;
  authError:string = '';
  ngOnInit(): void {
    this.sellerservice.reloadSeller()
  }
  signup(data: SignUp) {
    this.sellerservice.userSignUp(data)
  }
  login(data:any){
    this.sellerservice.userLogin(data)
    this.sellerservice.isLoginerror.subscribe((iserror)=>{
      if(iserror){
        this.authError = "Email or Password is incorrect !!!";
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  OpenSignUp(){
    this.showLogin=false;
  }
}
