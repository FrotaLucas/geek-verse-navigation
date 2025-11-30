import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {FeaturedProductsComponent} from "./pages/featured-products/featured-products.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";  
import { HomeButtonComponent } from './components/home-button/home-button.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,

    }
];
