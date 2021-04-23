import React from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  cellClicked = () => {
    this.props.handleClick(this.props.id);
  };

  render() {
    return (
      <div onClick={this.cellClicked} className="cell">
        {this.props.value}
      </div>
    );
  }
}
