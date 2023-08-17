import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const LogOut = () => {
    const history = useHistory();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    }

    // 如果用户未登录，不渲染任何内容
    if (!auth.currentUser) return null;

    return (
        <div className="logout-container">
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default LogOut;
