import React from 'react';
import NavBar from '../../layout/NavBar';
import Welcome from './Welcome';
import CharList from '../character/charList/CharList';
import Search from '../../layout/Search';


const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Welcome/>
            <Search/>
            <CharList/>
        </div>
    )
}

export default HomePage
