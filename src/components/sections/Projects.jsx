import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';


export const Projects = () => {
 const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }
  return (
    <section
      id="projects"
      className="flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
          Quelques réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-6">

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative
            "
            >
              <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors">Migrations</h3>
              <p className="text-gray-300 mb-4">
                Migration des services WCF vers une API RESTful avec ASP.NET Core
              </p>

              <p className="text-gray-300 mb-4">
                Migration des rapports Crystal Reports vers SSRS (SQL Server Reporting Services)
              </p>
              <p className="text-gray-300 mb-4">
                Migration et intégration de PDF.js pour l'affichage de rapports interactifs
              </p>              

              <div className="flex flex-wrap gap-2 mb-4">
                {[".Net Core", "Web API", "SSRS", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                <a
                  href="https://ctdirect.fr/" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                  <FaExternalLinkAlt size={20} />
                </a>                                 
                
                <a
                  href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaGithub size={20} />
                  </a>                              
              </div>
              {/* <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>             
              </div> */}
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative
            "
            >
              <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors">Consolidation des données</h3>
              <p className="text-gray-300 mb-4">
                Maintenance corrective, évolutive de la consolidation des données : 
                centraliser et organiser des données provenant de plusieurs sources distinctes (centres) 
                afin de les analyser, de les traiter et de les visualiser de manière cohérente.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", ".Net", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                  <a
                    href="https://ctdirect.fr/" // remplace par ton lien GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaExternalLinkAlt size={20} />
                  </a>                                 
                  
                  <a
                    href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaGithub size={20} />
                  </a>                              
              </div>

            </div>             

            <div className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-teal-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                transition-all relative">
              <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors"> CTDirect</h3>
              <p className="text-gray-300 mb-4">
                  Maintenance corrective, évolutive de l’application Web CTdirect utilisée par DEKRA Automotive 
                  pour la gestion des processus liés aux contrôles techniques des véhicules qui permet d'optimiser l'administration, 
                  la gestion des rendez-vous, la gestion des rapports, ainsi que le suivi des résultats de chaque contrôle technique 
                  effectué dans les centres DEKRA.
              </p>
              <p className="text-gray-300 mb-4">
                  Développement de la facturation périodique générée automatiquement à chaque fin du mois.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", ".Net", "Bootstrap", "Azure", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

             <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                <a
                  href="https://ctdirect.fr/" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                  <FaExternalLinkAlt size={20} />
                </a>                                 
                
                <a
                  href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaGithub size={20} />
                  </a>                              
              </div>
            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative
            "
            >
              <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors">Aurore - Dématerialisation</h3>
              <p className="text-gray-300 mb-4">
                Dématérialisation du process de contrôle technique des voitures sur Tablet et sur Personal Computer: 
                Signature, Les factures (le procès-verbal, facture, le double).
              </p>
              <p className="text-gray-300 mb-4">
                Maintenance corrective, évolutive de l’application Aurore de Dekra Automotive : 
                 outil numérique qui facilite la gestion des contrôles techniques des véhicules ainsi que 
                 la gestion des dossiers clients et des rapports de contrôle. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", "WPF", "Xaml", "SQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
             <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                <a
                  href="https://ctdirect.fr/" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                  <FaExternalLinkAlt size={20} />
                </a>                                 
                
                <a
                  href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaGithub size={20} />
                  </a>                              
              </div>
            </div>                      
          </div>

            {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-teal-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all relative
              "
              >
                <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors">KDX</h3>
                <p className="text-gray-300 mb-4">
                  Maintenance corrective, évolutive de l’application Kirigami-DX. 
                </p>
                <p className="text-gray-300 mb-4">
                  Intégration des reporting et génération de documents, répondant aux besoins 
                  des professionnels en matière d'analyse et de data blending.
                </p>
                

                <div className="flex flex-wrap gap-2 mb-4">
                  {["WPF", ".Net", "SQL"].map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-teal-500/10 text-teal-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-teal-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                  <a
                    href="https://kadeix.com/" // remplace par ton lien
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                    <FaExternalLinkAlt size={20} />
                  </a>                                 
                  
                  <a
                    href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                      <FaGithub size={20} />
                    </a>                              
                </div>
                {/* <div className="flex justify-between items-center ">
                  <a
                    href="#"
                    className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                  >
                    View Project →
                  </a>             
                </div> */}
              </div>

              <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-teal-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all relative
              "
              >
                <h3 className="text-xl font-bold mb-2 hover:text-teal-300 transition-colors">Upsideo</h3>
                <p className="text-gray-300 mb-4">
                  Conception et développement de tableaux de bord interactifs et personnalisés
                  pour visualiser en temps réel les indicateurs clés liés aux données médias. 
                </p>
                <p className="text-gray-300 mb-4">
                  Maintenance corrective, évolutive de Upsideo. 
                </p>                
                <div className="flex flex-wrap gap-2 mb-4">
                  {["C#", ".Net", "SQL"].map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-teal-500/10 text-teal-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-teal-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-4">                
                    <a
                      href="https://ctdirect.fr/" // remplace par ton lien GitHub
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                      <FaExternalLinkAlt size={20} />
                    </a>                                 
                    
                    <a
                      href="https://github.com/tonpseudo" // remplace par ton lien GitHub
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-300 transition-colors my-4">
                      <FaGithub size={20} />
                    </a>                              
                </div>

              </div>
            </div>
            )}
        </div>
        {/* Bouton Show More */}
        <div className="flex items-center justify-center py-10 gap-2">
          <a
            onClick={toggleShowMore}
            className="border border-teal-500/50 text-teal-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-teal-500/10"
          >
            {showMore ? 'Voir moins' : 'Voir plus'}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
