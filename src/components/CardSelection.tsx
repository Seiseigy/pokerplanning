

interface CardSelectionProps {
  onVote: (value: number) => void;
  selectedValue: number | null;
  disabled: boolean;
}

const fibonacciValues = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Single bright color for all cards
const getCardColor = (isSelected: boolean, disabled: boolean) => {
  if (disabled) {
    return 'from-slate-300 to-slate-400 border-slate-500 opacity-60';
  }
  
  if (isSelected) {
    return 'from-emerald-400 to-emerald-500 border-emerald-600 shadow-xl transform scale-110 ring-4 ring-emerald-200';
  }
  
  return 'from-blue-400 to-blue-500 border-blue-600 hover:shadow-lg hover:scale-105 hover:from-blue-500 hover:to-blue-600';
};

const CardSelection = ({ onVote, selectedValue, disabled }: CardSelectionProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-sm rounded-2xl border-2 border-purple-200 p-6 shadow-lg">
      <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">
        Select your estimate
      </h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {fibonacciValues.map((value) => (
          <button
            key={value}
            onClick={() => !disabled && onVote(value)}
            disabled={disabled}
            className={`
              aspect-[3/4] rounded-xl border-3 transition-all duration-300 font-bold
              flex items-center justify-center text-xl bg-gradient-to-br text-white
              ${getCardColor(selectedValue === value, disabled)}
              ${disabled 
                ? 'cursor-not-allowed' 
                : 'cursor-pointer hover:rotate-2 active:rotate-0 active:scale-95'
              }
              transform-gpu will-change-transform
            `}
          >
            {value}
          </button>
        ))}
      </div>
      
      {disabled && (
        <p className="text-center text-lg font-medium text-purple-700 mt-4 animate-pulse">
          🎯 Voting complete! Waiting for reveal...
        </p>
      )}
    </div>
  );
};

export default CardSelection;

