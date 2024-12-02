import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to Rocket Car Wash! 🚗 How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [awaitingEmail, setAwaitingEmail] = useState(false); // To track if we're awaiting the user's email

  // Predefined responses with Rocket Car Wash details
  const responses = {
    // General greetings
    hi: 'Hi there! 👋 Welcome to Rocket Car Wash. How can I help you?',
    hello: 'Hello! 🚗 How can I make your car shine today?',
    hey: 'Hey! What’s up? Let me know how I can assist you!',

    // Funny Questions
    'are you a robot': 'Yes, but a very smart one. 🤖 Care to test my knowledge?',
    'tell me a joke': "Why don’t cars ever get tired? Because they always have a spare! 😂",
    'can you wash my car': 'If only I had hands! But I can guide you to the best car wash services. 🚗💦',
    'do you like cars': 'I *love* cars! Especially ones that sparkle after a good wash. ✨',
    'i love you' : 'i love You as a friend',

    // Rocket Car Wash details
    'what is rocket car wash':
      'Rocket Car Wash is your one-stop destination for premium car care services, including car washing, waxing, coating treatments, paint protection, and more!',
    'what services do you offer':
      'We offer car washing, rubbing & waxing, coating treatments, paint protection, tyre care, and internal cleaning.',
    'what is car paint protection':
      'Car paint protection is a specialized coating that safeguards your car’s paint from scratches, UV damage, and environmental contaminants.',
    'what is car waxing':
      'Car waxing enhances your car’s shine and protects the paint by applying a protective wax coating.',
    'what is tyre care':
      'Tyre care includes thorough cleaning, inspection, and maintenance of your car tyres to ensure their longevity and safety.',
    'how much does a car wash cost':
      'Our car wash pricing starts at $15 for a basic wash. Premium packages with waxing and coating are also available. Let us know if you’d like more details!',
    'where is rocket car wash located':
      'Rocket Car Wash is located at [your location address]. Visit us for the ultimate car care experience!',

    // Funny random responses
    'what’s your favorite car':
      'I’m a fan of all cars! But if I had to pick, I’d say one that’s always clean and shiny. 😉',
    'do you take vacations':
      'I’m always on duty, making sure your car gets the care it deserves! But I wouldn’t mind a trip to a luxury garage. 🛠️',
    'can you drive': 'Not yet! But I could probably parallel park better than most humans. 😂',
    'how do you clean cars': 'With a lot of dedication and some elbow grease… or rather, robotic precision. 🚗💦',

    // Default response
    default: "I'm sorry, I didn't understand that. Could you rephrase your question or ask about our services?",
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    let botResponse;

    // Check if we are awaiting the user's email
    if (awaitingEmail) {
      botResponse = "Thank you! We've received your email and will get back to you shortly.";
      sendEmail(input); // Call function to send the email
      setAwaitingEmail(false);
    } else if (userMessage.includes('contact')) {
      botResponse = "Sure! Please provide your email, and we’ll get back to you.";
      setAwaitingEmail(true); // Set the flag to true to collect the email next
    } else {
      botResponse = responses[userMessage] || responses.default;
    }

    // Keep all messages in the chat (including user's and bot's responses)
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: input },
      { type: 'bot', text: botResponse },
    ]);
    setInput('');
  };

  // Function to send the email via SMTP server
  const sendEmail = async (userEmail) => {
    try {
      const response = await fetch('https://rocketbackend.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', result.message);
      } else {
        console.error('Error:', result.message);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating Action Button */}
      <button className="chatbot-fab" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h5>Rocket Car Wash ChatBot</h5>
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>
          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type === 'bot' ? 'bot' : 'user'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={handleInput}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
