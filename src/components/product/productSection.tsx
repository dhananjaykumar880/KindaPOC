import React from "react";
import { Row } from "react-bootstrap";
import { IProductType } from "../../redux/interface/product";
import { If } from "../generic/IfElse";
import ProductItem from "./ProductItem";

interface IProductSection {
  section: IProductType;
  divider?: boolean;
}
function ProductSection({ section, divider }: IProductSection) {
  return (
    <>
      <h3 className="mb-4" style={{ color: "#4b508c" }}>
        {section.label}
      </h3>
      <Row gap={3}>
        {section.list.map((product, i) => (
          <React.Fragment key={`${product.name}${i}`}>
            <ProductItem product={product} />
          </React.Fragment>
        ))}
      </Row>
      <If condition={divider}>
        <hr className="border-dark mb-4" />
      </If>
    </>
  );
}

export default ProductSection;
