import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
  Lists: product[] |undefined
  productdeletemssg: string | undefined;
  constructor(private productservice:ProductService){

  }
  ngOnInit(): void {
this.productList();
  }

  productList(){
    this.productservice.getproduct().subscribe((result)=>{
      console.warn(result)
      this.Lists=result;
    })
}
deleteProductList(id:number){
  console.log("id",id)
  this.productservice.deleteProduct(id).subscribe((result)=>{
if(result){
  this.productdeletemssg = "Product deeletd sucessfully!"
  this.productList();
}
setTimeout(()=>(this.productdeletemssg = undefined),3000)
  })
}
}