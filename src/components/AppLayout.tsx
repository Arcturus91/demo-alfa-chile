'use client';

import React from 'react';
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
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header
        userName={userName}
        userRole={userRole}
        notificationCount={notificationCount}
      />
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        {showSidebar && module && (
          <Sidebar
            module={module}
            backLink={sidebarBackLink}
            backLabel={sidebarBackLabel}
          />
        )}

        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <Container
            maxWidth={maxWidth}
            sx={{
              py: 4,
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
                  mb: 3,
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
