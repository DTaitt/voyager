import * as React from 'react';
import * as _ from 'lodash';
import { PureComponent } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDetailPageData } from './../redux/state/detailPage/actions';
import { setListPageData } from './../redux/state/listPage/actions';
import { getRestaurants } from './../redux/state/restaurants/actions'
import { getBars } from './../redux/state/bars/actions'
import { Business } from './ListPage';

import './DetailPage.css'

type Props = {
    key:string,
    setDetailPageData(business:Business | undefined):void,
    setListPageData(businesses:Business[] | undefined):void,
    isDetailPageDataSet: boolean,
    pathname: string,
    getRestaurants():void,
    getBars():void,
    restaurant: Business,
    restaurants?: Business[],
    bars?: Business[],
    listPageData: Business[],
    business: Business,
    match: {
        params: {
            category:string,
            businessId:string,
        }
    }
}

class DetailPage extends PureComponent<Props, {}> {
    componentDidMount() {
        this.props.isDetailPageDataSet === false && this.setListPageAndDetailPageData();
    }
    
    async setListPageAndDetailPageData() {
        switch (this.props.match.params.category) {
            case 'restaurants':
                await this.props.getRestaurants();
                this.props.setListPageData(this.props.restaurants)
                break;
            case 'bars':
                await this.props.getBars();
                this.props.setListPageData(this.props.bars)
                break;
            default:
                await this.props.getRestaurants();
                this.props.setListPageData(this.props.restaurants)
                break;
        }

        const { businessId } = this.props.match.params;
        const currentBusiness = this.props.listPageData.find((business:Business) => {
            return business.id === businessId;
        })

        this.props.setDetailPageData(currentBusiness)
    }

    render() {
        return (
            this.props.isDetailPageDataSet === false
            ? <p>...</p>
            : <Card className='business_detail'>
                <Image src={this.props.business.image_url} className='business_detail__image' />
                <Card.Content>
                <Card.Header>{this.props.business.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>Is closed: {this.props.business.is_closed.toString()}</p>
                    <Link to={this.props.business.url}>Go to Yelp</Link>
                    <p>Review Count: {this.props.business.review_count}</p>
                    <p>Rating: {this.props.business.rating}</p>
                    <p>Price: {this.props.business.price}</p>
                    <p>Phone: {this.props.business.phone}</p>
                    <p>Address: {`${this.props.business.location.display_address[0]} ${this.props.business.location.display_address[1]}`}</p>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state:any):any => ({
    restaurants: _.get(state, 'restaurants.data', []),
    bars: _.get(state, 'bars.data', []),
    isDetailPageDataSet: _.get(state, 'detailPage.isDataSet', false),
    isListPageDataSet: _.get(state, 'listPage.isDataSet', false),
    listPageData: _.get(state, 'listPage.data', []),
    business: _.get(state, 'detailPage.data', {}),
    pathname: _.get(state, 'router.location.pathname', ''),
})

const mapDispatchToProps = ({
    setDetailPageData,
    setListPageData,
    getRestaurants,
    getBars,
})

const C_DetailPage = connect(mapStateToProps, mapDispatchToProps)(DetailPage)
export default C_DetailPage;