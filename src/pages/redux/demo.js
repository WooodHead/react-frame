import React, {Component} from 'react'
import { Row, Col } from 'antd'
import  Gaine from '../../components/Gaine'
export default class extends Component {
	constructor () {
		super()
		console.log(this)
		console.log('instance')
	}
	componentWillMount () {
		console.log('component will mount')
	}
	componentDidMount () {
		console.log('component did mount')
	}
	render () {
		return (
			<div>
				<Gaine>
					<Row>
						<Col span={12}>col-12</Col>
						<Col span={12}>col-12</Col>
					</Row>
				</Gaine>
			</div>
		)
	}
}
