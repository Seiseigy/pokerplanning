
interface CardSelectionProps {
  onVote: (value: number) => void;
  selectedValue: number | null;
  disabled: boolean;
}

const fibonacciValues = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Color mapping for each card value
const getCardColor = (value: number, isSelected: boolean, disabled: boolean) => {
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

  if (disabled) {
    return 'from-slate-200 to-slate-300 border-slate-400 opacity-50';
  }
  
  if (isSelected) {
    return `${colorMap[value]} shadow-lg transform scale-110 ring-2 ring-white`;
  }
  
  return `${colorMap[value]} hover:shadow-md hover:scale-105`;
};

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
              aspect-[3/4] rounded-xl border-2 transition-all duration-300 font-medium
              flex items-center justify-center text-lg bg-gradient-to-br
              ${getCardColor(value, selectedValue === value, disabled)}
              ${disabled 
                ? 'cursor-not-allowed' 
                : 'cursor-pointer hover:rotate-1 active:rotate-0 active:scale-95'
              }
              transform-gpu will-change-transform
            `}
          >
            {value}
          </button>
        ))}
      </div>
      
      {disabled && (
        <p className="text-center text-sm text-slate-500 mt-4 animate-pulse">
          Voting phase complete. Waiting for reveal.
        </p>
      )}
    </div>
  );
};

export default CardSelection;
