import { useSelector, useDispatch } from "react-redux";
import {
    LogOut,
    Sun,
    Moon,
    HeartPulse,
    LayoutDashboard,
    Users2,
    Settings as SettingsIcon,
    Send,
    Presentation
} from "lucide-react";
import { toogleTheme } from "../store/store";
import Cookies from "js-cookie";
import { setAuthData } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Patient from "../components/Patients";
import Referrals from "../components/Referrals";
import Settings from "../components/Settings";
import LocalUserDashboard from "../components/LocalUserDashboard";
import ConsultationPage from "../components/ConsultationPage";
import TrainingPage from "../components/TrainingPage";
const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page } = useParams();

    const { username, role, theme } = useSelector((state) => state.AuthData);
    const onToggleTheme = () => {
        dispatch(toogleTheme());
        Cookies.set("theme", theme === "light" ? "dark" : "light");
    };

    const onLogout = () => {
        dispatch(setAuthData({ username: undefined, role: undefined, isLoggedIn: false }));
        Cookies.remove("authData");
        navigate("/login");
    };

    const pageComponent = (() => {
        switch (page) {
            case undefined:
                if (role === "Patient") return <LocalUserDashboard />;
                return <Dashboard />;
            case "Patients":
                if (role === "Patient") return <ConsultationPage />;
                return <Patient />;

            case "referrals":
                if (role !== "Patient") return <Referrals />;
            case "settings":
                return <Settings />;
            case "tutorial":
                if (role === "ASHA Worker") return <TrainingPage />;
            default:
                navigate("/");
                return <></>;
        }
    })();

    return (
        <div className="bg-background" style={{ animation: "fadeIn 0.5s ease-in-out;" }}>
            <div className="lg:flex gap-20">
                {/* <!-- Sidebar --> */}
                <div
                    id="sidebar"
                    className="w-full lg:w-64 bg-rose-900 text-white flex lg:flex-col justify-between p-4 lg:min-h-screen fixed lg:relative bottom-0 lg:bottom-auto z-40 shadow-2xl lg:shadow-none"
                >
                    <div className="flex lg:flex-col w-full justify-around lg:justify-start">
                        <div className="hidden lg:flex items-center mb-10 px-2">
                            <HeartPulse className="mr-2 w-10 h-10" />
                            <span className="text-2xl font-bold">Asha AI-Screen</span>
                        </div>
                        <nav className="flex lg:flex-col gap-2 w-full justify-around lg:justify-start">
                            <Link
                                to={`/`}
                                className={
                                    "sidebar-link nav-link flex flex-col lg:flex-row items-center p-3 rounded-xl text-center lg:text-left" +
                                    (page === undefined ? " active" : "")
                                }
                            >
                                <LayoutDashboard />
                                <span className="text-xs lg:text-base mt-1 lg:mt-0 lg:ml-4">
                                    Dashboard
                                </span>
                            </Link>
                            <Link
                                to={`/Patients`}
                                className={
                                    "sidebar-link nav-link flex flex-col lg:flex-row items-center p-3 rounded-xl text-center lg:text-left" +
                                    (page === "Patients" ? " active" : "")
                                }
                            >
                                <Users2 />
                                <span className="text-xs lg:text-base mt-1 lg:mt-0 lg:ml-4">
                                    {role === "Patient" ? "Consultation" : "Patients"}
                                </span>
                            </Link>
                            {role !== "Patient" && (
                                <Link
                                    to={`/referrals`}
                                    className={
                                        "sidebar-link nav-link flex flex-col lg:flex-row items-center p-3 rounded-xl text-center lg:text-left" +
                                        (page === "referrals" ? " active" : "")
                                    }
                                >
                                    <Send />
                                    <span className="text-xs lg:text-base mt-1 lg:mt-0 lg:ml-4">
                                        Referrals
                                    </span>
                                </Link>
                            )}
                            {role === "ASHA Worker" && (
                                <Link
                                    to={`/tutorial`}
                                    className={
                                        "sidebar-link nav-link flex flex-col lg:flex-row items-center p-3 rounded-xl text-center lg:text-left" +
                                        (page === "referrals" ? " active" : "")
                                    }
                                >
                                    <Presentation />
                                    <span className="text-xs lg:text-base mt-1 lg:mt-0 lg:ml-4">
                                        Tutorial
                                    </span>
                                </Link>
                            )}
                            <Link
                                to={`/settings`}
                                className={
                                    "sidebar-link nav-link flex flex-col lg:flex-row items-center p-3 rounded-xl text-center lg:text-left" +
                                    (page === "settings" ? " active" : "")
                                }
                            >
                                <SettingsIcon />
                                <span className="text-xs lg:text-base mt-1 lg:mt-0 lg:ml-4">
                                    Settings
                                </span>
                            </Link>
                        </nav>
                    </div>
                    <div className="hidden lg:block border-t border-rose-800 pt-4">
                        <div className="flex items-center">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://fra.cloud.appwrite.io/v1/storage/buckets/68bb56f500178e97ff9a/files/68bf3a5f0034b469d215/view?project=68b5e29b0003889dba17&mode=admin"
                            />
                            <div className="ml-3">
                                <p id="user-name" className="text-sm font-medium">
                                    {username}
                                </p>
                                <p id="user-role" className="text-xs text-rose-300">
                                    {role}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex space-x-2">
                                {/* Logout Button */}
                                <button
                                    onClick={onLogout}
                                    className="flex-1 mr-2 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-foreground bg-rose-600 hover:bg-rose-700 focus:outline-none"
                                >
                                    <LogOut className="w-4 h-4 mr-2" /> Logout
                                </button>

                                {/* Theme Toggle */}
                                <button
                                    onClick={onToggleTheme}
                                    className="p-2 rounded-md bg-rose-600 hover:bg-rose-700 text-foreground"
                                >
                                    {theme === "dark" ? (
                                        <Moon className="w-4 h-4" />
                                    ) : (
                                        <Sun className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <main className="flex-1  pb-24 lg:pb-0">
                    <header className="lg:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm z-30">
                        <div className="flex items-center">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://fra.cloud.appwrite.io/v1/storage/buckets/68bb56f500178e97ff9a/files/68bf3a5f0034b469d215/view?project=68b5e29b0003889dba17&mode=admin"
                                alt="User Avatar"
                            />
                            <div className="ml-2">
                                <p
                                    id="user-name-mobile"
                                    className="text-sm font-medium text-gray-800 dark:text-foreground"
                                >
                                    {username}
                                </p>
                                <p
                                    id="user-role-mobile"
                                    className="text-xs text-rose-600 dark:text-rose-400 font-semibold"
                                >
                                    {role}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                id="theme-toggle-mobile"
                                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                onClick={onToggleTheme}
                            >
                                {theme === "dark" ? (
                                    <Moon className="w-4 h-4" />
                                ) : (
                                    <Sun className="w-4 h-4" />
                                )}
                            </button>
                            <button
                                id="logout-button-mobile"
                                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                onClick={onLogout}
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                            </button>
                        </div>
                    </header>
                    <div
                        id="page-container"
                        className="p-4 md:p-10 lg:mt-0 h-screen  overflow-scroll"
                    >
                        {pageComponent}
                    </div>
                </main>
            </div>
            {/* <!-- Modals --> */}
            <div id="Patient-modal" className="modal">
                <div id="Patient-modal-content" className="modal-content max-w-3xl"></div>
            </div>
            <div id="referral-modal" className="modal">
                <div id="referral-modal-content" className="modal-content max-w-lg"></div>
            </div>
        </div>
    );
};

export default Layout;
