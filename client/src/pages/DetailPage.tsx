import * as React from 'react';
import * as _ from 'lodash';
import { PureComponent } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDetailPageData } from './../redux/state/detailPage/actions';
import { getRestaurants } from './../redux/state/restaurants/actions'
import { parseRestaurantIdFromUrl } from './../utils/url'
import { Restaurant } from './ListPage';

type Props = {
    key:string,
    setDetailPageData(restaurant:Restaurant | undefined):void,
    isDetailPageDataSet: boolean,
    pathname: string,
    getRestaurants():void,
    restaurant: Restaurant,
    restaurants: Restaurant[],
}

class DetailPage extends PureComponent<Props, {}> {
    componentDidMount() {
        this.props.isDetailPageDataSet === false && this.setRestaurantsAndDetailPageData();
    }
    
    async setRestaurantsAndDetailPageData() {
        const restaurantId = parseRestaurantIdFromUrl(this.props.pathname);
        
        await this.props.getRestaurants();
        const currentRestaurant = this.props.restaurants.find((restaurant:Restaurant) => {
            return restaurant.id === restaurantId;
        })

        this.props.setDetailPageData(currentRestaurant)
    }

    render() {
        const { restaurant } = this.props;
        return (
            this.props.isDetailPageDataSet === false
            ? <p>...</p>
            : <Card className='restaurant'>
                <Image src={restaurant.image_url} />
                <Card.Content>
                <Card.Header>{restaurant.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>Is closed: {restaurant.is_closed.toString()}</p>
                    <Link to={restaurant.url}>Go to Yelp</Link>
                    <p>Review Count: {restaurant.review_count}</p>
                    <p>Rating: {restaurant.rating}</p>
                    <p>Price: {restaurant.price}</p>
                    <p>Phone: {restaurant.phone}</p>
                    <p>Address: {`${restaurant.location.display_address[0]} ${restaurant.location.display_address[1]}`}</p>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state:any):any => ({
    restaurants: _.get(state, 'restaurants.data', []),
    restaurant: _.get(state, 'detailPage.data', {}),
    isDetailPageDataSet: _.get(state, 'detailPage.isDataSet', false),
    pathname: _.get(state, 'router.location.pathname', ''),
})

const mapDispatchToProps = ({
    setDetailPageData,
    getRestaurants,
})

const C_DetailPage = connect(mapStateToProps, mapDispatchToProps)(DetailPage)
export default C_DetailPage;