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

  searchQuery = '';

  overviewCards = [
    { icon: '🏛️', title: 'DGCA Overview', desc: 'The Directorate General of Civil Aviation (DGCA) is the regulatory body of the Government of India responsible for overseeing civil aviation, airworthiness, and flight safety.', color: '#FFB300' },
    { icon: '📜', title: 'License Types', desc: 'DGCA issues SPL, PPL, CPL, ATPL, and other ratings. Each license has specific hour requirements, medical standards, and knowledge tests.', color: '#4A90E2' },
    { icon: '🏥', title: 'Medical Standards', desc: 'Pilots require Class 1 medical for CPL/ATPL, and Class 2 for PPL. Medicals are issued by DGCA-authorised Aviation Medical Examiners (AMEs).', color: '#10B981' },
    { icon: '🛫', title: 'FTO Approvals', desc: 'All Flying Training Organizations (FTOs) must be approved by DGCA. Only DGCA-approved schools can issue hours valid for Indian licenses.', color: '#8B5CF6' },
  ];

  flightSchools = [
    { name: 'Indira Gandhi Rashtriya Uran Akademi', location: 'Rae Bareli, UP', seats: '12/batch', type: 'Government' },
    { name: 'National Flying Training Institute', location: 'Gondia, Maharashtra', seats: '10/batch', type: 'PPP' },
    { name: 'Amity Flying Club', location: 'Noida, UP', seats: '8/batch', type: 'Private' },
    { name: 'CAE Oxford Aviation Academy', location: 'Delhi / Hyderabad', seats: '15/batch', type: 'International' },
    { name: 'Bombay Flying Club', location: 'Mumbai, Maharashtra', seats: '6/batch', type: 'Private' },
    { name: 'Orient Flying School', location: 'Pune, Maharashtra', seats: '8/batch', type: 'Private' },
    { name: 'Garg Aviation', location: 'Rewa, MP', seats: '5/batch', type: 'Private' },
    { name: 'Blue Dart Aviation', location: 'Mumbai, Maharashtra', seats: '4/batch', type: 'Private' },
  ];

  regulations = [
    { code: 'CAR Section 7', title: 'Licensing of Flight Crew', desc: 'Rules for issue and renewal of pilot licenses including SPL, PPL, CPL, ATPL, and ratings.', type: 'Licensing' },
    { code: 'CAR Section 2', title: 'Airworthiness', desc: 'Standards and procedures for the airworthiness of Indian registered civil aircraft.', type: 'Airworthiness' },
    { code: 'CAR Section 8', title: 'Air Transport', desc: 'Regulations governing commercial air transport operations in India.', type: 'Operations' },
    { code: 'AIC 5/2022', title: 'CPL Theory Exam Changes', desc: 'Updated guidelines for DGCA CPL theory examination pattern and syllabi.', type: 'Exams' },
    { code: 'CAR Section 6', title: 'Aerodromes', desc: 'Rules for licensing and operation of aerodromes and heliports in India.', type: 'Infrastructure' },
    { code: 'UAOP Rules', title: 'Drone/UAS Regulations', desc: 'UAS Traffic Management (UTM) rules and operator certifications.', type: 'Drones' },
  ];

  medicalDoctors = [
    { name: 'Dr. Arvind Kumar', location: 'AIIMS, New Delhi', specialty: 'Aviation Medicine', designation: 'Senior AME' },
    { name: 'Dr. Priya Nair', location: 'Bangalore', specialty: 'Cardiology/Aviation', designation: 'Authorised AME' },
    { name: 'Dr. Suresh Rao', location: 'Mumbai', specialty: 'ENT/Aviation', designation: 'Senior AME' },
    { name: 'Dr. Rekha Sharma', location: 'Hyderabad', specialty: 'Ophthalmology/Aviation', designation: 'Authorised AME' },
  ];

  resources = [
    { title: 'DGCA CPL Theory Syllabus 2024', type: 'PDF', size: '2.4 MB', icon: '📄' },
    { title: 'Aircraft Technical Manual — Cessna 172', type: 'PDF', size: '8.1 MB', icon: '✈️' },
    { title: 'Air Regulations CAR Series', type: 'PDF', size: '5.3 MB', icon: '📋' },
    { title: 'Navigation Study Guide', type: 'PDF', size: '3.7 MB', icon: '🧭' },
    { title: 'Meteorology for Pilots', type: 'PDF', size: '4.2 MB', icon: '🌤️' },
    { title: 'Radio Telephony (RTR) Guide', type: 'PDF', size: '1.8 MB', icon: '📡' },
  ];

  filteredSchools() {
    if (!this.searchQuery) return this.flightSchools;
    return this.flightSchools.filter(s =>
      s.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
