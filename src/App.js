import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { amber, orange } from "@mui/material/colors";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from "redux-persist/es/integration/react";
import "@tremor/react/dist/esm/tremor.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Nav';
import About from './pages/About';
import DashBoard from './pages/DashBoard'
import Home from './pages/HomePage';
import Stock from './components/Stock';

function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: orange["900"],
        contrastText: "#fff",
      },
      secondary: {
        main: amber["900"],
        contrastText: "#000",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>

      <div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/stocks" element={<DashBoard />} />
				<Route path="/stocks/:symbol" element={<Stock />} />
			</Routes>
		</div>
    </>

  );
}





export default App