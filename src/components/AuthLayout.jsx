import './AuthLayout.css'

function AuthLayout({children,image}){
    return (
        <div className="auth-container">
            <div className="auth-image">
                <img src={image} alt="Alt visu" />
            </div>
            <div className="auth-form">
                {children}
            </div>
        </div>
    );
}
export default AuthLayout