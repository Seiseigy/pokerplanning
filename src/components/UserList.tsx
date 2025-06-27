
import { User, Phase } from '../pages/Index';
import { CheckCircle2, Circle, Eye } from 'lucide-react';

interface UserListProps {
  users: User[];
  currentPhase: Phase;
}

const UserList = ({ users, currentPhase }: UserListProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Eye size={16} className="text-slate-600" />
        <h3 className="font-medium text-slate-700">
          Participants ({users.length})
        </h3>
      </div>
      
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <span className="text-sm text-slate-700 font-medium">
              {user.name}
            </span>
            
            <div className="flex items-center gap-2">
              {currentPhase === 'revealed' && user.vote !== null && (
                <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded-full font-medium">
                  {user.vote}
                </span>
              )}
              
              {user.hasVoted ? (
                <CheckCircle2 size={16} className="text-sage-500" />
              ) : (
                <Circle size={16} className="text-slate-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
