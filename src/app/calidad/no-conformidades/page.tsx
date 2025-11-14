'use client';

import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';
import { Visibility as VisibilityIcon } from '@mui/icons-material';

export default function CalidadNoConformidadesPage() {
  const router = useRouter();

  const nonConformities = [
    { id: 'NC-001', inspection: 'INS-001', type: 'Peso fuera de especificación', severity: 'Alta', status: 'Abierta', date: '13/11/2025' },
    { id: 'NC-002', inspection: 'INS-003', type: 'Color no conforme', severity: 'Media', status: 'En Análisis', date: '12/11/2025' },
    { id: 'NC-003', inspection: 'INS-005', type: 'Empaque defectuoso', severity: 'Baja', status: 'Cerrada', date: '10/11/2025' },
  ];

  return (
    <AppLayout title="No Conformidades" module="calidad">
      <Grid container spacing={3}>
        {nonConformities.map((nc) => (
          <Grid item xs={12} key={nc.id}>
            <Card>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 0 } }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>{nc.id}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={nc.severity} color={nc.severity === 'Alta' ? 'error' : nc.severity === 'Media' ? 'warning' : 'default'} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
                    <Chip label={nc.status} color={nc.status === 'Abierta' ? 'error' : nc.status === 'En Análisis' ? 'warning' : 'success'} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
                  </Box>
                </Box>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6} sm={4} md={3}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Inspección</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{nc.inspection}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={8} md={4}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Tipo</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{nc.type}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4} md={2}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Fecha</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{nc.date}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} md={3}>
                    <Button variant="outlined" startIcon={<VisibilityIcon />} onClick={() => router.push(`/calidad/no-conformidades/${nc.id}`)} sx={{ minHeight: 36, fontSize: { xs: '0.8rem', sm: '0.875rem' }, px: { xs: 1.5, sm: 2 } }}>
                      Ver Detalle
                    </Button>
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
