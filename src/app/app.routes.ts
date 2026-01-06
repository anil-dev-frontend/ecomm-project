import { Routes } from '@angular/router';
import { HOME_ROUTES } from '@features/home/home.routes';
import { SELLER_ROUTES } from '@features/seller/seller.routes';

export const routes: Routes = [
    ...HOME_ROUTES,
    ...SELLER_ROUTES
];
