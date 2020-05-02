import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import WithRouterSample from './WithRouterSample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
        <li>
          <Link to="/WithRouterSample">WithRouterSample 예제</Link>
        </li>
      </ul>
      <hr />
      {/* exact 정확히 해당 경로의 내용만 보여줌 */}

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/WithRouterSample" component={WithRouterSample} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>

      <Switch></Switch>
    </div>
  );
}

export default App;
