import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '@core/interface/data-type';
import { Seller } from '@core/services/seller-services/seller';
import { SHARED_IMPORTS } from '@shared/common-import/shared.imports';

@Component({
  selector: 'app-seller-auth',
  imports: [...SHARED_IMPORTS],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.scss',
})
export class SellerAuth implements OnInit {
  
showLogin=false;
  authError:String='';
  constructor(private seller: Seller,private router:Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: signUp): void {
   this.seller.userSignUp(data);

  // this.seller.userSignUp(data).subscribe({
  //   next: (res: any) => {
  //     if (res) {
  //       debugger
  //       localStorage.setItem('seller', JSON.stringify(res.res));
  //       debugger
  //       this.router.navigate(['seller-home']);
  //     }
  //   },
  //   error: (err) => {
  //     console.error('Signup error:', err);
  //     alert('Something went wrong. Please try again.');
  //   }
  // });
}

  login(data: signUp): void {
    debugger
    this.seller.userLogin(data);
    debugger
    this.seller.isLoginError.subscribe((isError)=>{
      debugger
      if(isError){
        debugger
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
