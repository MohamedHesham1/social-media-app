import './rightBar.scss';
import avatar from '../../assets/undraw_male_avatar_g98d.svg';

function RightBar() {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <span>John Doe </span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <span>John Doe </span>
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
              <img src={avatar} alt='user avatar' />
              <p>
                <span>John Doe </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <p>
                <span>John Doe </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <p>
                <span>John Doe </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <p>
                <span>John Doe </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src={avatar} alt='user avatar' />
              <div className='online' />
              <span>John Doe </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
