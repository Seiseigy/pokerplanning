import React, { useState } from 'react';

interface JoinProps {
    join: (name: string) => void;
    name: string;
    setName(name: string): void;
}
const Join: React.FC<JoinProps> = ({join, name, setName}) => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-cyan-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Room</h1>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="roomCode" className="block text-sm font-medium text-gray-700 mb-2">
                                Room Code
                            </label>
                            <input
                                type="text"
                                id="roomCode"
                                // value={roomCode}
                                // onChange={(e) => setRoomCode(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
                                placeholder="Enter room code"
                                disabled
                            />
                            <div className="absolute top-0 right-0">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!name.trim()}
                            onClick={(e) => {
                                e.preventDefault();
                                if (name.trim()) {
                                    join(name.trim());
                                }
                            }}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Join Room
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have a code?{' '}
                            <a href="/create" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
                                Create a room for your team
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;