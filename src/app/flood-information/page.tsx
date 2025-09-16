import { FloodAlertPanel } from '@/components/flood/flood-alert-panel';
import { WaterLevelChart } from '@/components/flood/water-level-chart';
import { WeatherForecast } from '@/components/flood/weather-forecast';
import { MainLayout } from '@/components/layout/main-layout';
import { ResponsiveContainer } from '@/components/layout/responsive-container';
import { ResponsiveGrid } from '@/components/layout/responsive-grid';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertTriangle,
  Clock,
  Droplets,
  Info,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
} from 'lucide-react';

/**
 * Flood Information Page for Kashmir
 * Provides comprehensive flood monitoring and safety information
 */
export default function FloodInformationPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background dark:bg-black">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="py-16 space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-sm border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200"
                >
                  🌊 Kashmir Flood Monitoring
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Flood Information
                  <span className="block text-black dark:text-white font-black tracking-tight">
                    Kashmir Region
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real-time flood monitoring, safety alerts, and emergency
                  information for the Kashmir region. Stay informed and stay
                  safe.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Emergency Alerts
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#safety-guidelines">Safety Guidelines</a>
                </Button>
              </div>
            </div>

            {/* Current Status Section */}
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Current Flood Status
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Latest updates on flood conditions across Kashmir
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
                <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-800 dark:text-red-200">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700">
                        <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      High Risk Areas
                    </CardTitle>
                    <CardDescription className="text-red-700 dark:text-red-300">
                      Areas currently at high flood risk
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700 dark:text-red-300">
                          Srinagar
                        </span>
                        <Badge variant="destructive">Critical</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700 dark:text-red-300">
                          Anantnag
                        </span>
                        <Badge variant="destructive">High</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-red-700 dark:text-red-300">
                          Baramulla
                        </span>
                        <Badge variant="destructive">High</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-yellow-800 dark:text-yellow-200">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <Droplets className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      Water Levels
                    </CardTitle>
                    <CardDescription className="text-yellow-700 dark:text-yellow-300">
                      Current river and lake levels
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-yellow-700 dark:text-yellow-300">
                          Jhelum River
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-200 text-yellow-800"
                        >
                          Rising
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-yellow-700 dark:text-yellow-300">
                          Dal Lake
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-200 text-yellow-800"
                        >
                          Normal
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-yellow-700 dark:text-yellow-300">
                          Wular Lake
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-200 text-yellow-800"
                        >
                          High
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700">
                        <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      Weather Forecast
                    </CardTitle>
                    <CardDescription className="text-blue-700 dark:text-blue-300">
                      Next 24 hours weather conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-700 dark:text-blue-300">
                          Today
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-blue-200 text-blue-800"
                        >
                          Heavy Rain
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-700 dark:text-blue-300">
                          Tomorrow
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-blue-200 text-blue-800"
                        >
                          Moderate Rain
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-700 dark:text-blue-300">
                          Day After
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-blue-200 text-blue-800"
                        >
                          Light Rain
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </section>

            {/* Data Visualization Section */}
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Real-Time Data
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Live monitoring data and forecasts for informed decision
                  making
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, lg: 2 }} gap="lg">
                <WaterLevelChart />
                <FloodAlertPanel />
              </ResponsiveGrid>

              <div className="max-w-4xl mx-auto">
                <WeatherForecast />
              </div>
            </section>

            {/* Safety Guidelines Section */}
            <section id="safety-guidelines" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Safety Guidelines
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Important safety measures during flood situations
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Shield className="h-6 w-6" />
                      </div>
                      Before Flood
                    </CardTitle>
                    <CardDescription>
                      Preparations and preventive measures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Keep emergency supplies ready</li>
                      <li>• Know your evacuation routes</li>
                      <li>• Stay informed about weather updates</li>
                      <li>• Secure important documents</li>
                      <li>• Charge mobile devices</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <AlertTriangle className="h-6 w-6" />
                      </div>
                      During Flood
                    </CardTitle>
                    <CardDescription>
                      Immediate actions during flood events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Move to higher ground immediately</li>
                      <li>• Avoid walking through floodwater</li>
                      <li>• Turn off electricity and gas</li>
                      <li>• Stay tuned to emergency broadcasts</li>
                      <li>• Help others if safe to do so</li>
                    </ul>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </section>

            {/* Emergency Contacts Section */}
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Emergency Contacts
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Important emergency numbers and resources
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Phone className="h-6 w-6" />
                      </div>
                      Emergency Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Police</span>
                        <span className="text-sm text-muted-foreground">
                          100
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Fire Service
                        </span>
                        <span className="text-sm text-muted-foreground">
                          101
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Ambulance</span>
                        <span className="text-sm text-muted-foreground">
                          102
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <MapPin className="h-6 w-6" />
                      </div>
                      Relief Centers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">
                          Srinagar Relief Center
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Near Lal Chowk
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">
                          Anantnag Relief Center
                        </span>
                        <p className="text-xs text-muted-foreground">
                          District Hospital
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">
                          Baramulla Relief Center
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Municipal Office
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Info className="h-6 w-6" />
                      </div>
                      Information Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">
                          Weather Updates
                        </span>
                        <p className="text-xs text-muted-foreground">
                          IMD Kashmir
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">
                          Flood Alerts
                        </span>
                        <p className="text-xs text-muted-foreground">
                          CWC India
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">
                          Emergency Info
                        </span>
                        <p className="text-xs text-muted-foreground">
                          District Administration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </section>

            {/* Important Notice */}
            <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
              <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-800 dark:text-orange-200">
                Important Notice
              </AlertTitle>
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                This information is for general guidance only. Always follow
                official emergency instructions from local authorities during
                flood situations. Stay safe and prioritize your safety above all
                else.
              </AlertDescription>
            </Alert>
          </div>
        </ResponsiveContainer>
      </div>
    </MainLayout>
  );
}
