import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-become-pilot',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './become-pilot.component.html',
  styleUrls: ['./become-pilot.component.scss']
})
export class BecomePilotComponent implements OnInit {

  // Eligibility Quiz
  quiz = {
    age: '',
    education: '',
    vision: '',
    citizenship: '',
    english: ''
  };
  quizResult: 'eligible' | 'not-eligible' | 'partial' | null = null;

  // Cost Calculator
  costInputs = {
    country: 'india',
    school: 'mid',
    simulator: false
  };
  estimatedCost = { low: 0, high: 0 };

  // Timeline
  timelineSteps = [
    {
      number: '01',
      title: 'Check Eligibility',
      icon: '📋',
      color: '#FFB300',
      duration: '1 Week',
      desc: 'Minimum 10+2 with Physics & Math, Age 17+, Indian/valid visa. Physical and mental fitness is key.',
      details: [
        'Age: Minimum 17 years',
        'Education: 10+2 with Physics & Mathematics (min 50%)',
        'Nationality: Indian citizen or valid visa',
        'Vision: 6/6 correctable, no colour blindness',
        'Physical: Must be medically fit per DGCA norms'
      ],
      active: false
    },
    {
      number: '02',
      title: 'DGCA Class 1 Medical',
      icon: '🏥',
      color: '#10B981',
      duration: '1–2 Weeks',
      desc: 'Get a Class 1 medical certificate from DGCA-authorised Aviation Medical Examiners (AMEs).',
      details: [
        'Visit DGCA-authorised AME doctor',
        'Tests: ECG, vision, hearing, blood work',
        'Class 1 medical valid for 6 months initially',
        'Must be renewed every 12 months after 40 years',
        'Colour vision test is mandatory'
      ],
      active: false
    },
    {
      number: '03',
      title: 'Student Pilot License (SPL)',
      icon: '📜',
      color: '#4A90E2',
      duration: '1 Month',
      desc: 'Apply for SPL through DGCA\'s AADC portal. This is your gateway to begin solo flight training.',
      details: [
        'Minimum age: 16 years',
        'Apply via DGCA AADC online portal',
        'Documents: Age proof, address proof, medical, photos',
        'Valid for 5 years',
        'Required before first solo flight'
      ],
      active: false
    },
    {
      number: '04',
      title: 'Ground School Training',
      icon: '📚',
      color: '#8B5CF6',
      duration: '12–18 Months',
      desc: 'Clear all 6 DGCA theoretical subjects. You need min. 70% in each to qualify for CPL.',
      details: [
        'Air Navigation',
        'Aviation Meteorology',
        'Air Regulations (CAR/ICAO)',
        'Technical General',
        'Technical Specific (aircraft systems)',
        'Radio Telephony (RTR — DGCA + WPC)'
      ],
      active: false
    },
    {
      number: '05',
      title: 'Flight Training (200 Hours)',
      icon: '✈️',
      color: '#F59E0B',
      duration: '18–24 Months',
      desc: 'Complete 200 hours of flight training at a DGCA-approved flying school in India or abroad.',
      details: [
        'Min. 200 hours total time',
        'Solo hours: 100 hours minimum',
        'Night flying: 10 hours',
        'Instrument time: 40 hours',
        'Cross-country navigation required',
        'Multi-engine rating recommended'
      ],
      active: false
    },
    {
      number: '06',
      title: 'CPL License',
      icon: '🪪',
      color: '#EC4899',
      duration: '1–3 Months',
      desc: 'Apply for your CPL at the DGCA AADC portal after clearing all written exams and flight hours.',
      details: [
        'Submit flight logbook for validation',
        'All 6 DGCA theory papers cleared',
        'Medical certificate valid',
        'CPL skill test with DGCA examiner',
        'Valid for 3 years, renewable'
      ],
      active: false
    },
    {
      number: '07',
      title: 'Airline Placement',
      icon: '🏢',
      color: '#06B6D4',
      duration: 'Ongoing',
      desc: 'Join IndiGo, Air India, Vistara, AkasaAir or international carriers. Type rating comes next.',
      details: [
        'Apply via airline recruitment portals',
        'Appear for aptitude/simulator assessment',
        'Medical re-evaluation',
        'Type Rating on Boeing 737 / Airbus A320',
        'Join as First Officer (FO)'
      ],
      active: false
    }
  ];

  activeStep = 0;

