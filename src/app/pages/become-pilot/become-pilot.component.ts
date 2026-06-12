import { Component, } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import key from 'lucide-angular/icons/key';




@Component({
  selector: 'app-become-pilot',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,NgIf],
  templateUrl: './become-pilot.component.html',
  styleUrls: ['./become-pilot.component.scss']
})
export class BecomePilotComponent implements OnInit {
emiResult: any;
showLoanResult: any;
toggleEmi() {
throw new Error('Method not implemented.');
}
emiInputs: any;
showEmi: any;
toggleExtra(arg0: any) {
throw new Error('Method not implemented.');
}

errors: any = {};

checkEligibilit(): void {

  this.errors = {};

  // Validation
  if (!this.quiz.age) {
    this.errors.age = 'Please select your age';
  }

  if (!this.quiz.education) {
    this.errors.education = 'Please select your education';
  }

  if (!this.quiz.stream) {
    this.errors.stream = 'Please select your academic stream';
  }

  if (!this.quiz.height) {
    this.errors.height = 'Please select your height';
  }

  if (!this.quiz.vision) {
    this.errors.vision = 'Please select your vision status';
  }

  if (!this.quiz.citizenship) {
    this.errors.citizenship = 'Please select your nationality';
  }

  if (!this.quiz.english) {
    this.errors.english = 'Please select your English proficiency';
  }

  // Stop if validation fails
  if (Object.keys(this.errors).length > 0) {
    return;
  }

  // Eligibility Logic
  const eligible =
    this.quiz.education === '10+2 PCM' &&
    this.quiz.stream === 'Science' &&
    this.quiz.citizenship === 'Indian Citizen';

  const partial =
    this.quiz.education === '10+2 PCM' ||
    this.quiz.stream === 'Science';

  this.quizResult = eligible
    ? 'eligible'
    : partial
    ? 'partial'
    : 'not-eligible';
} 


  // Eligibility Quiz

  streamOptions = [
    'Science',
    'Non-Science'
  ];

  heightOptions = [
    'Below 152 cm',
    '152 - 165 cm',
    'Above 165 cm'
  ];

  quiz: any = {
    age: '',
    education: '',
    stream: '',
    height: '',
    vision: '',
    citizenship: '',
    english: ''
  }
  // quiz = {
  //   age: '',
  //   education: '',
  //   vision: '',
  //   citizenship: '',
  //   english: ''
  // };
  quizResult: 'eligible' | 'not-eligible' | 'partial' | null = null;

  // Cost Calculator
costInputs = { country: 'india', school: 'mid', simulator: false, typeRating: false,  extraOptions,extras: [] as string[]

  
 };

estimatedCost = { low: 0, high: 0 };



   
  // estimatedCost = { low: 0, high: 0 };

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
      title: 'DGCA Computer Number',
      icon: '🖥️',
      color: '#FFB300',
      duration: '3–7 Days',
      desc: 'Apply for your DGCA Computer Number required for DGCA pilot examinations and licensing records.',
      details: [
        'Mandatory before appearing for DGCA theory exams',
        'Acts as your official DGCA student ID',
        'Documents: 10th & 12th marksheets, passport, photo, signature',
        'Name and documents must exactly match',
        'Incorrect photo or incomplete forms may lead to rejection'
      ],
      active: false
    },


    {
      number: '03',
      title: 'DGCA Medical System',
      icon: '🏥',
      color: '#FFB300',
      duration: '1–3 Weeks',
      desc: 'Complete DGCA medical clearance required before flying training and CPL issuance.',
      details: [
        'Class 2 Medical required for SPL and flying school admission',
        'Basic eyesight, hearing, and fitness tests by DGCA-approved doctors',
        'Class 1 Medical mandatory before Commercial Pilot License (CPL) issue',
        'Includes ECG, blood tests, vision, hearing, and overall fitness assessment',
        'Colour vision test is compulsory'
      ],
      active: false
    },

    {
      number: '04',
      title: 'Student Pilot License (SPL)',
      icon: '📜',
      color: '#FFB300',
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
      number: '05',
      title: 'Ground School Training',
      icon: '📚',
      color: '#FFB300',
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
      number: '06',
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
      number: '07',
      title: 'CPL License',
      icon: '🪪',
      color: '#FFB300',
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
      number: '08',
      title: 'Airline Placement',
      icon: '🏢',
      color: '#FFB300',
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

    {
      q: 'What is the minimum required qualification to commence Pilot training?',
      a: 'You must complete 10+2 with Physics and Mathematics from a recognized board. Students from Commerce or Arts can also qualify through bridge courses or NIOS.',
      open: true
    },

    {
      q: 'How long does it take to train to become a Pilot?',
      a: 'Commercial Pilot training usually takes around 18 to 24 months depending on weather conditions, flying hours, exams, and training progress.',
      open: false
    },

    {
      q: 'What are the regulatory requirements to obtain a Commercial Pilot Licence (CPL)?',
      a: 'You must complete 200 flying hours, clear DGCA theory exams, pass RTR, obtain Class 1 Medical, and complete all DGCA documentation requirements.',
      open: false
    },

    {
      q: 'Can I become a Pilot with Commerce or Arts background?',
      a: 'Yes. Students from Commerce or Arts backgrounds can become pilots by completing Physics and Mathematics through NIOS or equivalent recognized boards.',
      open: false
    },

    {
      q: 'What are the medical requirements to become a pilot?',
      a: 'Candidates must pass DGCA Class 2 and later Class 1 medical examinations. Good eyesight, hearing, mental fitness, and overall health are important.',
      open: false
    }

  ];
