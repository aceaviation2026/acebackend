# ✈️ SkyPilot Academy - Premium Aviation Education Platform

![SkyPilot Platform](src/assets/images/hero-airplane.jpg)

SkyPilot Academy is a world-class, production-ready aviation education and pilot career guidance platform. Built to serve as a comprehensive resource for aspiring commercial pilots in India, it provides eligibility quizzes, cost calculators, interactive training timelines, DGCA resources, and personalized consultation booking.

This repository contains the **Frontend Architecture** built with the latest **Angular 17 Standalone** features, demonstrating advanced frontend engineering, premium UI/UX design, and scalable, maintainable code structures.

---

## 🏗 Frontend Architecture & Tech Stack

Designed as a modern SaaS product, the frontend relies on highly optimized, component-driven development without the boilerplate of legacy Angular modules.

### **Core Stack**
- **Framework:** Angular 17 (Standalone Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** SCSS + Bootstrap 5 (Grid & Utility classes only, custom styling for UI elements)
- **Routing:** Angular Router (Lazy-loaded routes & view transitions)
- **Animations:** Angular Animations & AOS (Animate on Scroll)
- **Icons:** Lucide Angular

### **Key Features**
- **Glassmorphism UI:** Premium dark luxury theme (#0A1628, #FFB300) with depth and blur effects.
- **Interactive Tools:** Dynamic Eligibility Quiz and Aviation Training Cost Calculator built with local state management.
- **Service Layer (Mock API):** A robust `DataService` using `HttpClient` to fetch mock JSON data (Blogs, Jobs, FAQs, Testimonials), simulating a real headless CMS/Backend.
- **Responsive Design:** Mobile-first approach scaling perfectly to tablets and large desktop monitors.
- **Scroll-Triggered Motion:** Elegant entry animations enhancing user engagement.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── core/                  # Core singletons (Services, Guards, Interceptors)
│   │   └── services/          # DataService (HTTP mock data fetching)
│   ├── pages/                 # Routable feature components
│   │   ├── home/              # Landing page
│   │   ├── become-pilot/      # Interactive roadmap & calculators
│   │   ├── dgca/              # Regulatory info & resource center
│   │   ├── blog/              # Articles & Aviation News
│   │   └── contact/           # Consultation booking
│   ├── shared/                # Reusable UI components
│   │   ├── components/        # Navbar, Footer, Cards
│   │   └── pipes/             # Formatting pipes
│   ├── app.component.ts       # Root Component (AOS initialization)
│   ├── app.config.ts          # Application providers (HttpClient, Router)
│   └── app.routes.ts          # Application routing definitions
├── assets/
│   ├── data/                  # Mock JSON database (faqs.json, blogs.json, etc.)
│   └── images/                # High-res aviation imagery
└── styles/                    # Global SCSS (Variables, Mixins, Typography)
```

---

## 🚀 Scalable Backend Architecture (Production Blueprint)

While this repository currently demonstrates the frontend capability, the platform is designed to instantly integrate with a scalable microservices or monolithic backend. 

If deployed as a full-stack SaaS platform, the recommended architecture is:

### **Recommended Stack**
- **Runtime:** Node.js + Express.js (REST API)
- **Database:** MongoDB Atlas (NoSQL)
- **Authentication:** JWT (JSON Web Tokens) with Role-Based Access Control (RBAC)
- **Storage:** AWS S3 (For user documents, profile pictures, and DGCA forms)
- **Hosting:** 
  - Frontend: Vercel / Netlify
  - Backend: Render / Railway / AWS ECS

### **Why MongoDB?**
For an aviation platform where content structures (Blogs, Job postings, Dynamic FAQs, varying Flight School criteria) frequently evolve, MongoDB provides a flexible schema. Its JSON-like document structure maps perfectly to our Angular frontend models, ensuring rapid development and seamless API integration.

---

## 🗄️ Database Schema Design (MongoDB)

Below are the designed collections for future implementation:

### 1. `Users` Collection
```json
{
  "_id": "ObjectId",
  "name": "Aradhy Jain",
  "email": "demo@gmail.com",
  "passwordHash": "bcrypt_hash",
  "role": "student", // student, admin, mentor
  "profile": {
    "education": "10+2 PCM",
    "targetLicense": "CPL",
    "budget": "70L"
  },
  "createdAt": "2025-05-01T00:00:00Z"
}
```

### 2. `Blogs` Collection
```json
{
  "_id": "ObjectId",
  "title": "IndiGo to Hire 600 New Pilots",
  "slug": "indigo-hire-600-pilots",
  "authorId": "ObjectId(User)",
  "category": "Recruitment",
  "tags": ["IndiGo", "Career"],
  "content": "Rich text HTML content...",
  "featuredImage": "s3_url/blog1.jpg",
  "published": true
}
```

### 3. `Consultations` Collection (Booking System)
```json
{
  "_id": "ObjectId",
  "studentName": "Rahul Kumar",
  "email": "rahul@example.com",
  "phone": "+919876543210",
  "interestArea": "Flight Training Abroad",
  "status": "pending", // pending, completed, cancelled
  "assignedMentorId": "ObjectId(User)",
  "requestedDate": "2025-06-10T14:30:00Z"
}
```

### 4. `FlightSchools` Collection
```json
{
  "_id": "ObjectId",
  "name": "Indian Aviation Academy",
  "location": "Maharashtra",
  "dgcaApproved": true,
  "fleetSize": 15,
  "courses": ["SPL", "CPL", "Multi-Engine"],
  "averageCost": 5500000
}
```

---

## 🔮 Future Scalability & Enhancements

To evolve from a marketing/guidance site to a full-fledged EdTech platform:

1. **User Authentication & Dashboard:** Student portal to save cost calculator results, track DGCA exam progress, and store medical records securely.
2. **CMS Integration:** Admin dashboard to manage flight school listings, update blogs, and approve student testimonials.
3. **Automated Consultation Booking:** Integration with Calendly API or a custom calendar system for mentor scheduling.
4. **AI Aviation Assistant:** Integrating an LLM (like Gemini or ChatGPT) trained on DGCA CAR (Civil Aviation Requirements) documents to answer student queries instantly.
5. **Payment Gateway:** Razorpay/Stripe integration for premium mock test purchases and advanced career counseling packages.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)

### Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Navigate to `http://localhost:4200/` in your browser.

---
*Built with passion for aviation and modern web engineering.*
