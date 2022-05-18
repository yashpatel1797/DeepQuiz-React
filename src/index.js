import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, QuizProvider, AuthProvider } from "context";
// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById("root")
);
