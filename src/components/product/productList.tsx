import React, { useEffect } from "react";
import { Stack } from "react-bootstrap";
import { getProductList } from "../../redux/effects/product";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../redux/hooks/typedHook";
import { IProductType } from "../../redux/interface/product";
import { Choose, If, OtherWise, When } from "../generic/IfElse";
import ProductFilter from "./ProductFilter";
import ProductSection from "./productSection";

function ProductList() {
  const { isLoading, error, featured, all } = useTypedSelector(
    (state) => state.product.products
  );
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <Stack direction="horizontal" gap={5} className="align-items-start">
        <div>
          <ProductFilter />
        </div>
        <div>
          <Choose>
            <When condition={isLoading}>Loading...</When>
            <When condition={Boolean(error)}>{error}</When>
            <When condition={Boolean(featured) ?? Boolean(all)}>
              <If condition={Boolean(featured)}>
                <ProductSection section={featured as IProductType} divider />
              </If>
              <If condition={Boolean(all)}>
                <ProductSection section={all as IProductType} />
              </If>
            </When>
            <OtherWise>
              Products are not available for now. Try later.
            </OtherWise>
          </Choose>
        </div>
      </Stack>
    </>
  );
}

export default ProductList;
