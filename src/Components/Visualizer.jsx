import React, {useState} from 'react'
import blockChain from '../blockchain.js'

const Visualizer = () => {

    getBlockChain = () => {
        console.log(chain)
    }
    const [chain, setChain] = useState(new Array())
    return(
        <div>
            <button onClick={() => getBlockChain()}></button>
        </div>
    )
}

export default Visualizer
