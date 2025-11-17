import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-100 mb-2">Tahseen Abbas Hyder</h3>
            <p className="text-gray-400">Machine Learning Engineer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:tahseenabbas983@gmail.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com/in/tahseen52"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-cyan-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-cyan-400" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Built with React, TypeScript & Tailwind CSS</p>
          <p className="mt-2">© 2025 Tahseen Abbas Hyder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
