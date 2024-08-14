import React from 'react';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const UserStatus = () => {
  const { userStatus } = useUserStatus();

  return (
    <div className="flex flex-wrap justify-start items-center">
      <div className="w-full sm:w-auto mr-10">
        <h3>Current BAC: {userStatus.currentBAC.toFixed(3)}</h3>
      </div>
      <div className="w-full sm:w-auto">
        <h3>Estimated Sober Time: {userStatus.soberTimestamp === null ? 'Right Now!' : new Date(userStatus.soberTimestamp).toLocaleTimeString()}</h3>
      </div>
    </div>
  );
};

export default UserStatus;