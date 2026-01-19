import { Component, HostListener, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { UiButtonComponent } from '../../shared/ui/button/button';
import { UiContainerComponent } from '../../shared/ui/container/container';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UiContainerComponent, UiButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  proposalPdf = '/assets/Bilel-Chniti-Proposal.pdf';
  cvPdf = '/assets/Bilel-Chniti-CV.pdf';
  profileImage = '/assets/profile-photo.jpg';
  mail = 'mailto:bilel.chniti@esprit.tn?subject=Opportunity%20in%20Qatar%20-%20Digital%20Transformation';
  linkedin = 'https://www.linkedin.com/in/bilel-ch/';

  isScrolled = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    const headerElement = this.el.nativeElement.querySelector('.header');

    if (scrollPosition > 50) {
      if (!this.isScrolled) {
        this.isScrolled = true;
        this.renderer.addClass(headerElement, 'scrolled');
      }
    } else {
      if (this.isScrolled) {
        this.isScrolled = false;
        this.renderer.removeClass(headerElement, 'scrolled');
      }
    }
  }
}
