import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import links from './Links';
import './index.css';

export const MainLayoutNav: FC = () => {
  return (
    <div className="main_layout__nav_panel">
      <div className="nav_panel">
        <ul>
          {links.map((elem) => {
            return (
              <li key={elem.key} className="links_list">
                <NavLink
                  to={elem.path}
                  className={({ isActive }) =>
                    isActive ? 'active_link' : 'deactive_link'
                  }
                >
                  {' '}
                  <img src={elem.img} alt={elem.key} /> {elem.key}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
