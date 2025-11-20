import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Monitor, Smartphone, Tablet, Globe, Chrome } from "lucide-react";

interface GeoStats {
  totalVisits: number;
  byState: Array<{ state: string; count: number }>;
  byCity: Array<{ city: string; count: number }>;
  byDevice: Array<{ device: string; count: number; percentage: number }>;
  byOS: Array<{ os: string; count: number; percentage: number }>;
  byBrowser: Array<{ browser: string; count: number; percentage: number }>;
}

interface GeoLocationStatsProps {
  days?: number;
}

export default function GeoLocationStats({ days = 30 }: GeoLocationStatsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/geo/stats', days],
    queryFn: async () => {
      const response = await fetch(`/api/geo/stats?days=${days}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar estatísticas de geolocalização');
      }
      const result = await response.json();
      return result.data as GeoStats;
    },
    refetchInterval: 60000, // Refetch a cada 1 minuto
  });

  if (isLoading) {
    return (
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Carregando estatísticas...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Erro ao carregar estatísticas</CardTitle>
            <CardDescription>Tente novamente mais tarde</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'tablet':
        return <Tablet className="w-4 h-4" />;
      case 'desktop':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Total de Visitas */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Visitas Totais ({days} dias)
          </CardTitle>
          <CardDescription>
            Total de acessos rastreados com geolocalização
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">
            {data?.totalVisits.toLocaleString('pt-BR') || 0}
          </div>
        </CardContent>
      </Card>

      {/* Top Estados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Top 10 Estados
          </CardTitle>
          <CardDescription>Estados com mais acessos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data?.byState && data.byState.length > 0 ? (
              data.byState.map((item, index) => (
                <div key={item.state} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground w-6">
                      {index + 1}º
                    </span>
                    <span className="font-medium">{item.state}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${Math.min((item.count / (data?.totalVisits || 1)) * 100, 100)}%`
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Top Cidades */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Top 10 Cidades
          </CardTitle>
          <CardDescription>Cidades com mais acessos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {data?.byCity && data.byCity.length > 0 ? (
              data.byCity.slice(0, 10).map((item, index) => (
                <div key={item.city} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground w-6">
                      {index + 1}º
                    </span>
                    <span className="font-medium text-sm">{item.city}</span>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dispositivos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Tipos de Dispositivos
          </CardTitle>
          <CardDescription>Distribuição por dispositivo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data?.byDevice && data.byDevice.length > 0 ? (
              data.byDevice.map((item) => (
                <div key={item.device} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getDeviceIcon(item.device)}
                      <span className="font-medium capitalize">{item.device}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Sistemas Operacionais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Sistemas Operacionais
          </CardTitle>
          <CardDescription>Distribuição por OS</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data?.byOS && data.byOS.length > 0 ? (
              data.byOS.map((item) => (
                <div key={item.os} className="flex items-center justify-between">
                  <span className="font-medium">{item.os}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-16 text-right">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navegadores */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Chrome className="w-5 h-5" />
            Navegadores
          </CardTitle>
          <CardDescription>Distribuição por navegador</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.byBrowser && data.byBrowser.length > 0 ? (
              data.byBrowser.map((item) => (
                <div key={item.browser} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.browser}</span>
                    <span className="text-sm font-medium">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-2">Nenhum dado disponível</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
