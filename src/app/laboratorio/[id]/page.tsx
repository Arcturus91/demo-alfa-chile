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
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button variant="contained" startIcon={<PlayIcon />} onClick={() => router.push(`/laboratorio/${params.id}/resultados`)}>
          Registrar Resultados
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">Solicitud {request.id}</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip label={request.priority} color={request.priority === 'Alta' ? 'error' : 'default'} size="small" />
              <Chip label={request.status} color="warning" />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Orden de Producción</Typography>
              <Typography variant="body1" fontWeight="medium">{request.order}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Producto</Typography>
              <Typography variant="body1" fontWeight="medium">{request.product}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Lote</Typography>
              <Typography variant="body1" fontWeight="medium">{request.lote}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Tipo de Muestra</Typography>
              <Typography variant="body1" fontWeight="medium">{request.sampleType}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Fecha</Typography>
              <Typography variant="body1" fontWeight="medium">{request.date}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Solicitado por</Typography>
              <Typography variant="body1" fontWeight="medium">{request.requestedBy}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Analista</Typography>
              <Typography variant="body1" fontWeight="medium">{request.analyst}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Análisis Solicitados</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {request.tests.map((test) => (
                  <Chip key={test} label={test} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">Observaciones</Typography>
              <Typography variant="body1">{request.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
