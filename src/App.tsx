import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import theme from "./theme/theme";
import AppRoutes from "./router/routers";

function App() {

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter basename={process.env.REACT_APP_BASE_URL || '/portofolio-khairunnisa-new'}>
              <AppRoutes/>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
