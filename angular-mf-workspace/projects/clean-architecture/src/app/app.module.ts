import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-gateway';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';
import { AlbumApiServiceWithoutDelay } from './infraestructure/driven-adapter/album-api/album-api-withou-delay.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: AlbumGateway, useClass: AlbumApiServiceWithoutDelay },
    /* { provide: AlbumGateway, useClass: AlbumApiService }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
