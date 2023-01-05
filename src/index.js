import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme,ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#F5297A",
    },
    tertiary:{
      main:"#b66dff"
    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
         '&:focus':{
           outline:'none'
         }
        }
      }
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
         '&:focus':{
           outline:'none'
         }
        }
      }
    },
    MuiTab:{
      styleOverrides:{
        root:{
          '&:focus':{
            outline:'none'
          }
        }
      }
    },
    MuiPagination:{
      styleOverrides:{
        root:{
          '&:focus':{
            outline:'none'
          }
        }
      }
    },
    MuiPaginationItem:{
      styleOverrides:{
        root:{
          '&:focus':{
            outline:'none'
          }
        }
      }
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
