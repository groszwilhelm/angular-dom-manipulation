import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('templateRef', { read: TemplateRef, static: true }) public tmplRef;
  @ViewChild('containerRef', { read: ViewContainerRef, static: true }) public vcr;

  public show = true;

  public toggle() {
    this.show = !this.show;
  }
}
