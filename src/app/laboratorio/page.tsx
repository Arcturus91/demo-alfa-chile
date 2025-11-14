'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import Grid from '@/components/Grid';
import { Add as AddIcon, Visibility as VisibilityIcon, CheckCircle as CheckIcon } from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function LaboratorioPage() {
  const router = useRouter();

  const requests = [
    { id: 'SOL-001', order: 'OP-001', product: 'Producto A - 500g', lote: 'L2024-11', type: 'Producto Terminado', status: 'Nueva', priority: 'Alta', date: '13/11/2025' },
    { id: 'SOL-002', order: 'OP-002', product: 'Producto B - 1kg', lote: 'L2024-12', type: 'Producto Terminado', status: 'En Análisis', priority: 'Media', date: '13/11/2025' },
    { id: 'SOL-003', order: 'OP-003', product: 'Producto C - 250g', lote: 'L2024-13', type: 'Producto Terminado', status: 'Completada', priority: 'Baja', date: '12/11/2025' },
  ];

  return (
    <AppLayout
      title="Gestión de Laboratorio"
      module="laboratorio"
      showSidebar={true}
      sidebarBackLink="/dashboard"
      sidebarBackLabel="Volver al Dashboard"
    >
      <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, mb: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push('/laboratorio/nueva')} sx={{ minHeight: 44, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, px: { xs: 2, sm: 3 } }}>
          Nueva Solicitud
        </Button>
      </Box>

      <Grid container spacing={3}>
        {requests.map((request) => (
          <Grid item xs={12} key={request.id}>
            <Card>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 0 } }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>{request.id}</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{request.product}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      Orden: {request.order} | Lote: {request.lote}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{request.type}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'row', sm: 'column' }, alignItems: { xs: 'center', sm: 'flex-end' }, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label={request.priority} color={request.priority === 'Alta' ? 'error' : 'default'} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
                      <Chip
                        label={request.status}
                        color={request.status === 'Completada' ? 'success' : request.status === 'En Análisis' ? 'primary' : 'warning'}
                        size="small"
                        sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>{request.date}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button size="small" startIcon={<VisibilityIcon />} onClick={() => router.push(`/laboratorio/${request.id}`)} sx={{ minHeight: 36, fontSize: { xs: '0.8rem', sm: '0.875rem' }, px: { xs: 1.5, sm: 2 } }}>
                    Ver
                  </Button>
                  {request.status === 'Nueva' && (
                    <Button size="small" startIcon={<CheckIcon />} onClick={() => router.push(`/laboratorio/${request.id}/resultados`)} sx={{ minHeight: 36, fontSize: { xs: '0.8rem', sm: '0.875rem' }, px: { xs: 1.5, sm: 2 } }}>
                      Aceptar
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
