'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
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
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/calidad')} sx={{ minHeight: 44, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, px: { xs: 2, sm: 3 } }}>
          Cancelar
        </Button>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Orden de Producción" value={formData.order} onChange={(e) => setFormData({...formData, order: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Producto" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Lote" value={formData.lote} onChange={(e) => setFormData({...formData, lote: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Tipo de Inspección" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Inspección de Proceso">Inspección de Proceso</MenuItem>
                  <MenuItem value="Inspección Final">Inspección Final</MenuItem>
                  <MenuItem value="Inspección de Materia Prima">Inspección de Materia Prima</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Inspector" value={formData.inspector} onChange={(e) => setFormData({...formData, inspector: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha" type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} InputLabelProps={{ shrink: true }} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={formData.criteria.peso} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, peso: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Peso</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.dimensiones} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, dimensiones: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Dimensiones</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.color} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, color: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Color</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.textura} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, textura: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Textura</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.criteria.empaque} onChange={(e) => setFormData({...formData, criteria: {...formData.criteria, empaque: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Empaque</Typography>} />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />} sx={{ minHeight: { xs: 44, sm: 48 }, fontSize: { xs: '0.875rem', sm: '1rem' }, px: { xs: 3, sm: 4 } }}>
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
