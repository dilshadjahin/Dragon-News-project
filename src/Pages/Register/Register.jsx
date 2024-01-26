
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const  {creatUser}= useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, url, email, password);

        // create user
        creatUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar/>

            
            <div className="w-full flex justify-center bg-base-200 ">


                <div className="card shrink-0 mt-6   shadow-2xl bg-base-100 w-[600px] px-12 ">
                    <form onSubmit={handleRegister} className="card-body rounded-none">

                        <h2 className="text-2xl font-semibold text-center ">Register your account</h2>
                        <hr />

                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text text-lg font-semibold text-[#403F3F]">Your Name</span>
                            </label>
                            <input type="name" placeholder="Enter your name" name="name" className="input input-bordered bg-base-200 rounded-none  " required />
                        </div>

                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-lg font-semibold text-[#403F3F]">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your Photo URL" name="url" className="input input-bordered bg-base-200 rounded-none  " required />
                        </div>


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

                         <div className="flex relative mt-2 ">
                        <input type="checkbox" name="" id="" className="" />
                       <p className=" font-semibold text-center absolute left-6 top-[-5px] ">Accept Term & Conditions
                        </p>
                       </div>
                        <div className="form-control mt-6">
                            <button className="p-3 rounded bg-[#403F3F] text-white">Register</button>
                        </div>

                        <p className="my-4 font-semibold text-center">Already Have An Account? <Link to='/login' className="text-blue-600">Login</Link>
                        </p>

            
                    </form>
                </div>

            </div>
            
        </div>
    );
};

export default Register;