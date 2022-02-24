import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="blue">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/raed-rdh-5426581aa/">
        www.linkedin.com/in/raed-rdh-5426581aa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            I hope you'll enjoy the visit of my portfolio.
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}