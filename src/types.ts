export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  venue: string;
  imageUrl: string;
  description: string;
  specs: string[];
  attendees?: string;
  highlight?: string;
}

export interface PortfolioCategorySection {
  id: string;
  counter: string; // e.g. "01 — 06"
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  exploreLabel: string;
  projects: [ProjectItem, ProjectItem, ProjectItem, ProjectItem]; // exactly 4 photos
}

export interface PartnerBrand {
  name: string;
  category: string;
  logoText: string;
  country: string;
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budgetRange: string;
  servicesNeeded: string[];
  message: string;
}

export interface ProductionService {
  icon: string;
  title: string;
  description: string;
  specs: string;
  imageUrl: string;
  tag?: string;
}
