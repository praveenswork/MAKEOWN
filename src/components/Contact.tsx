import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  User,
  Building,
  PhoneCall,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { ContactFormData } from "../types";

export const Contact: React.FC = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE;
  const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  // Missing form state: tracks form input values
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    emailAddress: "",
    projectType: "Mobile App Development",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const projectTypes = [
    "Mobile App Development",
    "Website Development",
    "UI/UX Design",
    "SaaS Product",
    "Custom Software",
    "Other",
  ];

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name helps us prepare context";
    }

    if (!formData.emailAddress.trim()) {
      errors.emailAddress = "Email is required";
    } else if (!emailRegex.test(formData.emailAddress)) {
      errors.emailAddress = "Please enter a valid email address";
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (formData.mobileNumber.replace(/[^0-9]/g, "").length < 8) {
      errors.mobileNumber = "Please enter a valid mobile number";
    }

    if (
      !formData.projectDescription.trim() ||
      formData.projectDescription.length < 10
    ) {
      errors.projectDescription =
        "Please provide a project description (minimum 10 characters)";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const templateParams = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      mobileNumber: formData.mobileNumber,
      emailAddress: formData.emailAddress,
      projectType: formData.projectType,
      projectDescription: formData.projectDescription,
    };

    try {
      // Mail to MakeOwn Team
      await emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );

      // Auto reply to customer
      await emailjs.send(
        SERVICE_ID,
        USER_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );

      setIsSubmitSuccess(true);

      setFormData({
        fullName: "",
        companyName: "",
        mobileNumber: "",
        emailAddress: "",
        projectType: "Mobile App Development",
        projectDescription: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const directContacts = [
    {
      name: "Simeon",
      // role: "Head of Web Systems",
      phone: "+91 95002 10870",
      email: "simeoncse52@gmail.com",
    },
    {
      name: "Vengadesh",
      // role: "App Architect",
      phone: "+91 87547 01732",
      email: "m.vengadesh2019@gmail.com",
    },
    {
      name: "Subramani",
      // role: "UI/UX Specialist",
      phone: "+91 90255 68008",
      email: "subramanidev2003@gmail.com",
    },
    {
      name: "Perumal",
      // role: "Head of Support",
      phone: "+91 63815 62597",
      email: "p6381562@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Mesh gradients for organic light effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-2/3 w-[350px] h-[350px] rounded-full bg-indigo-500/5 filter blur-[70px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-blue-500/5 filter blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          >
            Launch Engagement
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white"
          >
            Initiate Your Engineering Pipeline.
          </motion.h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Reach out directly to the founders of MakeOwn Technologies, or lodge
            a product brief below.
          </p>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Founders Contact panel */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white pb-2 border-b border-slate-150 dark:border-white/5">
              Direct Channels
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {directContacts.map((contact, idx) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-display font-black text-sm text-slate-900 dark:text-white">
                        {contact.name}
                      </h4>
                      <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wide mt-0.5">
                        {/* {contact.role} */}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2.5 text-slate-550 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{contact.phone}</span>
                    </a>

                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2.5 text-slate-550 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{contact.email}</span>
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Main Corporate Mail Hub */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-5 rounded-2xl bg-gradient-to-tr from-blue-600/5 to-indigo-600/5 border border-blue-500/10 dark:border-blue-400/10 shadow-sm text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                  MakeOwn Corporate Mailbox
                </h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-400 font-medium mt-1">
                  Send details, scopes, or general requests
                </p>
                <a
                  href="mailto:makeown.support@gmail.com"
                  className="inline-block mt-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform"
                >
                  makeown.support@gmail.com
                </a>
              </motion.div>
            </div>
          </div>

          {/* Form container panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-[#0e0e11]/95 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Submission animation screens overlay */}
              <AnimatePresence mode="wait">
                {isSubmitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/5">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-black text-2xl text-white flex items-center justify-center gap-2">
                        Proposal Lodged
                        <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm font-medium leading-relaxed">
                        Simeon, Vengadesh, Subramani, or Perumal will review
                        your criteria and contact you within 24 operational
                        hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold bg-neutral-800 text-white border border-white/10 hover:bg-neutral-700 transition"
                    >
                      Fill Another Proposal
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                          Briefing Form
                        </span>
                        <h3 className="font-display font-black text-lg text-white">
                          Propose Project Brief
                        </h3>
                      </div>
                    </div>

                    {/* Full Name & Company Name side-by-side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full p-3 rounded-xl text-xs font-medium outline-none transition-all duration-200 bg-[#16161a] border border-white/10 text-white placeholder-slate-500 focus:border-[#2997ff]/80 focus:bg-[#1d1d24] ${
                            formErrors.fullName
                              ? "border-red-500 bg-red-500/5"
                              : ""
                          }`}
                        />
                        {formErrors.fullName && (
                          <p className="text-[10px] text-red-405 flex items-center gap-1 font-bold">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-slate-400" />
                          <span>Company Name</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Company Ltd"
                          className={`w-full p-3 rounded-xl text-xs font-medium outline-none transition-all duration-200 bg-[#16161a] border border-white/10 text-white placeholder-slate-500 focus:border-[#2997ff]/80 focus:bg-[#1d1d24] ${
                            formErrors.companyName
                              ? "border-red-500 bg-red-500/5"
                              : ""
                          }`}
                        />
                        {formErrors.companyName && (
                          <p className="text-[10px] text-red-405 flex items-center gap-1 font-bold">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.companyName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Mobile Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          placeholder="client@mail.com"
                          className={`w-full p-3 rounded-xl text-xs font-medium outline-none transition-all duration-200 bg-[#16161a] border border-white/10 text-white placeholder-slate-500 focus:border-[#2997ff]/80 focus:bg-[#1d1d24] ${
                            formErrors.emailAddress
                              ? "border-red-500 bg-red-500/5"
                              : ""
                          }`}
                        />
                        {formErrors.emailAddress && (
                          <p className="text-[10px] text-red-405 flex items-center gap-1 font-bold">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.emailAddress}</span>
                          </p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                          <span>Mobile Number</span>
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={`w-full p-3 rounded-xl text-xs font-medium outline-none transition-all duration-200 bg-[#16161a] border border-white/10 text-white placeholder-slate-500 focus:border-[#2997ff]/80 focus:bg-[#1d1d24] ${
                            formErrors.mobileNumber
                              ? "border-red-500 bg-red-500/5"
                              : ""
                          }`}
                        />
                        {formErrors.mobileNumber && (
                          <p className="text-[10px] text-red-405 flex items-center gap-1 font-bold">
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.mobileNumber}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Project Type</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl text-xs font-medium outline-none border cursor-pointer bg-[#16161a] border-white/10 text-white focus:border-[#2997ff]/80 font-sans"
                      >
                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-[#0e0e11] text-white font-sans"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Project Description / Targets</span>
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly review your operational goal, timeline, and requested tech stacks..."
                        className={`w-full p-3 rounded-xl text-xs font-medium outline-none resize-none transition-all duration-200 bg-[#16161a] border border-white/10 text-white placeholder-slate-500 focus:border-[#2997ff]/80 focus:bg-[#1d1d24] ${
                          formErrors.projectDescription
                            ? "border-red-500 bg-red-500/5"
                            : ""
                        }`}
                      />
                      {formErrors.projectDescription && (
                        <p className="text-[10px] text-red-405 flex items-center gap-1 font-bold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.projectDescription}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit button with loading animation spinner */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-85"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Filing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Project Request</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
