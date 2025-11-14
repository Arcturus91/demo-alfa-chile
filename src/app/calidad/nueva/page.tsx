'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function CalidadNuevaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    order: '',
    product: '',
    lote: '',
    type: '',
    inspector: '',
    date: '',
    observations: '',
    criteria: {
      peso: false,
      dimensiones: false,
      color: false,
      textura: false,
      empaque: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/calidad');
  };

  return (
    <AppLayout title="Nueva Inspección" module="calidad">
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/calidad')}>
          Cancelar
        </Button>
      </Box>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Orden de Producción" value={formData.order} onChange={(e) => setFormData({...formData, order: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Producto" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Lote" value={formData.lote} onChange={(e) => setFormData({...formData, lote: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Tipo de Inspección" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                  <MenuItem value="Inspección de Proceso">Inspección de Proceso</MenuItem>
                  <MenuItem value="Inspección Final">Inspección Final</MenuItem>
                  <MenuItem value="Inspección de Materia Prima">Inspección de Materia Prima</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Inspector" value={formData.inspector} onChange={(e) => setFormData({...formData, inspector: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha" type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={formData.criteria.peso} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, peso: e.target.checked}})} />} label="Peso" />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.dimensiones} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, dimensiones: e.target.checked}})} />} label="Dimensiones" />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.color} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, color: e.target.checked}})} />} label="Color" />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.textura} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, textura: e.target.checked}})} />} label="Textura" />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.empaque} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, empaque: e.target.checked}})} />} label="Empaque" />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />}>
                  Crear Inspección
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
