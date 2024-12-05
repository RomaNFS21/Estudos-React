import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = ({dish}) => {

    // Caso nenhum card esteja selecionado para não aparecer nada
    if (!dish) {
        return <div></div>;
    }

    const comments = dish.comments.map((comment) => {
        return (
            <div key={comment.id} className='mb-2'>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            </div>
        </div>
    );

};

export default DishDetail;