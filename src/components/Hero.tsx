import { Mail, Linkedin, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/70 to-gray-950/85"></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Tahseen Abbas Hyder
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-300 font-semibold">
                Machine Learning Engineer
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Deep Learning & Edge AI Specialist
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              Transforming data into intelligent systems. Specialized in computer vision, edge AI, and production-grade model deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="mailto:tahseenabbas983@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/tahseen52"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="/My Resume 2025.pdf"
                download
                className="flex items-center justify-center sm:justify-start gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/50 border border-cyan-400/50"
              >
                <FileDown size={20} />
                <span>View CV</span>
              </a>
            </div>

            <div className="pt-4 inline-block md:inline-block px-6 py-2 bg-gray-900/70 rounded-full text-xs md:text-sm text-gray-300 border border-cyan-500/30 backdrop-blur-sm">
              Open to Senior/Research Roles
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-1 border border-cyan-500/30">
                <div className="rounded-xl overflow-hidden bg-gray-950">
                  <img
                    src="/Gemini_Generated_Image_fxrgtpfxrgtpfxrg-removebg-preview-removebg-preview.png"
                    alt="Tahseen Abbas Hyder"
                    className="w-full h-full object-cover scale-110 md:scale-100 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
