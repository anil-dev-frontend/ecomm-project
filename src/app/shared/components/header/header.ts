import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { SHARED_IMPORTS } from '@shared/common-import/shared.imports';

@Component({
  selector: 'app-header',
  imports: [RouterLink,...SHARED_IMPORTS],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStored = localStorage.getItem('seller');
          let sellerData = sellerStored && JSON.parse(sellerStored);
          this.sellerName = sellerData?.[0]?.name || '';
          this.menuType='seller';
        }else{
          this.menuType='default';
        }
      }
    });
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
