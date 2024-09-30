import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-[397px] bg-white py-5 px-5 rounded-md shadow-md">
        

        <form className="space-y-4">
          <div>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email ou telefone"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Senha"
            />
          </div>
          <div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-xl">Entrar</button>
          </div>
        </form>

        <div className="text-center mt-4">
          <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className="text-blue-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <hr className="mb-[28px] mt-[22px]" />

        <div className="text-center">
          <button
            className="p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Criar nova conta
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm px-10">
          <a href="https://www.facebook.com/pages/create/?ref_type=registration_form" className="hover:underline font-bold text-black">Crie uma Página</a> para uma celebridade, uma marca ou uma empresa.
        </p>
      </div>
    </div>
  );
};

export default Login;