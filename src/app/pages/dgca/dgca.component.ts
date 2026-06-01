import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dgca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dgca.component.html',
  styleUrls: ['./dgca.component.scss']
})
export class DgcaComponent {
doctorStates: any;
doctorSearch: any;
selectedType: any;
cities: any;
filteredDoctors(): any {
throw new Error('Method not implemented.');
}

  searchQuery = '';

  overviewCards = [
    { icon: '🏛️', title: 'DGCA Overview', desc: 'The Directorate General of Civil Aviation (DGCA) is the regulatory body of the Government of India responsible for overseeing civil aviation, airworthiness, and flight safety.', color: '#FFB300' },
    { icon: '📜', title: 'License Types', desc: 'DGCA issues SPL, PPL, CPL, ATPL, and other ratings. Each license has specific hour requirements, medical standards, and knowledge tests.', color: '#4A90E2' },
    { icon: '🏥', title: 'Medical Standards', desc: 'Pilots require Class 1 medical for CPL/ATPL, and Class 2 for PPL. Medicals are issued by DGCA-authorised Aviation Medical Examiners (AMEs).', color: '#10B981' },
    { icon: '🛫', title: 'FTO Approvals', desc: 'All Flying Training Organizations (FTOs) must be approved by DGCA. Only DGCA-approved schools can issue hours valid for Indian licenses.', color: '#8B5CF6' },
  ];


  flightSchools = [  {
    name: 'Avyanna Aviation Pvt. Ltd',
    location: 'India',
    seats: 'Top Ranked',
    type: 'Category A'
  },

  // =========================
  // CATEGORY B
  // =========================

  {
    name: 'Academy of Carver Aviation',
    location: 'Baramati, Maharashtra',
    seats: '10/batch',
    type: 'Private'
  },

  {
    name: 'FSTC Flying School Pvt. Ltd',
    location: 'Gurugram, Haryana',
    seats: '12/batch',
    type: 'Private'
  },

  {
    name: 'National Flying Training Institute',
    location: 'Gondia, Maharashtra',
    seats: '10/batch',
    type: 'PPP'
  },

  {
    name: 'Indira Gandhi Rashtriya Uran Akademi',
    location: 'Rae Bareli, UP',
    seats: '12/batch',
    type: 'Government'  
  },

  {
    name: 'Flytech Aviation Academy',
    location: 'Hyderabad, Telangana',
    seats: '8/batch',
    type: 'Private'
  },

  {
    name: 'Skynex Aero Pvt Ltd',
    location: 'Delhi NCR',
    seats: '6/batch',
    type: 'Private'
  },

  {
    name: 'Garg Aviation Ltd',
    location: 'Rewa, MP',
    seats: '5/batch',
    type: 'Private'
  },

  {
    name: 'Chetak Aviation Pvt. Ltd',
    location: 'Madhya Pradesh',
    seats: '6/batch',
    type: 'Private'
  },

  // {
  //   name: 'Chimes Aviation Academy',
  //   location: 'Dhana, MP',
  //   seats: '10/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Dunes Aviation Academy',
  //   location: 'Rajasthan',
  //   seats: '8/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Ekvi Air Training Organization Pvt. Ltd',
  //   location: 'Maharashtra',
  //   seats: '6/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Jet Serve Aviation Pvt. Ltd',
  //   location: 'Mumbai, Maharashtra',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Alchemist Aviation Pvt. Ltd',
  //   location: 'Punjab',
  //   seats: '6/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Ambition Flying Club',
  //   location: 'UP',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Orient Flight Aviation Academy',
  //   location: 'Puducherry',
  //   seats: '8/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'The Bombay Flying Club',
  //   location: 'Mumbai, Maharashtra',
  //   seats: '6/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'The Gujarat Flying Club',
  //   location: 'Vadodara, Gujarat',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // // =========================
  // // CATEGORY C
  // // =========================

  // {
  //   name: 'Sha Shib Flying Academy',
  //   location: 'Guna, MP',
  //   seats: '8/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Indian Flying Academy',
  //   location: 'New Delhi',
  //   seats: '5/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'The Madhya Pradesh Flying Club',
  //   location: 'Indore, MP',
  //   seats: '5/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'Wings Aviation Pvt Ltd',
  //   location: 'Hyderabad',
  //   seats: '6/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Asia Pacific Training Academy',
  //   location: 'Hyderabad',
  //   seats: '6/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Haryana Institute of Civil Aviation',
  //   location: 'Karnal, Haryana',
  //   seats: '10/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'Rajiv Gandhi Academy for Aviation Technology',
  //   location: 'Kerala',
  //   seats: '6/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'Telangana State Aviation Academy',
  //   location: 'Hyderabad, Telangana',
  //   seats: '8/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'The Nagpur Flying Club',
  //   location: 'Nagpur, Maharashtra',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Banasthali Vidyapith Gliding & Flying Club',
  //   location: 'Rajasthan',
  //   seats: '4/batch',
  //   type: 'University'
  // },

  // {
  //   name: 'Bihar Flying Institute',
  //   location: 'Patna, Bihar',
  //   seats: '4/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'Patiala Aviation Club',
  //   location: 'Patiala, Punjab',
  //   seats: '4/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'SVKM NMIMS Academy of Aviation',
  //   location: 'Mumbai, Maharashtra',
  //   seats: '8/batch',
  //   type: 'University'
  // },

  // {
  //   name: 'BlueRay Aviation Pvt Ltd',
  //   location: 'New Delhi',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Pioneer Flying Club Academy Pvt Ltd',
  //   location: 'Aligarh, UP',
  //   seats: '5/batch',
  //   type: 'Private'
  // },

  // {
  //   name: 'Govt. Aviation Training Institute',
  //   location: 'Bhubaneswar, Odisha',
  //   seats: '5/batch',
  //   type: 'Government'
  // },

  // {
  //   name: 'Redbird Flight Training Academy Pvt. Ltd',
  //   location: 'Baramati, Maharashtra',
  //   seats: '12/batch',
  //   type: 'Private'
  // }

  ];

