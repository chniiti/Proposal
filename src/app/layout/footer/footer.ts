import { Component } from '@angular/core';
import { UiContainerComponent } from '../../shared/ui/container/container';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [UiContainerComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
  profileImage = '/assets/profile-photo.jpg';
}
