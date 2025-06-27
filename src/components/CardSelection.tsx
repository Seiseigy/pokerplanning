interface CardSelectionProps {
  onVote: (value: number) => void;
  selectedValue: number | null;
  disabled: boolean;
}

const fibonacciValues = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Elegant single color palette for all cards
const getCardColor = (isSelected: boolean, disabled: boolean) => {
  if (disabled) {
    return 'from-slate-200 to-slate-300 border-slate-400 opacity-50';
  }
  
  if (isSelected) {
    return 'from-indigo-500 to-blue-600 border-indigo-600 shadow-xl transform scale-110 ring-4 ring-indigo-100';
  }
  
  return 'from-slate-600 to-slate-700 border-slate-600 hover:shadow-lg hover:scale-105 hover:from-indigo-400 hover:to-blue-500';
};

const CardSelection = ({ onVote, selectedValue, disabled }: CardSelectionProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-slate-700 mb-6 text-center">
        Select your estimate
      </h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {fibonacciValues.map((value) => (
          <button
            key={value}
            onClick={() => !disabled && onVote(value)}
            disabled={disabled}
            className={`
              aspect-[3/4] rounded-xl border-2 transition-all duration-300 font-bold
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
        <p className="text-center text-lg font-medium text-slate-600 mt-4">
          Voting complete! Waiting for reveal...
        </p>
      )}
    </div>
  );
};

export default CardSelection;
