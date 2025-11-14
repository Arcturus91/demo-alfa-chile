'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import Grid from '@/components/Grid';
import { Add as AddIcon, Visibility as VisibilityIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function CalidadPage() {
  const router = useRouter();

  const inspections = [
    { id: 'INS-001', order: 'OP-001', product: 'Producto A - 500g', lote: 'L2024-11', type: 'Inspección de Proceso', status: 'Pendiente', date: '13/11/2025' },
    { id: 'INS-002', order: 'OP-002', product: 'Producto B - 1kg', lote: 'L2024-12', type: 'Inspección Final', status: 'En Curso', date: '13/11/2025' },
    { id: 'INS-003', order: 'OP-003', product: 'Producto C - 250g', lote: 'L2024-13', type: 'Inspección Final', status: 'Aprobada', date: '12/11/2025' },
  ];

  return (
    <AppLayout
      title="Gestión de Calidad"
      module="calidad"
      showSidebar={true}
      sidebarBackLink="/dashboard"
      sidebarBackLabel="Volver al Dashboard"
    >
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push('/calidad/nueva')}>
          Nueva Inspección
        </Button>
        <Button variant="outlined" onClick={() => router.push('/calidad/control')}>
          Control
        </Button>
        <Button variant="outlined" onClick={() => router.push('/calidad/no-conformidades')}>
          No Conformidades
        </Button>
      </Box>

      <Grid container spacing={3}>
        {inspections.map((inspection) => (
          <Grid item xs={12} key={inspection.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">{inspection.id}</Typography>
                    <Typography variant="body1">{inspection.product}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Orden: {inspection.order} | Lote: {inspection.lote}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{inspection.type}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Chip 
                      label={inspection.status} 
                      color={inspection.status === 'Aprobada' ? 'success' : inspection.status === 'En Curso' ? 'primary' : 'warning'} 
                      size="small" 
                    />
                    <Typography variant="caption" color="text.secondary">{inspection.date}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" startIcon={<VisibilityIcon />} onClick={() => router.push(`/calidad/${inspection.id}`)}>
                    Ver
                  </Button>
                  {inspection.status === 'Pendiente' && (
                    <Button size="small" startIcon={<PlayIcon />} onClick={() => router.push(`/calidad/${inspection.id}/resultados`)}>
                      Iniciar
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
