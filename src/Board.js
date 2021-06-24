import React, { Component } from "react";
import ScoreTable from "./ScoreTable";
import style from "./style.css";

export default class Board extends Component {
  render() {
    return (
      <>
        <h1>Memory game!</h1>
        <div className="Sidebar">
          <ScoreTable />
        </div>
      </>
    );
  }
}
