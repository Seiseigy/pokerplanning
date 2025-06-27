
import { useState } from 'react';
import { Edit3 } from 'lucide-react';

interface RoomHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
}

const RoomHeader = ({ title, onTitleChange }: RoomHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const handleSave = () => {
    onTitleChange(tempTitle);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setTempTitle(title);
      setIsEditing(false);
    }
  };

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 group">
        {isEditing ? (
          <input
            type="text"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className="text-3xl font-light text-slate-800 bg-transparent border-b-2 border-sage-300 focus:border-sage-500 focus:outline-none text-center min-w-0"
            autoFocus
          />
        ) : (
          <>
            <h1 className="text-3xl font-light text-slate-800">
              {title}
            </h1>
            <button
              onClick={() => setIsEditing(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-sage-100 rounded-lg"
            >
              <Edit3 size={16} className="text-slate-500" />
            </button>
          </>
        )}
      </div>
      <div className="w-16 h-0.5 bg-gradient-to-r from-sage-300 to-blue-300 mx-auto mt-3"></div>
    </div>
  );
};

export default RoomHeader;
