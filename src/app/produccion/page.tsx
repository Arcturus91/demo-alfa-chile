'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, LinearProgress } from '@mui/material';
import Grid from '@/components/Grid';
import { Add as AddIcon, Visibility as VisibilityIcon, Edit as EditIcon } from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function ProduccionPage() {
  const router = useRouter();

  const orders = [
    { id: 'OP-001', product: 'Producto A - 500g', lote: 'L2024-11', quantity: 5000, completed: 3200, status: 'En Proceso', priority: 'Alta', line: 'Línea 1' },
    { id: 'OP-002', product: 'Producto B - 1kg', lote: 'L2024-12', quantity: 3000, completed: 2850, status: 'En Proceso', priority: 'Media', line: 'Línea 2' },
    { id: 'OP-003', product: 'Producto C - 250g', lote: 'L2024-13', quantity: 8000, completed: 8000, status: 'Completada', priority: 'Baja', line: 'Línea 3' },
  ];

  return (
    <AppLayout
      title="Gestión de Producción"
      module="produccion"
      showSidebar={true}
      sidebarBackLink="/dashboard"
      sidebarBackLabel="Volver al Dashboard"
    >
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push('/produccion/nueva')}>
          Nueva Orden
        </Button>
        <Button variant="outlined" onClick={() => router.push('/produccion/lineas')}>
          Líneas
        </Button>
        <Button variant="outlined" onClick={() => router.push('/produccion/incidencias')}>
          Incidencias
        </Button>
        <Button variant="outlined" onClick={() => router.push('/produccion/materias-primas')}>
          Materias Primas
        </Button>
      </Box>

      <Grid container spacing={3}>
        {orders.map((order) => {
          const progress = (order.completed / order.quantity) * 100;
          return (
            <Grid item xs={12} key={order.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">{order.id}</Typography>
                      <Typography variant="body1">{order.product}</Typography>
                      <Typography variant="body2" color="text.secondary">Lote: {order.lote} | {order.line}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip label={order.status} color={order.status === 'Completada' ? 'success' : 'primary'} size="small" />
                      <Chip label={order.priority} color={order.priority === 'Alta' ? 'error' : 'default'} size="small" />
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {order.completed} / {order.quantity} unidades ({progress.toFixed(1)}%)
                    </Typography>
                    <LinearProgress variant="determinate" value={progress} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" startIcon={<VisibilityIcon />} onClick={() => router.push(`/produccion/${order.id}`)}>
                      Ver
                    </Button>
                    <Button size="small" startIcon={<EditIcon />} onClick={() => router.push(`/produccion/${order.id}/editar`)}>
                      Editar
                    </Button>
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
