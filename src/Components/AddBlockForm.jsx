import React from 'react'
import useSubmitForm from '../Components/CustomHooks/useSubmitForm'
import '../Components/Styles/AddBlockForm.css'

const AddBlockForm = ({chain, block, setChain}) => {
    
    const createTimeStamp = () => {
        let timestamp = new Date().toLocaleString()
        console.log(timestamp)
        return timestamp
    }
   
    const addBlock = (index, timestamp, data, precedingHash) => {
        let newTimeStamp = createTimeStamp()
        chain.addBlock( new block(newTimeStamp, values, precedingHash))
       setChain(chain)
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