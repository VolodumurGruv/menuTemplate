import {
  Component,
  HostListener,
  Input,
  Optional,
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

  constructor(@Optional() private parent: MenuComponent) {}

  private addTemplate(temp: TemplateRef<any>): void {
    if (temp) {
      this.viewContainerRef.createEmbeddedView(temp);
    }
  }

  public containerCssClass(): string {
    return this.isRoot() ? 'menu-btn--root' : 'menu-btn--leaf';
  }

  private isRoot(): boolean {
    console.log(this.parent);
    return this.parent ? true : false;
  }
}
