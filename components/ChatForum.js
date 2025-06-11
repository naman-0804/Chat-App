'use client';

import React, { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = 'n5kgyjq4t3at';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState(null);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const setupChannel = async () => {
      const newChannel = client.channel('messaging', slug, {
        image: `https://getstream.io/random_png/?name=${slug}`,
        name: `${slug.toUpperCase()} Discussion`,
        members: [userId],
      });

      await newChannel.watch();
      setChannel(newChannel);
    };

    setupChannel();
  }, [client, slug, userId]);

  if (!client || !channel) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
