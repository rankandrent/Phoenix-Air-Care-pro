import React from 'react';
import { Fan, Wind, Thermometer, Shield, Wrench, Home, Building, Droplets, AlertCircle, Gauge, Settings } from 'lucide-react';

export type IconType = 
  | 'home' 
  | 'building' 
  | 'fan' 
  | 'wind' 
  | 'gauge' 
  | 'shield' 
  | 'alert' 
  | 'settings' 
  | 'droplets' 
  | 'wrench';

export const ServiceIcon: React.FC<{ type: IconType }> = ({ type }) => {
  const className = "h-8 w-8";
  
  switch (type) {
    case 'home': return <Home className={className} />;
    case 'building': return <Building className={className} />;
    case 'fan': return <Fan className={className} />;
    case 'wind': return <Wind className={className} />;
    case 'gauge': return <Gauge className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'alert': return <AlertCircle className={className} />;
    case 'settings': return <Settings className={className} />;
    case 'droplets': return <Droplets className={className} />;
    case 'wrench': return <Wrench className={className} />;
  }
};