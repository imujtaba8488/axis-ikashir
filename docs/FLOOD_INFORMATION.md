# Flood Information Page

## Overview

The Flood Information page provides comprehensive flood monitoring and safety information specifically for the Kashmir region. This page serves as a central hub for flood-related data, alerts, and emergency information.

## Page Structure

### 1. Hero Section

- **Title**: "Flood Information Kashmir Region"
- **Description**: Real-time flood monitoring, safety alerts, and emergency information
- **Action Buttons**: Emergency Alerts and Safety Guidelines

### 2. Current Flood Status

Displays three key status cards:

#### High Risk Areas

- Shows areas currently at high flood risk
- Color-coded severity indicators (Critical, High, Moderate)
- Real-time status updates

#### Water Levels

- Current river and lake levels
- Trend indicators (Rising, Falling, Stable)
- Normal vs. danger level comparisons

#### Weather Forecast

- Next 24 hours weather conditions
- Precipitation forecasts
- Weather pattern analysis

### 3. Real-Time Data Section

Interactive data visualization components:

#### Water Level Chart (`WaterLevelChart`)

- **Purpose**: Monitor water levels across major water bodies
- **Features**:
  - Progress bars showing current vs. danger levels
  - Trend indicators (rising/falling/stable)
  - Risk level assessment (Low, Moderate, High, Critical)
  - Last updated timestamps
- **Data Points**:
  - Jhelum River (Srinagar)
  - Dal Lake
  - Wular Lake
  - Chenab River (Ramban)

#### Flood Alert Panel (`FloodAlertPanel`)

- **Purpose**: Display active flood warnings and alerts
- **Features**:
  - Severity-based color coding
  - Affected areas mapping
  - Emergency contact information
  - Issue and expiration timestamps
- **Alert Types**:
  - Critical Alert (Red)
  - High Alert (Orange)
  - Moderate Alert (Yellow)
  - Low Alert (Blue)

#### Weather Forecast (`WeatherForecast`)

- **Purpose**: 5-day weather forecast with flood risk assessment
- **Features**:
  - Temperature ranges (min/max)
  - Weather conditions (sunny, cloudy, rainy, snowy)
  - Precipitation amounts
  - Humidity and wind speed
  - Flood risk assessment
- **Risk Levels**:
  - Low Risk (Green)
  - Moderate Risk (Yellow)
  - High Risk (Orange)
  - Critical Risk (Red)

### 4. Safety Guidelines

Comprehensive safety information:

#### Before Flood

- Keep emergency supplies ready
- Know evacuation routes
- Stay informed about weather updates
- Secure important documents
- Charge mobile devices

#### During Flood

- Move to higher ground immediately
- Avoid walking through floodwater
- Turn off electricity and gas
- Stay tuned to emergency broadcasts
- Help others if safe to do so

### 5. Emergency Contacts

Essential contact information:

#### Emergency Services

- Police: 100
- Fire Service: 101
- Ambulance: 102

#### Relief Centers

- Srinagar Relief Center (Near Lal Chowk)
- Anantnag Relief Center (District Hospital)
- Baramulla Relief Center (Municipal Office)

#### Information Sources

- Weather Updates: IMD Kashmir
- Flood Alerts: CWC India
- Emergency Info: District Administration

## Components

### WaterLevelChart

```tsx
<WaterLevelChart data={waterLevelData} className="custom-class" />
```

**Props**:

- `data`: Array of WaterLevelData objects
- `className`: Optional CSS classes

**WaterLevelData Interface**:

```typescript
interface WaterLevelData {
  location: string;
  currentLevel: number;
  normalLevel: number;
  dangerLevel: number;
  trend: 'rising' | 'falling' | 'stable';
  lastUpdated: string;
}
```

### FloodAlertPanel

```tsx
<FloodAlertPanel alerts={floodAlerts} className="custom-class" />
```

**Props**:

- `alerts`: Array of FloodAlert objects
- `className`: Optional CSS classes

**FloodAlert Interface**:

```typescript
interface FloodAlert {
  id: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  location: string;
  message: string;
  issuedAt: string;
  expiresAt?: string;
  affectedAreas: string[];
  emergencyContacts?: string[];
}
```

### WeatherForecast

```tsx
<WeatherForecast forecast={weatherData} className="custom-class" />
```

**Props**:

- `forecast`: Array of WeatherData objects
- `className`: Optional CSS classes

**WeatherData Interface**:

```typescript
interface WeatherData {
  date: string;
  temperature: { min: number; max: number };
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  precipitation: number; // in mm
  humidity: number; // percentage
  windSpeed: number; // in km/h
  floodRisk: 'low' | 'moderate' | 'high' | 'critical';
}
```

## Navigation

The page is accessible via:

- **Header Navigation**: "🌊 Flood Info" link
- **Direct URL**: `/flood-information`
- **Internal Links**: Safety Guidelines anchor link

## Design Features

### Color Coding

- **Critical/High Risk**: Red theme
- **Moderate Risk**: Orange/Yellow theme
- **Low Risk**: Green theme
- **Information**: Blue theme

### Responsive Design

- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

### Accessibility

- High contrast colors
- Screen reader friendly
- Keyboard navigation support
- Clear visual hierarchy

## Future Enhancements

### Data Integration

- Real-time API connections
- Live data feeds
- Historical data analysis
- Predictive modeling

### Interactive Features

- Interactive maps
- Real-time notifications
- User location services
- Customizable alerts

### Additional Components

- Evacuation route maps
- Shelter location finder
- Emergency kit checklist
- Community reporting system

## Technical Notes

### Current Implementation

- Uses placeholder/mock data
- Fully responsive design
- TypeScript interfaces defined
- Component-based architecture

### Data Sources (Future)

- India Meteorological Department (IMD)
- Central Water Commission (CWC)
- Local district administration
- Real-time sensor networks

### Performance Considerations

- Lazy loading for data components
- Efficient re-rendering
- Optimized bundle size
- Caching strategies

## Usage

1. **Navigation**: Click "🌊 Flood Info" in the header
2. **Status Check**: Review current flood status cards
3. **Data Monitoring**: Use real-time data components
4. **Safety Information**: Follow safety guidelines
5. **Emergency Contacts**: Use provided contact information

## Maintenance

- Regular data source updates
- Component testing and validation
- User feedback integration
- Performance monitoring
- Accessibility audits
