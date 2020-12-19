import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default CustomLink;
