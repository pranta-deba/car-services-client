import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state || "/";

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                navigate(form);
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left">
                    <img src={img1} alt="" />
                </div>
                <div className="flex-1 card shadow-2xl border py-8">
                    <h1 className="text-center text-4xl text-[#444] font-bold">Login</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Have an account? <Link to={'/sign_up'} state={location.state} className="text-[#FF3811] font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;