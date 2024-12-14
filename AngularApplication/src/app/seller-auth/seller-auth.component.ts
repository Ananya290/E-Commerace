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
  ngOnInit(): void {
    this.sellerservice.reloadSeller()
  }
  signup(data: SignUp) {
    this.sellerservice.userSignUp(data)
  }
}
