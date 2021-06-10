import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { SolidaryComponent } from './components/solidary/solidary.component';
import { FaqsComponent } from './components/footer/faqs/faqs.component';
import { PaymentMethodComponent } from './components/footer/payment-method/payment-method.component';
import { DeliveryComponent } from './components/footer/delivery/delivery.component';
import { CollaboratorShopComponent } from './components/footer/collaborator-shop/collaborator-shop.component';
import { AboutUsComponent } from './components/footer/about-us/about-us.component';
import { ChangeRefundComponent } from './components/footer/change-refund/change-refund.component';
import { HowBuyComponent } from './components/footer/how-buy/how-buy.component';
import { CareProductsComponent } from './components/footer/care-products/care-products.component';

 
const routes: Routes = [
  { path: 'Inicio', component: HomeComponent},
  { path: 'Entrar', component: LoginComponent},
  { path: 'Registrarme', component: RegisterComponent},
  { path: 'Contacto', component: ContactComponent},
  { path: 'Guaubisabi-solidario', component: SolidaryComponent},
  { path: 'Preguntas-frecuentes', component: FaqsComponent},
  { path: 'Metodos-pago', component: PaymentMethodComponent},
  { path: 'Envios', component: DeliveryComponent},
  { path: 'Tiendas-colaboradoras', component: CollaboratorShopComponent},
  { path: 'Quienes-somos', component: AboutUsComponent},
  { path: 'Cambios-devoluciones', component: ChangeRefundComponent},
  { path: 'Como-comprar', component: HowBuyComponent},
  { path: 'Cuidado-productos', component: CareProductsComponent},
  { path: 'Tienda', component: ShopComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