  // Process Cards
  processCards = [
    { icon: '🎓', title: 'Ground Study', desc: 'Master 6 DGCA subjects with expert study material and mock tests.', color: '#FFB300' },
    { icon: '🛩️', title: 'Flight Hours', desc: 'Log 200+ hours with dual and solo flights at DGCA-approved schools.', color: '#4A90E2' },
    { icon: '📝', title: 'DGCA Exams', desc: 'Clear RTR and all 6 written papers at DGCA examination centers.', color: '#10B981' },
    { icon: '🏆', title: 'Get Your CPL', desc: 'Receive your Commercial Pilot License from DGCA, India.', color: '#EC4899' },
  ];

  // Eligibility checker form fields
  ageOptions = ['Under 17', '17–21', '22–30', '30+'];
  educationOptions = ['Below 10th', '10th Pass', '10+2 PCM', 'Graduation'];
  visionOptions = ['6/6 Normal', '6/6 with glasses', 'Colour blind', 'Partially sighted'];
  citizenshipOptions = ['Indian Citizen', 'NRI/OCI', 'Foreign National'];
  englishOptions = ['Fluent/Advanced', 'Intermediate', 'Beginner/Basic'];

  pilotFaqs = [
    { q: 'Can I become a pilot after PCB (Biology) stream?', a: 'No. DGCA requires Physics and Mathematics at the 10+2 level with a minimum of 50%. However, students who cleared Math & Physics as additional subjects may qualify.', open: false },
    { q: 'Is there an age limit to become a pilot?', a: 'The minimum age is 17 to apply for SPL and 18 for CPL. There is no strict upper age limit, but airlines generally prefer candidates under 35 for first officer positions.', open: false },
    { q: 'Can I do CPL training abroad and apply in India?', a: 'Yes! You can complete flight training in the USA, Canada, or UK and convert your license to DGCA CPL. However, additional skill tests and theory papers may be required.', open: false },
    { q: 'What is the difference between CPL and ATPL?', a: 'CPL (Commercial Pilot License) allows you to fly as a First Officer (co-pilot) in airlines. ATPL (Airline Transport Pilot License) is required to become a Captain and requires 1,500 hours of flying experience.', open: false },
    { q: 'Is pilot training possible with loan assistance?', a: 'Yes. Several banks like SBI, Bank of Baroda, and Axis Bank offer aviation loans up to ₹1 Crore. Speak to our counselors for loan linkage support.', open: false },
  ];


  ngOnInit(): void {}

  setActiveStep(i: number): void {
    this.activeStep = i;
  }

  checkEligibility(): void {
    const { age, education, vision, citizenship, english } = this.quiz;
    if (!age || !education || !vision || !citizenship || !english) return;

    const eligible =
      (age === '17–21' || age === '22–30' || age === '30+') &&
      (education === '10+2 PCM' || education === 'Graduation') &&
      (vision === '6/6 Normal' || vision === '6/6 with glasses') &&
      (citizenship === 'Indian Citizen' || citizenship === 'NRI/OCI') &&
      (english === 'Fluent/Advanced' || english === 'Intermediate');

    const partial =
      (age === '17–21' || age === '22–30' || age === '30+') &&
      (education === '10+2 PCM' || education === 'Graduation');

    this.quizResult = eligible ? 'eligible' : partial ? 'partial' : 'not-eligible';
  }

  resetQuiz(): void {
    this.quiz = { age: '', education: '', vision: '', citizenship: '', english: '' };
    this.quizResult = null;
  }

  calculateCost(): void {
    const baseCosts: Record<string, [number, number]> = {
      'india-low': [4500000, 5500000],
      'india-mid': [5500000, 7000000],
      'india-high': [7000000, 9000000],
      'usa-low': [6000000, 7500000],
      'usa-mid': [7500000, 9500000],
      'usa-high': [9500000, 12000000],
      'canada-low': [5500000, 7000000],
      'canada-mid': [7000000, 9000000],
      'canada-high': [9000000, 11500000],
    };
    const key = `${this.costInputs.country}-${this.costInputs.school}`;
    const [low, high] = baseCosts[key] || [5000000, 7000000];
    const simExtra = this.costInputs.simulator ? 300000 : 0;
    this.estimatedCost = { low: low + simExtra, high: high + simExtra };
  }

  formatCost(val: number): string {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(0)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  }

  togglePilotFaq(index: number): void {
    this.pilotFaqs[index].open = !this.pilotFaqs[index].open;
  }
}

