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
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/site';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function BookMeetingContent() {
  const { language, t, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const topics = [
    { value: '', label: 'Select meeting topic' },
    { value: 'office-asset-management', label: 'Office Asset Management' },
    { value: 'international-investment', label: 'International Investments' },
    { value: 'investment-advice', label: 'Investment Consulting' },
    { value: 'other', label: 'Other' },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) setErrors({ ...errors, [e.target.name]: '' });
  }

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t(PAGES.BOOK_MEETING.form.validation.nameRequired);
    if (!formData.email.trim()) newErrors.email = t(PAGES.BOOK_MEETING.form.validation.emailRequired);
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t(PAGES.BOOK_MEETING.form.validation.emailInvalid);
    if (!formData.phone.trim()) newErrors.phone = t(PAGES.BOOK_MEETING.form.validation.phoneRequired);
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageContainer>
      <div dir={dir}>
        {/* Peach background for the whole page */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-br from-[#fff9f6] via-[#fbeee6] to-[#fff3e0]" aria-hidden="true" />
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
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
                  {t(PAGES.BOOK_MEETING.hero.title)}
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 rounded-full mx-auto mb-3 animate-fade-in" style={{ animationDelay: '0.3s', animationDuration: '0.7s' }} />
                <p className="text-lg md:text-xl text-gray-700 font-medium animate-fade-in" style={{ animationDelay: '0.4s', animationDuration: '0.7s' }}>
                  {t(PAGES.BOOK_MEETING.hero.subtitle)}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center justify-center py-10 md:py-16 bg-transparent min-h-[70vh]"
          style={{ animationDelay: '0.5s', animationDuration: '0.7s' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-xl glass-card rounded-3xl shadow-2xl p-0 border-none overflow-visible relative animate-fade-in"
            style={{ background: 'linear-gradient(120deg,rgba(255,176,102,0.97) 0%,rgba(255,224,194,0.93) 100%)', boxShadow: '0 8px 48px 0 #ff9800cc, 0 2px 24px 0 #fff8', border: '1.5px solid #ff980088' }}
          >
            <div className="absolute -inset-1.5 rounded-[2rem] pointer-events-none border-4 border-orange-300/80 bg-gradient-to-br from-orange-200/70 to-white/10 blur-[2px] z-0" />
            <div className="relative z-10 p-8 md:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'backOut' }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-primary mb-4">{t(PAGES.BOOK_MEETING.success.title)}</h2>
                  <p className="text-lg text-gray-600">{t(PAGES.BOOK_MEETING.success.message)}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-2xl font-bold text-primary mb-6 text-center"
                  >
                    {t(PAGES.BOOK_MEETING.form.title)}
                  </motion.h2>
                  
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`peer w-full px-5 py-4 text-lg border-2 rounded-2xl bg-white/70 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 text-start rtl:text-right ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-primary'}`}
                      placeholder=" "
                    />
                    <label htmlFor="name" className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md`}>{t(PAGES.BOOK_MEETING.form.fields.name.label)}</label>
                    {errors.name && <p className={`text-red-500 text-sm mt-1 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`peer w-full px-5 py-4 text-lg border-2 rounded-2xl bg-white/70 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 text-start rtl:text-right ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-primary'}`}
                      placeholder=" "
                    />
                    <label htmlFor="email" className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md`}>{t(PAGES.BOOK_MEETING.form.fields.email.label)}</label>
                    {errors.email && <p className={`text-red-500 text-sm mt-1 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>{errors.email}</p>}
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`peer w-full px-5 py-4 text-lg border-2 rounded-2xl bg-white/70 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 text-start rtl:text-right ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-primary'}`}
                      placeholder=" "
                    />
                    <label htmlFor="phone" className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md`}>{t(PAGES.BOOK_MEETING.form.fields.phone.label)}</label>
                    {errors.phone && <p className={`text-red-500 text-sm mt-1 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>{errors.phone}</p>}
                  </div>

                  {/* Company Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl bg-white/70 focus:bg-white focus:border-primary transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 text-start rtl:text-right"
                      placeholder=" "
                    />
                    <label htmlFor="company" className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md`}>{t(PAGES.BOOK_MEETING.form.fields.company.label)}</label>
                  </div>

                  {/* Details Field */}
                  <div className="relative">
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      className="peer w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl bg-white/70 focus:bg-white focus:border-primary transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 resize-none text-start rtl:text-right"
                      placeholder=" "
                    />
                    <label htmlFor="details" className={`absolute ${dir === 'rtl' ? 'right-5' : 'left-5'} top-2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:text-sm peer-focus:text-primary bg-white/80 px-1 rounded-md`}>{t(PAGES.BOOK_MEETING.form.fields.details.label)}</label>
                  </div>
                  
                  {/* Calendar Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: 'anticipate' }}
                    className="mb-4 flex flex-col items-center justify-center drop-shadow-lg"
                  >
                    <div className="w-full max-w-xs bg-white/90 rounded-2xl shadow-inner border border-orange-200 p-6 flex flex-col items-center mb-2">
                      <FaCalendarAlt className="text-3xl text-orange-400 mb-2" />
                      <span className="text-lg font-semibold text-primary mb-1">{t(PAGES.BOOK_MEETING.form.calendar.title)}</span>
                      <span className="text-sm text-gray-500">{t(PAGES.BOOK_MEETING.form.calendar.description)}</span>
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
                    <FaBriefcase className={`text-xl ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    {loading ? t(PAGES.BOOK_MEETING.form.submitButton.loading) : t(PAGES.BOOK_MEETING.form.submitButton.default)}
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
      </div>
    </PageContainer>
  );
} 