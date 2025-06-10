// app/forums/page.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// In a real app, this data would come from a database or a CMS.
const topics = [
  {
    slug: "python",
    text: "Python",
    img: "/python.png", // Ensure this image exists in your /public folder
    desc: "Discuss everything from Django to data science and general Python programming."
  },
  {
    slug: "javascript",
    text: "JavaScript",
    img: "/javascript.png", // Ensure this image exists in your /public folder
    desc: "Talk about frameworks like React, Node.js, and the latest ES features."
  },
  {
    slug: "general-development",
    text: "General Development",
    img: "/dev.png", // Ensure this image exists in your /public folder
    desc: "A place for topics that don't fit elsewhere: career advice, tools, and best practices."
  },
  {
    slug: "we-chat-feedback",
    text: "We-Chat Feedback",
    img: "/logo.png", // Use your app's logo
    desc: "Have suggestions or found a bug? Share your feedback about We-Chat here."
  }
];

const ForumsPage = () => {
  return (
    <div className='max-w-7xl mx-auto py-24 px-6'>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-base font-semibold text-primary leading-7">Choose a Topic</h2>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Discussion Forums
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          Jump into a conversation or start a new one. This is the community hub for all things tech.
        </p>
      </div>

      {/* Responsive Grid of Topic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <Link href={`/forum/${topic.slug}`} key={topic.slug}>
            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
              <Image
                src={topic.img}
                alt={`${topic.text} logo`}
                width={80}
                height={80}
                className="mb-4 rounded-full object-cover"
              />
              <h3 className="font-bold text-xl text-primary mb-2">{topic.text}</h3>
              <p className="text-foreground/70 text-sm">{topic.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ForumsPage;

export const metadata = {
  title: 'Forums - We-Chat',
  description: 'Join the discussion on various technology topics.',
}
