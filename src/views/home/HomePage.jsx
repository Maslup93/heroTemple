import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import useGet from "../../utils/useGet";
import NavBar from "../../layout/NavBar";
import Welcome from "./Welcome";
import Character from "../character/Character";
import CharList from "../character/charList/CharList";
import Search from "../../layout/Search";
import {deleteToken} from "../../helpers/auth-helpers";

const HomePage = () => {
    const history = useHistory();
    const [query, setQuery] = useState("chuck");
    const [data, setLoading, error] = useGet({
        url: `https://www.superheroapi.com/api.php/1111393692672065/search/${query}`,
    });

    const logout = () => {
        deleteToken();
        history.push("/login");
    };

    return (
        <div>
            <NavBar logout={logout}/>
            <Welcome/>
            <Search getQuery={(q) => setQuery(q)}/>
            <Container>
                <Row>
                    {data.map((item) => {
                        return <Character key={item?.id}
                            {...item}
                        />;
                    })}
                </Row>
            </Container>

            <CharList/>
        </div>
    );
};

export default HomePage;
