import InputField from './InputField';
import Button from './Button';
//import SocialButton from './SocialButton';
//import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
                style={{ backgroundColor: 'var(--Background-color)' }} // Aplica a cor da variável
            >
                <div className="text-center">
                    <h2
                        className="text-2xl font-bold"
                        style={{ color: 'var(--text-color-Form)' }}  // Aplica a cor da variável
                    >
                        Acesse sua conta
                    </h2>
                    <p className="text-gray-600"></p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <InputField id="email" type="email" placeholder="Email" />
                        <InputField id="password" type="password" placeholder="Senha" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            {/* <a href="#" className="font-medium text-green-600 hover:text-green-500">
                            Esqueceu sua senha?
                            </a> */}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Button type="submit">Entrar</Button>
                    </div>
                </form>
                <div className="mt-6 grid grid-cols-1 justify-items-center items-center ">
                    { /*<SocialButton href="#">
                            <span className="sr-only">Continue with Google</span>
                            <FaGoogle />
                            Google
                        </SocialButton>*/}
                </div>
            </div>
        </div>
    );
};
export default LoginForm;