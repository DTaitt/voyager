import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import CRestaurant from './../components/Restaurant/Restaurant'
import { getRestaurants } from './../redux/state/restaurants/actions';

interface Props {
    getRestaurants():void,
    restaurants: [],
    isRestaurantsDataLoaded: boolean,
}

class ListPage extends React.PureComponent<Props, {}> {
    componentDidMount() {
        this.props.isRestaurantsDataLoaded === false && this.props.getRestaurants();
    }

    render() {
        return (
            this.props.isRestaurantsDataLoaded === false
            ? <p>...</p>
            : this.props.restaurants.map((restaurant:any) => {
                return <CRestaurant 
                    key = { restaurant.id }
                    id = { restaurant.id }
                    name = { restaurant.name }
                    image_url = { restaurant.image_url }
                    is_closed = { restaurant.is_closed }
                    url = { restaurant.url }
                    review_count = { restaurant.review_count }
                    rating = { restaurant.rating }
                    price = { restaurant.price }
                    phone = { restaurant.display_phone }
                />
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