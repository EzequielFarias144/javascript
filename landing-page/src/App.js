import React from 'react';
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bem-vindo ao Guia Definitivo da Internet!</h1>
        <p>Explore o vasto mundo da Internet com nosso guia abrangente.</p>
      </header>
      
      <section className="features">
        <h2>Principais recursos do Guia da Internet</h2>
        <div className="feature">
          <h3>Cantinho do Iniciante</h3>
          <p>Entenda os fundamentos da Internet, mantenha-se seguro online e seja apresentado às plataformas de mídia social.</p>
        </div>
        <div className="feature">
          <h3>Tutoriais avançados</h3>
          <p>Mergulhe profundamente na segurança cibernética, explore conceitos avançados de programação e domine o marketing digital.</p>
        </div>
        <div className="feature">
          <h3>Ferramentas e recursos</h3>
          <p>Acesse as melhores ferramentas online, recursos educacionais e participe de fóruns interativos para obter suporte da comunidade.</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>O que nossos usuários estão dizendo</h2>
        <blockquote>
          <p>"O Ultimate Internet Guide foi um divisor de águas para o meu negócio online. Os tutoriais avançados sobre marketing digital me ajudaram a triplicar minha receita!"</p>
          <footer>— Jane D.</footer>
        </blockquote>
        <blockquote>
          <p>"Como um novato no mundo online, o Beginner's Corner era exatamente o que eu precisava. Os guias são fáceis de entender e super prestativos."</p>
          <footer>— John S.</footer>
        </blockquote>
        <p>Junte-se à nossa comunidade e compartilhe suas experiências, faça perguntas e cresça juntos em nossos fóruns interativos.</p>
      </section>
      
      <footer className="footer">
        <button className="signup-button">Inscreva-se agora e comece sua jornada!</button>
        <nav>
          <ul>
            <li><a href="#">Contate-nos</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Siga-nos nas redes sociais</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
