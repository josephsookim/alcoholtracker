import React from 'react';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const UserStatus = () => {
  const { userStatus } = useUserStatus();

  return (
    <div>
      <div>
        <h3>Current BAC: {userStatus.currentBAC.toFixed(3)}</h3>
        <h3>Estimated Sober Time: {new Date(userStatus.soberTimestamp).toLocaleTimeString()}</h3>
      </div>
    </div>
  );
};

export default UserStatus;