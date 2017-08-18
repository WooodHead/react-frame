import React from "react";
export interface IelloProps { compiler: string; framework: string; }

import { Button, Modal } from "antd";

export default class extends React.Component<IelloProps, any> {
  public fullName: string;
  public HandleClick(): void {
    // var a
  }
  public render() {
    return (
      <div>
        <Button onClick={this.HandleClick.bind(this)} type="danger">Danger</Button>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      </div>
    );
  }
}
