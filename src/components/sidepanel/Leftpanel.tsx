import React from 'react';

interface ILeftpanel {
    children: React.ReactNode;
}
function Leftpanel({children}: ILeftpanel) {
  return <>
  {children}
  </>;
}

export default Leftpanel;
