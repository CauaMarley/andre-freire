import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8 border-b border-zinc-800 pb-6">
            Privacy <span className="text-red-600">Policy</span>
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              At Carlson Gracie Tucson, we value the privacy of our students and visitors to our website. This Privacy Policy aims to explain how we collect, use, store, and protect the personal information you provide. By accessing and using our website, you agree to the terms outlined here.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
              <p className="mb-4">We collect personal information voluntarily provided by you, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information submitted through contact or enrollment forms</li>
              </ul>
              <p>Additionally, we may automatically collect some browsing information, such as IP address, geographic location, device type, browser used, and time spent on our site, to enhance your experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
              <p className="mb-4">The information collected is used for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contacting you and responding to your inquiries.</li>
                <li>Processing enrollments and scheduling trial classes.</li>
                <li>Personalizing your website experience.</li>
                <li>Informing you about news, events, and promotions from our unit.</li>
                <li>Improving our services and website features.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="mb-4">Carlson Gracie Tucson does not sell, rent, or share your personal information with third parties, except:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When necessary to comply with legal obligations.</li>
                <li>When required to execute associated services, such as payment processing (if applicable).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. Cookies help identify preferences, track visits, and deliver personalized content. You can disable cookies in your browser settings, but this may affect the functionality of some areas of the site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Information Security</h2>
              <p>We implement security measures to protect your information from unauthorized access, alterations, or improper disclosures. However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security of your information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links</h2>
              <p>Our site may contain links to other websites. We are not responsible for the privacy practices or content of external sites. We recommend reading the privacy policies of these websites before providing any personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. User Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access the information we have collected about you.</li>
                <li>Request corrections or deletions of your personal data.</li>
                <li>Opt out of receiving our promotional communications at any time.</li>
              </ul>
              <p>To exercise your rights, please contact us via email at Carlson Gracie Tucson.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy at any time. We recommend reviewing it periodically. Any changes will take effect immediately upon publication on our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
              <p className="mb-2">If you have any questions or concerns about this Privacy Policy or how we use your information, please contact us:</p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> <a href="mailto:carlsongracietucson@gmail.com" className="text-red-500 hover:text-red-400">carlsongracietucson@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:5208495246" className="text-red-500 hover:text-red-400">(520) 849-5246</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Legal Business Name and Domain Ownership</h2>
              <p className="mb-4">This website, including the domain carlsongracietucson.com, and its associated email addresses (e.g., carlsongracietucson@gmail.com) are owned and operated by TUCSON BRAZILIAN JIU-JITSU, the legal entity responsible for all data processing and communication carried out through this platform.</p>
              <p>By engaging with our website, you acknowledge that any correspondence, data collection, and communication originate from and are managed by TUCSON BRAZILIAN JIU-JITSU, in accordance with the terms stated in this Privacy Policy and the relevant data protection regulations.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
