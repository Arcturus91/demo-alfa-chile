'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, Divider } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { Edit as EditIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function ProduccionDetallePage() {
  const router = useRouter();
  const params = useParams();

  const order = {
    id: params.id,
    product: 'Producto A - Presentación 500g',
    lote: 'L2024-11',
    quantity: 5000,
    completed: 3200,
    status: 'En Proceso',
    priority: 'Alta',
    line: 'Línea 1',
    startDate: '08/11/2025',
    endDate: '12/11/2025',
    operator: 'Juan Pérez',
    supervisor: 'María González',
    observations: 'Producción normal, sin incidencias',
  };

  const progress = (order.completed / order.quantity) * 100;

  return (
    <AppLayout
      title="Detalle de Orden"
      module="produccion"
      showSidebar={true}
      sidebarBackLink="/produccion"
      sidebarBackLabel="Volver a Órdenes"
    >
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button variant="contained" startIcon={<EditIcon />} onClick={() => router.push(`/produccion/${params.id}/editar`)}>
          Editar Orden
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">Orden {order.id}</Typography>
            <Chip label={order.status} color="primary" />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Producto</Typography>
              <Typography variant="body1" fontWeight="medium">{order.product}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Lote</Typography>
              <Typography variant="body1" fontWeight="medium">{order.lote}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Cantidad Total</Typography>
              <Typography variant="body1" fontWeight="medium">{order.quantity} unidades</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Completado</Typography>
              <Typography variant="body1" fontWeight="medium">{order.completed} unidades ({progress.toFixed(1)}%)</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Línea de Producción</Typography>
              <Typography variant="body1" fontWeight="medium">{order.line}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Prioridad</Typography>
              <Chip label={order.priority} color={order.priority === 'Alta' ? 'error' : 'default'} size="small" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Fecha Inicio</Typography>
              <Typography variant="body1" fontWeight="medium">{order.startDate}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Fecha Fin Estimada</Typography>
              <Typography variant="body1" fontWeight="medium">{order.endDate}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Operador</Typography>
              <Typography variant="body1" fontWeight="medium">{order.operator}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Supervisor</Typography>
              <Typography variant="body1" fontWeight="medium">{order.supervisor}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary">Observaciones</Typography>
              <Typography variant="body1">{order.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
