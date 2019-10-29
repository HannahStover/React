import React, { Component } from 'react';
import Menu from './MenuComponent';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { comment } from 'postcss';

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-md-5 col-12 m-1">
                    <h4>Comments</h4>
                    <ul>{comments.map(comment =>
                        <li key={comment.id} className="list-unstyled">
                            <ul key={comment.id} className="list-unstyled">
                                <li>{comment.comment}<br></br>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                            </ul></li>
                    )}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if (this.props.dish) {
            return (
                <div class="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail