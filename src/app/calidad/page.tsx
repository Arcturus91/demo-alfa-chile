"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import Grid from "@/components/Grid";
import {
  Add as AddIcon,
  Visibility as VisibilityIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import AppLayout from "@/components/AppLayout";
import { useRouter } from "next/navigation";

export default function CalidadPage() {
  const router = useRouter();

  const inspections = [
    {
      id: "INS-001",
      order: "OP-001",
      product: "Producto A - 500g",
      lote: "L2024-11",
      type: "Inspección de Proceso",
      status: "Pendiente",
      date: "13/11/2025",
    },
    {
      id: "INS-002",
      order: "OP-002",
      product: "Producto B - 1kg",
      lote: "L2024-12",
      type: "Inspección Final",
      status: "En Curso",
      date: "13/11/2025",
    },
    {
      id: "INS-003",
      order: "OP-003",
      product: "Producto C - 250g",
      lote: "L2024-13",
      type: "Inspección Final",
      status: "Aprobada",
      date: "12/11/2025",
    },
  ];

  return (
    <AppLayout
      title="Gestión de Calidad"
      module="calidad"
      showSidebar={true}
      sidebarBackLink="/dashboard"
      sidebarBackLabel="Volver al Dashboard"
    >
      <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, mb: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => router.push("/calidad/nueva")}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Nueva Inspección
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push("/calidad/control")}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Control
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push("/calidad/no-conformidades")}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          No Conformidades
        </Button>
      </Box>

      <Grid container spacing={3}>
        {inspections.map((inspection) => (
          <Grid item xs={12} key={inspection.id}>
            <Card>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    mb: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1.5, sm: 0 }
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      {inspection.id}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                      {inspection.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      Orden: {inspection.order} | Lote: {inspection.lote}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {inspection.type}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexDirection: { xs: 'row', sm: 'column' },
                      alignItems: { xs: 'center', sm: 'flex-end' },
                      flexWrap: 'wrap'
                    }}
                  >
                    <Chip
                      label={inspection.status}
                      color={
                        inspection.status === "Aprobada"
                          ? "success"
                          : inspection.status === "En Curso"
                          ? "primary"
                          : "warning"
                      }
                      size="small"
                      sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                      {inspection.date}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() => router.push(`/calidad/${inspection.id}`)}
                    sx={{
                      minHeight: 36,
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      px: { xs: 1.5, sm: 2 }
                    }}
                  >
                    Ver
                  </Button>
                  {inspection.status === "Pendiente" && (
                    <Button
                      size="small"
                      startIcon={<PlayIcon />}
                      onClick={() =>
                        router.push(`/calidad/${inspection.id}/resultados`)
                      }
                      sx={{
                        minHeight: 36,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        px: { xs: 1.5, sm: 2 }
                      }}
                    >
                      Iniciar
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
