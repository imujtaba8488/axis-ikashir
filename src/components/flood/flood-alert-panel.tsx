'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertTriangle, Clock, MapPin, Phone } from 'lucide-react';

export interface FloodAlert {
  id: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  location: string;
  message: string;
  issuedAt: string;
  expiresAt?: string;
  affectedAreas: string[];
  emergencyContacts?: string[];
}

interface FloodAlertPanelProps {
  alerts?: FloodAlert[];
  className?: string;
}

/**
 * Flood Alert Panel Component
 * Displays active flood alerts and warnings for Kashmir region
 * Placeholder component for future data integration
 */
export function FloodAlertPanel({ alerts, className }: FloodAlertPanelProps) {
  // Mock data for demonstration
  const mockAlerts: FloodAlert[] = alerts || [
    {
      id: '1',
      severity: 'critical',
      location: 'Srinagar District',
      message:
        'Heavy rainfall expected in the next 6 hours. Water levels in Jhelum River are rising rapidly. Evacuation recommended for low-lying areas.',
      issuedAt: '2024-01-15T10:30:00Z',
      expiresAt: '2024-01-16T06:00:00Z',
      affectedAreas: ['Downtown Srinagar', 'Rajbagh', 'Jawahar Nagar'],
      emergencyContacts: ['100', '101', '102'],
    },
    {
      id: '2',
      severity: 'high',
      location: 'Anantnag District',
      message:
        'Moderate to heavy rainfall forecast. River levels approaching danger mark. Stay alert and avoid riverbanks.',
      issuedAt: '2024-01-15T09:15:00Z',
      expiresAt: '2024-01-16T12:00:00Z',
      affectedAreas: ['Anantnag Town', 'Bijbehara', 'Pahalgam'],
      emergencyContacts: ['100', '101'],
    },
    {
      id: '3',
      severity: 'moderate',
      location: 'Baramulla District',
      message:
        'Light to moderate rainfall expected. Minor flooding possible in low-lying areas. Monitor local conditions.',
      issuedAt: '2024-01-15T08:45:00Z',
      expiresAt: '2024-01-16T18:00:00Z',
      affectedAreas: ['Baramulla Town', 'Sopore'],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
          alert: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950',
          icon: 'text-red-600 dark:text-red-400',
        };
      case 'high':
        return {
          badge:
            'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
          alert:
            'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950',
          icon: 'text-orange-600 dark:text-orange-400',
        };
      case 'moderate':
        return {
          badge:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
          alert:
            'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
          icon: 'text-yellow-600 dark:text-yellow-400',
        };
      default:
        return {
          badge:
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          alert:
            'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
          icon: 'text-blue-600 dark:text-blue-400',
        };
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'Critical Alert';
      case 'high':
        return 'High Alert';
      case 'moderate':
        return 'Moderate Alert';
      default:
        return 'Low Alert';
    }
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          Active Flood Alerts
        </CardTitle>
        <CardDescription>
          Current flood warnings and alerts for Kashmir region
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map(alert => {
            const colors = getSeverityColor(alert.severity);

            return (
              <Alert key={alert.id} className={colors.alert}>
                <AlertTriangle className={`h-4 w-4 ${colors.icon}`} />
                <AlertTitle className="flex items-center gap-2">
                  <Badge className={`text-xs ${colors.badge}`}>
                    {getSeverityLabel(alert.severity)}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </span>
                </AlertTitle>
                <AlertDescription className="space-y-3">
                  <p className="text-sm">{alert.message}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>Issued: {formatDateTime(alert.issuedAt)}</span>
                      {alert.expiresAt && (
                        <span>
                          • Expires: {formatDateTime(alert.expiresAt)}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-medium mb-1">
                        Affected Areas:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {alert.affectedAreas.map((area, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {alert.emergencyContacts && (
                      <div>
                        <p className="text-xs font-medium mb-1">
                          Emergency Contacts:
                        </p>
                        <div className="flex items-center gap-2">
                          {alert.emergencyContacts.map((contact, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <Phone className="h-3 w-3" />
                              <span className="text-xs font-mono">
                                {contact}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AlertDescription>
              </Alert>
            );
          })}
        </div>

        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> This is placeholder data. Real-time alert
            integration will be implemented in future updates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
