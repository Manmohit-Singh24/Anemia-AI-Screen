import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "./store/store";
import "./App.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const cookieTheme = Cookies.get("theme");
        const authData = Cookies.get("authData");

        if (authData) {
            const data = JSON.parse(authData);
            dispatch(setAuthData({ ...data, isLoggedIn: true, theme: cookieTheme || "light" }));

            // navigate only if user is not already on correct route
            if (!data.isLoggedIn) {
                navigate("/login", { replace: true });
            }
        } else {
            navigate("/login", { replace: true });
        }
    }, [dispatch, navigate]);

    const theme = useSelector((state) => state.AuthData.theme);

    return (
        <div className={"w-screen h-screen overflow-scroll " + theme}>
            <Outlet />
        </div>
    );
}

export default App;
