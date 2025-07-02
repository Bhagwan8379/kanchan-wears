import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useLoginUserMutation } from '../redux/api/authApi';

const Login = () => {
    const [LoginUser, { isSuccess, isLoading, isError }] = useLoginUserMutation()
    const [isLogin, setIsLogin] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const canvasRef = useRef(null);

    // 🎉 Trigger confetti on mount
    useEffect(() => {
        if (canvasRef.current) {
            const myConfetti = confetti.create(canvasRef.current, {
                resize: true,
                useWorker: true,
            });

            myConfetti({
                particleCount: 80,
                spread: 120,
                origin: { y: 0.6 },
                colors: ['#ff69b4', '#ffc0cb', '#ff85a2', '#ffd1dc']
            });
        }
    }, []);

    const loginSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().min(8).max(20).required('Required'),
    });

    const registerSchema = Yup.object().shape({
        name: Yup.string().min(3).max(20).required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).max(20).required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            navigate('/admin');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="relative h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-rose-50">
            {/* 🎊 Confetti Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

            {/* Left Side - Branding Text */}
            <div className="w-full lg:w-1/2 h-[30vh] sm:h-[40vh] lg:h-screen bg-gradient-to-br from-pink-200 to-rose-300 flex flex-col items-center justify-center p-6 text-center relative z-10">
                <div className="space-y-4 w-full max-w-md">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                        Kanchan Women's Wear
                    </h1>
                    <p className="text-base sm:text-lg text-white">Traditional. Stylish. Elegant.</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-white relative z-10 overflow-y-auto">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl border border-rose-100 p-6 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center mb-4">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
                            {isLogin ? 'Sign in to your Kanchan account' : 'Join our fashion community'}
                        </p>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? 'login' : 'register'}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Formik
                                    initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                                    validationSchema={isLogin ? loginSchema : registerSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="space-y-4">
                                            {!isLogin && (
                                                <div>
                                                    <Field
                                                        name="name"
                                                        type="text"
                                                        placeholder="Full Name"
                                                        className={clsx(
                                                            'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none',
                                                            errors.name && touched.name
                                                                ? 'border-red-400 focus:ring-red-200'
                                                                : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
                                                        )}
                                                    />
                                                    <ErrorMessage name="name" component="div" className="text-sm text-red-500 mt-1" />
                                                </div>
                                            )}

                                            <div>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className={clsx(
                                                        'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none',
                                                        errors.email && touched.email
                                                            ? 'border-red-400 focus:ring-red-200'
                                                            : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
                                                    )}
                                                />
                                                <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                                            </div>

                                            <div>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    className={clsx(
                                                        'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none',
                                                        errors.password && touched.password
                                                            ? 'border-red-400 focus:ring-red-200'
                                                            : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
                                                    )}
                                                />
                                                <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
                                            </div>

                                            {!isLogin && (
                                                <div>
                                                    <Field
                                                        name="confirmPassword"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        className={clsx(
                                                            'w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none',
                                                            errors.confirmPassword && touched.confirmPassword
                                                                ? 'border-red-400 focus:ring-red-200'
                                                                : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
                                                        )}
                                                    />
                                                    <ErrorMessage
                                                        name="confirmPassword"
                                                        component="div"
                                                        className="text-sm text-red-500 mt-1"
                                                    />
                                                </div>
                                            )}

                                            <div>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={clsx(
                                                        'w-full py-3 rounded-xl text-white font-semibold transition-all',
                                                        isSubmitting
                                                            ? 'bg-pink-300'
                                                            : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'
                                                    )}
                                                >
                                                    {isSubmitting ? 'Processing...' : isLogin ? 'Sign In' : 'Register'}
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-6 text-center">
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm text-pink-600 hover:text-pink-800 font-medium"
                            >
                                {isLogin
                                    ? 'New to Kanchan? Register here'
                                    : 'Already have an account? Sign In'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
