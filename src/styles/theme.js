// styles/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dbdbdb', // Custom primary color
    },
    secondary: {
      main: '#dbdbdb', // Custom secondary color
    },
    // Add more customizations as needed
  },
  typography: {
    // Define custom typography settings
  fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    fontSize: 16,
  },
  // Add additional theme configurations here
});

export default theme;
