import React from 'react'


const CryptoBlock = ({info}) => {
    return (
        <div>
            <h1>Block {info.index}</h1>
            <p>{info.timestamp}</p>
            <p>{info.hash}</p>
            <p>{info.data}</p>
        </div>
    )
}

export default CryptoBlock