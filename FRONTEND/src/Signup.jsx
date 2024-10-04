import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "./hooks/useSignup.js";
import GenderCheckbox from "./GenderCheckbox"; // Assuming you have a GenderCheckbox component

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(inputs);
        } catch (error) {
            console.error("Signup failed", error);
            // Handle error appropriately
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-black'>
            <div className='bg-black border border-yellow-400 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h1 className='text-4xl font-bold text-center text-yellow-100 mb-6'>
                    Sign Up <span className='text-yellow-400'>MovieWorld📺</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    {/* Username Field */}
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Username
                        </label>
                        <input
                            type='text'
                            placeholder='Enter the UserName'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    {/* Password Field */}
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm text-yellow-300'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='shadow-md appearance-none border border-yellow-300 rounded w-full py-2 px-3 text-yellow-300 bg-black leading-tight focus:outline-none focus:ring focus:ring-yellow-500'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Gender Checkbox */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block text-yellow-300'>
                        Already have an account?
                    </Link>

                    <div className='mt-6'>
                        <button 
                            className='w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-400 transition duration-200'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
