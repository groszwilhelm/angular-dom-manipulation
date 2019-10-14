import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', { static: false, read: ViewContainerRef })
  private containerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public openDialog() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

    const component = this.containerRef.createComponent(componentFactory);
    component.instance.destory = this.destroy.bind(this);
  }

  public destroy() {
    this.containerRef.clear();
  }
}
