'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
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
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/laboratorio')}>
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
                <TextField fullWidth required select label="Tipo de Muestra" value={formData.sampleType} onChange={(e) => setFormData({...formData, sampleType: e.target.value})}>
                  <MenuItem value="Producto Terminado">Producto Terminado</MenuItem>
                  <MenuItem value="Materia Prima">Materia Prima</MenuItem>
                  <MenuItem value="Producto en Proceso">Producto en Proceso</MenuItem>
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
                <TextField fullWidth required label="Solicitado por" value={formData.requestedBy} onChange={(e) => setFormData({...formData, requestedBy: e.target.value})} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Fecha" type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={formData.tests.microbiologico} onChange={(e) => setFormData({...formData, tests: {...formData.tests, microbiologico: e.target.checked}})} />} label="Análisis Microbiológico" />
                  <FormControlLabel control={<Checkbox checked={formData.tests.fisicoquimico} onChange={(e) => setFormData({...formData, tests: {...formData.tests, fisicoquimico: e.target.checked}})} />} label="Análisis Fisicoquímico" />
                  <FormControlLabel control={<Checkbox checked={formData.tests.sensorial} onChange={(e) => setFormData({...formData, tests: {...formData.tests, sensorial: e.target.checked}})} />} label="Análisis Sensorial" />
                  <FormControlLabel control={<Checkbox checked={formData.tests.nutricional} onChange={(e) => setFormData({...formData, tests: {...formData.tests, nutricional: e.target.checked}})} />} label="Análisis Nutricional" />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />}>
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
