import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit{
  productAddedmssg: string | undefined ;
  constructor(private productservice:ProductService){

  }
  ngOnInit(): void {
  }

  addProduct(data :any){
  this.productservice.addProduct(data).subscribe((result)=>{
    console.log(result);
    if(result){
      this.productAddedmssg = "Congrats Product Added Successfully!"
    }
    setTimeout(()=>(this.productAddedmssg = undefined),3000)
  })
  }
  }

