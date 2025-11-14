'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 450 },
          animation: 'fadeIn 0.5s ease',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
            <Box
              sx={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)',
                color: 'white',
                padding: { xs: '12px 24px', sm: '16px 32px' },
                borderRadius: '12px',
                fontSize: { xs: '20px', sm: '24px' },
                fontWeight: 'bold',
                mb: { xs: 2, sm: 3 },
              }}
            >
              ALFA CHILE
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
              Iniciar Sesión
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
              Sistema de Gestión Integrada
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Correo Electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              autoFocus
              sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.875rem', sm: '1rem' } } }}
            />

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              my: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 0 }
            }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    color="primary"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: 20, sm: 24 } } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>Recordarme</Typography>}
              />
              <MuiLink href="#" variant="body2" sx={{ textDecoration: 'none', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                ¿Olvidaste tu contraseña?
              </MuiLink>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                minHeight: 48,
                background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2563eb, #1E40AF)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Iniciar Sesión
            </Button>

            <Box sx={{ textAlign: 'center', mt: { xs: 2, sm: 3 } }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                ¿No tienes cuenta?{' '}
                <MuiLink href="#" sx={{ fontWeight: 600, textDecoration: 'none' }}>
                  Solicitar acceso
                </MuiLink>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          bottom: { xs: 10, sm: 20 },
          color: 'white',
          opacity: 0.8,
          fontSize: { xs: '0.75rem', sm: '0.875rem' },
          px: 2,
          textAlign: 'center'
        }}
      >
        © 2025 AloyTech - Sistema Alfa Chile
      </Typography>
    </Box>
  );
}
