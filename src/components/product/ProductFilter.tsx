import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { getProductCategory } from "../../redux/effects/product";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../redux/hooks/typedHook";
import { Choose, OtherWise, When } from "../generic/IfElse";

function ProductFilter() {
  const { isLoading, list, error } = useTypedSelector(
    (store) => store.product.category
  );
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(getProductCategory());
  }, [dispatch]);

  return (
    <>
      <Choose>
        <When condition={isLoading}>Loading...</When>
        <When condition={Boolean(error)}>{error}</When>
        <When condition={list?.length}>
          {list?.map((category, i) => (
            <React.Fragment key={`${category.value}${i}`}>
              <Form.Check
                type="checkbox"
                className="mb-2"
                name="c[]"
                id={category.label}
                label={category.label}
                value={category.value}
              />
            </React.Fragment>
          ))}
        </When>
        <OtherWise>Category not found</OtherWise>
      </Choose>
    </>
  );
}

export default ProductFilter;
