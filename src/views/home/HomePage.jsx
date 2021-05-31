import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import useGet from "../../utils/useGet";
import NavBar from "../../layout/NavBar";
import Welcome from "./Welcome";
import Character from "../character/Character";
import CharList from "../character/charList/CharList";
import Search from "../../layout/Search";
import {deleteToken} from "../../helpers/auth-helpers";
import MoreInfo from "../character/charInfo/MoreInfo";

const superheroToken = process.env.REACT_APP_SUPERHERO_TOKEN;

const HomePage = () => {
    const history = useHistory();
    const [selectedChars, setSelectedChars] = useState([]);
    const [query, setQuery] = useState("chuck");
    const [moreInfoChar, setMoreInfoChar] = useState({});

    const [data, setLoading, error] = useGet({
        url: `https://www.superheroapi.com/api.php/${superheroToken}/search/${query}`,
    });

    const logout = () => {
        deleteToken();
        history.push("/login");
    };

    const addChar = newChar => {
        const isFullTeam = selectedChars.length === 6;
        if (isFullTeam) return alert('You can only have 6 characters selected');

        const isDuplicate = !!selectedChars.find(addedChar => addedChar.id === newChar.id);
        if (isDuplicate) return alert('You already have this character on the list');

        return setSelectedChars(prevState => [...prevState, newChar]);
    }

    const removeChar = (charId) => {
        setSelectedChars(prevState => [...prevState.filter(selectedChar => selectedChar.id !== charId)]);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <NavBar logout={logout}/>
            <Welcome/>
            <Search getQuery={(q) => setQuery(q)}/>
            <Container>
                {!!data.length ? (
                    <Row lg={3} md={2} sm={1}>
                        {data.map((item) => (
                            <Col>
                                <Character
                                    key={item?.id}
                                    addChar={addChar}
                                    showInfoModal={setMoreInfoChar}
                                    {...item}
                                />
                            </Col>
                        ))}
                    </Row>
                ) : <h2>No results found for your query</h2>}
            </Container>
            <CharList
                selectedChars={selectedChars}
                showInfoModal={setMoreInfoChar}
                removeChar={removeChar}
            />
            <MoreInfo
                show={!!Object.keys(moreInfoChar).length}
                onHide={() => setMoreInfoChar({})}
                {...moreInfoChar}
            />
        </div>
    );
};

export default HomePage;
