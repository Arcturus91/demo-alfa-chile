'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  userName?: string;
  userRole?: string;
  notificationCount?: number;
  onMenuClick?: () => void;
}

export default function Header({
  userName = 'María González',
  userRole = 'Producción',
  notificationCount = 3,
  onMenuClick
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    router.push('/login');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* First Row - Main Navigation */}
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 }, minHeight: { xs: 56, sm: 64 } }}>
        {/* Mobile Menu Icon */}
        {isMobile && onMenuClick && (
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            cursor: 'pointer',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
            flexShrink: 0,
          }}
          onClick={() => router.push('/dashboard')}
        >
          {isSmall ? 'ALOYTECH' : 'ALOYTECH | Alfa Chile'}
        </Typography>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s'
                }}
              >
                Inicio
              </Typography>
            </Link>
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s'
                }}
              >
                Mi Área
              </Typography>
            </Link>
            <Link href="/indicadores-kpi" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s'
                }}
              >
                Reportes
              </Typography>
            </Link>
          </Box>
        )}

        {/* Right Section - User & Notifications */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <IconButton
            size="large"
            sx={{
              backgroundColor: '#DBEAFE',
              '&:hover': { backgroundColor: '#BFDBFE' },
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 }
            }}
          >
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon sx={{ color: 'primary.main', fontSize: { xs: 20, sm: 24 } }} />
            </Badge>
          </IconButton>

          <Box
            onClick={handleMenu}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }}
          >
            {/* Hide user name on mobile */}
            {!isSmall && (
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {userName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                  {userRole}
                </Typography>
              </Box>
            )}
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)',
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {getInitials(userName)}
            </Avatar>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Configuración</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>

          {/* Hide logout button on mobile */}
          {!isMobile && (
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{
                ml: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#dc2626'
                }
              }}
            >
              Cerrar Sesión
            </Button>
          )}
        </Box>
      </Toolbar>

      {/* Second Row - Module Navigation */}
      <Box
        sx={{
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          borderBottom: '1px solid #E2E8F0',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1, sm: 1.5 },
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            height: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#CBD5E1',
            borderRadius: '2px',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          gap: { xs: 2, sm: 3, md: 4 },
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'center' },
          minWidth: 'fit-content'
        }}>
          <Link href="/produccion" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                borderRadius: 1,
                backgroundColor: pathname?.startsWith('/produccion') ? '#DBEAFE' : 'transparent',
                borderBottom: pathname?.startsWith('/produccion') ? '3px solid #3B82F6' : 'none',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#DBEAFE',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>🏭</Box>
              <Typography
                component="span"
                sx={{
                  color: '#3B82F6',
                  fontWeight: pathname?.startsWith('/produccion') ? 700 : 600,
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                }}
              >
                Producción
              </Typography>
            </Box>
          </Link>

          <Link href="/calidad" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                borderRadius: 1,
                backgroundColor: pathname?.startsWith('/calidad') ? '#D1FAE5' : 'transparent',
                borderBottom: pathname?.startsWith('/calidad') ? '3px solid #10B981' : 'none',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#D1FAE5',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>✅</Box>
              <Typography
                component="span"
                sx={{
                  color: '#10B981',
                  fontWeight: pathname?.startsWith('/calidad') ? 700 : 600,
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                }}
              >
                Calidad
              </Typography>
            </Box>
          </Link>

          <Link href="/laboratorio" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                borderRadius: 1,
                backgroundColor: pathname?.startsWith('/laboratorio') ? '#E9D5FF' : 'transparent',
                borderBottom: pathname?.startsWith('/laboratorio') ? '3px solid #8B5CF6' : 'none',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#E9D5FF',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>🔬</Box>
              <Typography
                component="span"
                sx={{
                  color: '#8B5CF6',
                  fontWeight: pathname?.startsWith('/laboratorio') ? 700 : 600,
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                }}
              >
                Laboratorio
              </Typography>
            </Box>
          </Link>

          <Link href="/indicadores-kpi" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.75, sm: 1 },
                borderRadius: 1,
                backgroundColor: pathname?.startsWith('/indicadores-kpi') ? '#FEF3C7' : 'transparent',
                borderBottom: pathname?.startsWith('/indicadores-kpi') ? '3px solid #F59E0B' : 'none',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#FEF3C7',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>📊</Box>
              <Typography
                component="span"
                sx={{
                  color: '#F59E0B',
                  fontWeight: pathname?.startsWith('/indicadores-kpi') ? 700 : 600,
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                }}
              >
                Indicadores KPI
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}
