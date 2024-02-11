import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


// function FeedbackItem({item, handleDelete}) 
function FeedbackItem({item}) 
  {
    // const handleClick = (id) => {
    //     console.log(id)
    // }
    //const [rating,setRating] = useState(7);
   // const [text,setText] = useState('This is an example of feedback items ')
    // const handleClick = () =>{
    //     //prev is the previous value
    //     setRating((prev) => {
    //         return prev+1;
    //     });
    // }
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return (
    //Card with reverse property
    //<Card reverse={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <button  onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple'/>
      </button>
      <div className="text-display"> {item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

