export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface ArtItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export type Language = 'PT' | 'EN';

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'palette' | 'sparkles' | 'star';
}