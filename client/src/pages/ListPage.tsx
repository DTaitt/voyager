import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import S_Restaurant from './../components/Restaurant/Restaurant'
import { getRestaurants } from './../redux/state/restaurants/actions';

export interface Props {
    getRestaurants():void,
    restaurants: Restaurant[],
    isRestaurantsDataLoaded: boolean,
}

export interface Restaurant {
    id:string,
    alias:string,
    name:string,
    image_url:string,
    is_closed:boolean,
    url:string,
    review_count:number,
    categories:object[],
    rating:number,
    coordinates:object,
    transactions:any,
    location:{ display_address:string[] },
    price:string,
    phone:string,
    display_phone:string,
    distance:number,
}

class ListPage extends React.PureComponent<Props, {}> {
    componentDidMount() {
        this.props.isRestaurantsDataLoaded === false && this.props.getRestaurants();
    }

    render() {
        return (
            this.props.isRestaurantsDataLoaded === false
            ? <p>...</p>
            : this.props.restaurants.map((restaurant:Restaurant) => {
                return(
                    <S_Restaurant 
                        key = { restaurant.id }
                        { ...restaurant }
                    />
                ) 
            })
        );
    }
}

const mapStateToProps = (state:any): any => ({
    restaurants: _.get(state, 'restaurants.data', []),
    isRestaurantsDataLoaded: _.get(state, 'restaurants.isDataLoaded', false),
})

const mapDispatchToProps = ({
    getRestaurants,
})

const cListPage = connect<Props, {}>(mapStateToProps, mapDispatchToProps)(ListPage);
export default cListPage;