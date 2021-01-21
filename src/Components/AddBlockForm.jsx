import React,{useEffect, useState} from 'react'
import useSubmitForm from '../Components/CustomHooks/useSubmitForm'

const AddBlockForm = ({chain, block}) => {
    
    const createTimeStamp = () => {
        let timestamp = new Date().toLocaleString()
        console.log(timestamp)
        return timestamp
    }
   
    const addBlock = (index, timestamp, data, precedingHash) => {
        let newTimeStamp = createTimeStamp()
        return chain.addBlock( new block(1, newTimeStamp, values, precedingHash))
    }

    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => addBlock(values))

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