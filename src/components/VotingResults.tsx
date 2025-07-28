
import { Game } from '@/types/planningPoker';
import { User } from '../pages/Index';
import { BarChart3 } from 'lucide-react';

interface VotingResultsProps {
  users: Game['players'];
}

const VotingResults = ({ users }: VotingResultsProps) => {
  const votes = users.filter(u => u.vote !== null).map(u => u.vote!);
  const voteCount = votes.reduce((acc, vote) => {
    acc[vote] = (acc[vote] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);
  
  const sortedVotes = Object.entries(voteCount)
    .sort(([a], [b]) => Number(a) - Number(b));
  
  const maxCount = Math.max(...Object.values(voteCount));
  const average = votes.length > 0 ? votes.reduce((a, b) => a + b, 0) / votes.length : 0;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 size={20} className="text-slate-600" />
        <h3 className="text-lg font-medium text-slate-700">Voting Results</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vote Distribution */}
        <div>
          <h4 className="font-medium text-slate-600 mb-3">Distribution</h4>
          <div className="space-y-2">
            {sortedVotes.map(([vote, count]) => (
              <div key={vote} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center text-sm font-medium text-sage-700">
                  {vote}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-slate-600">{count} vote{count !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-sage-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(count / maxCount) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <div>
          <h4 className="font-medium text-slate-600 mb-3">Summary</h4>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-sm text-blue-600 font-medium">Average</div>
              <div className="text-2xl font-bold text-blue-700">
                {average.toFixed(1)}
              </div>
            </div>
            <div className="bg-sage-50 rounded-lg p-3">
              <div className="text-sm text-sage-600 font-medium">Participants</div>
              <div className="text-2xl font-bold text-sage-700">
                {votes.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingResults;
