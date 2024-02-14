import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
// import PropTypes from "prop-types"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"



// function FeedbackList({feedback, handleDelete})
function FeedbackList() {

  const {feedback, isLoading} =useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0))
    {
        return <p>No Feedback yet</p>
    }
    return isLoading ? <h3><Spinner/></h3> :(
      <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0 }}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
          {/* //passing the data got from Feedbackitem to App component */}
             <FeedbackItem key={item.id} item={item}/>
             </motion.div>
        ))}
        </AnimatePresence>
      </div>

    )
  
  // Version without animation
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       //passing the data got from Feedbackitem to App component
  //          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // )
}


// FeedbackList.propTypes = {
//   //feedback: PropTypes.array.isRequired,
//   //OR
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }


export default FeedbackList
