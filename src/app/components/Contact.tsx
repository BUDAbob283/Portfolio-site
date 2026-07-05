import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Send, Linkedin } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'thorinclaeys@outlook.be', href: 'mailto:thorinclaeys@outlook.be' },
    //{ icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Instagram, label: 'Instagram', value: '@thorin.claeys', href: 'https://instagram.com/thorin.claeys' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Thorin Claeys', href: 'https://www.linkedin.com/in/thorin-claeys-554534194/' },
  ];

  return (
    <section id="contact" className="py-[120px] px-6 bg-black">
      <div className="w-[70vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-6">GET IN TOUCH</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Laten we samenwerken en samen iets fantastisch creëren.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl tracking-wider mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Neem gerust contact met me op via een van deze kanalen. 
                Ik sta altijd open voor gesprekken over nieuwe projecten en creatieve mogelijkheden.
              </p>
            </div>

            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 hover:text-gray-300 transition-colors"
                >
                  <div className="p-3 border border-white/20">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 tracking-wider">{item.label}</p>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form - HIDDEN (uncomment to restore) */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form 
              action="https://formsubmit.co/thorinclaeys@outlook.be" 
              method="POST"
              className="space-y-6"
              onSubmit={() => setIsSubmitting(true)}
            >
              <input type="hidden" name="_subject" value="New contact form submission from portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label htmlFor="name" className="block text-sm tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 tracking-wider hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div> */}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500"
        >
          <p>&copy; 2026 Thorin Claeys. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}