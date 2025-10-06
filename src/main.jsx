import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import {QueryClient, QueryClientProvider}  from '@tanstack/react-query';
import {BrowserRouter} from 'react-router-dom';

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <QueryClientProvider client={queryClient}>    
      <BrowserRouter >
      <App />
      </BrowserRouter>      
      </QueryClientProvider>
    </Auth0Provider>
  </StrictMode>,
);
