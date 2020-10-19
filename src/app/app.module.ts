import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { UnderRs500Component } from './under-rs500/under-rs500.component';
import { CustomizeComponent } from './customize/customize.component';
import { CatDreamcatcherComponent } from './cat-dreamcatcher/cat-dreamcatcher.component';
import { CatCanvasComponent } from './cat-canvas/cat-canvas.component';
import { CatEmbroideryComponent } from './cat-embroidery/cat-embroidery.component';
import { CatZentagleComponent } from './cat-zentagle/cat-zentagle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomepageComponent, NewArrivalsComponent, UnderRs500Component,
    CustomizeComponent, CatDreamcatcherComponent, CatCanvasComponent, CatEmbroideryComponent, CatZentagleComponent,
    LoginComponent, RegisterComponent, ContactComponent, CartComponent, PaymentComponent, CategoriesComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatIconModule, MatCardModule, AppRoutingModule, MatFormFieldModule, FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
