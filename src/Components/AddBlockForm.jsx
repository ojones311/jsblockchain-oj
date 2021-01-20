import React from 'react'


const AddBlockForm = () => {
    return (
        <div className='form'>
            <form>
                <label>Username</label>
                <input type="text"/>
                <label> Data</label>
                <input type="password"/>
                <button type="password">Add Block</button>
            </form>
        </div>
    )
}

export default AddBlockForm