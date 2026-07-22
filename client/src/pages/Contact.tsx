import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-white/10">
        <div className="container">
          <h1 className="font-playfair italic text-6xl md:text-7xl mb-6">Get In Touch</h1>
          <p className="text-xl text-foreground/80 max-w-3xl leading-relaxed">
            I'm always interested in hearing about new opportunities, collaborations, and interesting projects. 
            Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Email</p>
                    <a href="mailto:shivaumj@gmail.com" className="text-white hover:text-orange-500 transition-colors">
                      shivaumj@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Phone</p>
                    <a href="tel:+917876807069" className="text-white hover:text-orange-500 transition-colors font-mono">
                      +91 78768 07069
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/neo0007777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white hover:text-orange-500 transition-all"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shiva-sharma-8ab069352/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white hover:text-orange-500 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white hover:text-orange-500 transition-all"
                    title="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="mailto:shivaumj@gmail.com"
                    className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white hover:text-orange-500 transition-all"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/Shiva_Resume.pdf"
                    download="Shiva_Resume.pdf"
                    className="block text-foreground/80 hover:text-orange-500 transition-colors text-sm"
                  >
                    Download Resume
                  </a>
                  <a
                    href="#"
                    className="block text-foreground/80 hover:text-orange-500 transition-colors text-sm"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-8">Send Me a Message</h2>

                {submitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-green-400/80 text-sm mt-2">I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-foreground/80 text-sm">
                  <span className="font-semibold text-orange-500">⏱️ Response Time:</span> I typically respond to messages within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container text-center">
          <h2 className="font-playfair italic text-4xl mb-6">Let's Work Together</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you have an exciting project, a job opportunity, or just want to chat about AI and machine learning, 
            I'd love to hear from you!
          </p>
          <a
            href="mailto:shivaumj@gmail.com"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Send Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
