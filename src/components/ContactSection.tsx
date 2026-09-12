import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Sparkles, MessageSquare, Calendar, Users, Music, MessageCircle } from 'lucide-react';
import { BookingFormState } from '../types';

interface ContactSectionProps {
  initialEventType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialEventType }) => {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    eventType: initialEventType || 'Conferences',
    eventDate: '',
    guestCount: '',
    budgetRange: 'Standard Production',
    servicesNeeded: ['Stage Lighting', 'Audio / Line Array'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleServiceToggle = (service: string) => {
    setForm((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `MITCH-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketNumber(randomTicket);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#070709] border-t border-zinc-850">
      {/* Visual Ambient Spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFC700]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#FFC700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FFC700] uppercase tracking-wider mb-4 font-['Syne']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch with THE MITCH HUB</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-['Syne'] tracking-tight mb-4 leading-tight">
            Let's Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC700] via-[#FFE07D] to-white">
              Magic Together
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Whether preparing for a stadium concert, high-level diplomatic assembly, brand unveil, or luxury nuptials, our engineers and technical directors are ready to execute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white font-['Syne'] uppercase mb-2">
                THE MITCH HUB Headquarters
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Reach our 24/7 East African production dispatch for urgent bookings, site surveys, and technical equipment hire.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Direct Chat Card */}
                <a
                  href="https://wa.me/256781072868?text=Hello%20The%20Mitch%20Hub,%20I%20would%20like%20to%20inquire%20about%20event%20production%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#25D366] transition-all shadow-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Official WhatsApp
                    </span>
                    <span className="text-lg font-black text-white group-hover:text-[#25D366] transition-colors font-mono">
                      0781072868
                    </span>
                    <span className="text-[11px] text-[#25D366] block mt-0.5 font-medium">
                      Instant Chat &amp; Setup Inquiries →
                    </span>
                  </div>
                </a>

                {/* Phone Call Card */}
                <a
                  href="tel:+256781072868"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFC700] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFC700] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 fill-black" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Direct Production Line (Voice)
                    </span>
                    <span className="text-lg font-black text-white group-hover:text-[#FFC700] transition-colors font-mono">
                      +256 781 072 868
                    </span>
                    <span className="text-[11px] text-[#FFC700] block mt-0.5">
                      24/7 Technical Dispatch Call
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@themitchhub.com"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFC700] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-[#FFC700] text-zinc-300 group-hover:text-black flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Official Inquiries &amp; RFPs
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-[#FFC700] transition-colors font-mono">
                      info@themitchhub.com
                    </span>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      Fast 2-hour technical response
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FFC700]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Production Warehouse &amp; Studios
                    </span>
                    <span className="text-base font-bold text-white font-['Syne']">
                      Plot CODE5, Kampala, Uganda
                    </span>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      Central East Africa Dispatch Hub
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center gap-3 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-[#FFC700]" />
                <span>
                  Operations 24/7 on active show weekends. Office: Mon–Sat 8:00 AM – 7:00 PM EAT.
                </span>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-zinc-900 border border-emerald-800/40 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block font-['Syne']">
                  Instant WhatsApp Dispatch
                </span>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Chat directly with our Technical Director.
                </p>
              </div>
              <a
                href="https://wa.me/256700270027?text=Hello%20THE%20MITCH%20HUB,%20I%20am%20inquiring%20about%20event%20production%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg font-['Syne'] flex-shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Now</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFC700]/20 text-[#FFC700] border border-[#FFC700] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-white font-['Syne'] uppercase">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you <strong className="text-white">{form.fullName}</strong>. Your production inquiry has been dispatched to THE MITCH HUB technical lead.
                  </p>
                  <div className="inline-block p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#FFC700]">
                    Inquiry Reference: <span className="text-white font-bold">{ticketNumber}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-[#FFC700] hover:bg-[#ffcf1a] font-['Syne']"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FFC700] font-['Syne']">
                      Book A 360 Production Setup
                    </span>
                    <span className="text-xs text-zinc-400">Response within 2 hours</span>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Full Name / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Christine Nakato / Brand Lead"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 0781 072 868"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                  </div>

                  {/* Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="info@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Event Discipline *
                      </label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#FFC700]"
                      >
                        <option value="Conferences">01 — Conferences</option>
                        <option value="Concerts">02 — Concerts</option>
                        <option value="Product Launch">03 — Product Launch</option>
                        <option value="Parties">04 — Parties</option>
                        <option value="Weddings">05 — Weddings</option>
                        <option value="Corporate events">06 — Corporate events</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Date & Expected Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Estimated Attendees
                      </label>
                      <input
                        type="text"
                        value={form.guestCount}
                        onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                        placeholder="e.g. 500 Guests / 15,000 Arena"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFC700]"
                      />
                    </div>
                  </div>

                  {/* Services Needed Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Production Disciplines Required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Stage Lighting',
                        'Audio / Line Array',
                        'Curved LED Walls',
                        'Roof Trussing & Staging',
                        'SFX & Cold Sparks',
                        'Multi-Cam Live Stream',
                        'Full 360 Turnkey',
                      ].map((service) => {
                        const active = form.servicesNeeded.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              active
                                ? 'bg-[#FFC700] text-black font-bold shadow'
                                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Venue &amp; Setup Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about the venue, stage dimensions, or specific technical requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFC700]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full py-4 rounded-xl text-black font-black uppercase text-sm tracking-wider bg-[#FFC700] hover:bg-[#ffcf1a] shadow-xl shadow-[#FFC700]/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] font-['Syne'] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Production Request</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
