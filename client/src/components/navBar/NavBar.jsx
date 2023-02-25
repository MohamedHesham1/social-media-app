import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import './navBar.scss';

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>Vivid</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <LightModeOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <AppsOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input type='search' placeholder='Search...' />
        </div>
      </div>
      <div className='right'>
        <PermIdentityOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className='user'>
          <img src={currentUser.profilePic} alt='user avatar' />
          <span> {currentUser.name} </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
