import { store } from "../store";
import User from "../pages/user";
import { Provider } from 'react-redux';

export default {
    title: "Pages/User",
    component: User
}

export const UserPage = () => (
    <Provider store={store}>
        <User/>
    </Provider>
);