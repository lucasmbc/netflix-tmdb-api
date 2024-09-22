import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [rememberLogin, setRememberLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    };

    return (
        <>
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/BR-pt-20240916-TRIFECTA-perspective_c2bebe15-295b-4009-9a1c-893d9f501956_large.jpg"
                    alt="///"
                />

                <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

                <div className="fixed w-full px-4 py-24 z-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-nsans-bold">Login</h1>

                            <form
                                onSubmit={handleFormSubmit}
                                className="w-full flex flex-col py-4"
                            >
                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                                    Login
                                </button>

                                <div className="flex justify-between items-center text-gray-600">
                                    <p>
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={rememberLogin}
                                            onChange={(e) =>
                                                setRememberLogin(!rememberLogin)
                                            }
                                        />
                                        Remember me
                                    </p>

                                    <p>Need Help?</p>
                                </div>

                                <p className="my-4">
                                    <span className="text-gray-600 mr-2">
                                        New to NetFlix?
                                    </span>
                                    <Link to="/login">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
