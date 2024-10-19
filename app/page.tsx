"use client"
import Login from '@/components/Login';
import Homepage from '@/containers/home-page';
import { useUser } from '@/contexts/useUserContext';
import React from 'react';

const App: React.FC = () => {
  const {isLoggedIn} = useUser()
    return (
        <div>
            {!isLoggedIn ? (
              <Homepage />
            ) : (
              <Login />
            )}
        </div>
    );
};

export default App;