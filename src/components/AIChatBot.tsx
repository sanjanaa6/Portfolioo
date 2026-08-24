import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, Terminal, User } from 'lucide-react';
import { AI_KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Sanjana AI, an interactive virtual assistant programmed with Sanjana's technical background, projects, and machine learning expertise. How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What LLM frameworks do you use?",
    "Tell me about your RAG project",
    "How can I contact Sanjana?",
    "Show AI/ML core skills"
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response lookup and typing delay
    setTimeout(() => {
      const lowerQuery = text.toLowerCase();
      let matchedAnswer = "";

      for (const item of AI_KNOWLEDGE_BASE) {
        if (item.keywords.some((kw) => lowerQuery.includes(kw))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer = `Sanjana is an experienced Python AI Developer & ML Engineer proficient in PyTorch, TensorFlow, LangChain, RAG systems, and FastAPI. Feel free to ask about her projects, skills, or email her directly at ${PERSONAL_INFO.email}!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: `Hello! I'm Sanjana AI. Ask me anything about Sanjana's ML projects, AI skills, or experience!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md p-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="glass-card rounded-2xl border border-sky-500/30 shadow-2xl overflow-hidden flex flex-col h-[520px] bg-[#090d1f]/95">
        
        {/* Header Bar */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <Bot className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                Sanjana AI <Sparkles className="w-3 h-3 text-amber-300" />
              </h3>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Online & Ready</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-sky-500 text-white'
                    : 'bg-purple-600/30 border border-purple-500/40 text-purple-300'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[82%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-sky-500 text-white rounded-tr-none'
                    : 'glass-card border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
                <div className={`text-[9px] mt-1.5 font-mono ${msg.sender === 'user' ? 'text-sky-100 text-right' : 'text-slate-500'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] p-2">
              <Bot className="w-4 h-4 text-purple-400 animate-spin" />
              <span>Sanjana AI is formulating response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="px-3 py-2 border-t border-slate-800/60 overflow-x-auto flex gap-1.5 no-scrollbar bg-slate-950/40">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 text-[10px] shrink-0 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 border-t border-slate-800 bg-slate-900/90 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Sanjana..."
            className="flex-1 bg-slate-950 border border-slate-800 focus:border-sky-500/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
