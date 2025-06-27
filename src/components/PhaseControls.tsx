
import { Phase } from '../pages/Index';
import { Eye, RotateCcw } from 'lucide-react';

interface PhaseControlsProps {
  currentPhase: Phase;
  onReveal: () => void;
  onNewRound: () => void;
  canReveal: boolean;
}

const PhaseControls = ({ currentPhase, onReveal, onNewRound, canReveal }: PhaseControlsProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-5 shadow-sm">
      <h3 className="font-medium text-slate-700 mb-4">Controls</h3>
      
      <div className="space-y-3">
        {currentPhase === 'voting' ? (
          <button
            onClick={onReveal}
            disabled={!canReveal}
            className={`
              w-full py-3 px-4 rounded-xl font-medium transition-all duration-200
              flex items-center justify-center gap-2
              ${canReveal
                ? 'bg-sage-500 hover:bg-sage-600 text-white shadow-md hover:shadow-lg'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }
            `}
          >
            <Eye size={18} />
            Reveal Votes
          </button>
        ) : (
          <button
            onClick={onNewRound}
            className="w-full py-3 px-4 rounded-xl font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} />
            New Round
          </button>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="text-xs text-slate-500 text-center">
          Phase: <span className="font-medium capitalize">{currentPhase}</span>
        </div>
      </div>
    </div>
  );
};

export default PhaseControls;
