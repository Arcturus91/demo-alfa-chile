'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import Link from 'next/link';

interface SidebarProps {
  module: 'produccion' | 'calidad' | 'laboratorio';
  backLink?: string;
  backLabel?: string;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
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

export default function Sidebar({
  module,
  backLink,
  backLabel = 'Volver a la Lista',
  mobileOpen = false,
  onMobileClose
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const config = moduleConfig[module];

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleNavigation = (href: string) => {
    if (href !== '#') {
      router.push(href);
      if (isMobile && onMobileClose) {
        onMobileClose();
      }
    }
  };

  const drawerWidth = collapsed ? 60 : 260;

  const drawerContent = (
    <Box
      sx={{
        width: isMobile ? 260 : drawerWidth,
        backgroundColor: 'white',
        padding: collapsed && !isMobile ? '24px 8px' : '24px 0',
        transition: 'all 0.3s ease',
        position: 'relative',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Collapse Toggle Button - Desktop Only */}
      {!isMobile && (
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
      )}

      {/* Module Title */}
      {(!collapsed || isMobile) && (
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
      <List sx={{ flex: 1, px: collapsed && !isMobile ? 0 : 0 }}>
        {config.items.map((item, index) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.href)}
                sx={{
                  px: collapsed && !isMobile ? 1 : 3,
                  py: 1.5,
                  backgroundColor: isActive ? config.lightBg : 'transparent',
                  borderRight: isActive ? `3px solid ${config.color}` : 'none',
                  color: isActive ? config.color : '#64748B',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s',
                  minHeight: 48,
                  '&:hover': {
                    backgroundColor: config.lightBg,
                    color: config.color,
                  },
                  justifyContent: collapsed && !isMobile ? 'center' : 'flex-start',
                }}
              >
                <Box
                  sx={{
                    fontSize: '20px',
                    mr: collapsed && !isMobile ? 0 : 1.5,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {item.icon}
                </Box>
                {(!collapsed || isMobile) && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Back Link */}
      {backLink && (!collapsed || isMobile) && (
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
              onClick={(e) => {
                if (isMobile && onMobileClose) {
                  onMobileClose();
                }
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

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 260,
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        /* Desktop Drawer */
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              position: 'relative',
              boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
              transition: 'width 0.3s ease',
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
