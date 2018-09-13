import * as React from 'react';
import { connect } from 'react-redux';

import { getRestaurants } from './../redux/state/restaurants/actions';

interface Props {
    getRestaurants():void,
}

class ListPage extends React.PureComponent<Props, {}> {
    componentDidMount() {
        this.props.getRestaurants();
    }

    render() {
        return (
            <p>ListPage</p>
        );
    }
}

const mapDispatchToProps = ({
    getRestaurants,
})

const cListPage = connect<Props, {}>(null, mapDispatchToProps)(ListPage);

export default cListPage;