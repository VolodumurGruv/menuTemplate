import { NgModule } from '@angular/core';
import { WebsocketRoutingModule } from './websocket-routing.module';
import { WebsocketComponent } from './websocket.component';

@NgModule({
  declarations: [WebsocketComponent],
  imports: [WebsocketRoutingModule],
})
export class WebsocketModule {}
