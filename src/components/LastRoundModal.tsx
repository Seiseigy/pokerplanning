
import { User } from '../pages/Index';
import { X, History } from 'lucide-react';

interface LastRoundModalProps {
  isOpen: boolean;
  onClose: () => void;
  lastRoundUsers: User[];
  lastRoundTitle: string;
}

const getCardColor = (value: number) => {
  const colorMap: { [key: number]: string } = {
    1: 'from-pink-200 to-pink-300 border-pink-400',
    2: 'from-purple-200 to-purple-300 border-purple-400',
    3: 'from-blue-200 to-blue-300 border-blue-400',
    5: 'from-cyan-200 to-cyan-300 border-cyan-400',
    8: 'from-teal-200 to-teal-300 border-teal-400',
    13: 'from-green-200 to-green-300 border-green-400',
    21: 'from-lime-200 to-lime-300 border-lime-400',
    34: 'from-yellow-200 to-yellow-300 border-yellow-400',
    55: 'from-orange-200 to-orange-300 border-orange-400',
    89: 'from-red-200 to-red-300 border-red-400',
    144: 'from-rose-200 to-rose-300 border-rose-400'
  };
  
  return colorMap[value] || 'from-slate-200 to-slate-300 border-slate-400';
};

const LastRoundModal = ({ isOpen, onClose, lastRoundUsers, lastRoundTitle }: LastRoundModalProps) => {
  if (!isOpen) return null;

  const votes = lastRoundUsers.filter(u => u.vote !== null);
  const average = votes.length > 0 ? votes.reduce((sum, u) => sum + u.vote!, 0) / votes.length : 0;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <History size={20} className="text-sage-600" />
              <h3 className="text-lg font-medium text-slate-700">Last Round</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={18} className="text-slate-500" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-slate-600 font-medium">{lastRoundTitle}</p>
            <p className="text-xs text-slate-500 mt-1">Average: {average.toFixed(1)}</p>
          </div>

          <div className="space-y-3">
            {lastRoundUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <span className="text-sm text-slate-700 font-medium">
                  {user.name}
                </span>
                
                {user.vote !== null ? (
                  <div className={`
                    w-8 h-10 rounded-lg border-2 flex items-center justify-center text-sm font-medium
                    bg-gradient-to-br ${getCardColor(user.vote)} transform transition-transform hover:scale-110
                  `}>
                    {user.vote}
                  </div>
                ) : (
                  <div className="w-8 h-10 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-xs text-slate-400">
                    -
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastRoundModal;
