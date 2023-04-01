import React from 'react'
import {connect} from 'react-redux'
import { toggle_sidebar } from '../../state/action-creators/toggle'
import {Link} from 'react-router-dom'
const Sidebar = ({toggle_sidebar, toggleSidebar}) => {
  return (
    <div class={`sidebar ${toggleSidebar? 'w-[60%]': 'w-[0]'}`} >
    <div>

      <div onClick={() => toggle_sidebar(false)} id="closebtn" class="sidebar__closebtn">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D" fill-rule="evenodd" />
        </svg>
      </div>

      <Link to='/' href="">Collections</Link>
      <Link to='/' href="">Men</Link>
      <Link to='/' href="">Women</Link>
      <Link to='/' href="">About</Link>
      <Link to='/' href="">Contact</Link>
    </div>

  </div>
  )
}

const mapStateToProps = state =>({
  toggleSidebar: state.toggle.toggleSidebar
})

export default connect(mapStateToProps, {toggle_sidebar})(Sidebar)