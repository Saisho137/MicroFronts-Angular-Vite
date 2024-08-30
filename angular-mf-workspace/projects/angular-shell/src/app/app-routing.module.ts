import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('shoppingMf/ProductsModule').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('paymentMf/PaymentComponent').then(
        (component) => component.PaymentComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
