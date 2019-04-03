import * as React from "react";
import { InputBase } from "@material-ui/core";

interface State {
  email: string;
}

interface Props {
  onSubmit: (data: State) => void;
  buttonText: string;
}

export class Form extends React.PureComponent<Props, State> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    } as any);
  };

  render() {
    const { email } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={this.handleChange}
          />

          <button onClick={() => this.props.onSubmit(this.state)}>
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}
