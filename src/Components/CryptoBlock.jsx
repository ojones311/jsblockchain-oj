import React,{useState} from 'react'
import '../Components/Styles/CryptoBlock.css'

const CryptoBlock = ({info}) => {

    const [showPH, setShowPH] = useState(false)
    const [hideInputChanger, setHideInputChanger] = useState(false)

    const showPrecedingHash = () => {
        setShowPH(!showPH)
        if(showPH){
            return (
                <div>
                    <p>{info.precedingHash}</p>
                </div>
            )
        }
    }

    const editAmountData = () => {
        let amount = info.data.amount
        setHideInputChanger(!hideInputChanger)
        
    }
    return (
        <div className='cryptoblock'>
            <h4>Block {info.index}</h4>
            <p>{info.timestamp}</p>
            <p>{info.hash}</p>
            <p>{info.data.sender}</p>
            <p>{info.data.amount}</p>
            
            {
                !hideInputChanger ? <div><button onClick={editAmountData}>Edit Amount</button></div>
                :<div><button onClick={editAmountData}>Cancel</button><input type='text'></input></div>
            }
        </div>
    )
}

export default CryptoBlock