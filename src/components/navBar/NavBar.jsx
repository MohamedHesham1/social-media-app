import './navBar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import avatar from '../../assets/undraw_male_avatar_g98d.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>Vivid</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
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
          <img src={avatar} alt='user avatar' />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
