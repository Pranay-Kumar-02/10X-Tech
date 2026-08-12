import React, { useState } from 'react';
import { Paperclip, Mic, Send, Info } from 'lucide-react';

const TokenizerPrototype = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100svh] w-full bg-[#030305] text-white font-sans p-6">
      
      {/* Top Right Info Button */}
      <button className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center">
        <Info className="w-5 h-5" />
      </button>

      {/* Centered Search Bar Container */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="relative flex items-center bg-[#101014] border border-white/10 rounded-full pr-2 pl-4 py-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] focus-within:border-purple-500/50 focus-within:bg-[#15151A] focus-within:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
          
          <button className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          
          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to tokenize..."
            className="flex-1 bg-transparent border-none text-[15px] text-white px-3 py-3 focus:outline-none placeholder:text-zinc-600"
          />
          
          <button className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          
          <button 
            disabled={!inputText.trim()}
            className="p-2 ml-1 text-white bg-white/10 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-center text-[11px] text-zinc-600">
          Akshara Tokenizer Prototype. Model can make mistakes. Verify critical outputs.
        </p>
      </div>

    </div>
  );
};

export default TokenizerPrototype;
