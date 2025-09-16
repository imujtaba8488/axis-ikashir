'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Cloud, CloudRain, CloudSnow, Sun } from 'lucide-react';

export interface WeatherData {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  precipitation: number; // in mm
  humidity: number; // percentage
  windSpeed: number; // in km/h
  floodRisk: 'low' | 'moderate' | 'high' | 'critical';
}

interface WeatherForecastProps {
  forecast?: WeatherData[];
  className?: string;
}

/**
 * Weather Forecast Component
 * Displays weather forecast with flood risk assessment for Kashmir
 * Placeholder component for future data integration
 */
export function WeatherForecast({ forecast, className }: WeatherForecastProps) {
  // Mock data for demonstration
  const mockForecast: WeatherData[] = forecast || [
    {
      date: '2024-01-15',
      temperature: { min: 2, max: 8 },
      condition: 'rainy',
      precipitation: 45,
      humidity: 85,
      windSpeed: 25,
      floodRisk: 'high',
    },
    {
      date: '2024-01-16',
      temperature: { min: 1, max: 6 },
      condition: 'rainy',
      precipitation: 35,
      humidity: 80,
      windSpeed: 20,
      floodRisk: 'moderate',
    },
    {
      date: '2024-01-17',
      temperature: { min: 0, max: 5 },
      condition: 'cloudy',
      precipitation: 15,
      humidity: 75,
      windSpeed: 15,
      floodRisk: 'low',
    },
    {
      date: '2024-01-18',
      temperature: { min: -1, max: 4 },
      condition: 'snowy',
      precipitation: 20,
      humidity: 70,
      windSpeed: 18,
      floodRisk: 'low',
    },
    {
      date: '2024-01-19',
      temperature: { min: 1, max: 7 },
      condition: 'sunny',
      precipitation: 0,
      humidity: 65,
      windSpeed: 12,
      floodRisk: 'low',
    },
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'snowy':
        return <CloudSnow className="h-6 w-6 text-blue-300" />;
      default:
        return <Cloud className="h-6 w-6 text-gray-500" />;
    }
  };

  const getFloodRiskBadge = (risk: string) => {
    switch (risk) {
      case 'critical':
        return (
          <Badge variant="destructive" className="text-xs">
            Critical Risk
          </Badge>
        );
      case 'high':
        return (
          <Badge
            variant="destructive"
            className="text-xs bg-orange-100 text-orange-800"
          >
            High Risk
          </Badge>
        );
      case 'moderate':
        return (
          <Badge
            variant="secondary"
            className="text-xs bg-yellow-100 text-yellow-800"
          >
            Moderate Risk
          </Badge>
        );
      default:
        return (
          <Badge
            variant="secondary"
            className="text-xs bg-green-100 text-green-800"
          >
            Low Risk
          </Badge>
        );
    }
  };

  const getFloodRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950';
      case 'high':
        return 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950';
      case 'moderate':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950';
      default:
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
    }
  };

  return (
    <Card
      className={`group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-4 text-indigo-800 dark:text-indigo-200">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
            <CloudRain className="h-7 w-7 text-white" />
          </div>
          <div>
            <div className="text-xl font-bold">5-Day Weather Forecast</div>
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Risk Assessment
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-indigo-700 dark:text-indigo-300 text-base">
          Weather conditions and flood risk assessment for Kashmir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockForecast.map((day, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getFloodRiskColor(day.floodRisk)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getWeatherIcon(day.condition)}
                    <span className="font-medium text-sm">
                      {formatDate(day.date)}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {day.temperature.min}°C - {day.temperature.max}°C
                  </div>
                </div>
                {getFloodRiskBadge(day.floodRisk)}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <CloudRain className="h-3 w-3 text-blue-500" />
                  <span>{day.precipitation}mm</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-200" />
                  <span>{day.humidity}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <span>{day.windSpeed} km/h</span>
                </div>
                <div className="text-muted-foreground capitalize">
                  {day.condition}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Flood Risk Assessment:</strong> Based on precipitation,
            temperature, and historical data patterns. This is placeholder data
            for demonstration purposes.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
