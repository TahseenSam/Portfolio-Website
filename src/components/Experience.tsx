import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-100 mb-1">
                  Machine Learning Engineer
                </h3>
                <p className="text-lg text-cyan-400 mb-2">NexPred Solutions Pvt. Ltd.</p>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span>May 2023 - Present</span>
                  <span className="mx-2">•</span>
                  <span>Remote, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 ml-16">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">▸</span>
                <p className="text-gray-300 leading-relaxed">
                  Led and delivered multiple end-to-end AI projects from research and development
                  through to production deployment, taking ownership of complete project lifecycles
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">▸</span>
                <p className="text-gray-300 leading-relaxed">
                  Architected and implemented data pipelines, model training workflows, and
                  comprehensive evaluation frameworks for deep learning systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">▸</span>
                <p className="text-gray-300 leading-relaxed">
                  Deployed optimized ML pipelines on edge devices (Jetson, ESP32) and cloud
                  environments (AWS) for real-world production integration
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">▸</span>
                <p className="text-gray-300 leading-relaxed">
                  Specialized in model optimization techniques including quantization and binary
                  weight conversion for resource-constrained edge deployment
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-700/50 rounded-lg">
                <Briefcase size={20} className="text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">
                  Data Science Intern
                </h3>
                <p className="text-cyan-400/80 mb-1">NexPred Solutions</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>March 2023 - May 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
