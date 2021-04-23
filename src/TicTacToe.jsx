import React from "react";

import Cell from "./Cell";

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      player: "X",
      grid: ["", "", "", "", "", "", "", "", ""]
    };
  }

  cellClick = (i) => {
    console.log(i, this.state.player);

    if (this.state.player === "X") {
      let newGrid = [...this.state.grid];
      newGrid[i] = "X";
      this.setState({
        player: "O",
        grid: newGrid
      });
    }

    if (this.state.player === "O") {
      let newGrid = [...this.state.grid];
      newGrid[i] = "O";
      this.setState({
        player: "X",
        grid: newGrid
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="title">Tic-Tac-Toe</h1>
        <div className="grid">
          {this.state.grid.map((cell, i) => {
            return (
              <Cell
                key={i}
                id={i}
                value={this.state.grid[i]}
                handleClick={(i) => this.cellClick(i)}
              />
            );
          })}
        </div>
      </>
    );
  }
}
