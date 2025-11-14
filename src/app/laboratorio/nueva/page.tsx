'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function LaboratorioNuevaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    order: '',
    product: '',
    lote: '',
    sampleType: '',
    priority: 'Media',
    requestedBy: '',
    date: '',
    observations: '',
    tests: {
      microbiologico: false,
      fisicoquimico: false,
      sensorial: false,
      nutricional: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/laboratorio');
  };

  return (
    <AppLayout title="Nueva Solicitud de Análisis" module="laboratorio">
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/laboratorio')} sx={{ minHeight: 44, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, px: { xs: 2, sm: 3 } }}>
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
                <TextField fullWidth required select label="Tipo de Muestra" value={formData.sampleType} onChange={(e) => setFormData({...formData, sampleType: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Producto Terminado">Producto Terminado</MenuItem>
                  <MenuItem value="Materia Prima">Materia Prima</MenuItem>
                  <MenuItem value="Producto en Proceso">Producto en Proceso</MenuItem>
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
                <TextField fullWidth required label="Solicitado por" value={formData.requestedBy} onChange={(e) => setFormData({...formData, requestedBy: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha" type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} InputLabelProps={{ shrink: true }} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={formData.tests.microbiologico} onChange={(e) => setFormData({...formData, tests: {...formData.tests, microbiologico: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Análisis Microbiológico</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.tests.fisicoquimico} onChange={(e) => setFormData({...formData, tests: {...formData.tests, fisicoquimico: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Análisis Fisicoquímico</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.tests.sensorial} onChange={(e) => setFormData({...formData, tests: {...formData.tests, sensorial: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Análisis Sensorial</Typography>} />
                  <FormControlLabel control={<Checkbox checked={formData.tests.nutricional} onChange={(e) => setFormData({...formData, tests: {...formData.tests, nutricional: e.target.checked}})} sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }} />} label={<Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Análisis Nutricional</Typography>} />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />} sx={{ minHeight: { xs: 44, sm: 48 }, fontSize: { xs: '0.875rem', sm: '1rem' }, px: { xs: 3, sm: 4 } }}>
                  Crear Solicitud
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
