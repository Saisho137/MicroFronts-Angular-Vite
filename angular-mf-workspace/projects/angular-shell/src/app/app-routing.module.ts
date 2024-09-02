import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('shoppingMf/ProductsModule').then((m) => m.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('paymentMf/PaymentComponent').then((c) => c.PaymentComponent),
  },
  {
    path: 'clean',
    loadComponent: () =>
      import('cleanArch/MainComponent').then(
        (component) => component.MainComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
