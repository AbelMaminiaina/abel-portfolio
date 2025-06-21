import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["C#", ".Net Core", "EntityFrameWork", "APIs REST", "SQL", "MySql"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            A propos de moi
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Bonjour! Je m’appelle Abel et j’aime créer des choses qui vivent sur Internet ou sur computer. 
              Mon aventure dans le développement en .NET a débuté en 2010 chez MagiqueMedia. 
              À l’époque, je cherchais des moyens innovants d’aider les rédactrices web à garantir 
              l’originalité de leurs contenus. C’est ainsi que j’ai intégré l’API de Google pour automatiser 
              la détection de plagiat. Cette expérience a marqué le début de ma passion pour la création de 
              solutions utiles et intelligentes sur le web.

            </p>
            <p className="text-gray-300 mb-6">
              Aujourd'hui, j'ai la passion des technologies et la création de solutions innovantes, 
              je mets mes compétences au service de projets qui ont du sens. 
              Curieux, rigoureux et toujours en quête de nouveaux défis, j'aime apprendre et collaborer pour faire avancer les idées.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
