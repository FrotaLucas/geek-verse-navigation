import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import {FeaturedProductsComponent} from "./pages/featured-products/featured-products.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";  
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: FeaturedProductsComponent, // página inicial
      },
      {
        path: 'movies',
        component: ProductCategoryComponent
      },
      {
        path: 'books',
        component: ProductCategoryComponent
      },
      {
        path: 'video-games',
        component: ProductCategoryComponent
      },
      {
        path: 'product/:productName',
        component: ProductDetailsComponent
      }
    ]
  }

];
