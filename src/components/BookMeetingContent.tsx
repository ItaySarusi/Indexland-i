'use client';

import React, { useState } from 'react';
import PageContainer from "@/components/layout/PageContainer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Image from 'next/image';
import { IMAGES } from '@/constants/site';
import { useLanguage } from "@/lib/language-context";
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BookMeetingContent() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    details: ''
  });
  const [errors, setErrors] = useState({});

  const topics = [
    { value: '', label: 'Select meeting topic' },
    { value: 'office-asset-management', label: 'Office Asset Management' },
    { value: 'international-investment', label: 'International Investments' },
    { value: 'investment-advice', label: 'Investment Consulting' },
    { value: 'other', label: 'Other' },
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    if (!form.phone) errs.phone = 'Phone is required';
    if (!form.topic) errs.topic = 'Meeting topic is required';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <PageContainer>
      {/* Peach background for the whole page */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-br from-[#fff9f6] via-[#fbeee6] to-[#fff3e0]" aria-hidden="true" />
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex flex-col items-center justify-center min-h-[260px] py-8 md:py-16 bg-transparent border-b border-gray-100 overflow-visible"
        style={{ animationDelay: '0.1s', animationDuration: '0.7s' }}
      >
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
          <div className="mx-auto w-full max-w-2xl rounded-[2.5rem] glass-card shadow-2xl px-6 md:px-16 py-10 md:py-14 mb-2 border-none bg-gradient-to-br from-white/80 via-[#fff3e0]/80 to-white/70 backdrop-blur-2xl overflow-visible animate-fade-in" style={{animationDelay:'0.15s', animationDuration:'0.7s', boxShadow:'0 8px 48px 0 #f26a3d33, 0 1.5px 12px 0 #fff3'}}>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-orange-100/80 via-white/60 to-orange-200/60 border-4 border-orange-200 shadow-lg mb-2 relative">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-200/40 to-white/10 blur-[6px] opacity-60 -z-10" />
                <FaBriefcase className="text-4xl md:text-5xl text-orange-500 drop-shadow-lg" />
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 bg-clip-text text-transparent drop-shadow-xl mb-2 rounded-xl px-2 py-1">
                Ready to Elevate Your Workspace & Portfolio?
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 rounded-full mx-auto mb-3 animate-fade-in" style={{ animationDelay: '0.3s', animationDuration: '0.7s' }} />
              <p className="text-lg md:text-xl text-gray-700 font-medium animate-fade-in" style={{ animationDelay: '0.4s', animationDuration: '0.7s' }}>
                Share a few details below, and we'll be in touch within 24 hours to schedule your free discovery call.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'anticipate' }}
        className="flex flex-col items-center justify-center py-10 md:py-16 bg-transparent min-h-[70vh]"
        style={{ animationDelay: '0.5s', animationDuration: '0.7s' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'anticipate' }}
          className="w-full max-w-xl glass-card rounded-3xl shadow-2xl p-0 border-none overflow-visible relative animate-fade-in"
          style={{ background: 'linear-gradient(120deg,rgba(255,176,102,0.97) 0%,rgba(255,224,194,0.93) 100%)', boxShadow: '0 8px 48px 0 #ff9800cc, 0 2px 24px 0 #fff8', border: '1.5px solid #ff980088' }}
        >
          <div className="absolute -inset-1.5 rounded-[2rem] pointer-events-none border-4 border-orange-300/80 bg-gradient-to-br from-orange-200/70 to-white/10 blur-[2px] z-0" />
          <div className="relative z-10 p-8 md:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-14 animate-fade-in"
                style={{ animationDelay: '0.7s', animationDuration: '0.7s' }}
              >
                <h2 className="text-2xl font-bold text-orange-700 mb-3">Thank you!</h2>
                <p className="text-base text-gray-700 mb-2">We'll be in touch soon to schedule your meeting.</p>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-8 animate-fade-in" onSubmit={handleSubmit} autoComplete="off" noValidate style={{ animationDelay: '0.8s', animationDuration: '0.7s' }}>
                {/* Name */}
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    className="peer w-full rounded-2xl bg-white/90 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 px-5 py-4 text-base shadow-inner placeholder-transparent transition-all duration-200 outline-none drop-shadow-md"
                  />
                  <label htmlFor="name" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md">Name <span className="text-red-500">*</span></label>
                  {errors.name && <span className="text-xs text-red-500 font-normal mt-1 block">{errors.name}</span>}
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    className="peer w-full rounded-2xl bg-white/90 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 px-5 py-4 text-base shadow-inner placeholder-transparent transition-all duration-200 outline-none drop-shadow-md"
                  />
                  <label htmlFor="email" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md">Email <span className="text-red-500">*</span></label>
                  {errors.email && <span className="text-xs text-red-500 font-normal mt-1 block">{errors.email}</span>}
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={form.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    className="peer w-full rounded-2xl bg-white/90 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 px-5 py-4 text-base shadow-inner placeholder-transparent transition-all duration-200 outline-none drop-shadow-md"
                  />
                  <label htmlFor="phone" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md">Phone <span className="text-red-500">*</span></label>
                  {errors.phone && <span className="text-xs text-red-500 font-normal mt-1 block">{errors.phone}</span>}
                </div>
                {/* Topic */}
                <div className="relative flex flex-col gap-1">
                  <label htmlFor="topic" className="mb-1 text-gray-500 text-base font-medium bg-white/80 px-1 rounded-md w-fit">Meeting Topic <span className="text-red-500">*</span></label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.topic}
                    className="peer w-full rounded-2xl bg-white/90 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 px-5 py-4 text-base shadow-inner transition-all duration-200 outline-none drop-shadow-md"
                  >
                    {topics.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.topic && <span className="text-xs text-red-500 font-normal mt-1 block">{errors.topic}</span>}
                </div>
                {/* Details */}
                <div className="relative">
                  <textarea
                    id="details"
                    name="details"
                    placeholder=" "
                    value={form.details}
                    onChange={handleChange}
                    className="peer w-full rounded-2xl bg-white/90 border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 px-5 py-4 text-base shadow-inner placeholder-transparent transition-all duration-200 outline-none min-h-[90px] drop-shadow-md"
                    rows={3}
                  />
                  <label htmlFor="details" className="absolute left-5 top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md">Additional Details</label>
                </div>
                {/* Calendar Placeholder - moved up */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'anticipate' }}
                  className="mb-4 flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <div className="w-full max-w-xs bg-white/90 rounded-2xl shadow-inner border border-orange-200 p-6 flex flex-col items-center mb-2">
                    <FaCalendarAlt className="text-3xl text-orange-400 mb-2" />
                    <span className="text-lg font-semibold text-primary mb-1">Book via Calendar (Coming Soon)</span>
                    <span className="text-sm text-gray-500">Soon you'll be able to pick a date directly from our calendar and book instantly via Calendly.</span>
                  </div>
                </motion.div>
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px 8px #fff, 0 2px 24px 0 #ff9800cc' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-2 text-lg font-bold py-3 rounded-2xl bg-gradient-to-r from-primary to-orange-400 text-white shadow-xl transition-all duration-200 tracking-wide flex items-center justify-center gap-2 luxury-cta-btn focus:outline-none focus:ring-4 focus:ring-primary/30 drop-shadow-lg"
                  disabled={loading}
                  style={{ animationDelay: '1s', animationDuration: '0.7s' }}
                >
                  <FaBriefcase className="text-xl mr-2" />
                  {loading ? 'Booking...' : 'Book a Meeting'}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.section>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-fill-mode: both;
        }
        .glass-card {
          background: rgba(255,255,255,0.82);
          box-shadow: 0 8px 48px 0 #f26a3d33, 0 1.5px 12px 0 #fff3;
          border-radius: 2rem;
          border: none;
        }
        .luxury-cta-btn {
          background: linear-gradient(90deg, #ff9800 0%, #ff7043 100%);
          box-shadow: 0 2px 24px 0 #ff9800cc, 0 1.5px 12px 0 #fff3;
          border: none;
          font-weight: 700;
          font-size: 1.18rem;
          outline: none;
          position: relative;
          overflow: hidden;
        }
        .luxury-cta-btn:after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          pointer-events: none;
          box-shadow: 0 0 0 0 #ff9800;
          transition: box-shadow 0.25s;
        }
        .luxury-cta-btn:hover:after, .luxury-cta-btn:focus:after, .luxury-cta-btn:active:after {
          box-shadow: 0 0 32px 8px #ff9800cc, 0 0 64px 16px #fff8;
          animation: luxury-shine 0.5s linear;
        }
        @keyframes luxury-shine {
          0% { box-shadow: 0 0 0 0 #ff9800cc, 0 0 0 0 #fff8; }
          50% { box-shadow: 0 0 32px 8px #ff9800cc, 0 0 64px 16px #fff8; }
          100% { box-shadow: 0 0 0 0 #ff9800cc, 0 0 0 0 #fff8; }
        }
        .shadow-inner {
          box-shadow: 0 2px 12px 0 #ff98001a inset, 0 1.5px 12px 0 #fff3 inset;
        }
      `}</style>
    </PageContainer>
  );
} 