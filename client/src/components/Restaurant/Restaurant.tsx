import * as React from 'react';
import { PureComponent } from 'react';

interface Props {
    key:string,
    name:string,
    image_url:string,
    is_closed:boolean,
    url:string,
    review_count:number,
    rating:number,
    price:string,
    phone:string,
}

export default class Restaurant extends PureComponent<Props, {}> {
    render() {
        return (
            <div className="restaurant">
                <h1>Restaurant</h1>
                <p>{this.props.name}</p>
                <p>{this.props.image_url}</p>
                <p>{this.props.is_closed.toString()}</p>
                <p>{this.props.url}</p>
                <p>{this.props.review_count}</p>
                <p>{this.props.rating}</p>
                <p>{this.props.price}</p>
                <p>{this.props.name}</p>
                <p>{this.props.phone}</p>
            </div>
        );
    }
}