  regulations = [
    { code: 'CAR Section 7', title: 'Licensing of Flight Crew', desc: 'Rules for issue and renewal of pilot licenses including SPL, PPL, CPL, ATPL, and ratings.', type: 'Licensing' },
    { code: 'CAR Section 2', title: 'Airworthiness', desc: 'Standards and procedures for the airworthiness of Indian registered civil aircraft.', type: 'Airworthiness' },
    { code: 'CAR Section 8', title: 'Air Transport', desc: 'Regulations governing commercial air transport operations in India.', type: 'Operations' },
    { code: 'AIC 5/2022', title: 'CPL Theory Exam Changes', desc: 'Updated guidelines for DGCA CPL theory examination pattern and syllabi.', type: 'Exams' },
    { code: 'CAR Section 6', title: 'Aerodromes', desc: 'Rules for licensing and operation of aerodromes and heliports in India.', type: 'Infrastructure' },
    { code: 'UAOP Rules', title: 'Drone/UAS Regulations', desc: 'UAS Traffic Management (UTM) rules and operator certifications.', type: 'Drones' },
  ];

  // medicalDoctors = [
  //   { name: 'Dr. Arvind Kumar', location: 'AIIMS, New Delhi', specialty: 'Aviation Medicine', designation: 'Senior AME' },
  //   { name: 'Dr. Priya Nair', location: 'Bangalore', specialty: 'Cardiology/Aviation', designation: 'Authorised AME' },
  //   { name: 'Dr. Suresh Rao', location: 'Mumbai', specialty: 'ENT/Aviation', designation: 'Senior AME' },
  //   { name: 'Dr. Rekha Sharma', location: 'Hyderabad', specialty: 'Ophthalmology/Aviation', designation: 'Authorised AME' },
  // ];

