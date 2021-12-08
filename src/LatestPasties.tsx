import { PastieProps } from "./Home";
import { useState } from "react";
import "./latestpasties.css";

export default function LatestPasties({
  title,
  contents,
  created_timestamp,
}: PastieProps): JSX.Element {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  let buttonIcon: string;
  if (collapsed === true) {
    buttonIcon = "➕";
  } else {
    buttonIcon = "➖";
  }

  const split_timestamp = created_timestamp.replace("Z", "").split("T");
  const hours = split_timestamp[1].split("").splice(0, 5);
  const sanitised_timestamp = `${split_timestamp[0]} - ${hours.join("")}`;

  return (
    <a
      href="# "
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h3 className="mb-1">{title}</h3>
        <button onClick={() => setCollapsed(!collapsed)}>{buttonIcon}</button>
      </div>
      <br />
      <p className="mb-1">
        {collapsed ? <p className="line-clamp">{contents}</p> : contents}
      </p>
      <br />
      <small>{sanitised_timestamp}</small>
    </a>
  );
}
