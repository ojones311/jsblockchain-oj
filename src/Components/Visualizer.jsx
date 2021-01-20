import React, {useState} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import blockChain from '../blockchain.js'

const Visualizer = () => {
    const cryptoChain = blockChain.CryptoChain
    let chain = new blockChain.CryptoChain()

    const renderEachBlock = () => {
        console.log(chain)
        if(chain){
            crypto.map((elem) => {
                return <CryptoBlock hash={''} data={''}/>
            })
        }  
    }

    const getBlockChain = () => {
        setChain(chain)
    }
    

    const [crypto, setChain] = useState([])
    return(
        <div>
            <button onClick={() => getBlockChain()}>Return</button>
        </div>

    )
}

export default Visualizer
