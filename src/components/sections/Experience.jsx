// import { RevealOnScroll } from "../RevealOnScroll";

// export const Experience = () => {

//   return (
//     <section
//       id="experience"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             Formations et expériences
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>
//                   <strong> D.E.S.S. en Technologie Nouvelle et Systeme d'Information </strong> - Ecole Superieur Polytechnique Madagascar
//                   (2007-2009)
//                 </li>
//               </ul>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Ingenieur d'Etudes et de Développement en C# chez Ubitek (2018 - 2024){" "}
//                   </h4>
//                   <p>
//                     - Maintenance corrective, évolutive de l’application Web CTdirect chez DEKRA 
//                   </p>
//                   <p>
//                     - Maintenance corrective, évolutive de l’application Aurore chez DEKRA  
//                   </p>
//                   <p>
//                     - Développement des nouvelles fonctionnalités en utilisant des microservices (Apis REST), Azure, Agile  
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Developpeur fullstack .Net chez Wylog (2018){" "}
//                   </h4>
//                   <p>
//                     - Maintenance corrective, évolutive de l’application Web Upsideo
//                   </p>
//                   <p>
//                     - Développement d'un application Web Formation
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Lead Developpeur C# chez Madamonitor (2015-2018){" "}
//                   </h4>
//                   <p>
//                     - Maintenance corrective, évolutive des applications d'Auxipress
//                   </p>
//                   <p>
//                     - Développement des nouvelles fonctionnalités en utilisant des microservices (Apis REST), WPF
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Ubitek", "Wylog", "Madamonitor","Sneda","Freelance"];
  const panels = [
      <>
        <h2 className="text-lg font-semibold">IT Developer .net <span className="text-teal-600">@ Ubitek</span></h2>
        <p className="text-sm text-gray-500 font-mono">2018-2024</p>
        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Maintenance corrective et évolutive de l’application web CTdirect de DEKRA Automotive, 
          dédiée à la gestion des processus de contrôle technique : 
          administration, rendez-vous, rapports et suivi des résultats.
        </p>

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Collaboration étroite avec les directeurs créatifs, les designers 
          et les autres ingénieurs pour transformer des concepts créatifs 
          en produits numériques aboutis, répondant aux attentes des utilisateurs et des parties prenantes.
        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Réalisation d’une facturation périodique générée automatiquement à chaque fin du mois.
        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Dématérialisation du process de contrôle technique des voitures sur Tablet et 
          sur Personal Computer: Signature, Les factures (le procès-verbal, facture, le double).
        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Consolidation des données : centraliser et organiser des données provenant de plusieurs sources distinctes 
          (centres) afin de les analyser, de les traiter et de les visualiser de manière cohérente.
        </p>  

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Conception et développement d’un module de gestion des rendez-vous avec planification, visualisation, 
          notifications automatiques et interface utilisateur intuitive.
        </p>    

      </>,
      <>
        <h2 className="text-lg font-semibold mb-2">Développeur FullStack .net <span className="text-teal-600">@ Wylog</span></h2>
        <p className="text-sm text-gray-500 font-mono">2017-2018</p>
        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Développement d’un site web de formation en ligne permettant le suivi de cours, 
          l’accès à des supports pédagogiques, la réalisation d’évaluations et le suivi de la progression des utilisateurs.
        </p>

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Maintenance corrective, évolutive de l’application Upsideo : Upsideo est une 
          application financier et réglementaire destinés aux professionnels de la finance 
          (conseillers en gestion de patrimoine, courtiers, sociétés de gestion, banques, PSI, compagnies d’assurance). 

        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Maintenance corrective, évolutive de l’application Kadeix :
          Intégration des reporting et génération de documents, répondant aux besoins 
          des professionnels en matière d'analyse et de data blending.

        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Contribution à l’évolution des cahiers des charges fonctionnels et techniques avec les équipes métier.
        </p>             
      </>,
      <>
        <h2 className="text-lg font-semibold mb-2">Lead Développeur .net <span className="text-teal-600">@ Madamonitor</span></h2>
        <p className="text-sm text-gray-500 font-mono">2016-2017</p>
        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Leadership technique par le mentorat, le partage de connaissances et la collaboration, 
          favorisant un environnement d’apprentissage continu et d’excellence technique.
        </p>

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Développement d’un plateforme d'Analyse et de Reporting : Conception et développement 
          de tableaux de bord interactifs pour visualiser en temps réel les indicateurs clés liés 
          aux données medias (audience, performence).
        </p> 

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Mise en place d’un module de gestion des tâches utilisateurs, permettant la planification, 
          le suivi et l'organisation collaborative du travail, avec intégration et automatisation des processus.
        </p>   

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Création et maintenance d'APIs pour l'intégration d'applications et plateformes internes/externes, 
          facilitant le transfert de données et garantissant l'interopérabilité des systèmes.
        </p>                     
      </>,
      <>
        <h2 className="text-lg font-semibold mb-2">Développeur ¨Progress et Java <span className="text-teal-600">@ Sneda</span></h2>
        <p className="text-sm text-gray-500 font-mono">2010-2015</p>
        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Contribution majeure à la maintenance corrective, évolutive du module de demande de Logement, 
          (suivi des demandes, critères de sélection, gestion des candidatures), du module de gestion locative 
          (suivi des baux, gestion des locataires, régularisation des charges) . 
        </p>

        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Migration d’un système existant vers une nouvelle technologie récente 
          (Evaluation de l’existant, développement et intégration, migration et mise en production, suivi et maintenance)
        </p>               
      </>,
      <>
        <h2 className="text-lg font-semibold mb-2">Développeur fullstack .net <span className="text-teal-600">@ Freelance</span></h2>
        <p className="text-sm text-gray-500 font-mono">2025</p>
        <p className="ml-6 py-3 text-sm before:content-['➤'] before:mr-2 text-gray-400">
          Crée, conçu, développé, maintenu du code d'un site web d'une association, principalement en HTML, TailwindCSS, typescript, .Net Web Api, SQL.
        </p>               
      </>
    ];


  return (
  <section
    id="experience"
    className="min-h-screen py-20"
  >
       <RevealOnScroll>
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent text-center">
             {" "}
             Expériences
           </h2>    
          <div className="w-full max-w-5xl mx-auto p-4 flex sm:flex-row flex-col gap-4">
            {/* Tablist */}
            <div className="w-full sm:w-1/4 flex sm:flex-col">
              <div className="border-l border-gray-600 flex flex-col">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`py-2 px-4 text-sm text-left font-medium transition-all duration-500
                      ${
                        activeTab === index
                          ? "border-l-2 border-teal-500 text-teal-600 bg-navy-600"
                          : "border-l-2 border-transparent text-gray-400 hover:text-teal-600 hover:bg-transparent"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Panels */}
            {/* Panel à droite avec hauteur fixe */}
            <div className="relative flex-1">
               {panels[activeTab]}
            </div>

          </div>
         </div>
        </RevealOnScroll>
  </section>
  );
}
