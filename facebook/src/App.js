import "./App.css"
import Form from './formulario';

function App(props) {
  return (
    <div className="App">
      <div className="bg-blue-500 text-white p-4">
      <h1 className="text-3xl font-bold">Olá, Tailwind CSS!</h1>
      <p>Este é um exemplo simples de como usar Tailwind no React.</p>
    </div>

     <header>
       <img src="./face-foto.svg" alt="facebook" />
       <p>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
     </header>
     
     <Form></Form>
        <footer>
        <ul>
          <li>Português (Brasil)</li>
          <li>English (US)</li>
          <li>Español</li>
          <li>Français (France)</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>العربية</li>
          <li>हिन्दी</li>
          <li>中文(简体)</li>
          <li>日本語</li>
          <li>Cadastre-se</li>
          <li>Entrar</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Vídeo</li>
          <li>Locais</li>
          <li>Jogos</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Meta Store</li>
          <li>Meta Quest</li>
          <li>Ray-Ban Meta</li>
          <li>Meta AI</li>
          <li>Instagram</li>
          <li>Threads</li>
          <li>Campanhas de arrecadação de fundos</li>
          <li>Serviços</li>
          <li>Central de Informações de Votação</li>
          <li>Política de Privacidade</li>
          <li>Central de Privacidade</li>
          <li>Grupos</li>
          <li>Sobre</li>
          <li>Criar anúncio</li>
          <li>Criar Página</li>
          <li>Desenvolvedores</li>
          <li>Carreiras</li>
          <li>Cookies</li>
          <li>Escolhas para anúncios</li>
          <li>Termos</li>
          <li>Ajuda</li>
          <li>Carregamento de contatos e não usuários</li>
          <li>Configurações</li>
          <li>Registro de atividades</li>
        </ul>
        <p>Meta  2024</p>
      </footer>
    </div>
  );
}

export default App;
