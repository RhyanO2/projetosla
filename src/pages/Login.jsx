import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import img from "../assets/fig1.png"

export default function login(){
    return (
        <AuthLayout image={img}>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Senha" required/>
                <button type="submit">Entrar</button>
            </form>
            <p>Não tem conta? <Link to='/register'>Cadastre-se</Link></p>
        </AuthLayout>
    )
}

