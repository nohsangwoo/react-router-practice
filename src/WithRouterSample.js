import React from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
  return (
    <>
      <div>
        <h4>location</h4>
        <textarea value={JSON.stringify(location, null, 2)} readOnly />
        <h4>match</h4>
        <textarea value={JSON.stringify(location, null, 2)} readOnly />
      </div>
    </>
  );
}

export default withRouter(WithRouterSample);
