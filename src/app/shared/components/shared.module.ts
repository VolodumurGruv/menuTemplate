import { NgModule } from "@angular/core";
import { MenuItemComponent } from "./menu/menu-item/menu-item.component";
import { MenuComponent } from "./menu/menu.component";
import { OutletComponent } from "./outlet/outlet.component";

@NgModule({
  declarations: [OutletComponent, MenuComponent, MenuItemComponent]
})

export class SharedModule{}
