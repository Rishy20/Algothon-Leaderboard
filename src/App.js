import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase.config";

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (scores.length === 0) {
      fetchScores();
    }
    //     const interval = setInterval(() => {
    //       fetchScores()
    //     }, 1800000)

    //     return () => clearInterval(interval)
  }, [scores]);

  const fetchScores = async () => {
    await db
      .collection("scores")
      .get()
      .then((querySnapshot) => {
        var arr = [];
        querySnapshot.forEach((e) => {
          arr.push(e.data());
        });
        setScores(arr);
      });
  };

  let data = scores.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="Heading-container">
          <h1 className={"Heading"}>LEADERBOARD</h1>
        </div>
      </header>
      <div className="tableFixHead">
        <table className="table table-striped table-condensed table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((e, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{e.teamName}</td>
                  <td>{e.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Waiting for the results</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
