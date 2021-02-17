import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroupItemText } from 'reactstrap';


function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    if (comments != null) {
        const rate = comments.map((comment) => {
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

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-sm-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div></div>
            </div>
        );
    }
}



export default DishDetail;