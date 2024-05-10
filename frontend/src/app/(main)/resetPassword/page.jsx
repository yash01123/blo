import { useRouter } from 'next/navigation';
import React, {  useRef, useState } from 'react'

const ResetPassword = () => {

    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const router = useRouter();

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbymail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            enqueueSnackbar('Email not registered', { variant: 'error' });
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        // console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            enqueueSnackbar('Invalid OTP', { variant: 'error' });
        }
    }

    const updatePassword = async (values) => {
        const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('Password updated successfully', { variant: 'success' });
            router.push("/login")
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: updatePassword
    });

    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
                       ResetPassword
                    </h2>
                    
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Email
                                </label>
                                <input
                                    name="password"
                                    ref={emailRef}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <button onClick={sendOTP} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send OTP</button>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                  Enter OTP
                                </label>
                                <input
                                    name="password"
                                    ref={otpRef}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <button onClick={verifyOTP} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Verify OTP</button>
                           {
                            showForm && (
                                <form action="" onSubmit={resetForm.handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    value={resetForm.values.password}
                                    onChange={resetForm.handleChange}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                   Repeat Password
                                </label>
                                <input
                                    id="password"
                                    value={resetForm.values.confirmPassword}
                                    onChange={resetForm.handleChange}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                            
                            </form>
                            )
                           }

                          
                        </div>
                       
                   
                </div>
            </div>

        </div>
    )
}

export default ResetPassword
