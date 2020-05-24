import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import "bootstrap/dist/css/bootstrap.min.css";
import {Auth0Provider} from "./auth/react-auth0-spa";
import {auth0config} from "./config/config"
import history from "./utils/history";

const store = createStore(reducer, middleware);

const onRedirectCallback = appState => {
  history.push(
      appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
  );
};

ReactDOM.render(
    <Provider store={store}>
      <Auth0Provider
          domain={auth0config.domain}
          client_id={auth0config.clientId}
          redirect_uri={window.location.origin}
          audience={auth0config.audience}
          onRedirectCallback={onRedirectCallback}
      >

        <App/>
      </Auth0Provider>
    </Provider>,
    document.getElementById('root')
);
