'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function ProduccionEditarPage() {
  const router = useRouter();
  const params = useParams();

  const [formData, setFormData] = useState({
    product: 'Producto A - Presentación 500g',
    lote: 'L2024-11',
    quantity: '5000',
    line: 'Línea 1',
    priority: 'Alta',
    startDate: '2025-11-08',
    endDate: '2025-11-12',
    operator: 'Juan Pérez',
    supervisor: 'María González',
    observations: 'Producción normal, sin incidencias',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/produccion/${params.id}`);
  };

  return (
    <AppLayout
      title="Editar Orden"
      module="produccion"
      showSidebar={true}
      sidebarBackLink={`/produccion/${params.id}`}
      sidebarBackLabel="Volver a Detalle"
    >

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Producto" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Lote" value={formData.lote} onChange={(e) => setFormData({...formData, lote: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Cantidad" type="number" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth select label="Línea de Producción" value={formData.line} onChange={(e) => setFormData({...formData, line: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Línea 1">Línea 1</MenuItem>
                  <MenuItem value="Línea 2">Línea 2</MenuItem>
                  <MenuItem value="Línea 3">Línea 3</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth select label="Prioridad" value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Alta">Alta</MenuItem>
                  <MenuItem value="Media">Media</MenuItem>
                  <MenuItem value="Baja">Baja</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Operador" value={formData.operator} onChange={(e) => setFormData({...formData, operator: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Fecha Inicio" type="date" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} InputLabelProps={{ shrink: true }} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Fecha Fin" type="date" value={formData.endDate} onChange={(e) => setFormData({...formData, endDate: e.target.value})} InputLabelProps={{ shrink: true }} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />} sx={{ minHeight: { xs: 44, sm: 48 }, fontSize: { xs: '0.875rem', sm: '1rem' }, px: { xs: 3, sm: 4 } }}>
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
