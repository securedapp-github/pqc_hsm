import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
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
        // Validate mobile is exactly 10 digits (local rule)
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
        const payload = {
            fullName: formData.fullName,
            mobile: formData.mobile,
            email: formData.email,
            organization: formData.organization,
            message: formData.message,
            agreePrivacy: formData.agreePrivacy,
            subscribeUpdates: formData.subscribeUpdates,
        };
        try {
            const apiUrl = import.meta.env.DEV
                ? '/api-proxy/api/public/project-inquiry'
                : 'https://crm-be.securedapp.io/api/public/project-inquiry';

            const response = await fetch(apiUrl, {
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
                    onClose();
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
                }, 2000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error('Submission Error:', {
                    status: response.status,
                    statusText: response.statusText,
                    data: errorData
                });

                let message = errorData.message || `Error ${response.status}: ${response.statusText || 'Submission failed'}`;
                if (response.status === 404) message = "Endpoint not found (404). Please verify the API URL.";
                if (response.status === 403) message = "Access forbidden (403). Possible CORS or permission issue.";

                throw new Error(message);
            }
        } catch (error) {
            console.error('Form Submission Exception:', error);
            setErrorMessage(error.message || 'Check your internet connection.');
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'mobile') {
            // sanitize: keep digits only and limit to 10 characters
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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white dark:bg-[#020b1c] rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white tracking-tight">
                                Contact Us
                            </h2>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                                        <CheckCircle2 size={48} className="text-brand-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 dark:text-slate-400">We'll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <input
                                                required
                                                type="text"
                                                name="fullName"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            />
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="space-y-2">
                                            <input
                                                required
                                                type="tel"
                                                name="mobile"
                                                placeholder="Mobile Number"
                                                inputMode="numeric"
                                                pattern="\d*"
                                                maxLength={10}
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className={`w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border ${phoneError ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 dark:border-slate-800'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400`}
                                            />
                                            {phoneError && (
                                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                            )}
                                        </div>

                                        {/* Organization */}
                                        <div className="space-y-2">
                                            <input
                                                required
                                                type="text"
                                                name="organization"
                                                placeholder="Organization (Company)"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <textarea
                                            required
                                            name="message"
                                            placeholder="Tell us about your project requirements..."
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                                        />
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="space-y-3">
                                        <label className="flex items-start gap-3 cursor-pointer group px-1">
                                            <input
                                                type="checkbox"
                                                name="agreePrivacy"
                                                checked={formData.agreePrivacy}
                                                onChange={handleChange}
                                                className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary dark:bg-slate-900 dark:border-slate-700"
                                            />
                                            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                                I agree with the <span className="text-brand-primary font-semibold hover:underline cursor-pointer">Privacy Policy</span> and information being used to contact me
                                            </span>
                                        </label>
                                    </div>

                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-lg"
                                        >
                                            <AlertCircle size={16} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-4">
                                        <button
                                            disabled={status === 'loading'}
                                            type="submit"
                                            className="relative group px-12 py-4 bg-transparent border-2 border-brand-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,207,130,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-brand-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                                            <div className="relative flex items-center justify-center gap-2 font-bold text-brand-primary group-hover:text-black transition-colors">
                                                {status === 'loading' ? (
                                                    <Loader2 className="animate-spin" size={20} />
                                                ) : (
                                                    <Send size={20} />
                                                )}
                                                <span>{status === 'loading' ? 'Submitting...' : 'Submit'}</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
