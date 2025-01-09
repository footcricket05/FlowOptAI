import React from 'react';
import { Activity, BarChart2, Calendar, CheckCircle, Clock, GitMerge, Globe2, LayoutDashboard, Settings, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2900')] bg-cover bg-center opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">FlowOptAI</span>
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Optimize workflows dynamically using real-time data and AI-driven graphs
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                Get Started
              </button>
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose FlowOptAI?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Streamline your workflow with our powerful features
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-4 inline-block rounded-xl bg-indigo-600 p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Seamless Integration
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Connect with your favorite tools and optimize your workflow instantly
              </p>
              <div className="mt-8 space-y-4">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-indigo-600 p-2">
                      <integration.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      <p className="text-sm text-gray-600">{integration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 rounded-2xl bg-indigo-600 p-8 shadow-xl">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <div>
                    <p className="font-semibold text-white">Trusted by teams</p>
                    <p className="text-sm text-indigo-200">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-indigo-600 opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to optimize your workflow?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get started with FlowOptAI today and see the difference.
            </p>
            <div className="mt-8">
              <button className="rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-white">FlowOptAI</h3>
              <p className="mt-4 text-gray-400">
                Optimize your workflow with AI-powered insights and real-time analytics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Product
                </h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Company
                </h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2024 FlowOptAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'Dynamic Workflow Generation',
    description: 'Generate optimized workflow graphs based on real-time project data and team availability.',
    icon: GitMerge,
  },
  {
    title: 'Priority Rebalancing',
    description: 'Automatically adjust task priorities as deadlines and resources evolve.',
    icon: BarChart2,
  },
  {
    title: 'Resource Allocation',
    description: 'Optimize team resources and eliminate workflow bottlenecks efficiently.',
    icon: Users,
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor and analyze workflow performance with interactive dashboards.',
    icon: Activity,
  },
  {
    title: 'AI Recommendations',
    description: 'Get intelligent suggestions for improving workflow efficiency.',
    icon: Settings,
  },
  {
    title: 'Visual Insights',
    description: 'Visualize your workflow with interactive and intuitive graphs.',
    icon: LayoutDashboard,
  },
];

const integrations = [
  {
    name: 'Trello Integration',
    description: 'Sync your Trello boards and automate task management',
    icon: Globe2,
  },
  {
    name: 'Jira Connection',
    description: 'Seamlessly connect with Jira for project tracking',
    icon: Clock,
  },
  {
    name: 'Google Calendar',
    description: 'Schedule and manage deadlines effortlessly',
    icon: Calendar,
  },
];

export default App;