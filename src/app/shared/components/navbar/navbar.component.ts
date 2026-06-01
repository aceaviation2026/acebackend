import {
  Component, OnInit, OnDestroy, HostListener, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar-sky" [class.scrolled]="isScrolled" [class.nav-open]="menuOpen">
      <div class="container">
        <div class="nav-inner">

          <!-- Brand -->
          <a routerLink="/" class="nav-brand" (click)="closeMenu()">
            <div class="brand-logo">
              
            </div>
           <div class="brand-text">
          <a routerLink="/" class="nav-brand" (click)="closeMenu()">
  <img
    src="assets/images/ace_aviator_logo-removebg-preview.png"
    class="logo-img"
    alt="Ace Aviator Logo">
</a>
   </div>
           

          </a>

          <!-- Desktop Nav Links -->
          <ul class="nav-links" [class.open]="menuOpen">
            <li *ngFor="let link of navLinks">
              <a [routerLink]="link.path"
                 routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: link.path === '/'}"
                 class="nav-link"
                 (click)="closeMenu()">
                {{link.label}}
              </a>
            </li>
            <li class="nav-cta-mobile">
              <a routerLink="/contact" class="btn-gold" (click)="closeMenu()">
                Free Consultation
              </a>
            </li>
          </ul>

          <!-- Desktop CTA -->
          <div class="nav-actions">
            <a routerLink="/contact" class="btn-gold nav-cta-btn">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 9.7 19.79 19.79 0 011.45 1.1 2 2 0 013.43.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.99 14l-.07 2.92z"/>
              </svg>
              Free Consultation
            </a>

            <!-- Hamburger -->
            <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Overlay -->
      <div class="mobile-overlay" [class.show]="menuOpen" (click)="closeMenu()"></div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Home',             path: '/',              icon: 'home' },
    { label: 'Become a Pilot',   path: '/become-a-pilot',icon: 'plane' },
    { label: 'DGCA',             path: '/dgca',          icon: 'shield' },
    { label: 'Blog & News',      path: '/blog',          icon: 'newspaper' },
    { label: 'Contact',          path: '/contact',       icon: 'phone' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
    this.cdr.markForCheck();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    this.cdr.markForCheck();
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
    this.cdr.markForCheck();
  }
}
