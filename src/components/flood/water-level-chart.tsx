'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Minus, TrendingDown, TrendingUp } from 'lucide-react';

export interface WaterLevelData {
  location: string;
  currentLevel: number;
  normalLevel: number;
  dangerLevel: number;
  trend: 'rising' | 'falling' | 'stable';
  lastUpdated: string;
}

interface WaterLevelChartProps {
  data?: WaterLevelData[];
  className?: string;
}

/**
 * Water Level Chart Component
 * Displays current water levels for rivers and lakes in Kashmir
 * Placeholder component for future data integration
 */
export function WaterLevelChart({ data, className }: WaterLevelChartProps) {
  // Mock data for demonstration
  const mockData: WaterLevelData[] = data || [
    {
      location: 'Jhelum River - Srinagar',
      currentLevel: 8.5,
      normalLevel: 6.0,
      dangerLevel: 9.0,
      trend: 'rising',
      lastUpdated: '2 hours ago',
    },
    {
      location: 'Dal Lake',
      currentLevel: 4.2,
      normalLevel: 4.0,
      dangerLevel: 5.5,
      trend: 'stable',
      lastUpdated: '1 hour ago',
    },
    {
      location: 'Wular Lake',
      currentLevel: 6.8,
      normalLevel: 5.5,
      dangerLevel: 7.5,
      trend: 'rising',
      lastUpdated: '30 minutes ago',
    },
    {
      location: 'Chenab River - Ramban',
      currentLevel: 3.1,
      normalLevel: 4.0,
      dangerLevel: 6.0,
      trend: 'falling',
      lastUpdated: '1 hour ago',
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'falling':
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      default:
        return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getTrendBadge = (trend: string) => {
    switch (trend) {
      case 'rising':
        return (
          <Badge variant="destructive" className="text-xs">
            Rising
          </Badge>
        );
      case 'falling':
        return (
          <Badge
            variant="secondary"
            className="text-xs bg-green-100 text-green-800"
          >
            Falling
          </Badge>
        );
      default:
        return (
          <Badge
            variant="secondary"
            className="text-xs bg-yellow-100 text-yellow-800"
          >
            Stable
          </Badge>
        );
    }
  };

  const getRiskLevel = (current: number, normal: number, danger: number) => {
    const ratio = current / danger;
    if (ratio >= 0.9)
      return { level: 'Critical', color: 'text-red-600 dark:text-red-400' };
    if (ratio >= 0.7)
      return { level: 'High', color: 'text-orange-600 dark:text-orange-400' };
    if (ratio >= 0.5)
      return {
        level: 'Moderate',
        color: 'text-yellow-600 dark:text-yellow-400',
      };
    return { level: 'Low', color: 'text-green-600 dark:text-green-400' };
  };

  return (
    <Card
      className={`group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-4 text-blue-800 dark:text-blue-200">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
            <TrendingUp className="h-7 w-7 text-white" />
          </div>
          <div>
            <div className="text-xl font-bold">Water Level Monitoring</div>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Real-Time Data
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-blue-700 dark:text-blue-300 text-base">
          Live water levels for major water bodies in Kashmir region
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockData.map((item, index) => {
            const risk = getRiskLevel(
              item.currentLevel,
              item.normalLevel,
              item.dangerLevel
            );
            const progressPercentage =
              (item.currentLevel / item.dangerLevel) * 100;

            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{item.location}</span>
                    {getTrendIcon(item.trend)}
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendBadge(item.trend)}
                    <span className={`text-sm font-medium ${risk.color}`}>
                      {risk.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{item.currentLevel}m (Current)</span>
                    <span>{item.normalLevel}m (Normal)</span>
                    <span>{item.dangerLevel}m (Danger)</span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        progressPercentage >= 90
                          ? 'bg-red-500'
                          : progressPercentage >= 70
                            ? 'bg-orange-500'
                            : progressPercentage >= 50
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Last updated: {item.lastUpdated}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> This is placeholder data. Real-time data
            integration will be implemented in future updates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
