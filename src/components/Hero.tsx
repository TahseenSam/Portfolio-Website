import { Mail, Linkedin, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Tahseen Abbas Hyder
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-2">
            Machine Learning Engineer
          </p>
          <p className="text-xl md:text-2xl text-gray-400">
            Deep Learning & Edge AI Specialist
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="mailto:tahseenabbas983@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/tahseen52"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="/My Resume 2025.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/50"
          >
            <FileDown size={20} />
            <span>View CV</span>
          </a>
        </div>

        <div className="inline-block px-6 py-2 bg-gray-800/50 rounded-full text-sm text-gray-400 border border-gray-700">
          Open to Senior/Research Roles in AI, Deep Learning & Computer Vision
        </div>
      </div>
    </section>
  );
}
