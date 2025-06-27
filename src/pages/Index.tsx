import { useState, useEffect } from 'react';
import RoomHeader from '../components/RoomHeader';
import UserList from '../components/UserList';
import CardSelection from '../components/CardSelection';
import PhaseControls from '../components/PhaseControls';
import VotingResults from '../components/VotingResults';
import LastRoundModal from '../components/LastRoundModal';

// Mock data for initial users
const initialUsers = [
  { id: '1', name: 'Alice Chen', vote: null, hasVoted: false },
  { id: '2', name: 'Bob Johnson', vote: null, hasVoted: false },
  { id: '3', name: 'Carol Davis', vote: null, hasVoted: false },
];

export type User = {
  id: string;
  name: string;
  vote: number | null;
  hasVoted: boolean;
};

export type Phase = 'voting' | 'revealed';

const Index = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPhase, setCurrentPhase] = useState<Phase>('voting');
  const [roomTitle, setRoomTitle] = useState('Sprint Planning - User Stories');
  const [currentUserId] = useState('1'); // Simulating current user
  const [lastRoundUsers, setLastRoundUsers] = useState<User[]>([]);
  const [lastRoundTitle, setLastRoundTitle] = useState('');
  const [showLastRoundModal, setShowLastRoundModal] = useState(false);

  const handleVote = (value: number) => {
    setUsers(prev => prev.map(user => 
      user.id === currentUserId 
        ? { ...user, vote: value, hasVoted: true }
        : user
    ));
  };

  const handleReveal = () => {
    setCurrentPhase('revealed');
  };

  const handleNewRound = () => {
    // Save current round as last round
    setLastRoundUsers([...users]);
    setLastRoundTitle(roomTitle);
    
    // Reset for new round
    setUsers(prev => prev.map(user => ({ 
      ...user, 
      vote: null, 
      hasVoted: false 
    })));
    setCurrentPhase('voting');
  };

  const handleShowLastRound = () => {
    setShowLastRoundModal(true);
  };

  const currentUser = users.find(u => u.id === currentUserId);
  const allUsersVoted = users.length > 0 && users.every(u => u.hasVoted);
  const hasLastRound = lastRoundUsers.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-orange-200 p-4">
      <div className="max-w-6xl mx-auto">
        <RoomHeader 
          title={roomTitle} 
          onTitleChange={setRoomTitle}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
          {/* Main voting area */}
          <div className="lg:col-span-3 space-y-6">
            <CardSelection 
              onVote={handleVote}
              selectedValue={currentUser?.vote || null}
              disabled={currentPhase === 'revealed'}
            />
            
            {currentPhase === 'revealed' && (
              <VotingResults users={users} />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <UserList 
              users={users} 
              currentPhase={currentPhase}
            />
            
            <PhaseControls
              currentPhase={currentPhase}
              onReveal={handleReveal}
              onNewRound={handleNewRound}
              onShowLastRound={handleShowLastRound}
              canReveal={allUsersVoted}
              hasLastRound={hasLastRound}
            />
          </div>
        </div>
      </div>
      
      <LastRoundModal
        isOpen={showLastRoundModal}
        onClose={() => setShowLastRoundModal(false)}
        lastRoundUsers={lastRoundUsers}
        lastRoundTitle={lastRoundTitle}
      />
    </div>
  );
};

export default Index;
