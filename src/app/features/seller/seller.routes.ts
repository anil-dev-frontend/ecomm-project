import { Routes } from '@angular/router';
import { authGuard } from '@core/guard/auth-guard';




export const SELLER_ROUTES: Routes = [
    {
    path: 'seller-auth',
    loadComponent:() => import('../seller/components/seller-auth/seller-auth').then(m => m.SellerAuth)
  },
  {
    path: 'seller-home',
    loadComponent:() => import('../seller/components/seller-home/seller-home').then(m => m.SellerHome),
    canActivate:[authGuard]
  },
  {
    path: 'seller-add-product',
    loadComponent:() => import('../seller/components/seller-add-product/seller-add-product').then(m => m.SellerAddProduct),
    canActivate:[authGuard]
  },
 
 
 
];
