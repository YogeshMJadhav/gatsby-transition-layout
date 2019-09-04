import React from 'react'
import Layout from '../components/layout';

export default class PageLoad extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		// Set delay in milliseconds
		window.pageExitTime = 10000
	}
	render() {
		// A "status" property will be added
		// You can use this to set classes, or trigger animations however you want
		return (
            <Layout>
                <section className={this.props.status}>
                    Animation status: {this.props.status}
                </section>
            </Layout>
		)
	}
}