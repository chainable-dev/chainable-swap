'use client';

import { useState, useEffect } from 'react';
import { AvatarSelector } from './AvatarSelector';

export function Profile() {
  const [currentAvatar, setCurrentAvatar] = useState<string>('/avatars/default.png');

  // Load saved avatar on mount
  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setCurrentAvatar(savedAvatar);
    }
  }, []);

  const handleAvatarChange = async (newAvatarUrl: string) => {
    try {
      // Update state
      setCurrentAvatar(newAvatarUrl);
      
      // Save to local storage
      localStorage.setItem('userAvatar', newAvatarUrl);
      
      // Optional: Save to blockchain/backend
      // await updateAvatarOnChain(newAvatarUrl);
      
    } catch (error) {
      console.error('Failed to update avatar:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <AvatarSelector
        currentAvatar={currentAvatar}
        onAvatarChange={handleAvatarChange}
      />
    </div>
  );
} 