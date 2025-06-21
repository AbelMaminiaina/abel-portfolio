import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../assets/resume.pdf"

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="z-10 px-4">
          <p className="text-teal-400 mb-8">
            Bonjour, je suis 
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white-300 bg-clip-text leading-right">
            Abel Rabetsimialona
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg">
          Développeur Full-Stack spécialisé en .NET, je conçois des applications web, logiciellle robustes, 
          performantes et évolutives. Passionné par l'architecture logicielle, j’accorde une grande 
          importance à la qualité, à la maintenabilité et à l'expérience utilisateur.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Voir les Projets
            </a>

            <a
              href={resume}
              className="border border-teal-500/50 text-teal-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-teal-500/10"
            >
              Voir mon CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
