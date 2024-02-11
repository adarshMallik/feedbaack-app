import {Link} from 'react-router-dom'

import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
       <div className='about'>
        <h1>About this page</h1>
        <p>This is a React app to leave Feedback foa a product or services</p>
         <p>Version 1.0.0</p>
       <Link to='/'> Back to home </Link>
       </div>
    </Card>
  )
}

export default About
