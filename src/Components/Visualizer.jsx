import React, {useEffect, useState} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import AddBlockForm from '../Components/AddBlockForm'
import blockChain from '../blockchain.js'
import '../Components/Styles/Visualizer.css'

const Visualizer = () => {
    const cryptoChain = blockChain.CryptoChain
    const block = blockChain.Block
    let chain = new cryptoChain()

    const renderBlockChain = () => {
        let visualization = crypto.chain.map((elem) => {
            return <CryptoBlock key={elem.index} info={elem}/>
        })  
        return visualization
    }
    const [crypto, setChain] = useState(chain)

    useEffect(() => {
        renderBlockChain() 
    },[crypto])

    let renderMyBlockChain = renderBlockChain()
    return(
        <div className='visualizer'>
            <AddBlockForm chain={chain} setChain={setChain} block={block}/>
            <div className='blockchain'>
                {renderMyBlockChain}
            </div>
        </div>

    )
}

export default Visualizer
