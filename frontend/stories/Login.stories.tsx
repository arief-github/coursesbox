import { store } from "../store";
import Login from "../pages/login";
import { Provider } from 'react-redux';

export default {
    title: "Pages/Login",
    component: Login
}

export const LoginPage = () => (
    <Provider store={store}>
        <Login/>
    </Provider>
);
