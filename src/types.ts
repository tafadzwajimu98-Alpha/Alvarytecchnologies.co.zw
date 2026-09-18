export interface CatalogProduct {
  id: string;
  model: string;
  name: string;
  category: 'tracking' | 'obd' | 'fuel' | 'security' | 'safety';
  categoryLabel: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  installTime: string;
  warranty: string;
  badge?: string;
  inStock: boolean;
}
