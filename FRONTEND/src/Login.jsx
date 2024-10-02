import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "./hooks/useLogin.js";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-black'>
            <div className='bg-black border border-yellow-400 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h1 className='text-4xl font-bold text-center text-yellow-100 mb-6'>
                    Login <span className='text-yellow-400'>MovieWorld📺</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Username
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block text-yellow-300'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='mt-6'>
                        <button 
                            className='w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-400 transition duration-200'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
	);
};
export default Login;
