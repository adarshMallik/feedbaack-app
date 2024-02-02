function FeedbackItem({item}) {
    //const [rating,setRating] = useState(7);
   // const [text,setText] = useState('This is an example of feedback items ')
    // const handleClick = () =>{
    //     //prev is the previous value
    //     setRating((prev) => {
    //         return prev+1;
    //     });
    // }
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        {item.text}
      </div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}

export default FeedbackItem
