import React from 'react'
import{ReactComponent as HomeIcon} from'./Icons/icons8-home.svg';
import{ReactComponent as ChatIcon} from'./Icons/icons8-chat-96.svg';
import { Link, useNavigate } from 'react-router-dom';

function head() {
  return (
    <div>
<ul class="nav justify-content-center">
  <li class="nav-item">
                <Link to="/" title="Home">
              {" "}
             <HomeIcon/>
            </Link>
  </li>
  <li class="nav-item">
            <Link to="/login" title="login">
              {" "}
             <HomeIcon/>
            </Link>

  </li>
  <li class="nav-item">

  </li>
  <li class="nav-item">
 <HomeIcon/>
  </li>
</ul>
        

    </div>
  )
}

export default head