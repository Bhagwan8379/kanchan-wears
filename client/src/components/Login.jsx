import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useLoginUserMutation, useRegisterUserMutation } from "../redux/api/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Login = () => {
    const [LoginUser, { isSuccess, isError, error, isLoading }] = useLoginUserMutation();
    const [RegisterUser, { isSuccess: UserRegisSuccess, isError: UserRegiIserror, error: ResgiterUSererror, isLoading: registerUSerLoading }] = useRegisterUserMutation();
    const [isRegister, setIsRegister] = useState(false);
    const [timeLeft, setTimeLeft] = useState("00:00:00");
    const navigate = useNavigate();



    const registerSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        mobile: Yup.string().required("Mobile is required"),
        password: Yup.string().min(6, "Min 6 chars").required("Password required"),
        cpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password required"),
    });

    const loginSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
    });

    const formik = useFormik({
        initialValues: { name: "", email: "", mobile: "", username: "", password: "", cpassword: "" },
        validationSchema: isRegister ? registerSchema : loginSchema,
        onSubmit: async (values) => isRegister ? await RegisterUser(values) : await LoginUser(values),
    });

    useEffect(() => {
        if (isSuccess) {
            toast.success("You're Login Successfully");
            navigate("/user");
            formik.resetForm();
        }
        if (UserRegisSuccess) {
            toast.success("You're Login Successfully");
            formik.resetForm();
            setIsRegister(true);
            window.location.reload()
        }
    }, [isSuccess, UserRegisSuccess]);


    useEffect(() => {
        if (isError && error?.data?.message)
            toast.error(error.data.message);
    }, [isError, error]);

    useEffect(() => {
        if (UserRegiIserror && ResgiterUSererror?.data?.message)
            toast.error(ResgiterUSererror.data.message);
    }, [UserRegiIserror, ResgiterUSererror]);

    return (
        <div className="min-h-screen overflow-y-auto flex items-center justify-center bg-pink-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl flex flex-wrap md:flex-nowrap rounded-xl overflow-hidden shadow-lg bg-white">
                {/* LEFT SIDE - PROMOTION */}
                <div className="w-full md:w-2/5 bg-pink-600 p-6 sm:p-8 flex flex-col justify-between relative">
                    <div className="absolute top-4 left-4 bg-white text-pink-600 px-3 py-1 rounded-full text-xs font-bold">

                        <div className="s">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition font-medium"
                            >
                                <ArrowLeft size={20} />
                                <span>Back</span>
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">AWESOME</h1>
                        <p className="text-lg sm:text-xl text-white opacity-90 md:flex justify-center hidden">Women's Wear</p>
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-white font-medium ">{isRegister ? "NEW BUYER" : "BUYER LOGIN"}</p>
                        <div className="bg-white bg-opacity-20 p-1 rounded-lg">
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="w-full md:w-3/5 p-6 sm:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-6 text-center">
                        {isRegister ? "Create Account" : "Welcome Back"}
                    </h2>

                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        {isRegister && (
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className={clsx(
                                        "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                        formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-200"
                                    )}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                                )}
                            </div>
                        )}

                        {isRegister ? (
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={clsx(
                                        "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                        formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-200"
                                    )}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                )}
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    className={clsx(
                                        "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                        formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-200"
                                    )}
                                />
                                {formik.touched.username && formik.errors.username && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>
                                )}
                            </div>
                        )}

                        {isRegister && (
                            <div>
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Mobile"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                    className={clsx(
                                        "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                        formik.touched.mobile && formik.errors.mobile ? "border-red-500" : "border-gray-200"
                                    )}
                                />
                                {formik.touched.mobile && formik.errors.mobile && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.mobile}</p>
                                )}
                            </div>
                        )}

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className={clsx(
                                    "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                    formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-200"
                                )}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                            )}
                        </div>

                        {isRegister && (
                            <div>
                                <input
                                    type="password"
                                    name="cpassword"
                                    placeholder="Confirm Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cpassword}
                                    className={clsx(
                                        "w-full px-2 py-1 border-b-2 focus:border-pink-500 focus:outline-none",
                                        formik.touched.cpassword && formik.errors.cpassword ? "border-red-500" : "border-gray-200"
                                    )}
                                />
                                {formik.touched.cpassword && formik.errors.cpassword && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.cpassword}</p>
                                )}
                            </div>
                        )}

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-600">
                                <input type="checkbox" className="mr-2 accent-pink-500" />
                                Remember me
                            </label>
                            {!isRegister && (
                                <button type="button" className="text-pink-600 hover:underline">
                                    Forgot password?
                                </button>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || registerUSerLoading}
                            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition font-medium mt-6"
                        >
                            {(isLoading || registerUSerLoading) ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {isRegister ? "Registering..." : "Logging in..."}
                                </span>
                            ) : isRegister ? "Register" : "Login"}
                        </button>
                    </form>

                    <p className="text-center mt-4 text-sm text-gray-600">
                        {isRegister ? "Already have an account?" : "Don't have an account?"}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            className="text-pink-600 ml-1 font-medium hover:underline"
                        >
                            {isRegister ? "Login" : "Register"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
