import { useEffect, useState } from "react";
import type { Game } from "../types/planningPoker";
import { socket } from "@/lib/socket/poker";

export const useSocket = () => {
  // Default state for the game
  // Once we got connected, this will be updated by the server
  const [state, setState] = useState<Game>({
    id: "",
    name: "",
    state: "lobby",
    players: [],
    votes: {},
  });

  useEffect(() => {
    socket.connect();
    socket.on("state", (s: Game) => setState({ ...s }));
    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
      setState(undefined);
    });

    return () => {
      socket.off();
      socket.disconnect();
    };
  }, []);

  const join = (name: string) => socket.emit("join", name);
  const vote = (card: number) => socket.emit("vote", card);
  const reveal = () => socket.emit("reveal");
  const reset = () => socket.emit("reset");

  return { state, join, vote, reveal, reset, id: socket.id };
};
