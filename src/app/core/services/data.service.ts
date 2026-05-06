import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
}

export interface Job {
  id: number;
  company: string;
  logo: string;
  position: string;
  location: string;
  experience: string;
  salary: string;
  type: string;
  deadline: string;
  color: string;
  highlights: string[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  current: string;
  avatar: string;
  rating: number;
  text: string;
  image: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('assets/data/blogs.json').pipe(
      catchError(() => of([]))
    );
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('assets/data/jobs.json').pipe(
      catchError(() => of([]))
    );
  }

  getFaqs(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>('assets/data/faqs.json').pipe(
      catchError(() => of([]))
    );
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>('assets/data/testimonials.json').pipe(
      catchError(() => of([]))
    );
  }

  getFaqsByCategory(category: string): Observable<FAQ[]> {
    return new Observable(observer => {
      this.getFaqs().subscribe(faqs => {
        observer.next(category === 'All' ? faqs : faqs.filter(f => f.category === category));
        observer.complete();
      });
    });
  }
}
