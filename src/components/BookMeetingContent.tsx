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
      <section className="relative flex flex-col items-center justify-center min-h-[260px] py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden animate-fade-in" style={{animationDelay: '0.1s', animationDuration: '0.7s'}}>
        {/* לוגו קטן ועדין */}
        <div className="absolute top-8 left-8 opacity-15 z-10 hidden md:block">
          <Image src={IMAGES.logo} alt="Indexland Logo" width={60} height={60} />
        </div>
        <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 animate-fade-in" style={{animationDelay: '0.2s', animationDuration: '0.7s'}}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-orange-700 bg-white text-orange-700 shadow-none">
              <FaBriefcase className="text-xl" />
            </span>
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">Ready to Elevate Your Workspace & Portfolio?</h1>
          </div>
          <div className="w-12 h-0.5 bg-orange-700 rounded-full mx-auto mb-5 animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '0.7s'}} />
          <p className="text-base md:text-lg text-gray-700 mb-2 font-normal animate-fade-in" style={{animationDelay: '0.4s', animationDuration: '0.7s'}}>Share a few details below, and we'll be in touch within 24 hours to schedule your free discovery call.</p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center py-10 md:py-16 bg-white animate-fade-in" style={{animationDelay: '0.5s', animationDuration: '0.7s'}}>
        <div className="w-full max-w-lg bg-white rounded-lg shadow-sm p-8 md:p-10 border border-gray-200 animate-fade-in" style={{animationDelay: '0.6s', animationDuration: '0.7s'}}>
          {submitted ? (
            <div className="text-center py-14 animate-fade-in" style={{animationDelay: '0.7s', animationDuration: '0.7s'}}>
              <h2 className="text-xl font-semibold text-orange-700 mb-3">Thank you!</h2>
              <p className="text-base text-gray-700 mb-2">We'll be in touch soon to schedule your meeting.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-8 animate-fade-in" onSubmit={handleSubmit} autoComplete="off" noValidate style={{animationDelay: '0.8s', animationDuration: '0.7s'}}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-800">Name <span className="text-red-500">*</span></label>
                <Input id="name" name="name" type="text" placeholder="Full name (e.g. John Doe)" value={form.name} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.name} className="w-full border border-gray-300 rounded-md bg-white focus:border-orange-700 focus:ring-0 transition text-base placeholder-gray-400" />
                {errors.name && <span className="text-xs text-red-500 font-normal">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">Email <span className="text-red-500">*</span></label>
                <Input id="email" name="email" type="email" placeholder="Business email (e.g. john@company.com)" value={form.email} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.email} className="w-full border border-gray-300 rounded-md bg-white focus:border-orange-700 focus:ring-0 transition text-base placeholder-gray-400" />
                {errors.email && <span className="text-xs text-red-500 font-normal">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-800">Phone <span className="text-red-500">*</span></label>
                <Input id="phone" name="phone" type="tel" placeholder="Phone number (e.g. +1 234 567 8900)" value={form.phone} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.phone} className="w-full border border-gray-300 rounded-md bg-white focus:border-orange-700 focus:ring-0 transition text-base placeholder-gray-400" />
                {errors.phone && <span className="text-xs text-red-500 font-normal">{errors.phone}</span>}
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium mb-1 text-gray-800">Meeting Topic <span className="text-red-500">*</span></label>
                <Select id="topic" name="topic" value={form.topic} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.topic} className="w-full border border-gray-300 rounded-md bg-white focus:border-orange-700 focus:ring-0 transition text-base placeholder-gray-400" options={topics} placeholder="Choose a topic..." />
                {errors.topic && <span className="text-xs text-red-500 font-normal">{errors.topic}</span>}
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-1 text-gray-800">Additional Details</label>
                <Textarea id="details" name="details" placeholder="Share any specific goals, questions, or requirements (optional)" value={form.details} onChange={handleChange} className="w-full border border-gray-300 rounded-md bg-white focus:border-orange-700 focus:ring-0 transition text-base placeholder-gray-400" rows={3} />
              </div>
              <Button type="submit" className="w-full mt-2 text-base font-semibold py-2.5 rounded-md bg-orange-700 hover:bg-orange-800 transition-colors duration-200 shadow-none tracking-wide animate-fade-in" isLoading={loading} size="md" style={{animationDelay: '1s', animationDuration: '0.7s'}}>Book a Meeting</Button>
            </form>
          )}
        </div>
      </section>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(18px); }
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