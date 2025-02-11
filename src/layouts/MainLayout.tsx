import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import { FeedbackModal } from 'src/layouts/FeedbackDialog';

import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0)', // Semi-transparent white
        }}
      >
        {children}
      </Box>
      <AppFooter />
      <FeedbackModal />
    </>
  );
}
