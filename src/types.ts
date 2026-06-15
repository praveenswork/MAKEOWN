export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  phone: string;
  email: string;
  avatarSeed: string; // seed for ui-avatars or lovely gradient representations
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  mobileNumber: string;
  emailAddress: string;
  projectType: string;
  projectDescription: string;
}
