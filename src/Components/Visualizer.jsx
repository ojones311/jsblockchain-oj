import React, {useEffect, useState, useMemo} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import AddBlockForm from '../Components/AddBlockForm'
import blockChain from '../blockchain.js'

const Visualizer = () => {
    const cryptoChain = blockChain.CryptoChain
    const block = blockChain.Block
    let chain = new cryptoChain()

    // const memoizedValue = useMemo(chain,[chain])

    const renderBlockChain = () => {
        console.log(chain)
        if(chain.chain.length > 1){
            chain.chain.map((elem) => {
                return <CryptoBlock info={elem}/>
            })
        }  
    }

    const addBlock = (index, timestamp, data, precedingHash) => {
        return chain.addBlock( new block(index, timestamp, data, precedingHash))
    }

    // useEffect(() => {
    //     console.log(chain)
    // },[chain])

    const [crypto, setChain] = useState([])
    return(
        <div className='visualizer'>
            <AddBlockForm />
            <button onClick={() => renderBlockChain()}>Return</button>
            {renderBlockChain()}
        </div>

    )
}

export default Visualizer
