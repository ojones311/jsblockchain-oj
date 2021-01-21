import React,{useState} from 'react'

const useSubmitForm = () => {
   const [values, setValue] =  useState({})
   
   const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form was submitted')
   }
   const handleFormChange = (e) => {
    e.persist()
    setValue(values => ({...values, [e.target.name]:e.target.value}));
   }
   return {
      handleFormSubmit,
      handleFormChange,
      values,
   }
}

export default useSubmitForm