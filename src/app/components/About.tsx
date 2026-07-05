import { motion } from 'motion/react';
import { Camera, Video, Award } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Video,
      title: 'Videography',
      description: 'Het creëren van meeslepende visuele verhalen die resoneren',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Momenten vastleggen met precisie en artistieke visie',
    },
    {
      icon: Award,
      title: 'Creative Direction',
      description: 'Concepten tot leven brengen met innovatief storytelling',
    },
  ];

  return (
    <section id="about" className="py-[120px] px-6 bg-zinc-950">
      <div className="w-[70vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6">ABOUT ME</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <img
              src="https://thorinclaeys.be/wp-content/uploads/2026/03/Profile.jpg"
              alt="About"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi, ik ben Thorin! Ik ben een creatieve student-freelancer uit Ieper,
              gespecialiseerd in fotografie en videografie. Mijn werk wordt gedreven door een levenslange passie voor film en muziek - 
              invloeden die ik naar elk project meebreng. 
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Ik help merken en individuen hun verhalen te vertellen door een cinematische lens.
              Ik doe dit door visueel verbluffende projecten te creëren die de "vibe" van het moment vastleggen.
              Of het nu een creatieve samenwerking of een bedrijfsevenement is,
              ik gebruik mijn technische vaardigheden om ervoor te zorgen dat jouw verhaal met impact en stijl wordt verteld.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-white/10 hover:border-white/30 transition-colors"
              >
                <Icon size={48} className="mx-auto mb-4" />
                <h3 className="text-xl tracking-wider mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}