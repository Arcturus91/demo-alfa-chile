'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, Divider } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { ArrowBack as ArrowBackIcon, PlayArrow as PlayIcon } from '@mui/icons-material';

export default function LaboratorioDetallePage() {
  const router = useRouter();
  const params = useParams();

  const request = {
    id: params.id,
    order: 'OP-001',
    product: 'Producto A - 500g',
    lote: 'L2024-11',
    sampleType: 'Producto Terminado',
    status: 'Nueva',
    priority: 'Alta',
    date: '13/11/2025',
    requestedBy: 'María González',
    analyst: 'No asignado',
    tests: ['Análisis Microbiológico', 'Análisis Fisicoquímico'],
    observations: 'Análisis de rutina para liberación de lote',
  };

  return (
    <AppLayout
      title="Detalle de Solicitud"
      module="laboratorio"
      showSidebar={true}
      sidebarBackLink="/laboratorio"
      sidebarBackLabel="Volver a Solicitudes"
    >
      <Box sx={{ mb: { xs: 2, sm: 3 }, display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<PlayIcon />} onClick={() => router.push(`/laboratorio/${params.id}/resultados`)} sx={{ minHeight: 44, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, px: { xs: 2, sm: 3 } }}>
          Registrar Resultados
        </Button>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: { xs: 1.5, sm: 0 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>Solicitud {request.id}</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label={request.priority} color={request.priority === 'Alta' ? 'error' : 'default'} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
              <Chip label={request.status} color="warning" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Orden de Producción</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.order}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Producto</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.product}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Lote</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.lote}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Tipo de Muestra</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.sampleType}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Fecha</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.date}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Solicitado por</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.requestedBy}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Analista</Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.analyst}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Análisis Solicitados</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {request.tests.map((test) => (
                  <Chip key={test} label={test} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Observaciones</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
