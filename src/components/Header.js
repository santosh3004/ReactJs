import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom';
const Header=({title,onAddBtn,showADD})=>{
  const location=useLocation();
  return(
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname==='/'&&<Button onClick={onAddBtn} color={showADD?'Red':'Green'} text={showADD?'Close':'Add'}/>}
    </header>
  )
}

Header.defaultProps={
  title:'Task Tracker',
}

Header.propTypes={
  title: PropTypes.string.isRequired,
}
export default Header