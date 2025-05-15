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
import { FaBriefcase } from 'react-icons/fa';

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
      {/* Intro Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[340px] py-16 md:py-28 bg-gradient-to-br from-white via-gray-50 to-gray-200 overflow-hidden animate-fade-in" style={{animationDelay: '0.1s', animationDuration: '0.8s'}}>
        {/* לוגו שקוף */}
        <div className="absolute top-8 left-8 opacity-10 z-10 hidden md:block">
          <Image src={IMAGES.logo} alt="Indexland Logo" width={90} height={90} />
        </div>
        <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in" style={{animationDelay: '0.2s', animationDuration: '0.8s'}}>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-black text-white shadow-lg">
              <FaBriefcase className="text-2xl" />
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight font-serif">Ready to Elevate Your Workspace & Portfolio?</h1>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-black rounded-full mx-auto mb-6 animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '0.8s'}} />
          <p className="text-lg md:text-xl text-gray-700 mb-2 font-light animate-fade-in" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}>Share a few details below, and we'll be in touch within 24 hours to schedule your free discovery call.</p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center py-12 md:py-20 bg-white dark:bg-backgroundDark animate-fade-in" style={{animationDelay: '0.5s', animationDuration: '0.8s'}}>
        <div className="w-full max-w-lg bg-white/95 dark:bg-backgroundDark/95 rounded-2xl shadow-2xl p-10 md:p-14 border border-gray-200 dark:border-white/10 animate-fade-in" style={{animationDelay: '0.6s', animationDuration: '0.8s'}}>
          {submitted ? (
            <div className="text-center py-16 animate-fade-in" style={{animationDelay: '0.7s', animationDuration: '0.8s'}}>
              <h2 className="text-2xl font-bold text-primary mb-4">Thank you!</h2>
              <p className="text-lg text-gray-700 mb-2">We'll be in touch soon to schedule your meeting.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-8 animate-fade-in" onSubmit={handleSubmit} autoComplete="off" noValidate style={{animationDelay: '0.8s', animationDuration: '0.8s'}}>
              <div>
                <label htmlFor="name" className="block text-base font-semibold mb-1 text-gray-800">Name <span className="text-red-500">*</span></label>
                <Input id="name" name="name" type="text" placeholder="Enter your full name" value={form.name} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.name} className="w-full border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-primary/30 transition" />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-semibold mb-1 text-gray-800">Email <span className="text-red-500">*</span></label>
                <Input id="email" name="email" type="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.email} className="w-full border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-primary/30 transition" />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-base font-semibold mb-1 text-gray-800">Phone <span className="text-red-500">*</span></label>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.phone} className="w-full border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-primary/30 transition" />
                {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
              </div>
              <div>
                <label htmlFor="topic" className="block text-base font-semibold mb-1 text-gray-800">Meeting Topic <span className="text-red-500">*</span></label>
                <Select id="topic" name="topic" value={form.topic} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.topic} className="w-full border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-primary/30 transition" options={topics} placeholder="Select meeting topic" />
                {errors.topic && <span className="text-xs text-red-500">{errors.topic}</span>}
              </div>
              <div>
                <label htmlFor="details" className="block text-base font-semibold mb-1 text-gray-800">Additional Details</label>
                <Textarea id="details" name="details" placeholder="Tell us a bit about your needs (optional)" value={form.details} onChange={handleChange} className="w-full border border-gray-300 rounded-lg bg-white focus:border-primary focus:ring-primary/30 transition" rows={3} />
              </div>
              <Button type="submit" className="w-full mt-2 text-lg font-bold py-3 rounded-xl bg-gradient-to-r from-black via-primary to-orange-400 hover:from-primary hover:to-black transition-all duration-300 shadow-lg tracking-wide animate-fade-in" isLoading={loading} size="lg" style={{animationDelay: '1s', animationDuration: '0.8s'}}>Book a Meeting</Button>
            </form>
          )}
        </div>
      </section>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-fill-mode: both;
        }
      `}</style>
    </PageContainer>
  );
} 