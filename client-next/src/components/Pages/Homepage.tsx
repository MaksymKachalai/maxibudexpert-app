import { Container } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Header from '../Header/Templates/Header';

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>MaxiBud</title>
      </Head>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          height: '100vh',
        }}
      ></Container>
    </div>
  );
}
