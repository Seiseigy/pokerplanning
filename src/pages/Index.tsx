import { useState, useEffect } from "react";
import RoomHeader from "../components/RoomHeader";
import UserList from "../components/UserList";
import CardSelection from "../components/CardSelection";
import PhaseControls from "../components/PhaseControls";
import VotingResults from "../components/VotingResults";
// import LastRoundModal from "../components/LastRoundModal";
import { useSocket } from "@/hooks/usePokerSocket";
import { Game, GameState } from "@/types/planningPoker";
import Join from "./Join";
import Connecting from "@/components/Connecting";

export type User = {
  id: string;
  name: string;
  vote: number | null;
  hasVoted: boolean;
};

const Index = () => {
  const { state, join, vote, reveal, reset, id } = useSocket();

  const [roomTitle, setRoomTitle] = useState("Sprint Planning - User Stories");
  const [name, setName] = useState("");

  const currentUser = state?.players?.find((p) => p.id === id);
  const allUsersVoted =
    state?.players?.length > 0 && state?.players.every((u) => u.vote !== null);

  if (!state) return <Connecting />;
  if (!state.players.some((p) => p.id === id))
    return <Join join={join} name={name} setName={setName} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <RoomHeader title={roomTitle} onTitleChange={setRoomTitle} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
          {/* Main voting area */}
          <div className="lg:col-span-3 space-y-6">
            <CardSelection
              onVote={vote}
              selectedValue={currentUser?.vote || null}
              disabled={state.state === "revealing"}
            />

            {state.state === "revealing" && (
              <VotingResults users={state.players} />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <UserList users={state.players} currentPhase={state.state} />

            <PhaseControls
              currentPhase={state.state}
              onReveal={reveal}
              onNewRound={reset}
              canReveal={allUsersVoted}
            />
          </div>
        </div>
      </div>

      {/* <LastRoundModal
        isOpen={showLastRoundModal}
        onClose={() => setShowLastRoundModal(false)}
      /> */}
    </div>
  );
};

export default Index;
