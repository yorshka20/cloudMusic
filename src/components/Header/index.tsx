import React from "react";

import "./style.less";

interface Props {
  [key: string]: any;
}

function Header(props: Props) {
  return <header className="header-container">header</header>;
}

export default React.memo(Header);
