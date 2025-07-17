import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

// Configuration par défaut (utilisée en production)
let EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'VOTRE_SERVICE_ID_ICI',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'VOTRE_TEMPLATE_ID_ICI',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VOTRE_PUBLIC_KEY_ICI'
};

let RECAPTCHA_CONFIG = {
  SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'VOTRE_SITE_KEY_ICI'
};

// En développement local, on peut utiliser les fichiers de config
if (import.meta.env.DEV) {
  // Les fichiers de config locaux seront utilisés s'ils existent
  // Sinon on garde les valeurs par défaut
}

export default function ContactForm() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, subject, message } = formData;
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs' });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide' });
      return false;
    }

    if (!captchaValue) {
      setSubmitStatus({ type: 'error', message: 'Veuillez valider le captcha' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message' });
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
      // Reset captcha after submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setSubmitStatus(null); // Clear any previous error messages
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-100 mb-6">
        Envoyez-moi un message
      </h3>

      {submitStatus && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
            : 'bg-red-500/20 border border-red-500/50 text-red-300'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Votre prénom"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Votre nom"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="votre@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Sujet de votre message"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="form-input resize-none"
            placeholder="Décrivez votre projet ou votre demande..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || RECAPTCHA_CONFIG.SITE_KEY}
            onChange={handleCaptchaChange}
            theme="dark"
            size="normal"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !captchaValue}
          className={`w-full btn-primary text-lg py-3 transition-all duration-300 ${
            isSubmitting || !captchaValue
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Envoi en cours...</span>
            </div>
          ) : (
            'Envoyer le message'
          )}
        </button>
      </form>
    </div>
  );
} 