import React, { useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

// 创建一个上下文供子组件使用
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const history = useHistory();

    useEffect(() => {
        // 监听用户的登录状态
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // 用户已登录
                history.push("/home");
            } else {
                // 用户已登出
                history.push("/");
            }
        });

        // 组件卸载时取消监听
        return () => unsubscribe();
    }, [history]);

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    );
};

// 创建一个自定义hook，使我们可以很容易地在任何组件中访问auth
export const useAuth = () => {
    return useContext(AuthContext);
};
