import { Container } from '@mui/material';
import React from 'react';
import MainLogo from '../Modules/MainLogo';

export default function Header() {
  return (
    <Container component="header" maxWidth="xl">
      <MainLogo />
    </Container>
  );
}
