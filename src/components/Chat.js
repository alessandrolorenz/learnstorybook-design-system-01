import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { background, color, typography } from '../shared/styles';

const ChatWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${props =>
    props.status === 'positive' &&
    css`
      color: ${color.positive};
      background: ${background.positive};
    `};
`;

const ChatbotContainer = styled.div`
  position: relative;
  background-color: #f3f7f8;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1), 0 32px 64px -48px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0;
  margin: auto;
  margin-bottom: 60px;
`;

const ChatHeader = styled.div`
  position: relative;
  background-color: #222226;
  text-align: center;
  padding: 16px 0;
`;

const ChatTitle = styled.h3`
  font-size: 1.4rem;
  color: #f3f7f8;
`;

const ChatBox = styled.ul`
  height: 510px;
  overflow-y: auto;
  padding: 30px 20px 100px;
  background-color: #444446;
  margin-bottom: 78px;
`;

const ChatMessage = styled.li`
  display: flex;
  margin: 20px 0;

  p {
    max-width: 75%;
    font-size: 0.95rem;
    white-space: pre-wrap;
    color: #202020;
    background-color: #019ef9;
    border-radius: 10px 10px 0 10px;
    padding: 12px 16px;
  }

  &.incoming p {
    color: #202020;
    background: #bdc3c7;
    border-radius: 10px 10px 10px 0;
  }

  &.outgoing {
    justify-content: flex-end;
  }
`;

const InputBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  border-top: 1px solid #227ebb;
  background: #f3f7f8;
  padding: 5px 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 55px;
  max-height: 180px;
  font-size: 0.95rem;
  padding: 16px 15px 16px 0;
  color: #202020;
  border: none;
  outline: none;
  resize: none;
  background: transparent;

  &::placeholder {
    font-family: 'Poppins', sans-serif;
  }
`;

const SendButton = styled.span`
  font-size: 1.75rem;
  color: #202020;
  cursor: pointer;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;




export function Chat({ ...props }) {
  const [messages, setMessages] = useState([
    { role: 'CHATBOT', message: 'Hi there. How can I help you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatBoxRef = useRef(null);

  const scrollChatBoxToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      alert('Please enter a message before sending.');
      return;
    }

    // Add user's message to the chat
    setMessages(prev => [...prev, { role: 'USER', message: trimmedValue }]);
    setInputValue('');

    // Simulate chatbot response
    try {
      const response = await fetch('https://alessandro-chatbot.vercel.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: [...messages, { role: 'USER', message: trimmedValue }] }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'CHATBOT', message: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'CHATBOT', message: 'Something went wrong. Please try again later.' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'CHATBOT', message: 'Something went wrong. Please try again later.' }]);
      console.error(error);
    }
  };

  useEffect(() => {
    scrollChatBoxToBottom();
  }, [messages]);

  return (
    <ChatbotContainer {...props}>
      <ChatHeader>
        <ChatTitle>Chatbot</ChatTitle>
      </ChatHeader>
      <ChatBox ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} className={msg.role === 'USER' ? 'outgoing' : 'incoming'}>
            <p>{msg.message}</p>
          </ChatMessage>
        ))}
      </ChatBox>
      <InputBox>
        <TextArea
          placeholder="Enter a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <SendButton visible={inputValue.trim().length > 0} onClick={sendMessage}>
          send
        </SendButton>
      </InputBox>
    </ChatbotContainer>
  );
}

Chat.propTypes = {
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
};

Chat.defaultProps = {
  status: 'neutral',
};