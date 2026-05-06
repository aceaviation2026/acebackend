import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <!-- Top Gradient Line -->
      <div class="footer-accent-line"></div>

      <div class="footer-body">
        <div class="container">
          <div class="row g-5">

            <!-- Brand -->
            <div class="col-lg-4">
              <div class="footer-brand">
                <div class="footer-logo">
                  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#FFB300" opacity="0.15"/>
                    <path d="M6 20L18 8L30 20" stroke="#FFB300" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M10 20L18 12L26 20" stroke="#FFB300" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
                    <rect x="15" y="20" width="6" height="8" rx="1" fill="#FFB300"/>
                  </svg>
                  <div>
                    <div class="footer-brand-name">SkyPilot Academy</div>
                    <div class="footer-brand-sub">Premium Aviation Education</div>
                  </div>
                </div>
                <p class="footer-desc">
                  India's most trusted pilot career guidance platform. From DGCA prep to airline placement — we're with you at every altitude.
                </p>
                <div class="footer-social">
                  <a href="#" class="social-btn" aria-label="YouTube">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" class="social-btn" aria-label="Instagram">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" class="social-btn" aria-label="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://wa.me/919876543210" class="social-btn social-wa" aria-label="WhatsApp">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="col-6 col-lg-2">
              <h6 class="footer-heading">Navigation</h6>
              <ul class="footer-links">
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/become-a-pilot">Become a Pilot</a></li>
                <li><a routerLink="/dgca">DGCA Info</a></li>
                <li><a routerLink="/blog">Blog & News</a></li>
                <li><a routerLink="/contact">Contact</a></li>
              </ul>
            </div>

            <!-- Services -->
            <div class="col-6 col-lg-2">
              <h6 class="footer-heading">Services</h6>
              <ul class="footer-links">
                <li><a href="#">CPL Guidance</a></li>
                <li><a href="#">Medical Prep</a></li>
                <li><a href="#">Ground School</a></li>
                <li><a href="#">Airline Prep</a></li>
                <li><a href="#">Mock Tests</a></li>
                <li><a href="#">Career Counseling</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="col-lg-4">
              <h6 class="footer-heading">Get In Touch</h6>
              <div class="footer-contact">
                <div class="contact-item">
                  <svg width="16" height="16" fill="none" stroke="#FFB300" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 9.7 19.79 19.79 0 011.45 1.1 2 2 0 013.43.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.99 14l-.07 2.92z"/>
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
                <div class="contact-item">
                  <svg width="16" height="16" fill="none" stroke="#FFB300" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>info&#64;skypilotacademy.in</span>
                </div>
                <div class="contact-item">
                  <svg width="16" height="16" fill="none" stroke="#FFB300" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Connaught Place, New Delhi — 110001</span>
                </div>
              </div>
              <div class="footer-newsletter">
                <p>Get aviation updates in your inbox</p>
                <div class="newsletter-form">
                  <input type="email" placeholder="your&#64;email.com" id="footerEmailInput">
                  <button class="btn-gold" style="padding:10px 20px;font-size:0.82rem;">Subscribe</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-inner">
            <span>© 2025 SkyPilot Academy. All rights reserved.</span>
            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
