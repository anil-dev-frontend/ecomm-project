import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Seller } from '@core/services/seller-services/seller';

export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(Seller);
  if (localStorage.getItem('seller')) {
    return true;
  }
  return sellerService.isSellerLoggedIn;

};
