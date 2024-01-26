import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in 

        signIn(email, password)
        .then(result =>{
            console.log(result.user);

        })
        .catch(error  =>{
            console.error(error);
        })

    }
    return (
        <div>
            <Navbar />

            <div className="hero min-h-screen bg-base-200">


                <div className="card shrink-0   shadow-2xl bg-base-100 w-[620px] px-10 h-[500px]">
                    <form  onSubmit={handleLogin} className="card-body rounded-none ">

                        <h2 className="text-2xl font-semibold text-center my-4">Login your account</h2>
                        <hr />
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-lg font-semibold text-[#403F3F]">Email address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered bg-base-200 rounded-none  " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-[#403F3F]">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name="password" className="input input-bordered bg-base-200 rounded-none " required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="p-3 rounded bg-[#403F3F] text-white">Login</button>
                        </div>

                        <p className="my-4 font-semibold text-center">Don't Have An Account? <Link to='/register' className="text-red-600">Register</Link>
                        </p>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Login;