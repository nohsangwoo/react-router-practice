import React from 'react';

const profileData = {
  keiko: {
    name: '혜민',
    description: '짱귀여운 기후의 앤헤서웨이',
  },
  homer: {
    name: '호머심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <>
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
    </>
  );
}

export default Profile;
