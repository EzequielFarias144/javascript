const Form = (props) => {
    return (
        <div className="form">
            <input type="email" placeholder="Email ou telefone"></input><br />
            <input type="password"></input><br />
            <button className="entrar">Entrar</button> <br />
            <a href="#">Esqueceu a senha?</a><br />
            <a href="#">Criar nova conta</a><br />
            <p><a href="#">Crie uma Página</a> para uma celebridade, uma marca ou uma emprese.</p>
        </div>
    );
};

export default Form;