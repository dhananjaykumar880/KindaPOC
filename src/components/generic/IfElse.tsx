import React from "react";
import { INoTyppedValue } from "../../redux/interface/base";

interface ICondition {
  condition?: boolean | number | string;
}
export function If(props: React.PropsWithChildren<ICondition>): JSX.Element {
  if (Boolean(props.condition)) {
    return <>{props.children}</>;
  }
  return <></>;
}

export const OtherWise = Object.assign(
  (props: React.PropsWithChildren<unknown>): JSX.Element => {
    return <>{props.children}</>;
  },
  { displayName: "OtherWise" }
);

export const When = Object.assign(
  (props: React.PropsWithChildren<ICondition>): JSX.Element => {
    return <>{props.children}</>;
  },
  { displayName: "When" }
);

/**
 * Do not use Choose if have more than 5 when.
 * @param props
 * @returns
 */
export function Choose(props: React.PropsWithChildren<unknown>): JSX.Element {
  const single = props.children as INoTyppedValue;
  const multiple = props.children as INoTyppedValue[];
  if (Array.isArray(props.children)) {
    for (const c of multiple) {
      if (
        c.type?.displayName === "When" &&
        (c.props?.condition || c.type?.displayName === "OtherWise")
      ) {
        return <>{c}</>;
      }
    }
  } else if (single?.type?.displayName === "When" && single?.props?.condition) {
    return <>{props.children}</>;
  }
  return <></>;
}
