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
      <section className="relative flex flex-col items-center justify-center min-h-[340px] py-12 md:py-20 bg-gradient-to-br from-white via-orange-50 to-orange-100 overflow-hidden">
        {/* דינאמיות: תמונה ברקע */}
        <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format" alt="Office meeting" fill priority className="object-cover object-center opacity-30 pointer-events-none z-0" />
        {/* לוגו שקוף */}
        <div className="absolute top-8 left-8 opacity-20 z-10 hidden md:block">
          <Image src={IMAGES.logo} alt="Indexland Logo" width={80} height={80} />
        </div>
        <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-lg">Ready to Elevate Your Workspace & Portfolio?</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2 font-medium">Share a few details below, and we'll be in touch within 24 hours to schedule your free discovery call.</p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center py-12 md:py-20 bg-white dark:bg-backgroundDark">
        <div className="w-full max-w-lg bg-white/90 dark:bg-backgroundDark/90 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100 dark:border-white/10">
          {submitted ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-primary mb-4">Thank you!</h2>
              <p className="text-lg text-gray-700 mb-2">We'll be in touch soon to schedule your meeting.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name <span className="text-red-500">*</span></label>
                <Input id="name" name="name" type="text" placeholder="Enter your full name" value={form.name} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.name} className="w-full" />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email <span className="text-red-500">*</span></label>
                <Input id="email" name="email" type="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.email} className="w-full" />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.phone} className="w-full" />
                {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold mb-1">Meeting Topic <span className="text-red-500">*</span></label>
                <Select id="topic" name="topic" value={form.topic} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.topic} className="w-full" options={topics} placeholder="Select meeting topic" />
                {errors.topic && <span className="text-xs text-red-500">{errors.topic}</span>}
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-semibold mb-1">Additional Details</label>
                <Textarea id="details" name="details" placeholder="Tell us a bit about your needs (optional)" value={form.details} onChange={handleChange} className="w-full" rows={3} />
              </div>
              <Button type="submit" className="w-full mt-2" isLoading={loading} size="lg">Book a Meeting</Button>
            </form>
          )}
        </div>
      </section>
    </PageContainer>
  );
} 