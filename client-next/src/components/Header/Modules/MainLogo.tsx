import { Box, IconButton, SvgIcon, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../images/mainlogoicon.svg';
import theme from '@/theme';

export default function MainLogo() {
  return (
    <IconButton>
      <SvgIcon
        fontSize="large"
        sx={{
          height: '3rem',
          width: '3rem',
        }}
      >
        <Logo />
      </SvgIcon>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: '5px',
        }}
      >
        <Typography
          component="span"
          variant="button"
          sx={{
            lineHeight: '1.2',
            fontWeight: '700',
            fontSize: '1.2rem',
          }}
        >
          MaxiBud
        </Typography>
        <Typography
          component="span"
          variant="button"
          color={theme.palette.primary.main}
          sx={{
            lineHeight: '1.2',
            fontWeight: '700',
            fontSize: '1.2rem',
          }}
        >
          Expert
        </Typography>
      </Box>
    </IconButton>
  );
}
