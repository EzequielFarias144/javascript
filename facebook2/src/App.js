// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App container">
      {/* Container principal */}
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="row w-100">
          {/* Coluna da Imagem */}
          <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook logo"
              className="mb-4"
              style={{ width: '300px' }}
            />
            <h3 className="text-center">
              O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
            </h3>
          </div>

          {/* Coluna do Formulário */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="card p-4" style={{ width: '350px' }}>
              <h2 className="text-center mb-4">Entre no Facebook</h2>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email ou telefone"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Senha"
                  />
                </div>
                <button className="btn btn-primary w-100 mb-3">Entrar</button>
                <a href="#" className="d-block text-center mb-3">
                  Esqueceu a senha?
                </a>
                <hr />
                <button className="btn btn-success w-100">
                  Criar nova conta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

