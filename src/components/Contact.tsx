import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Facebook, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

type FormData = { name: string; email: string; message: string };

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) throw new Error('Missing EmailJS env vars.');

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      }, { publicKey });

      setSubmitMessage("Message sent! I'll get back to you soon. 🚀");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setIsError(true);
      setSubmitMessage("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 7000);
    }
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/rjha8563', label: 'LinkedIn', color: '#0077b5', glow: 'rgba(0,119,181,0.4)' },
    { icon: <Github size={18} />, url: 'https://github.com/Rahul-Jha18', label: 'GitHub', color: '#e2e8f0', glow: 'rgba(226,232,240,0.3)' },
    { icon: <Facebook size={18} />, url: 'https://www.facebook.com/rahul.jha.879754', label: 'Facebook', color: '#1877f2', glow: 'rgba(24,119,242,0.4)' },
    { icon: <Mail size={18} />, url: 'mailto:rjha8563@gmail.com', label: 'Email', color: '#ea4335', glow: 'rgba(234,67,53,0.4)' },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, label: 'Email', value: 'rjha8563@gmail.com', color: '#7c3aed', glow: 'rgba(124,58,237,0.3)' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+977 9827839070', color: '#06b6d4', glow: 'rgba(6,182,212,0.3)' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Kathmandu, Nepal', color: '#10b981', glow: 'rgba(16,185,129,0.3)' },
  ];

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-2xl border text-white text-sm placeholder:text-white/25 outline-none transition-all duration-300 bg-white/[0.04] ${
      focused === field
        ? 'border-violet-500/60 bg-white/[0.06] shadow-[0_0_20px_rgba(139,92,246,0.15)]'
        : 'border-white/[0.08] hover:border-white/[0.14]'
    }`;

  return (
    <section id="contact" className="relative py-28 bg-[#050810] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-fuchsia-600/5 rounded-full blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <MessageCircle size={12} />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              work together
            </span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-black text-white mb-2">Contact Info</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Open to projects, internship opportunities, and creative collaborations. Reach out any time.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: `${info.color}18`, color: info.color, boxShadow: `0 0 0 0 ${info.glow}` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${info.glow}`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${info.glow}`; }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">{info.label}</div>
                    <div className="text-white text-sm font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-2xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                    style={{ color: '#ffffff80' }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = s.color;
                      el.style.borderColor = `${s.color}40`;
                      el.style.backgroundColor = `${s.color}12`;
                      el.style.boxShadow = `0 0 20px ${s.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = '#ffffff80';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.backgroundColor = 'rgba(255,255,255,0.04)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="John Doe"
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="john@example.com"
                      className={inputClass('email')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 rounded-2xl font-black text-base text-white overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    boxShadow: '0 0 30px rgba(139,92,246,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(139,92,246,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(139,92,246,0.3)';
                  }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {submitMessage && (
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold border ${
                      isError
                        ? 'border-red-500/30 bg-red-500/[0.08] text-red-300'
                        : 'border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-300'
                    }`}
                  >
                    {isError ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;