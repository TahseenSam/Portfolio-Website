import { Code2, Brain, Cloud, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Core Technologies',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV']
    },
    {
      icon: Brain,
      title: 'Specializations',
      skills: ['Deep Learning', 'Computer Vision', 'Agentic AI', 'LLMs', 'Transformer Architectures']
    },
    {
      icon: Cloud,
      title: 'Deployment & DevOps',
      skills: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD Pipelines']
    },
    {
      icon: Cpu,
      title: 'Edge AI',
      skills: ['Jetson Optimization', 'ESP32 Development', 'Model Quantization', 'Binary Weights']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-900 text-cyan-300 rounded-lg text-sm border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {skill}
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
