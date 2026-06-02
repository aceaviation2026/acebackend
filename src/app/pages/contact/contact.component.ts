import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    education: '',
    message: ''
  };

  submitted = false;
  loading = false;

  interests = ['CPL Training Guidance', 'DGCA Exam Help', 'School Selection', 'Flight Abroad', 'Financial Planning', 'Career Counseling', 'Other'];

  contactItems = [
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91  98337 97999',
      sub: 'Mon–Sat, 9 AM – 7 PM IST',
      link: 'tel:+919876543210'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'admin@theaceaviator.com',
      sub: 'Reply within 24 hours',
      link: 'mailto:admin@theaceaviator.com'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: 'Mumbai, Dadar 400014',
      sub: 'By appointment only',
      link: '#map'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+91  98337 97999',
      sub: 'Fastest response',
      link: 'https://wa.me/919876543210'
    }
  ];

  socialLinks = [
    { icon: '📺', platform: 'YouTube', handle: '@Theaceaviator', url: '#', color: '#FF0000' },
    { icon: '📸', platform: 'Instagram', handle: '@acepilot_india', url: '#', color: '#E1306C' },
    { icon: '💼', platform: 'LinkedIn', handle: '@theaceaviator', url: '#', color: '#0A66C2' },
    { icon: '🐦', platform: 'Twitter/X', handle: '@Theaceaviator', url: '#', color: '#1DA1F2' },
  ];

  faqs = [
    { q: 'How long does the free consultation take?', a: 'Our free consultation sessions are typically 30–45 minutes long, conducted via video call or phone, with one of our ATPL-certified mentors.', open: false },
    { q: 'Is the consultation truly free?', a: 'Yes, 100% free. No hidden charges, no sales pressure. Our goal is to genuinely help you plan your pilot career.', open: false },
    { q: 'Do you offer group counseling sessions?', a: 'Yes! We conduct monthly group webinars on pilot career topics. Subscribe to our newsletter to get invites.', open: false },
    { q: 'Can I book a consultation for a family member?', a: 'Absolutely. Parents and guardians are encouraged to join too. We regularly counsel families together on aviation career planning.', open: false },
  ];

  submitForm(): void {
    if (!this.form.name || !this.form.email || !this.form.phone) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 1800);
  }

  resetForm(): void {
    this.form = { name: '', email: '', phone: '', interest: '', education: '', message: '' };
    this.submitted = false;
  }

 toggleFaq(index: number): void {

  this.faqs.forEach((faq, i) => {

    if (i === index) {
      faq.open = !faq.open; // Toggle clicked FAQ
    } else {
      faq.open = false; // Close all others
    }

  });

}

  
}
