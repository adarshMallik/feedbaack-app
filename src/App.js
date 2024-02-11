//import { useState } from "react";
//import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
//import FeedbackData from "./data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./Pages/About";
//import {BrowserRouter as Router, Routes , Route ,NavLink} from 'react-router-dom'
import {BrowserRouter as Router, Routes , Route ,NavLink} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";
import ContactUs from "./components/ContactUs";
import ContactIconLink from "./components/ContactIconLink";
import {FeedbackProvider} from "./context/FeedbackContext"; 




function App()
{
    // const [feedback, setFeedback] =useState(FeedbackData)

    return (
      <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/"  element={
                <>
                  {/* <FeedbackForm handleAddFeedback={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback}handleDelete={deleteFeedback} */}
                  
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                  <div className="sameLineFlex">
                   <AboutIconLink/>
                   <ContactIconLink/>
                  </div>
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact/*" element={<ContactUs/>}/>
            {/* <Route path="/contact/:id" element={<ContactUs/>}/> */}
          </Routes>

         
        </div>

      </Router>
      </FeedbackProvider>
    );
}



export default App;