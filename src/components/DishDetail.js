import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroupItemText } from 'reactstrap';

class DishDetails extends React.Component {
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const rate = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ListGroupItemText>{comment.comment}</ListGroupItemText>
                        <ListGroupItemText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</ListGroupItemText>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {rate}
                </div>
            );
        } else {
            return (
                <div>
                    <div></div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-sm-5 m-1">
                            {this.renderComments(this.props.dish)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetails;