import { Component, TemplateRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-template-renderer',
  template: `
    <ng-container
      *ngTemplateOutlet="template; context: templateContext"
    ></ng-container>
  `
})
export class TemplateRendererComponent implements ICellRendererAngularComp {
  /**
   *
   */
  constructor() {
    let i = 0;
    
  }
  template: TemplateRef<any>;
  templateContext: { $implicit: any, params: any };

  refresh(params: any): boolean {
    this.templateContext = {
      $implicit: params.data,
      params: params
    };
    return true;
  }

  isFullWidthCell(r) {
    return true;
  }

  agInit(params: ICellRendererParams): void {
    this.template = params['ngTemplate'];
    this.refresh(params);
  }
}
