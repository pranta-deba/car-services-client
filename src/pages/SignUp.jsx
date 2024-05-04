import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state || "/";


    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cPassword = e.target.cPassword.value;
        if (password !== cPassword) {
            alert("Passwords do not match");
            return;
        }
        createUser(email, password)
            .then(() => {
                e.target.reset();
                navigate(form);
            })
            .catch(err => {
                alert(err.message);
            })
    }

    // Google Sign in
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            toast.success('Sign in Successful')
            navigate(form)
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left">
                    <img src={img1} alt="" />
                </div>
                <div className="flex-1 card shadow-2xl border py-8">
                    <h1 className="text-center text-4xl text-[#444] font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" className="input input-bordered" name="cPassword" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#FF3811] text-white">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Or Sign In with</p>
                        <div className="flex items-center justify-center gap-4 py-4">
                            <button onClick={handleGoogleSignIn} className="bg-[#F5F5F8] rounded-full p-2 w-12 h-12 flex items-center justify-center btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_351_972)">
                                    <path d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28614V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z" fill="#FBBD00" />
                                    <path d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z" fill="#0F9D58" />
                                    <path d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.7139Z" fill="#31AA52" />
                                    <path d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z" fill="#3C79E6" />
                                    <path d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z" fill="#CF2D48" />
                                    <path d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z" fill="#EB4132" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_351_972">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></button>
                        </div>
                        <p>Already have an account? <Link to={'/sign_in'} state={location.state} className="text-[#FF3811] font-bold">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;