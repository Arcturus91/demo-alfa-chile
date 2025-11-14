'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function ProduccionNuevaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    product: '',
    lote: '',
    quantity: '',
    line: '',
    priority: 'Media',
    startDate: '',
    endDate: '',
    operator: '',
    supervisor: '',
    observations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/produccion');
  };

  return (
    <AppLayout title="Nueva Orden de Producción" module="produccion">
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/produccion')}>
          Cancelar
        </Button>
      </Box>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Producto" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Lote" value={formData.lote} onChange={(e) => setFormData({...formData, lote: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Cantidad" type="number" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Línea de Producción" value={formData.line} onChange={(e) => setFormData({...formData, line: e.target.value})}>
                  <MenuItem value="Línea 1">Línea 1</MenuItem>
                  <MenuItem value="Línea 2">Línea 2</MenuItem>
                  <MenuItem value="Línea 3">Línea 3</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth select label="Prioridad" value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})}>
                  <MenuItem value="Alta">Alta</MenuItem>
                  <MenuItem value="Media">Media</MenuItem>
                  <MenuItem value="Baja">Baja</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Operador" value={formData.operator} onChange={(e) => setFormData({...formData, operator: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha Inicio" type="date" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha Fin Estimada" type="date" value={formData.endDate} onChange={(e) => setFormData({...formData, endDate: e.target.value})} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />}>
                  Crear Orden
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
