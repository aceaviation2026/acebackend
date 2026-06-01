import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="back-to-top" [class.visible]="visible" (click)="scrollTop()" aria-label="Back to top">
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 46px;
      height: 46px;
      background: linear-gradient(135deg, #c49440, #c49440);
      color: #0A1628;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 900;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
      box-shadow: 0 4px 20px rgba(255,179,0,0.4);

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(255,179,0,0.6);
      }
    }
  `]
})
export class BackToTopComponent {
  visible = false;

  @HostListener('window:scroll')
  onScroll(): void { this.visible = window.scrollY > 400; }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
