import React from "react";
import Empty from "./Empty";
import Cross from "./Cross";
import Zero from "./Zero";

class Game extends React.Component {
  constructor(props) {
    super(props);
    // creating this to use when resetting the state
    this.initialState = {
      turn: [
        { id: 0, value: "" },
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" },
        { id: 4, value: "" },
        { id: 5, value: "" },
        { id: 6, value: "" },
        { id: 7, value: "" },
        { id: 8, value: "" },
      ],
      currentPlay: true,
      winner: "",
    };
    // we want a clean object which does not affect the initialState object above when game is played
    this.state = JSON.parse(JSON.stringify(this.initialState));
  }
  // when Reset Game is clicked, state is reset to initialState
  reset() {
    this.setState(JSON.parse(JSON.stringify(this.initialState)));
  }
  // for each player playing the turn
  changeValue(id, value) {
    // to disable reclicking on a filled cell or when we already have a winner
    if (this.state.turn[id].value || this.state.winner) return;
    let turn = [...this.state.turn];
    turn[id].value = value;
    this.setState({ turn: [...turn] });
    // toggle between two players X and O
    this.setState({ currentPlay: !this.state.currentPlay });
  }
  // showing the component accordingly
  getValueSvg(s) {
    switch (s) {
      case "":
        return <Empty />;
      case "zero":
        return <Zero />;
      case "cross":
        return <Cross />;
      default:
        return 0;
    }
  }

  checkWinner() {
    // filter out the values that are not empty and check the length of the array
    let moves = this.state.turn.filter((p) => p.value);
    if (moves.length < 5 || !!this.state.winner) {
      return;
    }
    // making a 2D array to track cells
    let finalArray = [
      [this.getValue(0), this.getValue(1), this.getValue(2)],
      [this.getValue(3), this.getValue(4), this.getValue(5)],
      [this.getValue(6), this.getValue(7), this.getValue(8)],
    ];
    // checking lines for 8 winning cases
    this.checkLine(finalArray[0][0], finalArray[0][1], finalArray[0][2]);
    this.checkLine(finalArray[1][0], finalArray[1][1], finalArray[1][2]);
    this.checkLine(finalArray[2][0], finalArray[2][1], finalArray[2][2]);
    this.checkLine(finalArray[0][0], finalArray[1][0], finalArray[2][0]);
    this.checkLine(finalArray[0][1], finalArray[1][1], finalArray[2][1]);
    this.checkLine(finalArray[0][2], finalArray[1][2], finalArray[2][2]);
    this.checkLine(finalArray[0][0], finalArray[1][1], finalArray[2][2]);
    this.checkLine(finalArray[2][0], finalArray[1][1], finalArray[0][2]);
  }
  // checking for filled cells
  getValue(id) {
    return this.state.turn[id].value;
  }
  // checking for winning cases
  checkLine(a, b, c) {
    if (a === b && b === c && c === a && a !== "")
      this.setState({ winner: !this.state.currentPlay ? "cross" : "zero" });
    return;
  }

  render() {
    this.checkWinner();
    return (
      <div className="Game">
        <br />
        <div className="row">
          <h2>Player {this.state.currentPlay ? "Rosy" : "Michael"}'s Turn</h2>
        </div>
        <br />
        <div className="row">
          <table>
            <tbody>
              <tr>
                <td
                  id={this.state.turn[0].id}
                  onClick={() =>
                    this.changeValue(
                      0,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[0].value)}
                </td>
                <td
                  id={this.state.turn[1].id}
                  onClick={() =>
                    this.changeValue(
                      1,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[1].value)}
                </td>
                <td
                  id={this.state.turn[2].id}
                  onClick={() =>
                    this.changeValue(
                      2,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[2].value)}
                </td>
              </tr>
              <tr>
                <td
                  id={this.state.turn[3].id}
                  onClick={() =>
                    this.changeValue(
                      3,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[3].value)}
                </td>
                <td
                  id={this.state.turn[4].id}
                  onClick={() =>
                    this.changeValue(
                      4,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[4].value)}
                </td>
                <td
                  id={this.state.turn[5].id}
                  onClick={() =>
                    this.changeValue(
                      5,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[5].value)}
                </td>
              </tr>
              <tr>
                <td
                  id={this.state.turn[6].id}
                  onClick={() =>
                    this.changeValue(
                      6,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[6].value)}
                </td>
                <td
                  id={this.state.turn[7].id}
                  onClick={() =>
                    this.changeValue(
                      7,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[7].value)}
                </td>
                <td
                  id={this.state.turn[8].id}
                  onClick={() =>
                    this.changeValue(
                      8,
                      this.state.currentPlay ? "cross" : "zero"
                    )
                  }
                >
                  {this.getValueSvg(this.state.turn[8].value)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        {/* conditional rendering */}
        {this.state.winner ? (
          <div className="row">
            <div className="alert alert-success" role="alert">
              The Winner is Player:{" "}
              {this.state.winner === "cross" ? "Rosy" : "Michael"}
            </div>
          </div>
        ) : null}
        <br />
        <div className="row">
          <p>
            <button
              className="btn btn-success btn-lg"
              onClick={() => this.reset()}
            >
              Reset Game
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Game;
