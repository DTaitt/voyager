import * as React from 'react';
import * as _ from 'lodash';
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setDetailPageData } from './../../redux/state/detailPage/actions'
import { handleFavorites } from './../../redux/state/favorites/actions'
import { formatUrl } from './../../utils/url'
import { Restaurant } from './../../pages/ListPage' 

interface Props extends Restaurant {
    setDetailPageData(restaurant:Restaurant):void,
    handleFavorites(fav:Restaurant):void,
    favorites: [],
}

const Restaurant = (props:Props) => {
    const { setDetailPageData, favorites, ...restaurant } = props;

    const isInFav = favorites.some(((fav:Restaurant) => {
            return fav.id === restaurant.id
        }))

    return (
        <Card className='restaurant'>
            <Link 
                to={`restaurants/${formatUrl(restaurant.name)}/${restaurant.id}`}
                onClick={() => props.setDetailPageData(restaurant)}
            >
                <Image src={restaurant.image_url} />
            </Link>
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
                <Icon 
                    name={isInFav ? 'heart' : 'heart outline'} 
                    onClick={() => {props.handleFavorites(restaurant)}}
                />
            </Card.Content>
        </Card>
    );
}

const mapStateToProps = (state:any) => ({
    favorites: _.get(state, 'favorites', []),
})

const mapDispatchToProps = ({
    setDetailPageData,
    handleFavorites,
})

const S_Restaurant = connect(mapStateToProps, mapDispatchToProps)(Restaurant)
export default S_Restaurant;