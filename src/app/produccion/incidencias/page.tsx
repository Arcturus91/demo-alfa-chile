'use client';

import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { Add as AddIcon } from '@mui/icons-material';

export default function ProduccionIncidenciasPage() {
  const incidents = [
    { id: 'INC-001', order: 'OP-001', type: 'Falla Mecánica', severity: 'Alta', status: 'Abierta', date: '13/11/2025', description: 'Falla en motor de línea 1' },
    { id: 'INC-002', order: 'OP-002', type: 'Calidad', severity: 'Media', status: 'En Revisión', date: '12/11/2025', description: 'Desviación en peso del producto' },
    { id: 'INC-003', order: 'OP-003', type: 'Retraso', severity: 'Baja', status: 'Cerrada', date: '11/11/2025', description: 'Retraso en entrega de materia prima' },
  ];

  return (
    <AppLayout title="Incidencias" module="produccion">
      <Box sx={{ mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Nueva Incidencia
        </Button>
      </Box>

      <Grid container spacing={3}>
        {incidents.map((incident) => (
          <Grid item xs={12} key={incident.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" fontWeight="bold">{incident.id}</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip label={incident.severity} color={incident.severity === 'Alta' ? 'error' : incident.severity === 'Media' ? 'warning' : 'default'} size="small" />
                    <Chip label={incident.status} color={incident.status === 'Abierta' ? 'error' : incident.status === 'En Revisión' ? 'warning' : 'success'} size="small" />
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="body2" color="text.secondary">Orden</Typography>
                    <Typography variant="body1">{incident.order}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="body2" color="text.secondary">Tipo</Typography>
                    <Typography variant="body1">{incident.type}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="body2" color="text.secondary">Fecha</Typography>
                    <Typography variant="body1">{incident.date}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">Descripción</Typography>
                    <Typography variant="body1">{incident.description}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
