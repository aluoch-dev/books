import { createTheme } from "@mui/material";
import Mulish from './fonts/Mulish-Regular.ttf';

const mulish = {
    fontFamily: 'Mulish',
    src: `
      local('Mulish'),
      url(${Mulish}) format('truetype')
    `,
  };

const theme = createTheme({
    typography: {
        fontFamily:'Nunito, sans-serif',
    },
    palette: {
        turquiose: {
            light:'#CFFAFA',
            primary:'#5ACCCC',
            secondary:'#CFFAFA',
            tertiary: '#28B8B8'
        },
        orange: {
            light: '#FFE6DC',
            tertiary: '#F76434'
        },
        yellow: {
            primary:'#FABD33',
            secondary: '#FAAD00'
        }
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [mulish],
          },
        },
      },

});

export default theme;