import { Component } from '@angular/core';
import { UiContainerComponent } from '../../shared/ui/container/container';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [UiContainerComponent],
  template: `
    <section class="section">
      <ui-container>
        <div class="card" style="padding:22px;border-radius:22px;">
          <h2>Privacy</h2>
          <p class="small">This website does not collect personal data. It is an executive presentation of professional services.</p>
        </div>
      </ui-container>
    </section>
  `
})
export class PrivacyComponent {}
