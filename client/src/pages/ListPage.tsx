import * as React from 'react';
import * as _ from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

import S_Business from './../components/Business/Business'
import { setListPageData } from './../redux/state/listPage/actions';

import { getRestaurants } from './../redux/state/restaurants/actions';
import { getBars } from './../redux/state/bars/actions';

import './ListPage.css';

export interface Props {
    getRestaurants():void,
    getBars():void,
    restaurants: any,
    bars:any,
    setListPageData(listPageData:[]):void,
    listPageData: Business[],
    isListPageDataSet: boolean,
    isBarsDataLoaded:boolean,
    isRestaurantsDataLoaded:boolean,
    match: {
        params: {
            category:string,
        }
    },
    pathname:string,
}

export interface Business {
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
    category:string,
}

class ListPage extends Component<Props, {}> {
    componentDidMount() {
        this.getListPageData();
    }

    componentDidUpdate(prevProps:Props) {
        prevProps.match.params.category !== this.props.match.params.category && this.getListPageData();
    }

    async getListPageData() {
        switch (this.props.match.params.category) {
            case 'restaurants':
                this.props.isRestaurantsDataLoaded === false && await this.props.getRestaurants();
                this.props.setListPageData(this.props.restaurants)
                break;
            case 'bars':
                this.props.isBarsDataLoaded === false && await this.props.getBars();
                this.props.setListPageData(this.props.bars)
                break;
            default:
                this.props.isRestaurantsDataLoaded === false && await this.props.getRestaurants();
                this.props.setListPageData(this.props.restaurants)
                break;
        }
    }

    render() {
        return (
            <section className='business_list'>
                <h2 className='business_list__title'>{this.props.match.params.category}</h2>
                {
                    this.props.isListPageDataSet === false
                    ? (
                        <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                        )
                    : this.props.listPageData.map((business:Business) => {
                        return(
                            <S_Business 
                                key = { business.id }
                                routeParams = { this.props.match.params }
                                { ...business }
                            />
                        ) 
                    })
                }
            </section>
        );
    }
}

const mapStateToProps = (state:any): any => ({
    restaurants: _.get(state, 'restaurants.data', []),
    bars: _.get(state, 'bars.data', []),
    listPageData: _.get(state, 'listPage.data', []),
    isListPageDataSet: _.get(state, 'listPage.isDataSet', false),
    isRestaurantsDataLoaded: _.get(state, 'restaurants.isDataLoaded', false),
    isBarsDataLoaded: _.get(state, 'bars.isDataLoaded', false),
    pathname: _.get(state, 'router.location.pathname', '')
})

const mapDispatchToProps = ({
    getRestaurants,
    getBars,
    setListPageData,
})

const S_ListPage = connect<Props, {}>(mapStateToProps, mapDispatchToProps)(ListPage);
export default S_ListPage;