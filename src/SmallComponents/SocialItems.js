import React from "react";
import { getIcon } from "../Utils/Util";

export default function socialItems(props) {
  const { className, href, iconName } = props;
  return (
    <li>
      <a href={href} className={className}>
        {getIcon(iconName)}
      </a>
    </li>
  );
}
