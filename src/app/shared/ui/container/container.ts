import { Component } from '@angular/core';

@Component({
  selector: 'ui-container',
  standalone: true,
  template: `<div class="container"><ng-content /></div>`,
  styleUrl: './container.scss'
})
export class UiContainerComponent {}
