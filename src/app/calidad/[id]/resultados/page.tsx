'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, MenuItem, Typography } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { useRouter, useParams } from 'next/navigation';
import { Save as SaveIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export default function CalidadResultadosPage() {
  const router = useRouter();
  const params = useParams();

  const [formData, setFormData] = useState({
    peso: '',
    dimensiones: '',
    color: '',
    textura: '',
    resultado: '',
    observations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/calidad');
  };

  return (
    <AppLayout
      title="Registro de Resultados"
      module="calidad"
      showSidebar={true}
      sidebarBackLink={`/calidad/${params.id}`}
      sidebarBackLabel="Volver a Inspección"
    >

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Inspección {params.id}</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Peso (g)" type="number" value={formData.peso} onChange={(e) => setFormData({...formData, peso: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Dimensiones (cm)" value={formData.dimensiones} onChange={(e) => setFormData({...formData, dimensiones: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Color" value={formData.color} onChange={(e) => setFormData({...formData, color: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Conforme">Conforme</MenuItem>
                  <MenuItem value="No Conforme">No Conforme</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required select label="Textura" value={formData.textura} onChange={(e) => setFormData({...formData, textura: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Conforme">Conforme</MenuItem>
                  <MenuItem value="No Conforme">No Conforme</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required select label="Resultado Final" value={formData.resultado} onChange={(e) => setFormData({...formData, resultado: e.target.value})} sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}>
                  <MenuItem value="Aprobado">Aprobado</MenuItem>
                  <MenuItem value="Rechazado">Rechazado</MenuItem>
                  <MenuItem value="Condicional">Condicional</MenuItem>
                </TextField>
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
