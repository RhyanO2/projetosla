import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import img from "../assets/Fig2.png";

export default function Register(){
    return (
        <AuthLayout image={img}>
            <h2>Register</h2>
            <form action="">
                <input type="text" placeholder="Nome de usuário" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Senha" required/>
                
                <button type="submit">Registrar</button>
            </form>
            <p>Já tem conta? <Link to='/'>Login</Link></p>
        </AuthLayout>
    )
}