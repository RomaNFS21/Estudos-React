import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);

  // Função para selecionar o prato
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  // Gerando o menu de pratos
  const menu = props.dishes.map((dish) => {
    return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card onClick={() => onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <DishDetail dish={selectedDish} />
    </div>
  );
};

export default Menu;
