import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserModule,
    AppRoutingModule,
    TransferHttpCacheModule,
    SharedModule,
    TemplatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
