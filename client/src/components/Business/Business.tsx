import * as React from 'react';
import * as _ from 'lodash';
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setDetailPageData } from './../../redux/state/detailPage/actions'
import { handleFavorites } from './../../redux/state/favorites/actions'
import { formatUrl } from './../../utils/url'
import { Business } from './../../pages/ListPage' 

interface Props extends Business {
    setDetailPageData(business:Business):void,
    handleFavorites(fav:Business):void,
    favorites: [],
    routeParams: {
        category:string,
    }
}

const Business = (props:Props) => {
    let { 
        setDetailPageData, 
        routeParams, 
        favorites, 
        ...business 
    } = props;
    
    
    business = 
    business.category 
    ? business
    : {
        ...business, 
        ...{
            category:routeParams.category
        }
    }

    const isInFav = favorites.some(((fav:Business) => {
            return fav.id === business.id
        }))

    return (
        <Card className={business.category}>
            <Link 
                to={`/${business.category}/${formatUrl(business.name)}/${business.id}`}
                onClick={() => props.setDetailPageData(business)}
            >
                <Image src={business.image_url} />
            </Link>
            <Card.Content>
            <Card.Header>{business.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>Is closed: {business.is_closed.toString()}</p>
                <a href={business.url}>Go to Yelp</a>
                <p>Review Count: {business.review_count}</p>
                <p>Rating: {business.rating}</p>
                <p>Price: {business.price}</p>
                <p>Phone: {business.phone}</p>
                <p>Address: {`${business.location.display_address[0]} ${business.location.display_address[1]}`}</p>
                <Icon 
                    name={isInFav ? 'heart' : 'heart outline'} 
                    onClick={() => {props.handleFavorites(business)}}
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

const S_Business = connect(mapStateToProps, mapDispatchToProps)(Business)
export default S_Business;