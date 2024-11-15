'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

const AVATAR_OPTIONS = [
  '/avatars/avatar-1.png',
  '/avatars/avatar-2.png',
  '/avatars/avatar-3.png',
  '/avatars/avatar-4.png',
];

interface AvatarSelectorProps {
  currentAvatar?: string;
  onAvatarChange: (avatarUrl: string) => void;
}

export function AvatarSelector({ currentAvatar, onAvatarChange }: AvatarSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="rounded-full p-0">
          <Avatar className="w-20 h-20 cursor-pointer hover:opacity-90 transition-opacity">
            <AvatarImage src={currentAvatar} alt="Profile" />
            <AvatarFallback>👤</AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="grid grid-cols-3 gap-4 p-4">
          {AVATAR_OPTIONS.map((avatarUrl, index) => (
            <Button
              key={index}
              variant="ghost"
              className="p-0"
              onClick={() => {
                onAvatarChange(avatarUrl);
                setIsOpen(false);
              }}
            >
              <Avatar className="w-16 h-16 cursor-pointer hover:opacity-90 transition-opacity">
                <AvatarImage src={avatarUrl} alt={`Avatar option ${index + 1}`} />
                <AvatarFallback>👤</AvatarFallback>
              </Avatar>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AvatarSelector; 