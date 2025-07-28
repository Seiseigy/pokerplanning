import { GameState } from "@/types/planningPoker";
import { Eye, RotateCcw, History } from "lucide-react";

interface PhaseControlsProps {
  currentPhase: GameState;
  onReveal: () => void;
  onNewRound: () => void;
  canReveal: boolean;
}

const PhaseControls = ({
  currentPhase,
  onReveal,
  onNewRound,
  canReveal,
}: PhaseControlsProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-5 shadow-lg">
      <h3 className="font-semibold text-slate-700 mb-4 text-lg">Controls</h3>

      <div className="space-y-3">
        {currentPhase === "voting" ? (
          <button
            onClick={onReveal}
            disabled={!canReveal}
            className={`
              w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200
              flex items-center justify-center gap-2 text-lg
              ${
                canReveal
                  ? "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }
            `}
          >
            <Eye size={20} />
            Reveal Votes
          </button>
        ) : (
          <button
            onClick={onNewRound}
            className="w-full py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-lg"
          >
            <RotateCcw size={20} />
            New Round
          </button>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="text-sm text-slate-600 text-center font-medium">
          Phase:{" "}
          <span className="font-semibold capitalize bg-slate-100 px-2 py-1 rounded-lg text-slate-700">
            {currentPhase}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhaseControls;
