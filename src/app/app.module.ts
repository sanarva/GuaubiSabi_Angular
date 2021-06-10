import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Formularios*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*Con el FormsModule hacemos que no se haga un resfresh al hacer clic en el botón */

/*Rutas*/ 
import { AppRoutingModule } from './app-routing.module';
 
/*Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Módulo para acceder a API's*/
import {HttpClientModule} from '@angular/common/http';

/*Componentes*/
import { AppComponent } from './app.component';
 
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { AboutLeroyComponent } from './components/home/about-leroy/about-leroy.component';
import { AboutGuaubisabiComponent } from './components/home/about-guaubisabi/about-guaubisabi.component';
import { CarouselShopComponent } from './components/home/carousel-shop/carousel-shop.component';
import { ContactComponent } from './components/home/contact/contact.component';

import { SolidaryComponent } from './components/solidary/solidary.component';

import { FooterComponent } from './components/footer/footer.component';
import { FaqsComponent } from './components/footer/faqs/faqs.component';
import { PaymentMethodComponent } from './components/footer/payment-method/payment-method.component';
import { DeliveryComponent } from './components/footer/delivery/delivery.component';
import { CollaboratorShopComponent } from './components/footer/collaborator-shop/collaborator-shop.component';
import { AboutUsComponent } from './components/footer/about-us/about-us.component';
import { HowBuyComponent } from './components/footer/how-buy/how-buy.component';
import { CareProductsComponent } from './components/footer/care-products/care-products.component';
import { ShopComponent } from './components/shop/shop.component';
 
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AboutLeroyComponent,
    AboutGuaubisabiComponent,
    CarouselShopComponent,
    ContactComponent,
    SolidaryComponent,
    FooterComponent,
    FaqsComponent,
    PaymentMethodComponent,
    DeliveryComponent,
    CollaboratorShopComponent,
    AboutUsComponent,
    HowBuyComponent,
    CareProductsComponent,
    ShopComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
