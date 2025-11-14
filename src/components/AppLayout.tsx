'use client';

import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  module?: 'produccion' | 'calidad' | 'laboratorio';
  userName?: string;
  userRole?: string;
  notificationCount?: number;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  showSidebar?: boolean;
  sidebarBackLink?: string;
  sidebarBackLabel?: string;
}

const moduleColors = {
  produccion: '#3B82F6',
  calidad: '#10B981',
  laboratorio: '#8B5CF6',
};

export default function AppLayout({
  children,
  title,
  module,
  userName,
  userRole,
  notificationCount,
  maxWidth = 'xl',
  showSidebar = false,
  sidebarBackLink,
  sidebarBackLabel,
}: AppLayoutProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header
        userName={userName}
        userRole={userRole}
        notificationCount={notificationCount}
        onMenuClick={showSidebar ? handleDrawerToggle : undefined}
      />
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        {showSidebar && module && (
          <Sidebar
            module={module}
            backLink={sidebarBackLink}
            backLabel={sidebarBackLabel}
            mobileOpen={mobileDrawerOpen}
            onMobileClose={handleDrawerClose}
          />
        )}

        {/* Main Content */}
        <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
          <Container
            maxWidth={maxWidth}
            sx={{
              py: { xs: 2, sm: 3, md: 4 },
              px: { xs: 2, sm: 3, md: 4 },
              animation: 'fadeIn 0.4s ease',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {title && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  color: module ? moduleColors[module] : 'text.primary'
                }}
              >
                {title}
              </Typography>
            )}
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
