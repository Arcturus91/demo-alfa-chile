'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, Typography } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function LaboratorioResultadosPage() {
  const router = useRouter();
  const params = useParams();

  const [formData, setFormData] = useState({
    ph: '',
    humedad: '',
    proteinas: '',
    grasas: '',
    coliformes: '',
    salmonella: '',
    resultado: '',
    analyst: '',
    observations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/laboratorio');
  };

  return (
    <AppLayout
      title="Registro de Resultados"
      module="laboratorio"
      showSidebar={true}
      sidebarBackLink={`/laboratorio/${params.id}`}
      sidebarBackLabel="Volver a Detalle"
    >

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Solicitud {params.id}</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '0.9375rem', sm: '1rem' } }}>Análisis Fisicoquímico</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="pH" type="number" inputProps={{ step: '0.01' }} value={formData.ph} onChange={(e) => setFormData({...formData, ph: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Humedad (%)" type="number" inputProps={{ step: '0.1' }} value={formData.humedad} onChange={(e) => setFormData({...formData, humedad: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Proteínas (g)" type="number" inputProps={{ step: '0.1' }} value={formData.proteinas} onChange={(e) => setFormData({...formData, proteinas: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Grasas (g)" type="number" inputProps={{ step: '0.1' }} value={formData.grasas} onChange={(e) => setFormData({...formData, grasas: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 2, fontSize: { xs: '0.9375rem', sm: '1rem' } }}>Análisis Microbiológico</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Coliformes (UFC/g)" type="number" value={formData.coliformes} onChange={(e) => setFormData({...formData, coliformes: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Salmonella" value={formData.salmonella} onChange={(e) => setFormData({...formData, salmonella: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Ausente">Ausente</MenuItem>
                  <MenuItem value="Presente">Presente</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required select label="Resultado Final" value={formData.resultado} onChange={(e) => setFormData({...formData, resultado: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Conforme">Conforme</MenuItem>
                  <MenuItem value="No Conforme">No Conforme</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Analista" value={formData.analyst} onChange={(e) => setFormData({...formData, analyst: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Observaciones" value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" startIcon={<SaveIcon />} sx={{ minHeight: { xs: 44, sm: 48 }, fontSize: { xs: '0.875rem', sm: '1rem' }, px: { xs: 3, sm: 4 } }}>
                  Guardar Resultados
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
