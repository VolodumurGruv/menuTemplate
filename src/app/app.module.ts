import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/components/shared.module';
import { WebsocketComponent } from './websocket/websocket.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, CommonModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
