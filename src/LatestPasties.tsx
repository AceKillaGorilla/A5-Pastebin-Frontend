import { PastieProps } from "./Home";
import { useState } from "react";

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
    <>
      <h3>{title}</h3>
      <p>{contents}</p>
      <p>{sanitised_timestamp}</p>
      <button onClick={() => setCollapsed(!collapsed)}>{buttonIcon}</button>
    </>
  );
}
