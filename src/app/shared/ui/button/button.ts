import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


type BtnVariant = 'primary' | 'ghost' | 'outline';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <a *ngIf="href" class="btn" [class]="variant" [href]="href" [attr.target]="target" [attr.rel]="rel" [attr.download]="download">
      <ng-content />
    </a>

    <a *ngIf="routerLink" class="btn" [class]="variant" [routerLink]="routerLink" [attr.download]="download">
      <ng-content />
    </a>

    <button *ngIf="!href && !routerLink" class="btn" [class]="variant" type="button">
      <ng-content />
    </button>
  `,
  styleUrl: './button.scss',
})
export class UiButtonComponent {
  @Input() variant: BtnVariant = 'primary';
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() download?: string;

  @Input() target: '_blank' | '_self' = '_blank';
  @Input() rel = 'noreferrer';
}
