import * as React from 'react';
import { PureComponent } from 'react'
import { Icon, Menu, Sidebar as _Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
    isSidebarOpen: boolean,
}

class Sidebar extends PureComponent<Props,{}> {
    state = {
        linkItems: [
            {
                path: '/',
                icon: 'home',
                label: 'Home',
            },
            {
                path: '/profile',
                icon: 'user',
                label: 'Profile',
            },
            {
                path: '/restaurants',
                icon: 'food',
                label: 'Restaurants',
            },
            {
                path: '/bars',
                icon: 'beer',
                label: 'Bars',
            },
        ]
    }
    render() {
        return (
            <_Sidebar 
                as={Menu} 
                animation='overlay' 
                icon='labeled' 
                inverted 
                vertical 
                visible={this.props.isSidebarOpen} 
                width='thin'
                height='100%'
            >
            {
                this.state.linkItems.map((item:any) => {
                    return(
                        <Link to={item.path} key={item.path}>
                            <Menu.Item as='div'>
                                <Icon name={item.icon} />
                                {item.label}
                            </Menu.Item>
                        </Link>
                    )
                })
            }
            </_Sidebar>
        )
    }
}

const mapStateToProps = (state:any) => ({
    isSidebarOpen: state.sidebar.isOpen,
})

const S_Sidebar = connect(mapStateToProps)(Sidebar)
export default S_Sidebar;