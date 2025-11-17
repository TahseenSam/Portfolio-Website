export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed">
            Machine Learning Engineer with extensive hands-on experience in building and deploying AI models,
            specializing in <span className="text-cyan-400 font-semibold">deep learning</span> and{' '}
            <span className="text-cyan-400 font-semibold">computer vision</span> applications.
            Proficient in developing end-to-end solutions from research to production deployment on both{' '}
            <span className="text-blue-400 font-semibold">edge devices</span> (Jetson, ESP32) and{' '}
            <span className="text-blue-400 font-semibold">cloud environments</span>.
            Driven by a passion for exploring data-centric and model-efficient approaches,
            I focus on transforming complex data into actionable insights and optimizing AI systems for
            real-world applications. Actively seeking opportunities to push the boundaries of AI through
            advanced research and innovative engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
