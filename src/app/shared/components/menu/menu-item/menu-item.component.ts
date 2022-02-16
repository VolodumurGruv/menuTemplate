import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public menuFor!: TemplateRef<MenuComponent>;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public viewContainerRef!: ViewContainerRef;

  @HostListener('mouseenter') onEnter() {
    this.addTemplate(this.menuFor);
  }

  @HostListener('mouseleave') onLeave() {
    this.viewContainerRef.clear();
  }

  private addTemplate(temp: TemplateRef<any>): void {
    this.viewContainerRef.createEmbeddedView(temp);
  }
}
