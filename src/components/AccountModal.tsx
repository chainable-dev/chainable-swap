'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useState } from 'react';
import { AvatarSelector } from './AvatarSelector';

export function AccountModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState<string>('/avatars/default.png');

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src={currentAvatar} alt="Your profile" />
            <AvatarFallback>👤</AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-6">
          <AvatarSelector
            currentAvatar={currentAvatar}
            onAvatarChange={(newAvatar) => {
              setCurrentAvatar(newAvatar);
              localStorage.setItem('userAvatar', newAvatar);
            }}
          />
          {/* Add additional profile settings here */}
        </div>
      </DialogContent>
    </Dialog>
  );
} 