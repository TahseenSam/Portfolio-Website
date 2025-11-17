import { FileText, Cpu, Bot, Hand } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: FileText,
      title: 'MEDAI CHATBOT',
      description: 'Advanced medical AI assistant leveraging multi-agent workflow architecture with specialized agents (Planner, Researcher, Writer) for clinical report generation.',
      technologies: ['GPT-4', 'LangChain', 'FAISS', 'Multi-Agent System', 'RAG'],
      highlights: [
        'Real-time citation-backed clinical reports',
        'Semantic search with FAISS vector database',
        'Orchestrated multi-agent workflow pipeline'
      ]
    },
    {
      icon: Cpu,
      title: 'SMART VISION SYSTEM FOR ROTIMATIC',
      description: 'Production-grade computer vision system for industrial automation with extreme optimization for resource-constrained edge deployment.',
      technologies: ['CNN', 'ESP32', 'Binary Weights', 'Edge AI', 'Real-time Processing'],
      highlights: [
        '99.5% accuracy on edge device',
        '40+ FPS performance on ESP32-Dev',
        'Model conversion to binary weights for embedded deployment'
      ]
    },
    {
      icon: Bot,
      title: 'AGENTIC AI PLATFORM',
      description: 'Full-stack platform for creating and deploying customized AI agents with complete backend infrastructure and workflow orchestration.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'LLM Integration', 'Agent Workflows'],
      highlights: [
        'End-to-end backend pipeline development',
        'Custom agentic workflow engine',
        'Scalable database architecture and REST APIs'
      ]
    },
    {
      icon: Hand,
      title: 'GESTURE-CONTROLLED AI QUIZ APP',
      description: 'Interactive web application featuring real-time hand gesture recognition for touchless quiz interaction with browser-based model inference.',
      technologies: ['YOLOv8', 'TensorFlow.js', 'Computer Vision', 'Web Integration'],
      highlights: [
        '0.8 mAP accuracy for gesture detection',
        'Model conversion to TensorFlow.js',
        'Fully functional web-based deployment'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Production-ready AI solutions from research to deployment
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-900 text-cyan-300 rounded text-xs border border-gray-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
