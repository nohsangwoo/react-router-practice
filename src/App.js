import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
      </ul>
      <hr />
      {/* exact 정확히 해당 경로의 내용만 보여줌 */}
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default App;
