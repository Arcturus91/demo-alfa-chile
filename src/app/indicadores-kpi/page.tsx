'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import Grid from '@/components/Grid';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { BarChart, DonutChart, LineChart, ProgressBars } from '@/components/Charts';

export default function IndicadoresKPIPage() {
  const kpis = [
    {
      title: 'Eficiencia de Producción',
      value: '87%',
      trend: '+5%',
      trendDirection: 'up',
      color: '#3B82F6',
      description: 'vs mes anterior',
    },
    {
      title: 'Tasa de Defectos',
      value: '2.3%',
      trend: '-0.8%',
      trendDirection: 'down',
      color: '#10b981',
      description: 'reducción vs mes anterior',
    },
    {
      title: 'OEE (Overall Equipment Effectiveness)',
      value: '76%',
      trend: '+3%',
      trendDirection: 'up',
      color: '#8b5cf6',
      description: 'vs mes anterior',
    },
    {
      title: 'Tiempo de Ciclo Promedio',
      value: '45 min',
      trend: '-5 min',
      trendDirection: 'down',
      color: '#f59e0b',
      description: 'reducción vs mes anterior',
    },
    {
      title: 'Cumplimiento de Entregas',
      value: '94%',
      trend: '+2%',
      trendDirection: 'up',
      color: '#10b981',
      description: 'vs mes anterior',
    },
    {
      title: 'Utilización de Capacidad',
      value: '82%',
      trend: '+4%',
      trendDirection: 'up',
      color: '#3B82F6',
      description: 'vs mes anterior',
    },
  ];

  return (
    <AppLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
          Indicadores y KPIs
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Métricas clave de rendimiento del sistema
        </Typography>
      </Box>

      {/* KPIs Grid */}
      <Grid container spacing={3}>
        {kpis.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontWeight: 600 }}>
                  {kpi.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 2 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: kpi.color,
                    }}
                  >
                    {kpi.value}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: kpi.trendDirection === 'up' ? '#10b981' : '#ef4444',
                    }}
                  >
                    {kpi.trendDirection === 'up' ? (
                      <TrendingUpIcon fontSize="small" />
                    ) : (
                      <TrendingDownIcon fontSize="small" />
                    )}
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {kpi.trend}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {kpi.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <BarChart
                title="Producción por Semana"
                period="Noviembre 2025"
                data={[
                  { label: 'Sem 1', value: 3200, height: 180 },
                  { label: 'Sem 2', value: 3450, height: 210 },
                  { label: 'Sem 3', value: 2900, height: 155 },
                  { label: 'Sem 4', value: 3300, height: 195 },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Donut Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <DonutChart
                title="Distribución de Órdenes"
                period="Estado Actual"
                total={59}
                data={[
                  { label: 'Completadas', value: 35, percentage: 60, color: '#10B981' },
                  { label: 'En Proceso', value: 12, percentage: 20, color: '#3B82F6' },
                  { label: 'Pausadas', value: 6, percentage: 10, color: '#F59E0B' },
                  { label: 'Pendientes', value: 6, percentage: 10, color: '#EF4444' },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <LineChart
                title="Tendencia de Calidad (Últimos 30 días)"
                period="Octubre - Noviembre 2025"
                data={[160, 170, 155, 180, 165, 185, 175, 190, 178, 195, 188, 200, 192, 205, 198, 210, 203, 208, 200, 215, 205, 218, 212, 220]}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Progress Bars */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ProgressBars
                title="Cumplimiento de Metas"
                period="Mes Actual"
                data={[
                  { label: 'Meta de Producción', value: 0, percentage: 124 },
                  { label: 'Calidad de Productos', value: 0, percentage: 98 },
                  { label: 'Eficiencia Operacional', value: 0, percentage: 87 },
                  { label: 'Entregas a Tiempo', value: 0, percentage: 94 },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Additional KPI Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Resumen del Sistema
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Órdenes Activas</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#3B82F6' }}>12</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Inspecciones Pendientes</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#F59E0B' }}>8</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Análisis en Curso</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#8B5CF6' }}>5</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>No Conformidades</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#EF4444' }}>3</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}
