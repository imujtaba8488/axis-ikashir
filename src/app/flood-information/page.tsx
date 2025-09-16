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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section with Background Pattern */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

          <ResponsiveContainer size="xl" padding="lg">
            <div className="relative py-20 space-y-12">
              {/* Hero Content */}
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-700 backdrop-blur-sm shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      🌊 Kashmir Flood Monitoring System
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight">
                      Flood Information
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                      Kashmir Region
                    </h2>
                  </div>

                  <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Comprehensive real-time flood monitoring, safety alerts, and
                    emergency information for the Kashmir region. Stay informed,
                    stay prepared, stay safe.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-4 text-lg font-semibold"
                  >
                    <AlertTriangle className="h-6 w-6 mr-3" />
                    Emergency Alerts
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                    asChild
                  >
                    <a href="#safety-guidelines">Safety Guidelines</a>
                  </Button>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </div>

        {/* Current Status Section */}
        <ResponsiveContainer size="xl" padding="lg">
          <section className="py-16 space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Live Status Updates
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Current Flood Status
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Real-time monitoring of flood conditions and risk levels across
                Kashmir region
              </p>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              {/* High Risk Areas Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-4 text-red-800 dark:text-red-200">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                      <AlertTriangle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">High Risk Areas</div>
                      <div className="text-sm font-medium text-red-600 dark:text-red-400">
                        Critical Alert
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-red-700 dark:text-red-300 text-base">
                    Areas currently at elevated flood risk requiring immediate
                    attention
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                      <span className="font-semibold text-red-800 dark:text-red-200">
                        Srinagar
                      </span>
                      <Badge className="bg-red-600 text-white shadow-lg">
                        Critical
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                      <span className="font-semibold text-red-800 dark:text-red-200">
                        Anantnag
                      </span>
                      <Badge className="bg-red-500 text-white shadow-lg">
                        High
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                      <span className="font-semibold text-red-800 dark:text-red-200">
                        Baramulla
                      </span>
                      <Badge className="bg-red-500 text-white shadow-lg">
                        High
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Water Levels Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-4 text-blue-800 dark:text-blue-200">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <Droplets className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">Water Levels</div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Monitoring
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-blue-700 dark:text-blue-300 text-base">
                    Current water levels in major rivers and lakes
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <span className="font-semibold text-blue-800 dark:text-blue-200">
                        Jhelum River
                      </span>
                      <Badge className="bg-orange-500 text-white shadow-lg">
                        Rising
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <span className="font-semibold text-blue-800 dark:text-blue-200">
                        Dal Lake
                      </span>
                      <Badge className="bg-green-500 text-white shadow-lg">
                        Normal
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <span className="font-semibold text-blue-800 dark:text-blue-200">
                        Wular Lake
                      </span>
                      <Badge className="bg-yellow-500 text-white shadow-lg">
                        High
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weather Forecast Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-4 text-indigo-800 dark:text-indigo-200">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">Weather Forecast</div>
                      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        24-Hour Outlook
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-indigo-700 dark:text-indigo-300 text-base">
                    Next 24 hours weather conditions and precipitation
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">
                        Today
                      </span>
                      <Badge className="bg-red-500 text-white shadow-lg">
                        Heavy Rain
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">
                        Tomorrow
                      </span>
                      <Badge className="bg-orange-500 text-white shadow-lg">
                        Moderate Rain
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">
                        Day After
                      </span>
                      <Badge className="bg-yellow-500 text-white shadow-lg">
                        Light Rain
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ResponsiveGrid>
          </section>
        </ResponsiveContainer>

        {/* Data Visualization Section */}
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <ResponsiveContainer size="xl" padding="lg">
            <section className="py-16 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Real-Time Monitoring
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Live Data Dashboard
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive monitoring data and predictive analytics for
                  informed decision making
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, lg: 2 }} gap="lg">
                <div className="transform hover:scale-105 transition-all duration-300">
                  <WaterLevelChart />
                </div>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <FloodAlertPanel />
                </div>
              </ResponsiveGrid>

              <div className="max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300">
                <WeatherForecast />
              </div>
            </section>
          </ResponsiveContainer>
        </div>

        {/* Safety Guidelines Section */}
        <ResponsiveContainer size="xl" padding="lg">
          <section id="safety-guidelines" className="py-16 space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Safety First
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Safety Guidelines
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Essential safety measures and preparedness guidelines for flood
                situations
              </p>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
              {/* Before Flood Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-4 text-green-800 dark:text-green-200">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">Before Flood</div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        Preparedness
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-green-700 dark:text-green-300 text-base">
                    Essential preparations and preventive measures
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Keep emergency supplies ready
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Know your evacuation routes
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Stay informed about weather updates
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Secure important documents
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Charge mobile devices
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* During Flood Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center gap-4 text-orange-800 dark:text-orange-200">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                      <AlertTriangle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">During Flood</div>
                      <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        Emergency Actions
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-orange-700 dark:text-orange-300 text-base">
                    Immediate actions during flood events
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Move to higher ground immediately
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Avoid walking through floodwater
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Turn off electricity and gas
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Stay tuned to emergency broadcasts
                        </span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/60 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                          Help others if safe to do so
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ResponsiveGrid>
          </section>
        </ResponsiveContainer>

        {/* Emergency Contacts Section */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <ResponsiveContainer size="xl" padding="lg">
            <section className="py-16 space-y-12">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Emergency Resources
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Emergency Contacts
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  Critical emergency numbers and resources for immediate
                  assistance
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
                {/* Emergency Services Card */}
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-4 text-red-800 dark:text-red-200">
                      <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          Emergency Services
                        </div>
                        <div className="text-sm font-medium text-red-600 dark:text-red-400">
                          24/7 Available
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                        <span className="font-semibold text-red-800 dark:text-red-200">
                          Police
                        </span>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400 font-mono">
                          100
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                        <span className="font-semibold text-red-800 dark:text-red-200">
                          Fire Service
                        </span>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400 font-mono">
                          101
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                        <span className="font-semibold text-red-800 dark:text-red-200">
                          Ambulance
                        </span>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400 font-mono">
                          102
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Relief Centers Card */}
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-4 text-blue-800 dark:text-blue-200">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">Relief Centers</div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Safe Locations
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                        <span className="font-semibold text-blue-800 dark:text-blue-200 block">
                          Srinagar Relief Center
                        </span>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                          Near Lal Chowk
                        </p>
                      </div>
                      <div className="p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                        <span className="font-semibold text-blue-800 dark:text-blue-200 block">
                          Anantnag Relief Center
                        </span>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                          District Hospital
                        </p>
                      </div>
                      <div className="p-3 bg-white/60 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                        <span className="font-semibold text-blue-800 dark:text-blue-200 block">
                          Baramulla Relief Center
                        </span>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                          Municipal Office
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Information Sources Card */}
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-4 text-indigo-800 dark:text-indigo-200">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
                        <Info className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          Information Sources
                        </div>
                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          Official Updates
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                        <span className="font-semibold text-indigo-800 dark:text-indigo-200 block">
                          Weather Updates
                        </span>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                          IMD Kashmir
                        </p>
                      </div>
                      <div className="p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                        <span className="font-semibold text-indigo-800 dark:text-indigo-200 block">
                          Flood Alerts
                        </span>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                          CWC India
                        </p>
                      </div>
                      <div className="p-3 bg-white/60 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                        <span className="font-semibold text-indigo-800 dark:text-indigo-200 block">
                          Emergency Info
                        </span>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                          District Administration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </section>
          </ResponsiveContainer>
        </div>

        {/* Important Notice */}
        <ResponsiveContainer size="xl" padding="lg">
          <div className="py-12">
            <Alert className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 dark:border-orange-800 dark:from-orange-950 dark:to-yellow-950 shadow-xl">
              <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-xl font-bold text-orange-800 dark:text-orange-200">
                Important Notice
              </AlertTitle>
              <AlertDescription className="text-lg text-orange-700 dark:text-orange-300 mt-2 leading-relaxed">
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
