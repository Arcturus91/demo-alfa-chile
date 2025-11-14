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
      <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<PlayIcon />}
          onClick={() => router.push(`/calidad/${params.id}/resultados`)}
        >
          Iniciar Inspección
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Inspección {inspection.id}
            </Typography>
            <Chip label={inspection.status} color="warning" />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Orden de Producción
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.order}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Producto
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.product}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Lote
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.lote}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Tipo de Inspección
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.type}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Fecha
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Inspector
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {inspection.inspector}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Criterios de Inspección
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {inspection.criteria.map((criterion) => (
                  <Chip key={criterion} label={criterion} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">
                Observaciones
              </Typography>
              <Typography variant="body1">{inspection.observations}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
