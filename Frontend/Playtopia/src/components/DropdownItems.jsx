import React from 'react'
import { Link } from "react-router-dom";

import '../Styles/DropdownItems.css'

const DropdownItems = (props) => {
  return (
    <li className = 'dropdownItem'>
      <Link to={'/signUp'}> <a href="">{props.text}</a></Link>
    </li>
  )
}

export default DropdownItems