import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education & Awards
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-100 mb-1">
                  Bachelor of Engineering in Computer Systems Engineering
                </h3>
                <p className="text-lg text-cyan-400 mb-2">
                  Quaid-e-Awam University of Engineering, Science & Technology (QUEST)
                </p>
                <p className="text-gray-400 mb-3">
                  October 2018 - November 2022 • Nawabshah, Pakistan
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg border border-cyan-700/50">
                  <span className="text-cyan-300 font-semibold text-lg">CGPA: 3.94/4.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-lg">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-200 mb-2">
                  Silver Medal - First Position
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Awarded Silver Medal for securing First Position in the Computer Systems
                  Engineering department, recognizing outstanding academic performance and
                  technical excellence throughout the undergraduate program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
