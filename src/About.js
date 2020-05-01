import React from 'react';
import qs from 'qs';

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    // ignoreQueryPrefix:true 파싱할때 물음표를 빼고 파싱해줌
    ignoreQueryPrefix: true,
  });
  console.log(query);

  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제입니다</p>
      {detail && <p>detail값이 true입니다!</p>}
    </div>
  );
}

export default About;
