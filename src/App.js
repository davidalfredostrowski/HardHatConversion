import React, {Component} from 'react'
//import {ethers} from 'ethers'

import HelloAbi from './contractsData/Hello.json'
import HelloAddress from './contractsData/Hello-address.json'


const ethers = require("ethers")
//const helloAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


class App extends Component {
	componentWillMount(){
		this.loadBlockchainData()
	}

  async loadBlockchainData(){
//	const provider = new ethers.providers.Web3Provider("http://ec2-35-86-204-223.us-west-2.compute.amazonaws.com:8545")

       console.log('HelloAddress.address', HelloAddress.address) 
       console.log('HelloAbi.abi', HelloAbi.abi) 

//	  const contract = new ethers.Contract(helloAddress, Hello.abi, provider)


      
	}

     constructor(props){
	  	super(props)
		console.log("constructor")
	  	this.state = {
			account: '',
			loading: true,
			message: ''
		}
     }

 

	
render(){	

	return (
		<div>

		<h5>message output: </h5>
		
		</div>
	);
}
}

export default App;

