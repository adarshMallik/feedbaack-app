import {Link} from 'react-router-dom'
import {FaPhone} from 'react-icons/fa'

function ContactIconLink() {
  return (
    
<div className='contact-link'>
    <Link to='/contact'>
      <FaPhone size={30}/>
    </Link>
    </div>
    
  )
}

export default ContactIconLink
