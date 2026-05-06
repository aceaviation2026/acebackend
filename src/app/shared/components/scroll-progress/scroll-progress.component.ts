import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="scroll-progress-bar" [style.width.%]="progress"></div>`,
  styles: [`
    .scroll-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #FFB300, #FF8C00);
      z-index: 9999;
      transition: width 0.1s linear;
      box-shadow: 0 0 10px rgba(255,179,0,0.6);
    }
  `]
})
export class ScrollProgressComponent implements OnInit {
  progress = 0;

  ngOnInit(): void { this.updateProgress(); }

  @HostListener('window:scroll')
  updateProgress(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }
}
