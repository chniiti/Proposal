import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private r: Renderer2) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    this.r.addClass(node, 'reveal');
    this.r.addClass(node, 'reveal--hidden');

    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setTimeout(() => {
            this.r.removeClass(node, 'reveal--hidden');
            this.r.addClass(node, 'reveal--show');
          }, 50);
          this.io?.disconnect();
        }
      }
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
