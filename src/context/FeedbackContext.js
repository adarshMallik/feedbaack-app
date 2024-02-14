import {createContext, useState, useEffect} from 'react'
import { json } from 'react-router'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children})  => {
    const [isLoading,setIsLoading] = useState(true)
    const [feedback,setFeedback] =useState([])
    const [feedbackEdit,setFeedbackEdit] = useState({
      item: {},
      edit: false
    })
   

    useEffect(() =>{
      fetchFeedback()
    },[])

    //Fetch feedback

    const fetchFeedback = async () =>{
      const response = await fetch(`/feedback?_sort=id`)
      const data= await response.json()
      setFeedback(data)
      setIsLoading(false)
    }
    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        setFeedback([data,...feedback])
      }

    const deleteFeedback = async (id) => {

        if(window.confirm('Are you sure you want to delete?'))
        {
          await fetch(`/feedback/${id}`,{
            method: 'DELETE' })
          setFeedback(feedback.filter((item) => (
              item.id !== id
          )))
        }
        
      }

      //Update Feedback
      const updateFeedback =async (id,updateItem) => {
        const response = await fetch(`/feedback/${id}`,{
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(updateItem)
        })
        const data = await response.json()
        
        setFeedback(feedback.map((item) => ( item.id === id ? {...item,...data} : item)))
      }
    
      const editFeedback = (item) =>{
        setFeedbackEdit({
          item: item,
          edit: true
        })
      }
    return <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
      isLoading
      }}> 
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext

