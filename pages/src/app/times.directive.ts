import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    // Reference to element we applied directive to
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  // "whenever the 'AppTimes' property is set on an element,
  // instead set a property called render "
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear(); //
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
