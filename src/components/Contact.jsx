import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        organization: '',
        message: '',
        agreePrivacy: false,
        subscribeUpdates: true
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate mobile is exactly 10 digits
        if (!/^\d{10}$/.test(formData.mobile)) {
            setPhoneError('Mobile number must be exactly 10 digits.');
            setErrorMessage('Please enter a valid 10-digit mobile number.');
            setStatus('error');
            return;
        }

        if (!formData.agreePrivacy) {
            setErrorMessage('Please agree to the privacy policy.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        const payload = { ...formData };
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    setFormData({
                        fullName: '',
                        mobile: '',
                        email: '',
                        organization: '',
                        message: '',
                        agreePrivacy: false,
                        subscribeUpdates: true
                    });
                }, 3000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Error ${response.status}: Submission failed`);
            }
        } catch (error) {
            setErrorMessage(error.message || 'Check your internet connection.');
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'mobile') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, mobile: digits }));
            if (digits.length === 10) {
                setPhoneError('');
                setErrorMessage('');
                if (status === 'error') setStatus('idle');
            } else {
                setPhoneError('Mobile number must be exactly 10 digits.');
            }
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-500 overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[1rem] p-8 md:p-12 bg-brand-primary/10 dark:bg-brand-primary/5 border border-brand-primary/10 dark:border-brand-primary/5 transition-colors duration-300"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Have questions about the quantum transition? Our security experts are here to help you future-proof your infrastructure.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center mb-6">
                                <CheckCircle2 size={48} className="text-brand-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Our team will get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <input
                                        required
                                        type="tel"
                                        name="mobile"
                                        placeholder="10-digit mobile"
                                        inputMode="numeric"
                                        maxLength={10}
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={`w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900/50 border ${phoneError ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm`}
                                    />
                                    {phoneError && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{phoneError}</p>}
                                </div>

                                <div className="space-y-2">
                                    <input
                                        required
                                        type="text"
                                        name="organization"
                                        placeholder="Organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    required
                                    name="message"
                                    placeholder="How can we help you?"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none shadow-sm"
                                />
                            </div>

                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <label className="flex items-start gap-3 cursor-pointer group px-1">
                                    <input
                                        type="checkbox"
                                        name="agreePrivacy"
                                        checked={formData.agreePrivacy}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary dark:bg-slate-900 dark:border-slate-700"
                                    />
                                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                        I agree with the <span className="text-brand-primary font-semibold hover:underline cursor-pointer">Privacy Policy</span>
                                    </span>
                                </label>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-2 text-red-500 text-sm font-bold"
                                    >
                                        <AlertCircle size={16} />
                                        {errorMessage}
                                    </motion.div>
                                )}
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full sm:w-auto px-12 py-4 rounded-xl font-bold text-slate-950 flex items-center justify-center space-x-3 transition-all hover:bg-brand-accent active:scale-95 shadow-lg shadow-brand-primary/20 disabled:opacity-50"
                                    style={{ backgroundColor: 'var(--color-brand-primary)' }}
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <Send size={20} />
                                    )}
                                    <span className="uppercase tracking-widest font-black">{status === 'loading' ? 'Transmitting...' : 'Submit'}</span>
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
