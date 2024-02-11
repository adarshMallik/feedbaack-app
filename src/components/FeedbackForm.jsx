import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"
import { useContext, useState,useEffect } from "react"


function FeedbackForm() {

    const [text,setText] = useState('');
    const [rating,setRating] = useState('');
    const [btnDisabled,setbtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);
    
    useEffect(() => {
       if(feedbackEdit.edit === true)
       {
        setbtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
       }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '')
        {
          setbtnDisabled(true)
          setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true)
          setMessage('Text must be at least 10 characters')
        }else{
          setbtnDisabled(false)
          setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSelect = (rating) =>{
        setRating(rating)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10)
        { 
            //sending values of text and rating it is equal to as {text : text,rating: rating}
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true)
            {
              updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else
            {
              addFeedback(newFeedback)
            }
            
            //clearup text after sumit
            setText('')
        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={handleSelect}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" placeholder="Write a review" 
                value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>

            </div>
            {message && <div className="message">{message}</div>}
            
        </form>
      
    </Card>
  )
}

export default FeedbackForm
