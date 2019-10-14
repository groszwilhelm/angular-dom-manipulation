import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective implements OnChanges {
  //  Your implementation should go here
  @Input() appRepeatOf: Array<any>;

  constructor(private vcr: ViewContainerRef, private tmplRef: TemplateRef<any>) {}

  ngOnChanges() {
    this.appRepeatOf.forEach((item, index) =>
      this.vcr.createEmbeddedView(this.tmplRef, {
        $implicit: item,
        index
      })
    );
  }
}
