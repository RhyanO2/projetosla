

import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import img from "../assets/fig1.png"
export default function login(){
    return (
        <AuthLayout image={img}>
            <h2>login</h2>
            <form>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="Senha" required/>
                <button type="submit">Entra</button>
            </form>
            <p>Não tem conta? <Link to='/register'>Cadastre-se</Link></p>
        </AuthLayout>
    )
}