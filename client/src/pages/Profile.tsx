import * as React from 'react';
import * as _ from 'lodash';
import { PureComponent } from 'react'
import { connect } from 'react-redux';

import S_Business from './../components/Business/Business'

interface Props {
    favorites: [],
}

class Profile extends PureComponent<Props, {}> {
    render() {
        return (
            _.isEmpty(this.props.favorites)
            ? <p>No favorites</p>
            : this.props.favorites.map((fav:any) => {
                return(
                    <S_Business
                        key = { fav.id }
                        { ...fav }
                    />

                ) 
            })
        );
    }
}

const mapStateToProps = (state:any) => ({
    favorites: _.get(state, 'favorites', []),
})

const S_Profile = connect(mapStateToProps)(Profile);
export default S_Profile;