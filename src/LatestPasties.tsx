import { PastieProps } from "./Home";

export default function LatestPasties({
  title,
  contents,
  created_timestamp,
} = PastieProps): JSX.Element {
  return (
    <>
      <h6>{title}</h6>
      <p>{contents}</p>
      <p>{created_timestamp}</p>
      <button>➕</button>
      <button>➖</button>
    </>
  );
}
