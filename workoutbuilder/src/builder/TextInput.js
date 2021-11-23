import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { isMobile } from "react-device-detect";

/*eslint-disable */
type Props = {
  exerciseName: String,
  handleInput: Function
};
/*eslint-enable */

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { handleInput } = this.props;
    handleInput("name", { exerciseName: event.target.value });
    this.setState({ value: event.target.value });
  }

  render() {
    let { exerciseName } = this.props;
    return (
      <form noValidate>
        <TextField
          onChange={this.handleChange}
          onBlur={this.handleChange}
          id="outlined-basic"
          label="Exercise"
          variant="outlined"
          value={exerciseName ? exerciseName : ""}
          style={{
            width: isMobile ? 150 : 200,
            height: isMobile ? 150 : 75
          }}
        />
      </form>
    );
  }
}

export default TextInput;
