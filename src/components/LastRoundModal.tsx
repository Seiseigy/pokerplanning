
import { User } from '../pages/Index';
import { X, History } from 'lucide-react';

interface LastRoundModalProps {
  isOpen: boolean;
  onClose: () => void;
  lastRoundUsers: User[];
  lastRoundTitle: string;
}

const LastRoundModal = ({ isOpen, onClose, lastRoundUsers, lastRoundTitle }: LastRoundModalProps) => {
  if (!isOpen) return null;

  const votes = lastRoundUsers.filter(u => u.vote !== null);
  const average = votes.length > 0 ? votes.reduce((sum, u) => sum + u.vote!, 0) / votes.length : 0;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-2xl max-w-md w-full animate-scale-in border-2 border-cyan-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg">
                <History size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-cyan-800">📊 Last Round</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
            >
              <X size={18} className="text-cyan-600" />
            </button>
          </div>
          
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl border border-cyan-200">
            <p className="text-lg text-cyan-800 font-bold">{lastRoundTitle}</p>
            <p className="text-sm text-cyan-600 mt-1 font-medium">
              🎯 Average: <span className="font-bold text-lg">{average.toFixed(1)}</span>
            </p>
          </div>

          <div className="space-y-3">
            {lastRoundUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-cyan-200 shadow-sm">
                <span className="text-lg text-cyan-800 font-bold">
                  👤 {user.name}
                </span>
                
                {user.vote !== null ? (
                  <div className="w-10 h-12 rounded-lg border-2 border-blue-400 flex items-center justify-center text-lg font-bold bg-gradient-to-br from-blue-400 to-blue-500 text-white transform transition-transform hover:scale-110 shadow-md">
                    {user.vote}
                  </div>
                ) : (
                  <div className="w-10 h-12 rounded-lg border-2 border-dashed border-slate-400 flex items-center justify-center text-sm text-slate-500 bg-slate-100">
                    ❌
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

