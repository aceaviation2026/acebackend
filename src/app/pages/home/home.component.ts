import {
  Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  counters = [
    { value: 0, target: 5000, label: 'Students Trained', suffix: '+', icon: '👨‍✈️' },
    { value: 0, target: 98,   label: 'Success Rate',     suffix: '%', icon: '🎯' },
    { value: 0, target: 150,  label: 'Flight Schools',   suffix: '+', icon: '🏫' },
    { value: 0, target: 12,   label: 'Years Experience', suffix: '+', icon: '⭐' },
  ];

  features = [
    {
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      title: 'DGCA Compliant',
      desc: 'All guidance follows DGCA regulations & the latest CAR circulars for CPL and ATPL aspirants.',
      color: '#FFB300'
    },
    {
      icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 100 8 4 4 0 000-8z',
      title: 'Expert Mentors',
      desc: 'Learn from ATPL-licensed commercial pilots with 10,000+ flying hours and airline experience.',
      color: '#4A90E2'
    },
    {
      icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
      title: 'Personalised Roadmap',
      desc: 'Get a custom career roadmap based on your eligibility, budget, and target airline or fleet.',
      color: '#10B981'
    },
    {
      icon: 'M9 17H7A5 5 0 013 12V9a9 9 0 0118 0v3a5 5 0 01-4 4.9M15 17h-4M9 17a3 3 0 006 0',
      title: '24/7 Support',
      desc: 'Round-the-clock support via WhatsApp, email, and live chat — never feel lost on your journey.',
      color: '#8B5CF6'
    },
    {
      icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
      title: 'Top Flight Schools',
      desc: 'Access curated listings of DGCA-approved flight schools across India and internationally.',
      color: '#F59E0B'
    },
    {
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      title: 'Placement Support',
      desc: 'End-to-end airline interview prep, sim assessment coaching, and job referrals via our network.',
      color: '#EC4899'
    }
  ];

  roadmapSteps = [
    { step: '01', title: 'Eligibility',      desc: 'Check age, education & medical requirements for CPL India.', icon: '📋' },
    { step: '02', title: 'Medical Test',      desc: ' Medical from DGCA-authorised AME doctors (required before CPL issuance).',          icon: '🏥' },
    { step: '03', title: 'Ground School',     desc: '14 DGCA subjects — met, nav, ATF, tech gen, air law & more.', icon: '📚' },
    { step: '04', title: 'Flight Training',   desc: '200 hours of flight training at DGCA-approved flight schools.', icon: '✈️' },
    { step: '05', title: 'CPL License',       desc: 'Clear DGCA CPL exams and receive your Commercial Pilot License.', icon: '🪪' },
    { step: '06', title: 'Airline Placement', desc: 'Join IndiGo, Air India, Vistara, SpiceJet or international carriers.', icon: '🏢' },
  ];

  testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'First Officer – IndiGo',
      text: 'THE ACE AVIATOR EDUCATION\'s roadmap clarity saved me months of confusion. From CPL prep to airline interviews — their guidance was spot-on. I cleared my IndiGo assessment on the first attempt!',
      avatar: 'AM',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Cadet Pilot – Air India',
      text: 'As a girl from a tier-2 city, I had zero idea where to start. THE ACE AVIATOR\'s consultation helped me get into a reputed DGCA-approved flight school with a scholarship. Life-changing!',
      avatar: 'PS',
      rating: 5
    },
    {
      name: 'Karan Patel',
      role: 'CPL Holder – Abroad Training',
      text: 'The cost calculator and school comparisons on this platform are incredibly accurate. I completed my 200 hours in the USA and THE ACE AVIATOR EDUCATION team guided every step of the process.',
      avatar: 'KP',
      rating: 5
    }
  ];

  faqs = [
    { q: 'What is the minimum age to apply for a CPL in India?', a: 'You must be at least 17 years old to begin flight training and 18 years to apply for a Commercial Pilot License (CPL) from DGCA.', open: false },
    { q: 'What is the total cost of CPL training in India?', a: 'CPL training in India typically costs ₹45–75 lakhs depending on the flight school, location, and aircraft type. International training (USA, Canada) can range from ₹65–1 Crore.', open: false },
    { q: 'What subjects are required for the DGCA CPL exam?', a: 'DGCA CPL exams cover: Air Navigation, Meteorology, Air Regulations, Technical General, Technical Specific, and Radio Telephony (RTR). All 6 subjects must be cleared.', open: false },
    { q: 'How long does it take to become a commercial pilot?', a: 'The entire journey typically takes 3–4 years including eligibility, medical, ground school (12–18 months), and 200 hours of flying training.', open: false },
  ];

  partners = [
    { name: 'Indigo Airways', short: 'IndiGo' },
    { name: 'Air India', short: 'Air India' },
    { name: 'SpiceJet', short: 'SpiceJet' },
    // { name: 'Go First', short: 'GoFirst' },
    // { name: 'Vistara', short: 'Vistara' }, 
    { name: 'Akasa Air', short: 'Akasa' },
  ];


   processCards = [
    { icon: '🎓', title: 'Ground Study', desc: 'Master 6 DGCA subjects with expert study material and mock tests.', color: '#FFB300' },
       { icon: '📝', title: 'DGCA Exams', desc: 'Clear RTR and all 6 written papers at DGCA examination centers.', color: '#10B981' },
    { icon: '🛩️', title: 'Flight Hours', desc: 'Log 200+ hours with dual and solo flights at DGCA-approved schools.', color: '#4A90E2' },
    // { icon: '📝', title: 'DGCA Exams', desc: 'Clear RTR and all 6 written papers at DGCA examination centers.', color: '#10B981' },
    { icon: '🏆', title: 'Get Your CPL', desc: 'Receive your Commercial Pilot License from DGCA, India.', color: '#EC4899' },
  ];


  leFaq(index: number): void {

  this.faqs.forEach((faq, i) => {

    faq.open = i === index
      ? !faq.open
      : false;

  });

}
  activeTestimonial = 0;
  private counterAnimated = false;
  private observer!: IntersectionObserver;
  private testimonialInterval: any;

  @ViewChild('countersSection') countersSection!: ElementRef;

  ngOnInit(): void {
    this.startTestimonialAutoplay();
  }

  ngAfterViewInit(): void {
    this.initCounterObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    if (this.testimonialInterval) clearInterval(this.testimonialInterval);
  }

  private initCounterObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.counterAnimated) {
          this.counterAnimated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (this.countersSection) {
      this.observer.observe(this.countersSection.nativeElement);
    }
  }

  private animateCounters(): void {
    this.counters.forEach(counter => {
      const duration = 2000;
      const steps = 60;
      const increment = counter.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        counter.value = Math.min(Math.round(current), counter.target);
        if (counter.value >= counter.target) clearInterval(interval);
      }, duration / steps);
    });
  }

  private startTestimonialAutoplay(): void {
    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 4000);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial = index;
    clearInterval(this.testimonialInterval);
    this.startTestimonialAutoplay();
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
