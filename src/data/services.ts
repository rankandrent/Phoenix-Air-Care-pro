import { IconType } from '../components/ServiceIcon';

export interface Service {
  title: string;
  description: string;
  iconType: IconType;
  path: string;
}

export const services: Service[] = [
  {
    title: "Residential Duct Cleaning",
    description: "Complete cleaning of your home's air duct system for improved indoor air quality",
    iconType: 'home',
    path: '/Residential-Duct-Cleaning'
  },
  {
    title: "Commercial Duct Cleaning",
    description: "Professional cleaning for businesses, offices, and commercial properties",
    iconType: 'building',
    path: '/Commercial-Duct-Cleaning'
  },
  {
    title: "HVAC System Cleaning",
    description: "Comprehensive cleaning of your entire HVAC system components",
    iconType: 'fan',
    path: '/HVAC-System-Cleaning'
  },
  {
    title: "Dryer Vent Cleaning",
    description: "Remove lint buildup and prevent fire hazards in dryer vents",
    iconType: 'wind',
    path: '/Dryer-Vent-Cleaning'
  },
  {
    title: "Air Quality Testing",
    description: "Professional indoor air quality assessment and monitoring",
    iconType: 'gauge',
    path: '/Air-Quality-Testing'
  },
  {
    title: "Sanitization Services",
    description: "Eliminate bacteria, mold, and other contaminants from your ducts",
    iconType: 'shield',
    path: '/Sanitization-Services'
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency duct cleaning and repair services",
    iconType: 'alert',
    path: '/Emergency-Services'
  },
  {
    title: "Maintenance Programs",
    description: "Regular maintenance plans to keep your ducts clean year-round",
    iconType: 'settings',
    path: '/Maintenance-Programs'
  },
  {
    title: "Mold Remediation",
    description: "Professional mold detection and removal from duct systems",
    iconType: 'droplets',
    path: '/Mold-Remediation'
  },
  {
    title: "Duct Repair Services",
    description: "Fix leaks, damages, and improve duct system efficiency",
    iconType: 'wrench',
    path: '/Duct-Repair-Services'
  }
];