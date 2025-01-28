import React, { useState, useRef } from 'react';
import { Send, User, Video, Phone, Paperclip, Image as ImageIcon, Mic, X } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  fileName?: string;
}

interface Contact {
  id: number;
  name: string;
  status: 'online' | 'offline';
  avatar?: string;
  lastMessage?: string;
}

const Messages = () => {
  const [message, setMessage] = useState('');
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const contacts: Contact[] = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      status: 'online',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Hey, how are you?'
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      status: 'offline',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'The project looks great!'
    },
    { 
      id: 3, 
      name: 'Emma Wilson', 
      status: 'online',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Meeting at 3 PM?'
    },
  ];

  const messages: Message[] = [
    { id: 1, sender: 'Sarah Johnson', content: 'Hey, how are you?', time: '10:30 AM', type: 'text' },
    { id: 2, sender: 'You', content: "I'm good, thanks! How about you?", time: '10:31 AM', type: 'text' },
    { 
      id: 3, 
      sender: 'Sarah Johnson', 
      content: 'Project Update.pdf', 
      time: '10:32 AM', 
      type: 'file',
      fileUrl: '#',
      fileName: 'Project Update.pdf'
    },
    { id: 4, sender: 'You', content: 'Great! Working on the project.', time: '10:33 AM', type: 'text' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      setShowAttachmentMenu(false);
    }
  };

  const handleVideoCall = () => {
    setIsVideoCallActive(true);
    // Implement video call logic here
  };

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="h-full bg-white rounded-lg shadow-sm flex">
        {/* Contacts */}
        <div className="w-80 border-r">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Messages</h2>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
                onClick={() => setSelectedContact(contact)}
              >
                <div className="relative">
                  {contact.avatar ? (
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-gray-400 bg-gray-100 rounded-full p-2" />
                  )}
                  <span
                    className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white
                      ${contact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                  <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                Online
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleVideoCall()}
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full"
              >
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full">
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'You'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {msg.type === 'text' ? (
                    <p className="text-sm">{msg.content}</p>
                  ) : msg.type === 'file' ? (
                    <div className="flex items-center space-x-2">
                      <Paperclip className="h-4 w-4" />
                      <a href={msg.fileUrl} className="text-sm underline">
                        {msg.fileName}
                      </a>
                    </div>
                  ) : null}
                  <p className="text-xs mt-1 opacity-75">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                  className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                {showAttachmentMenu && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border p-2">
                    <div className="space-y-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg w-full text-left"
                      >
                        <ImageIcon className="h-5 w-5 text-gray-500" />
                        <span>Image</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg w-full text-left">
                        <Paperclip className="h-5 w-5 text-gray-500" />
                        <span>File</span>
                      </button>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileUpload}
                  accept="image/*,.pdf,.doc,.docx"
                />
              </div>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Call Modal */}
        {isVideoCallActive && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-full max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Video Call with Sarah Johnson</h3>
                <button
                  onClick={() => setIsVideoCallActive(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg mb-4">
                {/* Video call interface would go here */}
              </div>
              <div className="flex justify-center space-x-4">
                <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                  <Phone className="h-6 w-6" />
                </button>
                <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700">
                  <Mic className="h-6 w-6" />
                </button>
                <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700">
                  <Video className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;