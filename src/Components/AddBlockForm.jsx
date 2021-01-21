import React from 'react'
import useSubmitForm from '../Components/CustomHooks/useSubmitForm'

const AddBlockForm = ({chain, block}) => {

    const addBlock = (index, timestamp, data, precedingHash) => {
        // return chain.addBlock( new block(index, timestamp, data, precedingHash))
        console.log('Block added', data)
    }
    const {values, handleFormChange, handleFormSubmit} = useSubmitForm(() => addBlock())
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