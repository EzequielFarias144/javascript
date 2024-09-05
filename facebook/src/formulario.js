const Form = (props) => {
    return (
        <div className="form">
            <input type="email" placeholder="Email ou telefone"></input>
            <input type="password"></input>
            <button className="entrar">Entrar</button> 
            <a href="#">Esqueceu a senha?</a>
            <button className="conta">Criar nova conta</button>
        </div>
    );
};

export default Form;