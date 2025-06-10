"use client";
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'n5kgyjq4t3at';
const userId = 'user_2yJJtj357KGbLdELpvPJjBiGGTb';
const userName = 'Naman';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yeUpKdGozNTdLR2JMZEVMcHZQSmpCaUdHVGIifQ.kPo3utOmcz0AmFwwUDO4NixjzLcGuu5Y4SN586T32qg';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const ChatForum = ({ slug }) => {
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client || !slug) return;

    const channel = client.channel('messaging', `chat_${slug}`, {
      name: 'Discussion',
      image: 'https://getstream.io/random_png/?name=react',
      members: [userId],
    });

    channel.watch()
      .then(() => setChannel(channel))
      .catch((err) => {
        console.error('Channel creation/fetch failed:', err);
      });

    return () => setChannel(undefined);
  }, [client, slug]);

  if (!client || !channel) return <div className="text-center mt-10">Setting up client & connection...</div>;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col">
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <div className="flex flex-col h-full w-full">
                <ChannelHeader />
                <div className="flex-1 overflow-y-auto">
                  <MessageList />
                </div>
                <div className="border-t p-2 bg-white">
                  <MessageInput />
                </div>
              </div>
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default ChatForum;
