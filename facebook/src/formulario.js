const Form = (props) => {
    return (
        <div className="form">
            <input type="email" placeholder="Email ou telefone"></input>
            <input type="password"></input>
            <button>Entrar</button> 
            <a href="#">Esqueceu a senha?</a>
        </div>
    );
};

export default Form;