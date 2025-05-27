import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, MessageCircle, FileText, Eye, MousePointer } from "lucide-react";

interface DashboardData {
  totalPageViews: number;
  whatsappClicks: number;
  instagramClicks: number;
  formSubmissions: number;
  topPages: Array<{ page: string; views: number }>;
  conversionRate: number;
  averageSessionDuration: number;
  bounceRate: number;
  deviceBreakdown: { mobile: number; desktop: number; tablet: number };
  serviceInterest: Record<string, number>;
}

export default function Dashboard() {
  const { data: dashboardData, isLoading } = useQuery<DashboardData>({
    queryKey: ['/api/analytics/dashboard'],
    refetchInterval: 30000, // Atualiza a cada 30 segundos
  });

  const COLORS = ['#DC2626', '#EF4444', '#F87171', '#FCA5A5', '#FECACA'];

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  if (isLoading || !dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando métricas...</p>
        </div>
      </div>
    );
  }

  const deviceData = Object.entries(dashboardData.deviceBreakdown).map(([device, percentage]) => ({
    name: device === 'mobile' ? 'Mobile' : device === 'desktop' ? 'Desktop' : 'Tablet',
    value: percentage
  }));

  const serviceData = Object.entries(dashboardData.serviceInterest).map(([service, interest]) => ({
    name: service,
    value: interest
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard de Analytics</h1>
          <p className="text-gray-600 mt-2">Métricas de conversão e desempenho do site da Heightech</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Cards de Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Visualizações</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.totalPageViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Cliques WhatsApp</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.whatsappClicks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Formulários</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.formSubmissions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Taxa de Conversão</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.conversionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Páginas Mais Visitadas */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Páginas Mais Visitadas</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData.topPages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="page" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#DC2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Dispositivos */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Acesso por Dispositivo</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Interesse por Serviços */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Interesse por Serviços</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={serviceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
                <Tooltip />
                <Bar dataKey="value" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Métricas de Engajamento */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Métricas de Engajamento</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Tempo Médio na Página</span>
                <span className="font-bold text-gray-900">{formatDuration(dashboardData.averageSessionDuration)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Taxa de Rejeição</span>
                <span className="font-bold text-gray-900">{dashboardData.bounceRate}%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Cliques Instagram</span>
                <span className="font-bold text-gray-900">{dashboardData.instagramClicks}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de Performance */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Indicadores de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {((dashboardData.whatsappClicks / dashboardData.totalPageViews) * 100).toFixed(1)}%
              </div>
              <p className="text-gray-600">Taxa de Clique WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {((dashboardData.formSubmissions / dashboardData.totalPageViews) * 100).toFixed(1)}%
              </div>
              <p className="text-gray-600">Taxa de Conversão Formulário</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {(100 - dashboardData.bounceRate).toFixed(1)}%
              </div>
              <p className="text-gray-600">Taxa de Engajamento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}