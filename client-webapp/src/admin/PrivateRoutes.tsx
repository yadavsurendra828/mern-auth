import { useSelector } from "react-redux";
import { history } from "./helpers";

const PrivateRoute = ({ children }: any) => {
    const { user } = useSelector((state: any) => ({ ...state.auth }));
    return user ? children : history.push("/#/admin/login");
  };
  
  export default PrivateRoute;