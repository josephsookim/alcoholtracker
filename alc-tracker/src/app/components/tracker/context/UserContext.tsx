import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Drink } from './DrinkContext'; // Import Drink interface to use in calculations

// Define the shape of the user's status
export interface UserStatus {
  currentBAC: number;
  soberTimestamp: number;
}

// Define the shape of your context data
interface UserContextType {
  userStatus: UserStatus;
  updateUserStatus: (drink: Drink) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userStatus, setUserStatus] = useState<UserStatus>({ currentBAC: 0, soberTimestamp: 0 });

  // Function to calculate BAC and sober time
  const calculateBACAndSoberTime = (servingAmount: number, alcoholType: string, currentBAC: number, currentTime: number): UserStatus => {
    // Simplified BAC calculation (replace with actual calculation)
    const bacIncrease = servingAmount * 0.02; // Example: each ounce increases BAC by 0.02
    const newBAC = currentBAC + bacIncrease;
    const soberTime = currentTime + (newBAC * 2 * 3600000); // Example: it takes 2 hours per BAC point to sober up

    return { currentBAC: newBAC, soberTimestamp: soberTime };
  };

  const updateUserStatus = (drink: Drink) => {
    const currentTime = new Date().getTime();
    const updatedUserStatus = calculateBACAndSoberTime(drink.servingAmount, drink.alcoholType, userStatus.currentBAC, currentTime);

    setUserStatus(updatedUserStatus);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      if (currentTime >= userStatus.soberTimestamp) {
        setUserStatus({ currentBAC: 0, soberTimestamp: 0 });
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [userStatus]);

  return (
    <UserContext.Provider value={{ userStatus, updateUserStatus }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserStatus = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserStatus must be used within a UserProvider');
  }
  return context;
};