import * as React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


interface Props {
    key:string,
    restaurant: {
        id:string,
    name:string,
    image_url:string,
    is_closed:boolean,
    url:string,
    review_count:number,
    rating:number,
    price:string,
    phone:string,
    }
}

const DetailPage = (props:Props) => {
    const { restaurant } = props;
    return (
        <Card className='restuarant'>
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
            </Card.Content>
        </Card>
    );
}

const mapStateToProps = (state:any):any => ({
    restaurant: state.detailPage.data,
})

const CDetailPage = connect(mapStateToProps)(DetailPage)
export default CDetailPage;