import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from './shared/components/outlet/outlet.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
  },
  {
    path: 'websocket',
    loadChildren: () =>
      import('./websocket/websocket.module').then((m) => m.WebsocketModule),
  },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
