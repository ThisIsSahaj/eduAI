'use client';

import { useState } from 'react';
import { WalletButton } from '@/components/WalletButton';
import { LearningPath } from '@/components/LearningPath';
import  MentorList  from '@/components/MentorList';
import { Brain, BookOpen, GraduationCap, Users } from 'lucide-react';

const CAREER_PATHS = [
  'AI/ML Engineer',
  'Web Developer',
  'Data Scientist',
  'Blockchain Developer',
  'DevOps Engineer'
];

export default function Home() {
  const [selectedPath, setSelectedPath] = useState(CAREER_PATHS[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CareerLearn AI</h1>
            </div>
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Your AI-Powered Career Journey</h2>
            <p className="text-xl opacity-90 mb-8">Personalized learning paths tailored to your career goals</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Guided Learning</h3>
            <p className="text-gray-600">Personalized curriculum based on your career goals and market demands.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Verified Certifications</h3>
            <p className="text-gray-600">Blockchain-verified certificates for completed courses and projects.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Mentorship</h3>
            <p className="text-gray-600">Connect with industry professionals for guidance and feedback.</p>
          </div>
        </div>

        {/* Career Path Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Choose Your Career Path</h2>
          <div className="flex flex-wrap gap-3">
            {CAREER_PATHS.map((path) => (
              <button
                key={path}
                onClick={() => setSelectedPath(path)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  selectedPath === path
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {path}
              </button>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LearningPath careerPath={selectedPath} />
          </div>
          <div>
            <MentorList careerPath={selectedPath} />
          </div>
        </div>
      </main>
    </div>
  );
}