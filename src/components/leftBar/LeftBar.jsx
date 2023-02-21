import { useContext } from 'react';
import Friends from '../../assets/1.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import { AuthContext } from '../../context/authContext';
import './leftBar.scss';

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser.profilePic.avatar} alt='avatar' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src={Friends} alt='Friends icon' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={Groups} alt='Groups icon' />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={Market} alt='Market icon' />
            <span>Market</span>
          </div>
          <div className='item'>
            <img src={Watch} alt='Watch icon' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={Memories} alt='Memories icon' />
            <span>Memories</span>
          </div>
        </div>

        <hr />
        <div className='menu'>
          <span>Your shortcuts</span>
          <div className='item'>
            <img src={Events} alt='Events icon' />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={Gaming} alt='Gaming icon' />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={Gallery} alt='Gallery icon' />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={Videos} alt='Videos icon' />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src={Messages} alt='Messages icon' />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <div className='menu'>
          <span>Others</span>
          <div className='item'>
            <img src={Fund} alt='Fund icon' />
            <span>Fund</span>
          </div>
          <div className='item'>
            <img src={Tutorials} alt='Tutorials icon' />
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src={Courses} alt='Courses icon' />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
