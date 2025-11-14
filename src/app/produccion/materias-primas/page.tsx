'use client';

import React from 'react';
import { Card, CardContent, Typography, Chip, LinearProgress, Box } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';

export default function ProduccionMateriasPrimasPage() {
  const materials = [
    { id: 'MP-001', name: 'Harina de Trigo', stock: 2500, unit: 'kg', min: 1000, max: 5000, status: 'Normal' },
    { id: 'MP-002', name: 'Azúcar', stock: 800, unit: 'kg', min: 500, max: 2000, status: 'Normal' },
    { id: 'MP-003', name: 'Sal', stock: 150, unit: 'kg', min: 200, max: 1000, status: 'Bajo' },
    { id: 'MP-004', name: 'Levadura', stock: 50, unit: 'kg', min: 100, max: 500, status: 'Crítico' },
    { id: 'MP-005', name: 'Aceite Vegetal', stock: 1200, unit: 'L', min: 500, max: 2000, status: 'Normal' },
  ];

  return (
    <AppLayout title="Materias Primas" module="produccion">
      <Grid container spacing={3}>
        {materials.map((material) => {
          const percentage = (material.stock / material.max) * 100;
          return (
            <Grid item xs={12} md={6} key={material.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold">{material.name}</Typography>
                    <Chip 
                      label={material.status} 
                      color={material.status === 'Normal' ? 'success' : material.status === 'Bajo' ? 'warning' : 'error'} 
                      size="small" 
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Código: {material.id}
                  </Typography>
                  <Typography variant="h5" sx={{ my: 2 }}>
                    {material.stock} {material.unit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Mínimo: {material.min} {material.unit} | Máximo: {material.max} {material.unit}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={percentage} 
                    color={material.status === 'Normal' ? 'success' : material.status === 'Bajo' ? 'warning' : 'error'}
                    sx={{ mt: 1 }} 
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </AppLayout>
  );
}
