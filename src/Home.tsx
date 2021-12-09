import { useEffect, useState } from "react";
import LatestPasties from "./LatestPasties";
import AddPastie from "./AddPastie";

export interface PastieProps {
  id: number;
  title: string;
  contents: string;
  created_timestamp: string;
}

export default function Home(): JSX.Element {
  const [pasties, setPasties] = useState<PastieProps[]>([]);

  async function fetchPasties() {
    const response = await fetch("https://c3a5-pastebin.herokuapp.com/latest");
    const jsonBody: PastieProps[] = await response.json();
    setPasties(jsonBody);
  }

  useEffect(() => {
    fetchPasties();
  }, []);

  console.log(pasties);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            <h1>Pastebin</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="list-group">
              <AddPastie fetchPasties={fetchPasties} />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="list-group">
              {pasties.map((pastie) => (
                <LatestPasties
                  key={pastie.id}
                  id={pastie.id}
                  title={pastie.title}
                  contents={pastie.contents}
                  created_timestamp={pastie.created_timestamp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
