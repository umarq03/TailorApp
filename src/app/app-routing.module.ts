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
    path: 'pant/:id',
    loadChildren: () => import('./pages/pant/pant.module').then( m => m.PantPageModule)
  },
  {
    path: 'shirt',
    loadChildren: () => import('./pages/shirt/shirt.module').then( m => m.ShirtPageModule)
  },
  {
    path: 'shirt/:id',
    loadChildren: () => import('./pages/shirt/shirt.module').then( m => m.ShirtPageModule)
  },

  {
    path: 'coat',
    loadChildren: () => import('./pages/coat/coat.module').then( m => m.CoatPageModule)
  },
  {
    path: 'coat/:id',
    loadChildren: () => import('./pages/coat/coat.module').then( m => m.CoatPageModule)
  },
  {
    path: 'waistcoat',
    loadChildren: () => import('./pages/waistcoat/waistcoat.module').then( m => m.WaistcoatPageModule)
  },
  {
    path: 'waistcoat/:id',
    loadChildren: () => import('./pages/waistcoat/waistcoat.module').then( m => m.WaistcoatPageModule)
  },
  {
    path: 'kurta',
    loadChildren: () => import('./pages/kurta/kurta.module').then( m => m.KurtaPageModule)
  },
  {
    path: 'kurta/:id',
    loadChildren: () => import('./pages/kurta/kurta.module').then( m => m.KurtaPageModule)
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
    path: 'kameezdesigns',
    loadChildren: () => import('./pages/kameezdesigns/kameezdesigns.module').then( m => m.KameezdesignsPageModule)
  },

  {
    path: 'admin-database',
    loadChildren: () => import('./adminpanel/admin-database/admin-database.module').then( m => m.AdminDatabasePageModule)
  },
  {
    path: 'skdatabase',
    loadChildren: () => import('./adminpanel/skdatabase/skdatabase.module').then( m => m.SkdatabasePageModule)
  },
  {
    path: 'pantdatabase',
    loadChildren: () => import('./adminpanel/pantdatabase/pantdatabase.module').then( m => m.PantdatabasePageModule)
  },
  {
    path: 'shirtdatabase',
    loadChildren: () => import('./adminpanel/shirtdatabase/shirtdatabase.module').then( m => m.ShirtdatabasePageModule)
  },
  {
    path: 'kurtadatabase',
    loadChildren: () => import('./adminpanel/kurtadatabase/kurtadatabase.module').then( m => m.KurtadatabasePageModule)
  },
  {
    path: 'coatadatabase',
    loadChildren: () => import('./adminpanel/coatdatabase/coatdatabase.module').then( m => m.CoatdatabasePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'pantfab',
    loadChildren: () => import('./pages/pantfab/pantfab.module').then( m => m.PantfabPageModule)
  },
  {
    path: 'coatfab',
    loadChildren: () => import('./pages/coatfab/coatfab.module').then( m => m.CoatfabPageModule)
  },
  {
    path: 'shirtfab',
    loadChildren: () => import('./pages/shirtfab/shirtfab.module').then( m => m.ShirtfabPageModule)
  },
  {
    path: 'kurtafab',
    loadChildren: () => import('./pages/kurtafab/kurtafab.module').then( m => m.KurtafabPageModule)
  },
  {
    path: 'waistcoatfab',
    loadChildren: () => import('./pages/waistcoatfab/waistcoatfab.module').then( m => m.WaistcoatfabPageModule)
  },
  {
    path: 'wcoatdatabase',
    loadChildren: () => import('./adminpanel/wcoatdatabase/wcoatdatabase.module').then( m => m.WcoatdatabasePageModule)
  },
  {
    path: 'pantdesigns',
    loadChildren: () => import('./pages/pantdesigns/pantdesigns.module').then( m => m.PantdesignsPageModule)
  },
  {
    path: 'shirtdesigns',
    loadChildren: () => import('./pages/shirtdesigns/shirtdesigns.module').then( m => m.ShirtdesignsPageModule)
  },
  {
    path: 'coatdesigns',
    loadChildren: () => import('./pages/coatdesigns/coatdesigns.module').then( m => m.CoatdesignsPageModule)
  },
  {
    path: 'waistcoatdesigns',
    loadChildren: () => import('./pages/waistcoatdesigns/waistcoatdesigns.module').then( m => m.WaistcoatdesignsPageModule)
  },
  {
    path: 'kurtadesigns',
    loadChildren: () => import('./pages/kurtadesigns/kurtadesigns.module').then( m => m.KurtadesignsPageModule)
  },
  {
    path: 'title-setting',
    loadChildren: () => import('./setting/title-setting/title-setting.module').then( m => m.TitleSettingPageModule)
  },
  {
    path: 'title-setting/:id',
    loadChildren: () => import('./setting/title-setting/title-setting.module').then( m => m.TitleSettingPageModule)
  },
  {
    path: 'starter-setting',
    loadChildren: () => import('./setting/starter-setting/starter-setting.module').then( m => m.StarterSettingPageModule)
  },
  {
    path: 'starter-setting/:id',
    loadChildren: () => import('./setting/starter-setting/starter-setting.module').then( m => m.StarterSettingPageModule)
  },
  {
    path: 'ratelist-setting',
    loadChildren: () => import('./setting/ratelist-setting/ratelist-setting.module').then( m => m.RatelistSettingPageModule)
  },
  {
    path: 'ratelist-setting/:id',
    loadChildren: () => import('./setting/ratelist-setting/ratelist-setting.module').then( m => m.RatelistSettingPageModule)
  },
  {
    path: 'main-setting',
    loadChildren: () => import('./setting/main-setting/main-setting.module').then( m => m.MainSettingPageModule)
  },
  {
    path: 'email-setting',
    loadChildren: () => import('./setting/email-setting/email-setting.module').then( m => m.EmailSettingPageModule)
  },
  {
    path: 'email-setting/:id',
    loadChildren: () => import('./setting/email-setting/email-setting.module').then( m => m.EmailSettingPageModule)
  },
  {
    path: 'more-ratelist',
    loadChildren: () => import('./setting/more-ratelist/more-ratelist.module').then( m => m.MoreRatelistPageModule)
  },
  {
    path: 'more-ratelist/:id',
    loadChildren: () => import('./setting/more-ratelist/more-ratelist.module').then( m => m.MoreRatelistPageModule)
  },
  {
    path: 'about-setting',
    loadChildren: () => import('./setting/about-setting/about-setting.module').then( m => m.AboutSettingPageModule)
  },
  {
    path: 'about-setting/:id',
    loadChildren: () => import('./setting/about-setting/about-setting.module').then( m => m.AboutSettingPageModule)
  },
  {
    path: 'addfab',
    loadChildren: () => import('./setting/addfab/addfab.module').then( m => m.AddfabPageModule)
  },
  {
    path: 'skfabric',
    loadChildren: () => import('./setting/skfabric/skfabric.module').then( m => m.SkfabricPageModule)
  },
  {
    path: 'pantfabric',
    loadChildren: () => import('./setting/pantfabric/pantfabric.module').then( m => m.PantfabricPageModule)
  },
  {
    path: 'shirtfabric',
    loadChildren: () => import('./setting/shirtfabric/shirtfabric.module').then( m => m.ShirtfabricPageModule)
  },
  {
    path: 'kurtafabric',
    loadChildren: () => import('./setting/kurtafabric/kurtafabric.module').then( m => m.KurtafabricPageModule)
  },
  {
    path: 'coatfabric',
    loadChildren: () => import('./setting/coatfabric/coatfabric.module').then( m => m.CoatfabricPageModule)
  },
  {
    path: 'wcoatfabric',
    loadChildren: () => import('./setting/wcoatfabric/wcoatfabric.module').then( m => m.WcoatfabricPageModule)
  },
  {
    path: 'editfabric',
    loadChildren: () => import('./setting/editfabric/editfabric.module').then( m => m.EditfabricPageModule)
  },
  {
    path: 'editpantfabric',
    loadChildren: () => import('./setting/editpantfabric/editpantfabric.module').then( m => m.EditpantfabricPageModule)
  },
  {
    path: 'editshirtfabric',
    loadChildren: () => import('./setting/editshirtfabric/editshirtfabric.module').then( m => m.EditshirtfabricPageModule)
  },
  {
    path: 'editkurtafabric',
    loadChildren: () => import('./setting/editkurtafabric/editkurtafabric.module').then( m => m.EditkurtafabricPageModule)
  },
  {
    path: 'editcoatfabric',
    loadChildren: () => import('./setting/editcoatfabric/editcoatfabric.module').then( m => m.EditcoatfabricPageModule)
  },
  {
    path: 'editwcoatfabric',
    loadChildren: () => import('./setting/editwcoatfabric/editwcoatfabric.module').then( m => m.EditwcoatfabricPageModule)
  },
  {
    path: 'addesign',
    loadChildren: () => import('./setting/addesign/addesign.module').then( m => m.AddesignPageModule)
  },
  {
    path: 'skdesign',
    loadChildren: () => import('./setting/skdesign/skdesign.module').then( m => m.SkdesignPageModule)
  },
  {
    path: 'pantdesign',
    loadChildren: () => import('./setting/pantdesign/pantdesign.module').then( m => m.PantdesignPageModule)
  },
  {
    path: 'shirtdesign',
    loadChildren: () => import('./setting/shirtdesign/shirtdesign.module').then( m => m.ShirtdesignPageModule)
  },
  {
    path: 'kurtadesign',
    loadChildren: () => import('./setting/kurtadesign/kurtadesign.module').then( m => m.KurtadesignPageModule)
  },
  {
    path: 'coatdesign',
    loadChildren: () => import('./setting/coatdesign/coatdesign.module').then( m => m.CoatdesignPageModule)
  },
  {
    path: 'wcoatdesign',
    loadChildren: () => import('./setting/wcoatdesign/wcoatdesign.module').then( m => m.WcoatdesignPageModule)
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
