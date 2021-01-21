import React, {useState} from 'react'
import CryptoBlock from '../Components/CryptoBlock'
import AddBlockForm from '../Components/AddBlockForm'
import blockChain from '../blockchain.js'

const Visualizer = () => {
    const cryptoChain = blockChain.CryptoChain
    const block = blockChain.Block
    let chain = new cryptoChain()

    const renderBlockChain = () => {
        console.log(crypto)
        // if(chain.chain.length > 1){
        //     chain.chain.map((elem) => {
        //         return <CryptoBlock info={elem}/>
        //     })
        // }  
    }

    const [crypto, setChain] = useState(chain)
    console.log('crypto',crypto)
    return(
        <div className='visualizer'>
            <AddBlockForm chain={chain} block={block}/>
        </div>

    )
}

export default Visualizer
