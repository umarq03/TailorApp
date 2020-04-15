import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'main-home',
    loadChildren: () => import('./pages/main-home/main-home.module').then( m => m.MainHomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'designs',
    loadChildren: () => import('./pages/designs/designs.module').then( m => m.DesignsPageModule)
  },
  {
    path: 'fabrics',
    loadChildren: () => import('./pages/fabrics/fabrics.module').then( m => m.FabricsPageModule)
  },
 
  {
    path: 'pant',
    loadChildren: () => import('./pages/pant/pant.module').then( m => m.PantPageModule)
  },
  {
    path: 'shirt',
    loadChildren: () => import('./pages/shirt/shirt.module').then( m => m.ShirtPageModule)
  },
 

  {
    path: 'coat',
    loadChildren: () => import('./pages/coat/coat.module').then( m => m.CoatPageModule)
  },
  {
    path: 'waistcoat',
    loadChildren: () => import('./pages/waistcoat/waistcoat.module').then( m => m.WaistcoatPageModule)
  },
  {
    path: 'kurta',
    loadChildren: () => import('./pages/kurta/kurta.module').then( m => m.KurtaPageModule)
  },
  {
    path: 'twopiece',
    loadChildren: () => import('./pages/twopiece/twopiece.module').then( m => m.TwopiecePageModule)
  },
  {
    path: 'threepiece',
    loadChildren: () => import('./pages/threepiece/threepiece.module').then( m => m.ThreepiecePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  
  {
    path: 'pricelist',
    loadChildren: () => import('./pages/pricelist/pricelist.module').then( m => m.PricelistPageModule)
  },
  {
    path: 'skameez',
    loadChildren: () => import('./pages/skameez/skameez.module').then( m => m.SKameezPageModule)
  },
  {
    path: 'skameez/:id',
    loadChildren: () => import('./pages/skameez/skameez.module').then( m => m.SKameezPageModule)
  },
  {
    path: 'skfab',
    loadChildren: () => import('./pages/skfab/skfab.module').then( m => m.SkfabPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'kameezdesigns',
    loadChildren: () => import('./pages/kameezdesigns/kameezdesigns.module').then( m => m.KameezdesignsPageModule)
  },
  
  {
    path: 'create-customer',
    loadChildren: () => import('./customers/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'create-customer/:id',
    loadChildren: () => import('./customers/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
///
  ///list
  {
    path: 'list',
    loadChildren: () => import('./customers/customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customers/customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  },
  {
    path: 'customer/:id',
    loadChildren: () => import('./customers/customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  },

  //as a list
  {
    path: 'admin-database',
    loadChildren: () => import('./adminpanel/admin-database/admin-database.module').then( m => m.AdminDatabasePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'skdatabase',
    loadChildren: () => import('./adminpanel/skdatabase/skdatabase.module').then( m => m.SkdatabasePageModule)
  },
////
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
