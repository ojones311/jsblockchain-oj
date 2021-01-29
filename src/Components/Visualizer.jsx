import React, {useEffect, useState} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import AddBlockForm from '../Components/AddBlockForm'
import blockChain from '../blockchain.js'
import '../Components/Styles/Visualizer.css'

const cryptoChain = blockChain.CryptoChain
let currentChain = new cryptoChain()
const block = blockChain.Block

const Visualizer = () => {
    
    const [chainLength, setChainLength] = useState(currentChain.chain.length)

    const renderBlockChain = () => {
        let visualization = currentChain.chain.map((elem) => {
            return (
                 <CryptoBlock key={elem.hash} info={elem}/>
            )
        })  
        console.log('rendered',currentChain)
        console.log('chain', chainLength)
        return visualization
    }

    return(
        <div className='visualizer'>
            <AddBlockForm chain={currentChain} setChainLength={setChainLength} block={block} />
            <div className='blockchain'>
                {renderBlockChain()}
            </div>
        </div>

    )
}

export default Visualizer
