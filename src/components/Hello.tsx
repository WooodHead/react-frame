import * as  React from 'react'

export interface IProps { name: string }

export default class Hello extends React.Component<IProps, undefined> {
    public render() {
      return <h1>Hello {this.props.name} !</h1>
    }
}
