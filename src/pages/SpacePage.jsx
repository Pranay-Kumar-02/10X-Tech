import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mic, Sparkles, MessageSquare, Plus, Trash2, Bot, User } from 'lucide-react';
import Starfield from '../components/Starfield';

const SpacePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const initialQuery = state?.initialQuery ?? '';

  const [messages, setMessages] = useState([
    { 
      id: 'welcome', 
      sender: 'assistant', 
      text: 'Hello! I am LUCA, your AI assistant. I am currently running on a dummy local model. You can type any query here, and once you confirm it works, you can easily plug in your own API or model endpoint in `src/pages/SpacePage.jsx`!' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle initial query from home page
  useEffect(() => {
    if (initialQuery.trim()) {
      // Small timeout to allow the transition animation to complete
      const timer = setTimeout(() => {
        handleSendMessage(initialQuery);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [initialQuery]);

  const getDummyResponse = (userText) => {
    const text = userText.toLowerCase().trim();
    if (text.includes('hello') || text.includes('hi') || text === 'hey') {
      return "Hello! How can I assist you today? I'm ready to process your requests.";
    }
    if (text.includes('who are you') || text.includes('your name') || text.includes('luca')) {
      return "I am LUCA, an AI assistant powered by a Language Fluency Model (LFM) developed by 10X Technologies. I'm designed for low-latency, private, and localized intelligence.";
    }
    if (text.includes('model') || text.includes('api') || text.includes('connect') || text.includes('how to')) {
      return "To connect your own model:\n\n1. Open `src/pages/SpacePage.jsx`.\n2. Locate the `handleSendMessage` function.\n3. Replace the local simulation logic with a `fetch()` call to your API endpoint (e.g., your local server or Hugging Face Space API).\n4. Update the state with the model's actual response.";
    }
    if (text.includes('weather')) {
      return "I don't have access to real-time weather data right now, but I can tell you that the local climate in 10X Technologies' environment is always set to innovation!";
    }
    return `Received: "${userText}"\n\nThis is a mock response from the dummy LUCA model. You can edit the \`handleSendMessage\` function in \`src/pages/SpacePage.jsx\` to connect your actual AI model.`;
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { id: Date.now().toString(), sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate model thinking delay
    setTimeout(() => {
      const replyText = getDummyResponse(textToSend);
      setIsTyping(false);

      // Stream the response word by word
      const words = replyText.split(' ');
      let currentText = '';
      const replyMsgId = (Date.now() + 1).toString();

      // Pre-add empty assistant message
      setMessages((prev) => [...prev, { id: replyMsgId, sender: 'assistant', text: '' }]);

      let wordIndex = 0;
      const interval = setInterval(() => {
        if (wordIndex < words.length) {
          currentText += (wordIndex === 0 ? '' : ' ') + words[wordIndex];
          setMessages((prev) => 
            prev.map((msg) => msg.id === replyMsgId ? { ...msg, text: currentText } : msg)
          );
          wordIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // 50ms per word
    }, 800);
  };

  const handleClearChat = () => {
    setMessages([
      { 
        id: 'welcome', 
        sender: 'assistant', 
        text: 'Chat cleared. How can I help you now?' 
      }
    ]);
  };

  return (
    <div className="fixed inset-0 flex bg-[#07070f] text-white font-sans overflow-hidden">
      {/* Fullscreen Space Background */}
      <div className="fixed top-0 left-0 right-0 w-full h-[100svh] pointer-events-none z-0 overflow-hidden">
        <Starfield />
      </div>

      {/* Sidebar - Desktop only */}
      <div className="hidden md:flex flex-col w-64 bg-[#0d0d18]/90 backdrop-blur-md border-r border-white/[0.07] z-10 shrink-0">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/[0.07] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <span className="font-semibold text-sm tracking-wide text-white/90">LUCA Space</span>
          </div>
          <button
            onClick={handleClearChat}
            className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200"
            title="Clear Chat"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <button
            onClick={handleClearChat}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-semibold active:scale-[0.98] transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Chat History Placeholder */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
          <div className="text-[10px] uppercase tracking-wider text-white/30 px-3 py-1 font-bold">
            Recent Chats
          </div>
          <button className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-left text-xs font-medium text-purple-300 animate-pulse">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="truncate">Dummy Model Test</span>
          </button>
        </div>

        {/* Developer Info Footer */}
        <div className="p-4 border-t border-white/[0.07] bg-white/[0.01]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white/90">Dev Mode</div>
              <div className="text-[10px] text-white/40">Dummy Endpoint Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow flex flex-col h-full relative z-10 bg-transparent">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#0d0d18]/90 backdrop-blur-md border-b border-white/[0.07] shrink-0">
          <div className="flex items-center gap-4 min-w-0">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[13px] font-medium shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="w-px h-4 bg-white/10 shrink-0" />
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse shrink-0" />
              <span className="text-white/80 text-[13px] font-medium truncate">LUCA AI (Dummy Model)</span>
            </div>
          </div>
          <button
            onClick={handleClearChat}
            className="md:hidden p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Assistant Avatar */}
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#512da8] to-purple-600 flex items-center justify-center shadow-lg shrink-0 mt-0.5">
                    <Bot className="w-4.5 h-4.5 text-white" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`relative py-3.5 px-4.5 rounded-2xl text-[14.5px] leading-relaxed shadow-lg whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#512da8] to-[#6d28d9] text-white rounded-tr-sm max-w-[80%]'
                      : 'bg-[#1e1f20]/95 border border-white/[0.08] text-white rounded-tl-sm max-w-[85%]'
                  }`}
                >
                  {msg.text}
                </div>

                {/* User Avatar */}
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4.5 h-4.5 text-white/80" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3.5 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#512da8] to-purple-600 flex items-center justify-center shadow-lg shrink-0">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="bg-[#1e1f20]/95 border border-white/[0.08] text-white py-4 px-5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input Bar */}
        <div className="p-4 border-t border-white/[0.05] bg-[#0d0d18]/40 backdrop-blur-md shrink-0">
          <div className="max-w-3xl mx-auto">
            <style>{`
              .glow-wrapper {
                position: absolute;
                inset: -1.5px;
                border-radius: 32px;
                background: linear-gradient(90deg, #a855f7, #6366f1, #3b82f6, #ec4899, #a855f7);
                background-size: 200% auto;
                animation: rotateGlow 3s linear infinite;
                z-index: 0;
                opacity: 0;
                transition: opacity 0.4s ease-in-out;
                pointer-events: none;
              }
              .glow-blur {
                inset: -3px;
                filter: blur(12px);
              }
              .glow-wrapper.active {
                opacity: 1;
              }
              .glow-blur.active {
                opacity: 0.65;
              }
              @keyframes rotateGlow {
                0% { background-position: 0% center; }
                100% { background-position: 200% center; }
              }
            `}</style>
            
            <div className="relative w-full">
              {/* Glow Border Wrappers */}
              <div className={`glow-wrapper ${input.trim() ? 'active' : ''}`} />
              <div className={`glow-wrapper glow-blur ${input.trim() ? 'active' : ''}`} />

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="relative flex items-center bg-[#1e1f20]/95 border border-white/[0.06] focus-within:border-white/20 rounded-[32px] py-2 px-3 transition-all duration-300 w-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-10"
              >
                {/* Mic Button */}
                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white/60 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
                >
                  <Mic className="w-4.5 h-4.5" />
                </button>

                {/* Input Area */}
                <input
                  type="text"
                  placeholder="Message LUCA..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none text-white placeholder-white/30 text-sm px-3.5 py-2.5 focus:ring-0 focus:outline-none"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 shrink-0 cursor-pointer ${
                    input.trim()
                      ? 'bg-white text-black hover:bg-zinc-200 active:scale-95'
                      : 'text-white/30 hover:bg-white/5'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            <div className="text-[10px] text-center text-white/30 mt-2">
              LUCA can make mistakes. Verify important info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacePage;
