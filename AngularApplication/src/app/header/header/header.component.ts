import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'
  sellerName :string = ''
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          this.menuType = "seller";
          if(localStorage.getItem('seller')){
              let sellerStore = localStorage.getItem('seller');
              let sellerData = sellerStore && JSON.parse(sellerStore)[0];
              this.sellerName = sellerData.name;
          }
        }
        else {
          this.menuType = "default";
          
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }

}
