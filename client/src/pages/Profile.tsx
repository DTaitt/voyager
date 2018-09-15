import * as React from 'react';
import * as _ from 'lodash';
import { PureComponent } from 'react'
import { connect } from 'react-redux';

import Restaurant from './../components/Restaurant/Restaurant'

interface Props {
    favorites: object[],
}

class Profile extends PureComponent<Props, {}> {
    render() {
        return (
            _.isEmpty(this.props.favorites)
            ? <p>No favorites</p>
            : this.props.favorites.map((fav:any) => {
                return(
                    <Restaurant
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