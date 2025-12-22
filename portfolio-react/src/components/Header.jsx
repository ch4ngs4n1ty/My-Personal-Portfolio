import { useState, useEffect } from 'react';

function Header() {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const greetings = [
    "Hello, I'm Ethan Chang!",
    "Hi, I'm Ethan Chang!",
    "Hey there, I'm Ethan Chang!",
    "Welcome! I'm Ethan Chang",
    "Greetings! I'm Ethan Chang",
    "Hi Ethan Chang here!",
    "Hey! Ethan Chang speaking",
    "Nice to meet you! I'm Ethan",
    "Hello World! I'm Ethan Chang",
    "What's up? I'm Ethan Chang"
  ];

  useEffect(() => {
    // Pick random greeting
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    let currentIndex = 0;

    // Small delay before starting
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < randomGreeting.length) {
          setTypedText(randomGreeting.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }, 300);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="container">
      <h1 id="typing-text" className={isTypingComplete ? 'typing-complete' : ''}>
        {typedText}
      </h1>
      <p>Welcome To My Personal Website</p>
    </div>
  );
}

export default Header;

