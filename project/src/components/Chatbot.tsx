import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm SARANSH 🤖 — your virtual assistant for internships. Ask me anything about government or private internship opportunities!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'how to apply for aicte internship':
      'To apply for AICTE internships: 1) Create your profile on our portal 2) Upload your resume 3) Browse available AICTE internships 4) Click "Apply" on relevant positions 5) Track your application status in your profile.',
    stipend:
      'Stipend is the monthly allowance provided during internships. Government internships typically offer ₹15,000-₹30,000 per month, while private internships range from ₹10,000-₹25,000 depending on the role and company.',
    'where can i see notifications':
      'You can view notifications in your Profile section after logging in. We send alerts for new internship opportunities, application updates, and scheme announcements.',
    'eligibility criteria':
      'General eligibility: 1) Must be a current student or recent graduate 2) Minimum 60% marks in your degree 3) Relevant skills for the internship role 4) Age limit varies by scheme (usually 18-28 years)',
    'application process':
      'Application Process: 1) Register/Login to the portal 2) Complete your profile 3) Upload resume and documents 4) Search for suitable internships 5) Submit applications 6) Wait for selection results',
    'selection process':
      'Selection typically involves: 1) Application screening 2) Resume evaluation 3) Online/offline interview 4) Skill assessment (if required) 5) Final selection notification via email and portal.',
    'documents required':
      'Required documents: 1) Resume/CV 2) Academic transcripts 3) ID proof (Aadhar/Passport) 4) Passport size photos 5) Skill certificates (if any) 6) No objection certificate from college',
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! How can I help you with your internship journey today?';
    }
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you have more questions about internships.";
    }
    if (lowerMessage.includes('help')) {
      return 'I can assist you with AICTE applications, stipend info, scheme notifications, eligibility, and more. Just ask!';
    }

    return "I understand you're asking about internships. Try asking things like: \"How to apply for AICTE internship\", \"Stipend details\", or \"Documents required\".";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputValue.trim()),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Toggle Chat Button */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className={`
          fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg
          transition-transform duration-300 ease-in-out transform
          flex items-center justify-center z-50
          ${isOpen ? 'rotate-180 scale-110' : 'scale-100'}
        `}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 w-80 h-[24rem] bg-white rounded-lg shadow-xl border border-gray-200 z-50
          flex flex-col
          transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-8 invisible'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-header"
      >
        {/* Header */}
        <header
          id="chatbot-header"
          className="bg-blue-600 text-white p-4 rounded-t-lg flex flex-col"
        >
          <h3 className="font-semibold text-lg select-none">🤖 SARANSH</h3>
          <p className="text-sm text-blue-200 select-none">Your Internship Help Assistant</p>
        </header>

        {/* Messages */}
        <main className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`
                  max-w-xs p-3 rounded-lg shadow-md break-words whitespace-pre-wrap
                  ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}
                `}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>

        {/* Input */}
        <footer className="p-4 border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex space-x-2"
          >
            <textarea
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask SARANSH about internships..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Type your message here"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

export default Chatbot;
