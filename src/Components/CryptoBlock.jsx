import React from 'react'
import '../Components/Styles/CryptoBlock.css'

const CryptoBlock = ({info}) => {
    return (
        <div className='cryptoblock'>
            <h4>Block {info.index}</h4>
            <p>{info.timestamp}</p>
            <p>{info.hash}</p>
            <p>{info.data.sender}</p>
            <p>{info.data.amount}</p>
        </div>
    )
}

export default CryptoBlock