extraOptions: any;



  PilotFaq(index: number): void {

    this.pilotFaqs.forEach((faq, i) => {

      faq.open = i === index
        ? !faq.open
        : false;

    });

  }







  ngOnInit(): void { }

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
  this.quiz = {
    age: '',
    education: '',
    stream: '',
    height: '',
    vision: '',
    citizenship: '',
    english: ''
  };

  this.quizResult = null;
  this.errors = {};
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

  /* =====================================
   BANK DATA
===================================== */

  loanBanks = {

    sbi: {
      interest: '8.15% - 10.25%',
      collateral: 'Required above ₹7.5L',
      loan: 'Up to ₹1.5 Cr',
      emi: '₹1.28L/month'
    },

    bob: {
      interest: '8.40% - 10.50%',
      collateral: 'Property / FD',
      loan: 'Up to ₹1 Cr',
      emi: '₹1.30L/month'
    },

    hdfc: {
      interest: '9.20% - 11.25%',
      collateral: 'Flexible options',
      loan: 'Up to ₹1.5 Cr',
      emi: '₹1.35L/month'
    },

    icici: {
      interest: '9.50% - 11.50%',
      collateral: 'Usually required',
      loan: 'Up to ₹1 Cr',
      emi: '₹1.34L/month'
    }

  };

  /* =====================================
     EMI CALCULATOR
  ===================================== */

  loanAmount: number = 8000000;
  interestRate: number = 9.5;
  loanYears: number = 10;

  monthlyEMI: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;

  /* =====================================
     CALCULATE EMI
  ===================================== */

  calculateEMI() {

    const principal = this.loanAmount;

    const monthlyRate =
      this.interestRate / 12 / 100;

    const months =
      this.loanYears * 12;

    const emi =
      (principal * monthlyRate *
        Math.pow(1 + monthlyRate, months)) /  
      (Math.pow(1 + monthlyRate, months) - 1);

    this.monthlyEMI = emi;

    this.totalAmount = emi * months;

    this.totalInterest =
      this.totalAmount - principal;
  }

  /* =====================================
     BANK SELECT
  ===================================== */

  selectedBank: string = '';

  selectBank(bank: string) {

    this.selectedBank = bank;

    alert(`You selected ${bank} for loan guidance.`);
  }

  /* =====================================
     AUTO CALCULATE ON LOAD
  ===================================== */

  // ngOnInit(): void {

  //   this.calculateEMI();

  // }




  

}





const extraOptions = [
  {
    key: 'typeRating',
    label: 'Type Rating',
    cost: 2500000
  },
  {
    key: 'dgcaConversion',
    label: 'DGCA Conversion Cost',
    cost: 400000
  },
  {
    key: 'examFees',
    label: 'Exam Fees',
    cost: 80000
  },
  {
    key: 'extraHours',
    label: 'Extra Flight Hours',
    cost: 600000
  },
  {
    key: 'livingExpenses',
    label: 'Living Expenses',
    cost: 500000
  },
  {
    key: 'medicalRenewals',
    label: 'Medical Renewals',
    cost: 50000
  }

  

  
];












