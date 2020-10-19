import { CatDreamcatcherComponent } from './cat-dreamcatcher/cat-dreamcatcher.component';
import { CatEmbroideryComponent } from './cat-embroidery/cat-embroidery.component';
import { CatCanvasComponent } from './cat-canvas/cat-canvas.component';
import { CatZentagleComponent } from './cat-zentagle/cat-zentagle.component';
import { CustomizeComponent } from './customize/customize.component';
import { UnderRs500Component } from './under-rs500/under-rs500.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent },
  { path: 'under-rs500', component: UnderRs500Component },
  { path: 'customize', component: CustomizeComponent },
  { path: 'cat-dreamcatcher', component: CatDreamcatcherComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cat-canvas', component: CatCanvasComponent },
  { path: 'cat-embroidery', component: CatEmbroideryComponent },
  { path: 'cat-zentagle', component: CatZentagleComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
