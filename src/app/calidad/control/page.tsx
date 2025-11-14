'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';

export default function CalidadControlPage() {
  const metrics = [
    { name: 'Tasa de Aprobación', value: 94, target: 95, unit: '%' },
    { name: 'Inspecciones Completadas', value: 87, target: 100, unit: '' },
    { name: 'No Conformidades', value: 12, target: 10, unit: '' },
    { name: 'Tiempo Promedio Inspección', value: 25, target: 30, unit: 'min' },
  ];

  return (
    <AppLayout title="Control de Calidad" module="calidad">
      <Grid container spacing={3}>
        {metrics.map((metric) => {
          const percentage = (metric.value / metric.target) * 100;
          return (
            <Grid item xs={12} md={6} key={metric.name}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {metric.name}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {metric.value}{metric.unit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Meta: {metric.target}{metric.unit}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={Math.min(percentage, 100)} 
                      color={percentage >= 100 ? 'success' : percentage >= 80 ? 'primary' : 'warning'}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </AppLayout>
  );
}
