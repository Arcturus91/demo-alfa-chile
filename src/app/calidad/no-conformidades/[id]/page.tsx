'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, Divider } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function CalidadDetalleNCPage() {
  const router = useRouter();
  const params = useParams();

  const nc = {
    id: params.id,
    inspection: 'INS-001',
    order: 'OP-001',
    product: 'Producto A - 500g',
    lote: 'L2024-11',
    type: 'Peso fuera de especificación',
    severity: 'Alta',
    status: 'Abierta',
    date: '13/11/2025',
    inspector: 'Carlos Ruiz',
    description: 'El peso del producto está 15g por debajo de la especificación mínima de 500g',
    actions: 'Revisar calibración de dosificadora. Ajustar parámetros de llenado.',
    responsible: 'Juan Pérez',
  };

  return (
    <AppLayout title="Detalle de No Conformidad" module="calidad">
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/calidad/no-conformidades')}>
          Volver
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">No Conformidad {nc.id}</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip label={nc.severity} color="error" />
              <Chip label={nc.status} color="error" />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Inspección</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.inspection}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Orden de Producción</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.order}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Producto</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.product}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Lote</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.lote}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Tipo</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.type}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Fecha</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.date}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Inspector</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.inspector}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">Responsable</Typography>
              <Typography variant="body1" fontWeight="medium">{nc.responsible}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary">Descripción</Typography>
              <Typography variant="body1">{nc.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">Acciones Correctivas</Typography>
              <Typography variant="body1">{nc.actions}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
