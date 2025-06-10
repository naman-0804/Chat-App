// app/page.js
import { MessageSquare, Users, Github, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    // Main container with a dark theme and custom gradient background
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="isolate">
        {/* Hero Section */}
        <div className="relative pt-14">
          {/* Gradient background overlay */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="py-24 sm:py-32 animate-fade-in">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Connect, Collaborate, and Chat.
                <span className="block">Seamlessly.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We-Chat is a modern, open-source platform designed for fast, secure, and intuitive conversations. Join the community and start building connections today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/chat" 
                  className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
                >
                  Get Started
                </a>
                <a
                  href="https://github.com/your-repo" // Link to your GitHub repo
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  View on GitHub <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-28 bg-gray-900/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything You Need</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Future of Communication
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Built with modern technology to provide a feature-rich experience that's both powerful and easy to use.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                
                {/* Feature 1 */}
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Real-time Messaging
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">
                    Instantly send and receive messages with our low-latency infrastructure. Your conversations are always in sync.
                  </dd>
                </div>
                
                {/* Feature 2 */}
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Secure & Private
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">
                    With end-to-end encryption (coming soon!), your conversations remain yours. We prioritize your security and privacy.
                  </dd>
                </div>

                {/* Feature 3 */}
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Users className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Group Chats
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">
                    Create groups for your teams, friends, or communities. Stay connected with everyone in one place.
                  </dd>
                </div>
                
                {/* Feature 4 */}
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Github className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Open Source
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">
                    Our entire codebase is open for you to inspect, contribute, and customize. Help us build the best chat app.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Keep your metadata
export const metadata = {
  title: 'We-Chat - Seamless & Open Source Chat',
  description: 'We-Chat is a modern, open-sourced chatting application designed for fast, secure, and intuitive conversations.',
};

