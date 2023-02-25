import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './rightBar.scss';

function RightBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <span>{currentUser.name} </span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <span>{currentUser.name} </span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <p>
                <span>{currentUser.name} </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <p>
                <span>{currentUser.name} </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <p>
                <span>{currentUser.name} </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <p>
                <span>{currentUser.name} </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src={currentUser.profilePic}
                alt='user currentUser.profilePic'
              />
              <div className='online' />
              <span>{currentUser.name} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
