import { motion } from "motion/react";

export function TermsOfService() {
  return (
    <div className="pt-24 pb-24 bg-zinc-950 min-h-screen text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8 border-b border-zinc-800 pb-6">
            Terms of <span className="text-red-600">Service</span>
          </h1>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Welcome to the website of Carlson Gracie Tucson. By accessing and using this website, you agree to comply with the Terms of Service described below. If you do not agree with any of these terms, we recommend that you refrain from using our website or services.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Website Use</h2>
              <p className="mb-4">You agree to use this website responsibly, for its intended purposes, and to comply with all applicable laws and regulations. It is prohibited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for fraudulent or unlawful practices.</li>
                <li>Publish or distribute offensive, defamatory, obscene, or harmful content.</li>
                <li>Interfere with the website’s operation through practices such as hacking or spreading viruses.</li>
              </ul>
              <p className="mt-4">We reserve the right to restrict or suspend your access to the website if these Terms are violated.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Registration and Information</h2>
              <p className="mb-4">To use certain services, such as scheduling trial classes or submitting enrollment forms, you may need to provide personal information. You agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All information provided is true, complete, and up to date.</li>
                <li>You are responsible for maintaining the confidentiality of your access data, if applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Services Offered</h2>
              <p>The services described on this website, such as Jiu-Jitsu classes, events, and promotions, are subject to change without prior notice. We strive to keep the information accurate and updated, but we cannot guarantee that all content will always be accurate or complete.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payments and Cancellations</h2>
              <p className="mb-4">If applicable, the services offered may involve payments, such as enrollment fees, monthly tuition, or event registrations.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees and refund policies will be clearly stated before the service is contracted.</li>
                <li>Cancellations of enrollments or services must follow the policies established by Carlson Gracie Tucson, available at the reception or via email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>All content on this website, including text, images, videos, logos, and marketing materials, is the property of Carlson Gracie Tucson or is properly licensed. Reproduction, distribution, or use of any content without prior written authorization is prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">Carlson Gracie Tucson is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any interruptions or failures in website operation.</li>
                <li>Errors or omissions in the content provided.</li>
                <li>Direct or indirect damages resulting from the use or inability to use the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. External Links</h2>
              <p>Our website may contain links to third-party websites. We have no control over the content or privacy practices of these sites and assume no responsibility for them. We recommend that you read the Terms of Service and Privacy Policy of external websites before using them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to the Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Any changes will take effect immediately upon publication on the website. It is your responsibility to periodically review the Terms to stay informed of updates.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <p>These Terms of Service are governed by the laws of USA. Any disputes related to these Terms will be resolved in the competent courts of Tucson.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
              <p className="mb-2">If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> <a href="mailto:carlsongracietucson@gmail.com" className="text-red-500 hover:text-red-400">carlsongracietucson@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:5208495246" className="text-red-500 hover:text-red-400">(520) 849-5246</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Legal Business Name and Ownership</h2>
              <p className="mb-4">This website, including the domain carlsongracietucson.com, and all associated email addresses (such as carlsongracietucson@gmail.com), are owned and operated by TUCSON BRAZILIAN JIU-JITSU, the registered business entity responsible for offering the services described herein.</p>
              <p>By using this website, you acknowledge that any communication, transactions, or service offerings conducted through this platform are legally managed and delivered by TUCSON BRAZILIAN JIU-JITSU, in accordance with the terms outlined above and the applicable legislation.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
