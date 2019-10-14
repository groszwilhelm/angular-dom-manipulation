import { Directive, ViewContainerRef, Input, OnChanges, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective implements OnChanges {
  // Your implementation for the EmbeddedView should be added here
  @Input() appShow: boolean;

  constructor(private vcr: ViewContainerRef, private tmpl: TemplateRef<any>) {}

  ngOnChanges() {
    if (this.appShow) {
      this.vcr.createEmbeddedView(this.tmpl);
    } else {
      this.vcr.clear();
    }
  }

}
