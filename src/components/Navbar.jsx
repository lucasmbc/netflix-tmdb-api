import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="absolute w-full p-4 flex items-center justify-between z-50">
            <Link to="/">
                <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
                    netflix
                </h1>
            </Link>

            <div>
                <Link to="/login">
                    <button className="capitalize pr-4">entrar</button>
                </Link>

                <Link to="/signup">
                    <button className=" bg-red-600 px-6 py-2 rounded cursor-pointer">
                        Cadastre-se
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
