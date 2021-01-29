import React, { useEffect } from 'react'
import useSubmitForm from '../Components/CustomHooks/useSubmitForm'
import '../Components/Styles/AddBlockForm.css'

const AddBlockForm = ({ chain, block, setChainLength}) => {
    
    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => addBlock())

    const createTimeStamp = () => {
        let timestamp = new Date().toLocaleString()
        console.log(timestamp)
        return timestamp
    }
   
    const addBlock = () => {
        let newTimeStamp = createTimeStamp()
        let precedingHash = chain.newestBlock().hash
        chain.addBlock( new block(newTimeStamp, values, precedingHash))
        setChainLength(chain.currentIndex())
    }

    return (
        <div className='form'>
            <form onSubmit={handleFormSubmit}>
                <label>Sender:</label>
                <input type="text" name='sender' onChange={handleFormChange}  value={values.sender || ''} required/>
                <label> Amount:</label>
                <input type="text" name='amount' onChange={handleFormChange} value={values.amount || ''} required/>
                <button type='submit'>Add Block</button>
            </form>
        </div>
    )
}

export default AddBlockForm