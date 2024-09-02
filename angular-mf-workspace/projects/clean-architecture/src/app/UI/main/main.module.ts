import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AlbumApiServiceWithoutDelay } from '../../infraestructure/driven-adapter/album-api/album-api-withou-delay.service';
import { AlbumGateway } from '../../domain/models/Album/gateway/album-gateway';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [MainComponent]
})
export class MainModule {}
