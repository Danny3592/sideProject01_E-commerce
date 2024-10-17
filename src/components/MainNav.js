import { NavLink } from 'react-router-dom';
import '../styles/index.scss';

export default function Nav() {
  return (
    <header id="main-header">
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'main-nav-active' : undefined
              }
              end
            >
              <div className='test'>Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? 'main-nav-active' : undefined
              }
            >
              <div className='test'>Posts</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
