"use client";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import Grid from "@/components/Grid";
import AppLayout from "@/components/AppLayout";
import { useRouter, useParams } from "next/navigation";
import { PlayArrow as PlayIcon } from "@mui/icons-material";

export default function CalidadDetallePage() {
  const router = useRouter();
  const params = useParams();

  const inspection = {
    id: params.id,
    order: "OP-001",
    product: "Producto A - 500g",
    lote: "L2024-11",
    type: "Inspección de Proceso",
    status: "Pendiente",
    date: "13/11/2025",
    inspector: "Carlos Ruiz",
    criteria: ["Peso", "Dimensiones", "Color", "Textura"],
    observations: "Inspección programada para turno mañana",
  };

  return (
    <AppLayout
      title="Detalle de Inspección"
      module="calidad"
      showSidebar={true}
      sidebarBackLink="/calidad"
      sidebarBackLabel="Volver a Inspecciones"
    >
      <Box sx={{ mb: { xs: 2, sm: 3 }, display: "flex", gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={<PlayIcon />}
          onClick={() => router.push(`/calidad/${params.id}/resultados`)}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Iniciar Inspección
        </Button>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: { xs: 1.5, sm: 0 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
              Inspección {inspection.id}
            </Typography>
            <Chip label={inspection.status} color="warning" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Orden de Producción
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.order}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Producto
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.product}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Lote
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.lote}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Tipo de Inspección
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.type}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Fecha
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Inspector
              </Typography>
              <Typography variant="body1" fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {inspection.inspector}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                Criterios de Inspección
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {inspection.criteria.map((criterion) => (
                  <Chip key={criterion} label={criterion} size="small" sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Observaciones
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>{inspection.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
