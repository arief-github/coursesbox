import type { NextPage } from "next";
import { Button } from "../components/Button/Button";
import { CenteredTile } from "../components/Tile";

const User: NextPage = () => {
    const userMock = { username: "John Doe", email: "john@doe.com" };

    const logoutHandler = async () => {
        console.log("logout");
    }

    return (
        <CenteredTile header="profile">
            <h3>username: {userMock.username} </h3>
            <h3>email: {userMock.email}</h3>
            <Button onClick={logoutHandler}>Logout</Button>
        </CenteredTile>
    )
}

export default User;