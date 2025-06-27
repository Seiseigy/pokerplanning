
import { Phase } from '../pages/Index';
import { Eye, RotateCcw, History } from 'lucide-react';

interface PhaseControlsProps {
  currentPhase: Phase;
  onReveal: () => void;
  onNewRound: () => void;
  onShowLastRound: () => void;
  canReveal: boolean;
  hasLastRound: boolean;
}

const PhaseControls = ({ 
  currentPhase, 
  onReveal, 
  onNewRound, 
  onShowLastRound, 
  canReveal, 
  hasLastRound 
}: PhaseControlsProps) => {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-5 shadow-lg">
      <h3 className="font-bold text-orange-800 mb-4 text-lg">🎮 Controls</h3>
      
      <div className="space-y-3">
        {currentPhase === 'voting' ? (
          <button
            onClick={onReveal}
            disabled={!canReveal}
            className={`
              w-full py-3 px-4 rounded-xl font-bold transition-all duration-200
              flex items-center justify-center gap-2 text-lg
              ${canReveal
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }
            `}
          >
            <Eye size={20} />
            🔍 Reveal Votes
          </button>
        ) : (
          <button
            onClick={onNewRound}
            className="w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-lg"
          >
            <RotateCcw size={20} />
            🔄 New Round
          </button>
        )}
        
        {hasLastRound && (
          <button
            onClick={onShowLastRound}
            className="w-full py-2 px-4 rounded-xl font-bold bg-gradient-to-r from-pink-200 to-rose-200 hover:from-pink-300 hover:to-rose-300 text-pink-800 border-2 border-pink-300 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
          >
            <History size={16} />
            📊 Last Round
          </button>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t-2 border-orange-200">
        <div className="text-sm text-orange-700 text-center font-medium">
          Phase: <span className="font-bold capitalize bg-orange-200 px-2 py-1 rounded-lg">{currentPhase}</span>
        </div>
      </div>
    </div>
  );
};

export default PhaseControls;

