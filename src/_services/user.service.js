import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { authHeader } from '../_helpers';

/* eslint-disable camelcase */
import { auth_url } from './api.config';

Vue.use(VueAxios, axios);

export const userService = {
  login,
  logout,
  getAll
};

function login (username, password) {
  const payload = {
    username,
    password
  };
  return axios.post(`${auth_url}/obtain_token/`, payload).then(result => {
    // login successful if there's a jwt token in the response
    const { data } = result;
    if (data.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data.user;
  });

  // return fetch(`${auth_url}/obtain_token/`, requestOptions)
  //   .then(handleResponse)
  //   .then(user => {
  //     // login successful if there's a jwt token in the response
  //     if (user.token) {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('user', JSON.stringify(user));
  //     }

  //     return user;
  //   });
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
