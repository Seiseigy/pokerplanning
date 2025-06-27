
interface CardSelectionProps {
  onVote: (value: number) => void;
  selectedValue: number | null;
  disabled: boolean;
}

const fibonacciValues = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const CardSelection = ({ onVote, selectedValue, disabled }: CardSelectionProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-sm">
      <h3 className="text-lg font-medium text-slate-700 mb-6 text-center">
        Select your estimate
      </h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {fibonacciValues.map((value) => (
          <button
            key={value}
            onClick={() => !disabled && onVote(value)}
            disabled={disabled}
            className={`
              aspect-[3/4] rounded-xl border-2 transition-all duration-200 font-medium
              flex items-center justify-center text-lg
              ${selectedValue === value
                ? 'border-sage-400 bg-sage-100 text-sage-700 shadow-md scale-105'
                : 'border-slate-200 bg-white hover:border-sage-300 hover:bg-sage-50 hover:scale-105 text-slate-700'
              }
              ${disabled 
                ? 'opacity-50 cursor-not-allowed hover:scale-100' 
                : 'cursor-pointer hover:shadow-md'
              }
            `}
          >
            {value}
          </button>
        ))}
      </div>
      
      {disabled && (
        <p className="text-center text-sm text-slate-500 mt-4">
          Voting phase complete. Waiting for reveal.
        </p>
      )}
    </div>
  );
};

export default CardSelection;
