import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import useGet from "../../utils/useGet";
import NavBar from "../../layout/NavBar";
import Welcome from "./Welcome";
import Character from "../character/Character";
import CharList from "../character/charList/CharList";
import Search from "../../layout/Search";
import {deleteToken, getToken} from "../../helpers/auth-helpers";
import MoreInfo from "../character/charInfo/MoreInfo";

const superheroToken = process.env.REACT_APP_SUPERHERO_TOKEN;

const HomePage = () => {
    const isLogged = !!getToken();

    useEffect(() => {
        if(!isLogged) history.push('./login')
    }, [isLogged]);

    const history = useHistory();
    const [selectedChars, setSelectedChars] = useState([]);
    const [query, setQuery] = useState("chuck");
    const [moreInfoChar, setMoreInfoChar] = useState({});

    const [data, loading, error] = useGet({
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

        const newCharAlignment = newChar.biography?.alignment || 'neutral';

        if (newCharAlignment !== 'neutral') {
            const sameAlignmentCharsCount = selectedChars
                .filter(char => char.biography?.alignment === newCharAlignment)
                .length;
            if (sameAlignmentCharsCount >= 3)
                return alert(`Only 3 characters with the same alignment are allowed\nYou already have 3 ${newCharAlignment} characters on the list`);
        }

        return setSelectedChars(prevState => [...prevState, newChar]);
    }

    const removeChar = (charId) => {
        setSelectedChars(prevState => [...prevState.filter(selectedChar => selectedChar.id !== charId)]);
    }

    const renderCharContent = () => {
        if (loading) return <Row>
            <Col>
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </Col>
        </Row>;
        if (error) return <Row>
            <Col>
                <h1 style={{ textAlign: 'center' }}>There was an error in the request. Please try again</h1>
            </Col>
        </Row>
        if (!data.length) return <Row>
            <Col>
                <h2 style={{ textAlign: 'center' }}>No results found for your query</h2>
            </Col>
        </Row>;
        return (
            <Row lg={3} md={2} sm={1}>
                {data.map((item) => (
                    <Col key={item?.id}>
                        <Character
                            addChar={addChar}
                            showInfoModal={setMoreInfoChar}
                            {...item}
                        />
                    </Col>
                ))}
            </Row>
        )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <NavBar logout={logout}/>
            <Welcome/>
            <Search getQuery={setQuery}/>
            <Container>
                {renderCharContent()}
            </Container>
            {!loading && !error && data.length > 6 && <Search getQuery={setQuery}/>}
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
