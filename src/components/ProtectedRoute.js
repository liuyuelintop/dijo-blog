import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";


// more agile
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={(props) => (
            auth.currentUser
                ? <Component {...props} />
                : <Redirect to="/" />
        )} 
    />
);

// const ProtectedRoute = (props) => {
//     const { component: Component, path } = props;
//     return (
//         <Route 
//             path={path}
//             render={(routeProps) => (
//                 auth.currentUser
//                     ? <Component {...routeProps} />
//                     : <Redirect to="/" />
//             )} 
//         />
//     );
// };


export default ProtectedRoute;