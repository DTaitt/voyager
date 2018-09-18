import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { toggleSidebar } from './../../redux/state/sidebar/actions'

import './Header.css'

interface Props {
    toggleSidebar():void,
}

const Header = (props:Props) => {
    return(
        <header className='header'>
            <h1 className='header__title'>Voyager</h1>
            <Icon 
                name='sidebar' 
                onClick={props.toggleSidebar}
                className='header__sidebar_toggle_icon'
            />
        </header>
    )
}

const mapDispatchToProps = ({
    toggleSidebar,
})

const S_Header = connect(null, mapDispatchToProps)(Header);
export default S_Header;