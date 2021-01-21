import React from 'react'
import useSubmitForm from '../Components/CustomHooks/useSubmitForm'

const AddBlockForm = ({chain, block}) => {

    const addBlock = (index, timestamp, data, precedingHash) => {
        return chain.addBlock( new block(index, timestamp, data, precedingHash))
    }
    const {values, handleFormChange, handleFormSubmit} = useSubmitForm()
    return (
        <div className='form'>
            <form onSubmit={handleFormSubmit}>
                <label>Sender</label>
                <input type="text" name='name'onChange={handleFormChange} required/>
                <label> Amount</label>
                <input type="text" name='amount'onChange={handleFormChange} required/>
                <button onClick={() => addBlock()}>Add Block</button>
            </form>
        </div>
    )
}

export default AddBlockForm