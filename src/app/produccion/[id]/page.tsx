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
      <Box sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => router.push(`/produccion/${params.id}/editar`)}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Editar Orden
        </Button>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 3,
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
              Orden {order.id}
            </Typography>
            <Chip label={order.status} color="primary" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Producto</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.product}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Lote</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.lote}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Cantidad Total</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.quantity} unidades</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Completado</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.completed} unidades ({progress.toFixed(1)}%)</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Línea de Producción</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.line}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Prioridad</Typography>
              <Chip label={order.priority} color={order.priority === 'Alta' ? 'error' : 'default'} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Fecha Inicio</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.startDate}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Fecha Fin Estimada</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.endDate}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Operador</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.operator}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Supervisor</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.supervisor}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Observaciones</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{order.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
