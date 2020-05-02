import React from 'react';
import Profile from './Profile';
import { Route, NavLink } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

function Profiles() {
  return (
    <>
      <div>
        <h3>사용자 목록</h3>
        <ul>
          <li>
            <NavLink
              to="/Profiles/keiko"
              activeStyle={{ background: 'black', color: 'white' }}
            >
              keiko
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Profiles/homer"
              activeStyle={{ background: 'black', color: 'white' }}
            >
              homer
            </NavLink>
          </li>

          <Route
            path="/profiles"
            exact
            render={() => <div>사용자를 선택해주세요</div>}
          />

          <Route path="/profiles/:username" component={Profile} />
          {/* <WithRouterSample /> */}
          <RouterHookSample />
        </ul>
      </div>
    </>
  );
}

export default Profiles;
