import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthData } from "../store/store";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const AuthPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("sih2025");

    const [role, setRole] = useState("Patient");
    const [error, setError] = useState("");
    const [roleSelected, setRoleSelected] = useState(false);
    const isLoggedIn = useSelector((state) => state.AuthData.isLoggedIn);

    const [pageComponent, setPageComponent] = useState(<></>);
    const [renderedOTP, setRenderedOTP] = useState(false);

    if (isLoggedIn) navigate("/");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            setError("Please select a role");
            return;
        }
        if (role && !roleSelected) {
            setRoleSelected(true);
            switch (role) {
                case "Patient":
                    setUserId("Devika-2022");
                    setPageComponent(<PatientLogin patientId={userId} setPatientId={setUserId} />);
                    break;
                case "Hospital":
                    setEmail("apex@gmail.com");
                    setPageComponent(
                        <HospitalLogin
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />,
                    );
                    break;
                case "ASHA":
                    setUserId("Kiran-7172");
                    setPageComponent(<AshaLogin ashaId={userId} setAshaId={setUserId} />);
                    break;
                case "DHO":
                    setEmail("gurleenDHO@gmail.com");
                    setPageComponent(
                        <AdminLogin
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />,
                    );
                    break;
                default:
                    setPageComponent(<></>);
                    break;
            }
            return;
        }
        setError("");

        if (pageComponent) {
            switch (role) {
                case "Patient":
                    if (userId === "") {
                        setError("Please fill all the fields");
                        return;
                    }
                    break;
                case "Hospital":
                    if (email === "" || password === "") {
                        setError("Please fill all the fields");
                        return;
                    }
                    setPageComponent(<OTPVerification />);
                    break;
                case "ASHA":
                    if (userId === "") {
                        setError("Please fill all the fields");
                        return;
                    }
                    setPageComponent(<OTPVerification />);
                    break;
                case "DHO":
                    if (email === "" || password === "") {
                        setError("Please fill all the fields");
                        return;
                    }
                    setPageComponent(<OTPVerification />);

                    break;
                default:
                    setPageComponent(<></>);
                    return;
            }
        }
        setError("");

        if (!renderedOTP && role !== "Patient") {
            setPageComponent(<OTPVerification />);
            setRenderedOTP(true);
            return;
        }

        const username =
            role === "Patient"
                ? "Devika"
                : role === "ASHA"
                ? "Kiranveer Singh"
                : role === "DHO"
                ? "Gurleen Kaur"
                : "Apex Hospital";
        dispatch(setAuthData({ username: username, role, isLoggedIn: true }));

        const data = {
            username,
            role,
            isLoggedIn: true,
        };
        Cookies.set("demoAppAuthData", JSON.stringify(data), { expires: 30 });
        navigate(`/`);
    };
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
                            className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md 
                                ${roleSelected ? "cursor-not-allowed" : ""}`}
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            disabled={roleSelected}
                        >
                            <option>Patient</option>
                            <option>ASHA</option>
                            <option>Hospital</option>
                            <option>DHO</option>
                        </select>
                    </div>
                    {roleSelected && <div>{pageComponent}</div>}

                    <div>
                        <button
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-background bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-transform transform hover:scale-105"
                            onClick={onSubmit}
                        >
                           Continue
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

export default AuthPage;

const PatientLogin = ({ patientId, setPatientId }) => {
    patientId = "Devika-1234"
    return (
        <div>
            <label
                htmlFor="patientId"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                PatientId
            </label>
            <div className="mt-1">
                <input
                    id="patientId"
                    name="patientId"
                    type="text"
                    defaultValue={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                />
            </div>
        </div>
    );
};


const HospitalLogin = ({ email, setEmail, password, setPassword }) => {
    email = "apex@gmail.com";
    return (
        <>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    />
                </div>
            </div>
        </>
    );
};

const AshaLogin = ({ ashaId, setAshaId }) => {
    ashaId = "Kiran-7172";
    return (
        <div>
            <label
                htmlFor="ashaId"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                Asha Id
            </label>
            <div className="mt-1">
                <input
                    id="ashaId"
                    name="ashaId"
                    type="text"
                    value={ashaId}
                    onChange={(e) => setAshaId(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

const AdminLogin = ({ email, setEmail, password, setPassword }) => {
    email = "gurleenDHO@gmail.com";
    return (
        <>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    />
                </div>
            </div>
        </>
    );
};

const OTPVerification = () => {
    return (
        <>
            <p className="text-sm text-gray-700 dark:text-gray-400">
                Please enter the OTP sent to your Mobile Number
            </p>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Enter OTP"
                    defaultValue={"1234"}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md"
                />
            </div>
        </>
    );
};
