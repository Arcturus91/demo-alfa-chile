'use client';

import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton, Divider } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import {
  Assignment as AssignmentIcon,
  Description as DescriptionIcon,
  Warning as WarningIcon,
  VerifiedUser as VerifiedUserIcon,
  Assessment as AssessmentIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import Link from 'next/link';

interface SidebarProps {
  module: 'produccion' | 'calidad' | 'laboratorio';
  backLink?: string;
  backLabel?: string;
}

const moduleConfig = {
  produccion: {
    color: '#3B82F6',
    lightBg: '#DBEAFE',
    title: '🏭 Producción',
    items: [
      { icon: '📋', label: 'Órdenes de Producción', href: '/produccion' },
      { icon: '⚙️', label: 'Líneas de Producción', href: '/produccion/lineas' },
      { icon: '📦', label: 'Materias Primas', href: '/produccion/materias-primas' },
      { icon: '⚠️', label: 'Incidencias', href: '/produccion/incidencias' },
      { icon: '📊', label: 'Indicadores KPI', href: '/indicadores-kpi' },
    ],
  },
  calidad: {
    color: '#10B981',
    lightBg: '#D1FAE5',
    title: '✅ Calidad',
    items: [
      { icon: '📋', label: 'Inspecciones', href: '/calidad' },
      { icon: '📝', label: 'Control de Calidad', href: '/calidad/control' },
      { icon: '⚠️', label: 'No Conformidades', href: '/calidad/no-conformidades' },
      { icon: '📜', label: 'Certificados', href: '#' },
      { icon: '📊', label: 'Indicadores KPI', href: '/indicadores-kpi' },
    ],
  },
  laboratorio: {
    color: '#8B5CF6',
    lightBg: '#E9D5FF',
    title: '🔬 Laboratorio',
    items: [
      { icon: '📋', label: 'Solicitudes', href: '/laboratorio' },
      { icon: '🧪', label: 'Análisis en Proceso', href: '#' },
      { icon: '✅', label: 'Resultados', href: '#' },
      { icon: '📊', label: 'Indicadores KPI', href: '/indicadores-kpi' },
    ],
  },
};

export default function Sidebar({ module, backLink, backLabel = 'Volver a la Lista' }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const config = moduleConfig[module];

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Box
      sx={{
        width: collapsed ? 60 : 260,
        backgroundColor: 'white',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
        padding: collapsed ? '24px 8px' : '24px 0',
        transition: 'all 0.3s ease',
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Collapse Toggle Button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'absolute',
          right: -12,
          top: 20,
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          width: 24,
          height: 24,
          '&:hover': {
            backgroundColor: config.lightBg,
          },
          zIndex: 10,
        }}
      >
        {collapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
      </IconButton>

      {/* Module Title */}
      {!collapsed && (
        <Typography
          variant="caption"
          sx={{
            px: 3,
            mb: 1.5,
            fontWeight: 700,
            color: '#94A3B8',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
          }}
        >
          {config.title}
        </Typography>
      )}

      {/* Navigation Items */}
      <List sx={{ flex: 1, px: collapsed ? 0 : 0 }}>
        {config.items.map((item, index) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => item.href !== '#' && router.push(item.href)}
                sx={{
                  px: collapsed ? 1 : 3,
                  py: 1.5,
                  backgroundColor: isActive ? config.lightBg : 'transparent',
                  borderRight: isActive ? `3px solid ${config.color}` : 'none',
                  color: isActive ? config.color : '#64748B',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: config.lightBg,
                    color: config.color,
                  },
                  justifyContent: collapsed ? 'center' : 'flex-start',
                }}
              >
                <Box
                  sx={{
                    fontSize: '20px',
                    mr: collapsed ? 0 : 1.5,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {item.icon}
                </Box>
                {!collapsed && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Back Link */}
      {backLink && !collapsed && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ px: 3 }}>
            <Link
              href={backLink}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: config.color,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              <ArrowBackIcon fontSize="small" />
              {backLabel}
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
