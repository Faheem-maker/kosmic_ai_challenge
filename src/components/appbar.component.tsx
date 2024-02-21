'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import { ArrowBack, Edit, BorderColorOutlined } from '@mui/icons-material';

import darkTheme from '@/themes/theme.dark';
import { ThemeProvider } from '@emotion/react';

import UserBlankImg from '@/assets/img/user_blank.png';
import Image from 'next/image';

const styles = {
  profile: {
    marginLeft: 'auto',
  }
};

function ResponsiveAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <header>
        <AppBar position="static" variant='elevation' color='secondary' sx={{
          padding: '12px',
          borderBottom: '2px solid #343339',
          background: '#09090D',
        }}>
          <Container>
            <Toolbar disableGutters>
              <Button
                sx={{
                  marginLeft: '0',
                  marginRight: '10px',
                  paddingRight: '2px',
                }}
                startIcon={<ArrowBack />}
                variant='outlined'
                color='secondary'
                size='large'
                />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Media Management <Box component={'span'} paddingTop={4}><BorderColorOutlined /></Box>
                </Typography>
                <Typography component="div" >
                  Draft Campaign
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography>
                    Jane Cooper
                  </Typography>
                  <Link>Change Profile</Link>
                </Box>
              </Box>
              <Box marginLeft={2}>
                <Image src={UserBlankImg} alt="User Profile Image" height={50} width={50} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
