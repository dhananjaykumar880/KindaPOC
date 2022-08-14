import React from "react";
import { Button, Card } from "react-bootstrap";
import { IProduct } from "../../redux/interface/product";

interface IProductItem {
  product: Partial<IProduct>;
}

function ProductItem({ product }: IProductItem) {
  return (
    <>
      <Card
        className="border-0 mb-4"
        style={{ width: "25rem", height: "35em" }}
      >
        <Card.Img
          variant="top"
          src={product.img?.[0] ?? ""}
          height="253px"
          style={{ backgroundColor: "lightgray" }}
        />
        <Card.Body>
          <Card.Text>
            <b>{product.name}</b>
          </Card.Text>
          <ol
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              minHeight: "140px",
            }}
          >
            {product.features?.map((feature, i) => (
              <React.Fragment key={`${feature}-${i}`}>
                <Card.Text as="li" className="mb-1">
                  {feature}
                </Card.Text>
              </React.Fragment>
            ))}
          </ol>
          <Card.Text as="h6" className="mt-3 mb-3">
            <b>${product.price}</b>
          </Card.Text>
          <Button
            variant="primary"
            className="w-100 rounded-pill"
            style={{ backgroundColor: "green" }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductItem;
