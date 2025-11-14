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
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => router.push('/laboratorio/nueva')}>
          Nueva Solicitud
        </Button>
      </Box>

      <Grid container spacing={3}>
        {requests.map((request) => (
          <Grid item xs={12} key={request.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">{request.id}</Typography>
                    <Typography variant="body1">{request.product}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Orden: {request.order} | Lote: {request.lote}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{request.type}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip label={request.priority} color={request.priority === 'Alta' ? 'error' : 'default'} size="small" />
                      <Chip 
                        label={request.status} 
                        color={request.status === 'Completada' ? 'success' : request.status === 'En Análisis' ? 'primary' : 'warning'} 
                        size="small" 
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">{request.date}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" startIcon={<VisibilityIcon />} onClick={() => router.push(`/laboratorio/${request.id}`)}>
                    Ver
                  </Button>
                  {request.status === 'Nueva' && (
                    <Button size="small" startIcon={<CheckIcon />} onClick={() => router.push(`/laboratorio/${request.id}/resultados`)}>
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
