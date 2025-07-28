import React from 'react';

const Connecting: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="relative">
                {/* Global Network SVG */}
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="animate-pulse"
                >
                    {/* Globe outline */}
                    <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                    />
                    
                    {/* Longitude lines */}
                    <ellipse
                        cx="60"
                        cy="60"
                        rx="50"
                        ry="25"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    <ellipse
                        cx="60"
                        cy="60"
                        rx="25"
                        ry="50"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    
                    {/* Connection dots */}
                    <circle cx="30" cy="40" r="3" fill="#8B5CF6">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="90" cy="35" r="3" fill="#3B82F6">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="45" cy="85" r="3" fill="#8B5CF6">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                    <circle cx="80" cy="75" r="3" fill="#3B82F6">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    
                    {/* Connection lines */}
                    <line x1="30" y1="40" x2="90" y2="35" stroke="#8B5CF6" strokeWidth="1" opacity="0.4">
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="45" y1="85" x2="80" y2="75" stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                    </line>
                    
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
                
                {/* Spinning Poker Card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-spin" style={{ animationDuration: '3s' }}>
                        <svg width="40" height="56" viewBox="0 0 40 56" className="drop-shadow-lg">
                            <rect
                                x="2"
                                y="2"
                                width="36"
                                height="52"
                                rx="4"
                                fill="white"
                                stroke="url(#cardGradient)"
                                strokeWidth="2"
                            />
                            
                            {/* Card content */}
                            <text
                                x="20"
                                y="32"
                                textAnchor="middle"
                                className="text-lg font-bold"
                                fill="url(#cardGradient)"
                            >
                                ?
                            </text>
                            
                            {/* Corner decorations */}
                            <circle cx="8" cy="8" r="2" fill="#8B5CF6" opacity="0.6" />
                            <circle cx="32" cy="48" r="2" fill="#3B82F6" opacity="0.6" />
                            
                            <defs>
                                <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#6366F1" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Loading text */}
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Connecting
                </h2>
                <div className="flex space-x-1 justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Connecting;