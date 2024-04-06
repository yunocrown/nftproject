import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { SellerState, UserState, ProductState } from './Contexts';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from '@web3uikit/core';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider initializeOnMount = {false}>
      <SellerState>
        <UserState>
          <ProductState>
            <NotificationProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </NotificationProvider>
          </ProductState>
        </UserState>
      </SellerState>
    </MoralisProvider>
  </React.StrictMode>
);
