import { Component, OnInit } from '@angular/core';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
  }
  title = 'AngularApplication';
}
