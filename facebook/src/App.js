import "./App.css" 
import Login from "./formulario";

function App(props) {
  return (
    <div className="App">
     <div className="text-center mb-[-100px]">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" className="w-80 mx-auto" />
          <div className=" mt-[-11px] px-16 text-wrap">
            <p className="text-2xl">O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
          </div>
        </div>
     
     <Login></Login>
        <div className="bg-white mt-[-98px]">
          <div className="pt-[20px]">
            <div className="mx-[40px]">
              <ul className="text-xs flex flex-wrap items-center text-slate-400 pt-4 text-wrap">
                <li>Português (Brasil)</li>
                <li className="pl-[10px]">English (US)</li>
                <li className="pl-[10px]">Español</li>
                <li className="pl-[10px]">Français (France)</li>
                <li className="pl-[10px]">Italiano</li>
                <li className="pl-[10px]">Deutsch</li>
                <li className="pl-[10px]">العربية</li>
                <li className="pl-[10px]">हिन्दी</li>
                <li className="pl-[10px]">中文(简体)</li>
                <li className="pl-[10px]">日本語</li>
              </ul>
              <div className="border-b-[1px] mb-4 h-4"></div>
              <div>
                <ul className="text-xs flex flex-wrap items-center text-slate-400 pt-4 text-wrap ml-[-20px] ">
                  <li className="pr-0 pl-[20px] linha">Cadastre-se</li>
                  <li className="pr-0 pl-[20px] linha">Entrar</li>
                  <li className="pr-0 pl-[20px] linha">Messenger</li>
                  <li className="pr-0 pl-[20px] linha">Facebook Lite</li>
                  <li className="pr-0 pl-[20px] linha">Vídeo</li>
                  <li className="pr-0 pl-[20px] linha">Locais</li>
                  <li className="pr-0 pl-[20px] linha">Jogos</li>
                  <li className="pr-0 pl-[20px] linha">Marketplace</li>
                  <li className="pr-0 pl-[20px] linha">Meta Pay</li>
                  <li className="pr-0 pl-[20px] linha">Meta Store</li>
                  <li className="pr-0 pl-[20px] linha">Meta Quest</li>
                  <li className="pr-0 pl-[20px] linha">Ray-Ban Meta</li>
                  <li className="pr-0 pl-[20px] linha">Meta AI</li>
                  <li className="pr-0 pl-[20px] linha">Instagram</li>
                  <li className="pr-0 pl-[20px] linha">Threads</li>
                  <li className="pr-0 pl-[20px] linha">Campanhas de arrecadação de fundos</li>
                  <li className="pr-0 pl-[20px] linha">Serviços</li>
                  <li className="pr-0 pl-[20px] linha">Central de Informações de Votação</li>
                  <li className="pr-0 pl-[20px] linha">Política de Privacidade</li>
                  <li className="pr-0 pl-[20px] linha">Central de Privacidade</li>
                  <li className="pr-0 pl-[20px] linha">Grupos</li>
                  <li className="pr-0 pl-[20px] linha">Sobre</li>
                  <li className="pr-0 pl-[20px] linha">Criar anúncio</li>
                  <li className="pr-0 pl-[20px] linha">Criar Página</li>
                  <li className="pr-0 pl-[20px] linha">Desenvolvedores</li>
                  <li className="pr-0 pl-[20px] linha">Carreiras</li>
                  <li className="pr-0 pl-[20px] linha">Cookies</li>
                  <li className="pr-0 pl-[20px] linha">Escolhas para anúncios</li>
                  <li className="pr-0 pl-[20px] linha">Termos</li>
                  <li className="pr-0 pl-[20px] linha">Ajuda</li>
                  <li className="pr-0 pl-[20px] linha">Carregamento de contatos e não usuários</li>
                  <li className="pr-0 pl-[20px] linha">Configurações</li>
                  <li className="pr-0 pl-[20px] linha">Registro de atividades</li>
                </ul>
              </div>
              <div className="mt-5 mb-5 text-xs text-slate-400">
                <div>
                  <span>Meta © 2024</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;