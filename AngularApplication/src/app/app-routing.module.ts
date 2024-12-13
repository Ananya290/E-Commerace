import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },          // Default route
    { path: 'seller', component: SellerAuthComponent  },  // Seller page

//   { path: 'login', component: LoginComponent },    // Login page
//   { path: 'cart', component: CartComponent },      // Cart page
//   { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route (handles unknown paths)
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
