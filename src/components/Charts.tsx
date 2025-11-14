'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

interface BarChartProps {
  data: { label: string; value: number; height: number }[];
  title: string;
  period: string;
}

export function BarChart({ data, title, period }: BarChartProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          {period}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 1, sm: 2 },
          alignItems: 'flex-end',
          height: { xs: 180, sm: 220, md: 250 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: '#E2E8F0',
          },
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: `${item.height}px`,
                background: item.value >= 3000 ? 'linear-gradient(180deg, #10B981 0%, #059669 100%)' : 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)',
                borderRadius: '8px 8px 0 0',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                pt: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '0.65rem', sm: '0.75rem' }
                }}
              >
                {item.value.toLocaleString()}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: { xs: '0.65rem', sm: '0.75rem' } }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

interface DonutChartProps {
  data: { label: string; value: number; percentage: number; color: string }[];
  title: string;
  period: string;
  total: number;
}

export function DonutChart({ data, title, period, total }: DonutChartProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          {period}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3, md: 4 }, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
        {/* Donut */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: 140, sm: 160 },
            height: { xs: 140, sm: 160 },
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `conic-gradient(
                ${data.map((item, index) => {
                  const start = data.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0);
                  const end = start + item.percentage;
                  return `${item.color} ${start}% ${end}%`;
                }).join(', ')}
              )`,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '70%',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                {total}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                Total
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Legend */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 1.5 }, width: { xs: '100%', sm: 'auto' } }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              <Box
                sx={{
                  width: { xs: 14, sm: 16 },
                  height: { xs: 14, sm: 16 },
                  borderRadius: '4px',
                  backgroundColor: item.color,
                  flexShrink: 0,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.875rem', sm: '0.9375rem' } }}>
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                  {item.value} órdenes ({item.percentage}%)
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

interface LineChartProps {
  data: number[];
  title: string;
  period: string;
}

export function LineChart({ data, title, period }: LineChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          {period}
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: 180, sm: 220, md: 250 },
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          gap: { xs: 0.25, sm: 0.5 },
          px: { xs: 1, sm: 2 },
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: '#E2E8F0',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: { xs: 8, sm: 16 },
            right: { xs: 8, sm: 16 },
            height: { xs: '150px', sm: '180px', md: '200px' },
            background: 'linear-gradient(to right, transparent, transparent)',
            borderLeft: '2px solid #E2E8F0',
            borderRight: '2px solid #E2E8F0',
            pointerEvents: 'none',
          },
        }}
      >
        {data.map((value, index) => {
          const normalizedHeight = ((value - minValue) / range) * 180 + 20;
          return (
            <Box
              key={index}
              sx={{
                flex: 1,
                height: `${normalizedHeight}px`,
                backgroundColor: '#10B981',
                borderRadius: '3px 3px 0 0',
                transition: 'all 0.3s ease',
                position: 'relative',
                '&:hover': {
                  backgroundColor: '#059669',
                  transform: 'scaleY(1.05)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 8,
                  height: 8,
                  backgroundColor: '#10B981',
                  borderRadius: '50%',
                  border: '2px solid white',
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}

interface ProgressBarProps {
  data: { label: string; value: number; percentage: number }[];
  title: string;
  period: string;
}

export function ProgressBars({ data, title, period }: ProgressBarProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 2, sm: 3 }, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          {period}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
        {data.map((item, index) => {
          const color = item.percentage >= 100 ? '#10B981' : item.percentage >= 80 ? '#3B82F6' : '#F59E0B';
          return (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, gap: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, flex: 1 }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color, fontSize: { xs: '0.875rem', sm: '0.9375rem' }, flexShrink: 0 }}>
                  {item.percentage}%
                </Typography>
              </Box>
              <Box
                sx={{
                  height: { xs: 6, sm: 8 },
                  backgroundColor: '#E2E8F0',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${Math.min(item.percentage, 100)}%`,
                    backgroundColor: color,
                    borderRadius: 4,
                    transition: 'width 0.5s ease',
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
