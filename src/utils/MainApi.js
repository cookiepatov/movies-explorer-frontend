import { mainApiData } from './constants/apiData';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = localStorage.getItem('jwt') ? `Bearer ${localStorage.getItem('jwt')}` : null;
    this._contentType = options.headers['Content-Type'];
  }

  // eslint-disable-next-line class-methods-use-this
  _resultHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      throw Error(`${data.message}`);
    });
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType,
      },
      body: JSON.stringify({ password, email }),
    })
      .then((res) => this._resultHandler(res));
  }

  register({ email, password, name }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType,
      },
      body: JSON.stringify({ password, email, name }),
    })
      .then((res) => this._resultHandler(res));
  }

  checkToken() {
    if (this._token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': this._contentType,
          authorization: this._token,
        },
      })
        .then((res) => this._resultHandler(res));
    }
    return Promise.reject(new Error('no token'));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: this._token,
      },
    })
      .then((res) => this._resultHandler(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._resultHandler(res));
  }

  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': this._contentType,
        authorization: this._token,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._resultHandler(res));
  }

  addNewMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': this._contentType,
        authorization: this._token,
      },
      body: JSON.stringify(movieData),
    }).then((res) => this._resultHandler(res));
  }

  removeMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._resultHandler(res));
  }

  setNewToken(jwt) {
    this._token = `Bearer ${jwt}`;
  }
}

export default new Api(mainApiData);
