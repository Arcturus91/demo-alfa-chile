'use client';

import React from 'react';
import { Card, CardContent, Typography, Chip, LinearProgress, Box } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';

export default function ProduccionLineasPage() {
  const lines = [
    { id: 1, name: 'Línea 1', status: 'Activa', efficiency: 92, currentOrder: 'OP-001', product: 'Producto A' },
    { id: 2, name: 'Línea 2', status: 'Activa', efficiency: 88, currentOrder: 'OP-002', product: 'Producto B' },
    { id: 3, name: 'Línea 3', status: 'Mantenimiento', efficiency: 0, currentOrder: '-', product: '-' },
    { id: 4, name: 'Línea 4', status: 'Inactiva', efficiency: 0, currentOrder: '-', product: '-' },
  ];

  return (
    <AppLayout title="Líneas de Producción" module="produccion">
      <Grid container spacing={3}>
        {lines.map((line) => (
          <Grid item xs={12} md={6} key={line.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">{line.name}</Typography>
                  <Chip 
                    label={line.status} 
                    color={line.status === 'Activa' ? 'success' : line.status === 'Mantenimiento' ? 'warning' : 'default'} 
                    size="small" 
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Orden Actual: {line.currentOrder}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Producto: {line.product}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Eficiencia: {line.efficiency}%
                  </Typography>
                  <LinearProgress variant="determinate" value={line.efficiency} sx={{ mt: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
