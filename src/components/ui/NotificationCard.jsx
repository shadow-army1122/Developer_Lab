// client/src/components/ui/NotificationCard.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const NotificationCard = ({ text }) => {
  return (
    <div className="flex items-center gap-4 px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-xl shadow-lg shadow-black/5 w-full backdrop-blur-sm">
      <div className="shrink-0 w-8 h-8 bg-[#D5312F]/10 rounded-lg flex items-center justify-center border border-[#D5312F]/20">
         <AlertTriangle size={16} className="text-[#D5312F]" />
      </div>
      <p className="text-sm font-medium text-[#131313] leading-snug">
        {text}
      </p>
    </div>
  );
};
