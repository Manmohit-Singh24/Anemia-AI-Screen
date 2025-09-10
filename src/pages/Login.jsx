import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthData } from "../store/store";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("sih2025");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");


    const isLoggedIn = useSelector((state) => state.AuthData.isLoggedIn);

    if(isLoggedIn) navigate("/");

    const onSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "" || role === "") {
            setError("Please fill all the fields");
            return;
        }
        console.log(username, password, role);
        dispatch(setAuthData({ username, role, isLoggedIn: true }));

        const data = {
            username,
            role,
            isLoggedIn: true,
        };
        Cookies.set("authData", JSON.stringify(data), { expires: 30 });
        navigate(`/`);
    }
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-card "
            style={{ animation: "fadeIn 0.5s ease-in-out" }}
        >
            <div className="w-full max-w-md bg-card rounded-2xl shadow-xl p-8 space-y-6">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 dark:bg-rose-900/50 rounded-full mb-4">
                        <div className="animated-blood-drop">
                            <svg
                                className="w-10 h-10 text-rose-500 dark:text-rose-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2.25c-5.12 0-9.25 4.13-9.25 9.25 0 2.88 1.25 5.5 3.25 7.31l6 5.69 6-5.69c2-1.81 3.25-4.43 3.25-7.31C21.25 6.38 17.12 2.25 12 2.25Z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-foreground">
                        Asha AI-Screen
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Non-Invasive Anemia Screening Portal
                    </p>
                </div>
                <div id="login-form" className="space-y-6">
                    <div>
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Select Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option>ASHA Worker</option>
                            <option>Doctor</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-foreground bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-transform transform hover:scale-105"
                            onClick={onSubmit}
                        >
                            Sign In
                        </button>
                    </div>

                    {error && (
                        <span className="block sm:inline text-sm text-red-500 ">{error}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
