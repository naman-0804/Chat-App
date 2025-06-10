import ChatForum from '@/components/ChatForum';

export default function Page({ params }) {
  console.log("params.slug:", params.slug); // Should log the correct slug
  return <ChatForum slug={params.slug} />;
}
