import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';

function App() {
  const Layout = () => {
  return (
    <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

    </div>
  );
}

export default App;
