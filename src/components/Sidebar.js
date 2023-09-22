import React from 'react'
import "../style/Sidebar.css"
import "../style/Body.css"
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
const Sidebar = () => {
  // const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  // if(!isMenuOpen) return null;
  return (
    <div className='sidebar-container'>
  <div className='sidebar'>
      <ul>
        <Link to="/"><li className='sidebar-items'>
          <div className='sidebar-icon'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1024px-Home-icon.svg.png" alt="home" />
          </div>
          <div className='sidebar-item-title'>Home</div>
        </li></Link>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png" alt="shorts" />
          </div>
          <div className='sidebar-item-title'>Shorts</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-subscriptions-1781681-1518361.png?f=avif&w=256" alt="home" />

          </div>
          <div className='sidebar-item-title'>Subscriptions</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://www.svgrepo.com/show/183370/library-book.svg" alt="home" />

          </div>
          <div className='sidebar-item-title'>Libary</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/OOjs_UI_icon_history.svg/1024px-OOjs_UI_icon_history.svg.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>History</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp" alt="home" />
          </div>
          <div className='sidebar-item-title'>Watch Later</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KY7g0WKURPmT-KRwoAJ3yPWlvxMbRW6elc2mdlTDzw&s" alt="shorts" />
          </div>
          <div className='sidebar-item-title'>Liked</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Your videos</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Myfev</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Recursion</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />
          </div>
          <div className='sidebar-item-title'>Machin Learning</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="shorts" />
          </div>
          <div className='sidebar-item-title'>Group Theory</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>ReactJS</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Haikyu</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Naruto</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />
          </div>
          <div className='sidebar-item-title'>Bleach</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="shorts" />
          </div>
          <div className='sidebar-item-title'>One Piece</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Subscriptions</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>Libary</div>
        </li>
        <li className='sidebar-items'>
          <div className='sidebar-icon'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-playlist-2525162-2116566.png" alt="home" />

          </div>
          <div className='sidebar-item-title'>History</div>
        </li>
        
      </ul>
    </div>
    </div>
    
  )
}

export default Sidebar
