import React, {useEffect, useState} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import AddBlockForm from '../Components/AddBlockForm'
import blockChain from '../blockchain.js'
import '../Components/Styles/Visualizer.css'

const Visualizer = () => {
    const cryptoChain = blockChain.CryptoChain
    const block = blockChain.Block
    let crypto = new cryptoChain()

    const [chain, setChain] = useState(crypto)

    const renderBlockChain = () => {
        let visualization = chain.chain.map((elem) => {
            return (
                 <CryptoBlock key={elem.index} info={elem}/>
            )
        })  
        console.log('rendered',chain)
        return visualization
    }

    
    useEffect(() => {
        // renderBlockChain()
        console.log(chain)
    },[chain])

    return(
        <div className='visualizer'>
            <AddBlockForm chain={chain} setChain={setChain} block={block} renderBlockChain={renderBlockChain}/>
            <div className='blockchain'>
                {renderMyBlockChain()}
            </div>
        </div>

    )
}

export default Visualizer