  resources = [
    { title: 'DGCA CPL Theory Syllabus 2024', type: 'PDF', size: '2.4 MB', icon: '📄' },
    { title: 'Aircraft Technical Manual — Cessna 172', type: 'PDF', size: '8.1 MB', icon: '✈️' },
    { title: 'Air Regulations CAR Series', type: 'PDF', size: '5.3 MB', icon: '📋' },
    { title: 'Navigation Study Guide', type: 'PDF', size: '3.7 MB', icon: '🧭' },
    { title: 'Meteorology for Pilots', type: 'PDF', size: '4.2 MB', icon: '🌤️' },
    { title: 'Radio Telephony (RTR) Guide', type: 'PDF', size: '1.8 MB', icon: '📡' },
  ];
doctorCities: any;

  filteredSchools() {
    if (!this.searchQuery) return this.flightSchools;
    return this.flightSchools.filter(s =>
      s.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  dgcaFleet = [

  {
    school: 'Indira Gandhi Rashtriya Uran Akademi',
    location: 'Raebareli, Uttar Pradesh',
    type: 'Central Govt',
    se: '13 Aircraft',
    me: '2 Aircraft',
    aircraft: 'Diamond DA-40 / DA-42'
  },

  {
    school: 'National Flying Training Institute',
    location: 'Gondia, Maharashtra',
    type: 'Private Ltd',
    se: '12 Aircraft',
    me: '2 Aircraft',
    aircraft: 'Diamond DA40 / DA42'
  },

  {
    school: 'Redbird Flight Training Academy',
    location: 'Baramati, Maharashtra',
    type: 'Private Ltd',
    se: '45 Aircraft',
    me: '3 Aircraft',
    aircraft: 'Tecnam P2008JC'
  },

  {
    school: 'Orient Flight Aviation Academy',
    location: 'Mysore, Karnataka',
    type: 'Private Ltd',
    se: '8 Aircraft',
    me: '2 Aircraft',
    aircraft: 'Cessna 172R'
  },

  {
    school: 'Rajiv Gandhi Academy for Aviation Technology',
    location: 'Kerala',
    type: 'State Govt',
    se: '4 Aircraft',
    me: '1 Aircraft',
    aircraft: 'Cessna 172R'
  },

  {
    school: 'Wings Aviation Pvt. Ltd.',
    location: 'Hyderabad, Telangana',
    type: 'Private Ltd',
    se: '9 Aircraft',
    me: '2 Aircraft',
    aircraft: 'Cessna 172'
  }

];
}
const resources = [
  {
    icon: '🗺️',
    title: 'Navigation Log Template',
    type: 'PDF',
    size: '250 KB',
    file: 'assets/downloads/navigation-log-template.pdf'
  },
  {
    icon: '⚖️',
    title: 'Weight & Balance Sheet',
    type: 'PDF',
    size: '180 KB',
    file: 'assets/downloads/weight-balance-sheet.pdf'
  },
  {
    icon: '📘',
    title: 'Pilot Logbook Template',
    type: 'XLSX',
    size: '320 KB',
    file: 'assets/downloads/pilot-logbook-template.xlsx'
  },
  {
    icon: '📄',
    title: 'DGCA CAR Summary',
    type: 'PDF',
    size: '420 KB',
    file: 'assets/downloads/dgca-car-summary.pdf'
  },
  {
    icon: '🎯',
    title: 'DGCA Exam Cheat Sheet',
    type: 'PDF',
    size: '210 KB',
    file: 'assets/downloads/dgca-exam-cheat-sheet.pdf'
  },
  {
    icon: '✈️',
    title: 'CPL Study Material',
    type: 'PDF',
    size: '1.2 MB',
    file: 'assets/downloads/cpl-study-material.pdf'
  }
  
  
];












