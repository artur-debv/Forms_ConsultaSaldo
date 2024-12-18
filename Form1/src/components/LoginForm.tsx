import InputField from './InputField';
import Button from './Button';
import logoJcsx from '../assets/logoJcsx.svg';
//import SocialButton from './SocialButton';
//import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const CreateUserFormSchema = z.object({
    email: z.string()
        .nonempty("Email é obrigatório")
        .email('O Formato do e-mail inválido'),
    password: z.string()
        .min(6, 'a senha precisa ter no minimo 6 caracteres ')
});

type CreateUserFormdata = z.infer<typeof CreateUserFormSchema>

const LoginForm = () => {

    const [OutPut, setOutPut] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors } }
        = useForm<CreateUserFormdata>({
            resolver: zodResolver(CreateUserFormSchema),
        })

    function CreateUser(data: any) {
        setOutPut(JSON.stringify(data, null, 2))
    }

    return (

        <div className="flex items-center justify-center flex-col min-h-screen">
            <div
                className="w-full max-w-md p-8  space-y-6 bg-white rounded-lg shadow-md"
                style={{ backgroundColor: 'var(--Background-color)' }} // Aplica a cor da variável
            >
                <div className="text-center">
                    <h2
                        className="text-2xl font-bold"
                        style={{ color: 'var(--text-color-Form)' }}  // Aplica a cor da variável
                    >
                    </h2>
                    <img
                        src={logoJcsx}
                        alt="Logo Jcsx"
                        className="mx-auto mb-10"
                        style={{ filter: 'invert(2)' }}
                    />

                    <p className="text-gray-600"></p>
                </div>
                <form onSubmit={handleSubmit(CreateUser)} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <InputField type="email" placeholder="Email" {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}
                        <InputField type="password" placeholder="Senha"  {...register('password')} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            {/* <a href="#" className="font-medium text-green-600 hover:text-green-500">
                            Esqueceu sua senha?
                            </a> */}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Button type="submit">Login</Button>
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

            <pre>{OutPut}</pre>

        </div>
    );
};
export default LoginForm;