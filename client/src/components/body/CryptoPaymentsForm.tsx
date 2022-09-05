import  React, { useState } from  'react'
import { ethers } from 'ethers'

declare global {
    interface Window {
        ethereum:any;
    }
}

const DEFAULT_ADRESS ="0x538642a5f4554a6f42381760f0b51e4203812a82"

function  CryptoPaymentsForm () {

	const [amount, setAmount] = useState(0); 

	const [destinationAddress, setDestinationAddress] = useState(DEFAULT_ADRESS); // u can change it at any time 
	const [error, setError] = useState(""); //newline

    const [transaction, setTransaction] = useState<ethers.providers.TransactionResponse | null >(null); // new line

	const  startPayment = async (event: any) => { 

		console.log({amount, destinationAddress});

event.preventDefault();

try {

	if (!window.ethereum) {
		throw  new  Error("No crypto wallet found. Please install it.");
	}

		await  window.ethereum.send("eth_requestAccounts");

		const  provider = new  ethers.providers.Web3Provider(window.ethereum);

		const  signer = provider.getSigner();

		ethers.utils.getAddress(destinationAddress);

		const  transactionResponse = await  signer.sendTransaction({

			to:  destinationAddress,

			value:  ethers.utils.parseEther(amount.toString())

		});

		console.log({transactionResponse});
		setTransaction(transactionResponse); // new line

	} catch (error: any) {

		console.log({error});
		setError(error.message);

	}

}

return (

	<div  className="m-5 p-5 card shadow text-center">

		{/* added onChange and onClick attributes */}

		<input  type="number"  placeholder="Amount" value={amount}  className="col-12 form-control mb-3"  onChange={event  => {setAmount(Number.parseFloat(event.target.value))}}  />

		<input  placeholder="Destination address" value={destinationAddress}  className="col-12 form-control mb-3"  onChange={event  => {setDestinationAddress(event.target.value)}}  />

		<button  className="col-12 btn btn-primary"  onClick={startPayment}>

			Send Payment

		</button>
		{transaction &&

				<div  className="alert alert-success mt-3"  role="alert">

				{JSON.stringify(transaction)}

				</div>

				}

				{error &&

				<div  className="alert alert-danger"  role="alert">

				{JSON.stringify(error)}

				</div>

				}

					</div>

				)

				}

				export  default  CryptoPaymentsForm