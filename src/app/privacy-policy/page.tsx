import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Colony Connection',
  description:
    'Privacy Policy for Colony Connection mobile application - Learn how we collect, use, protect, and manage your data, location permissions, and field visit records.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-black flex flex-col antialiased selection:bg-[#17B85F]/20 selection:text-brand-black">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero Section */}
        <div className="border-b border-gray-200/80 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/40 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Breadcrumb & Back Link */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400">Legal</span>
              <span className="text-gray-300">/</span>
              <span className="text-brand-green font-medium">Privacy Policy</span>
            </div>

            {/* Title & Badge */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17B85F]/10 border border-[#17B85F]/20 text-[#17B85F] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#17B85F] animate-pulse"></span>
                Official Legal Documentation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight leading-[1.15] mb-4">
                Privacy Policy for Colony
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                This document sets forth the Privacy Policy for the <span className="font-semibold text-brand-black">Colony Connection</span> mobile enterprise application, outlining our policies and procedures on the collection, use, security, and disclosure of your information.
              </p>
            </div>

            {/* Quick Metadata Bar */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-gray-400 block font-medium">Effective Date</span>
                <span className="font-semibold text-brand-black">October 20, 2026</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Application</span>
                <span className="font-semibold text-brand-black">Colony (Mobile App)</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Data Selling</span>
                <span className="font-semibold text-emerald-600">Strictly Prohibited (Zero Sale)</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Compliance Contact</span>
                <a
                  href="mailto:mrirusso@hotmail.com"
                  className="font-semibold text-brand-green hover:underline truncate block"
                >
                  mrirusso@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section with Sticky Sidebar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#17B85F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Table of Contents
                  </h3>
                </div>

                <nav className="space-y-1.5 text-[13px]">
                  <a
                    href="#section-1"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    1. Introduction
                  </a>
                  <a
                    href="#section-2"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    2. Information We Collect
                  </a>
                  <a
                    href="#section-3"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    3. How We Use Your Information
                  </a>
                  <a
                    href="#section-4"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    4. How Information is Shared
                  </a>
                  <a
                    href="#section-5"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    5. Data Security
                  </a>
                  <a
                    href="#section-6"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    6. Account Creation &amp; Deletion
                  </a>
                  <a
                    href="#section-7"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    7. Children&apos;s Privacy
                  </a>
                  <a
                    href="#section-8"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    8. Changes to This Privacy Policy
                  </a>
                  <a
                    href="#section-9"
                    className="block px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-brand-green hover:bg-[#17B85F]/5 transition-colors font-medium"
                  >
                    9. Contact Us
                  </a>
                </nav>

                {/* Direct Support Mini Card */}
                <div className="mt-6 pt-5 border-t border-gray-100 bg-gray-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <h4 className="text-xs font-bold text-brand-black mb-1">
                    Have questions about privacy?
                  </h4>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    Our compliance and support team is available to assist you.
                  </p>
                  <a
                    href="mailto:mrirusso@hotmail.com"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-white bg-[#17B85F] hover:bg-[#139c50] rounded-lg transition-all shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email Support
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Policy Content */}
            <article className="lg:col-span-8 bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-10 shadow-sm space-y-12">
              {/* Highlight Summary Banner */}
              <div className="bg-[#17B85F]/5 border-l-4 border-[#17B85F] p-4 sm:p-5 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#17B85F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <p className="font-semibold text-brand-black mb-1">
                      Enterprise Privacy Summary
                    </p>
                    <p>
                      Colony Connection respects your privacy and is engineered for secure enterprise operations. We never sell your personal data or location to third parties. Location data is accessed solely while the app is in active use to calculate sales routes and verify customer visits.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1. Introduction */}
              <section id="section-1" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Introduction
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                  <p>
                    Welcome to <strong>Colony Connection</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, store, and disclose information when you use our mobile application (<strong>Colony Connection</strong>).
                  </p>
                  <p>
                    Colony Connection is a specialized enterprise mobile application designed for field sales representatives, route planners, and territory managers to manage colonies, customer locations, and optimize sales travel routes.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 2. Information We Collect */}
              <section id="section-2" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Information We Collect
                  </h2>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
                  {/* Subsection A */}
                  <div className="bg-gray-50/60 rounded-xl p-5 border border-gray-100">
                    <h3 className="text-base font-bold text-brand-black mb-2 flex items-center gap-2">
                      <span className="text-[#17B85F] font-extrabold">A.</span>
                      Personal Information Provided by You or Your Organization
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Because accounts are provisioned by your employer or organization administrator, we may collect or store:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                        <div>
                          <strong className="text-brand-black">Account &amp; Profile Data:</strong> Name, business email address, phone number, employee/agent identifier, and profile pictures.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                        <div>
                          <strong className="text-brand-black">Authentication Credentials:</strong> Encrypted passwords and login session tokens.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Subsection B */}
                  <div className="bg-gray-50/60 rounded-xl p-5 border border-gray-100">
                    <h3 className="text-base font-bold text-brand-black mb-2 flex items-center gap-2">
                      <span className="text-[#17B85F] font-extrabold">B.</span>
                      Device &amp; Hardware Permissions
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      To enable core application features, Colony Connection requests access to the following hardware features:
                    </p>

                    <div className="space-y-4">
                      {/* Location Data */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-xs">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#17B85F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <h4 className="font-semibold text-brand-black text-sm">
                            Location Data (Precise &amp; Approximate)
                          </h4>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-600 ml-6 list-disc">
                          <li>
                            <strong className="text-gray-800">When in Use:</strong> We access your device&apos;s GPS location while the app is actively in use to show your position on the map, locate nearby colonies/customers, record customer visits, and calculate optimized travel routes.
                          </li>
                        </ul>

                        {/* Location Privacy Guarantee Banner */}
                        <div className="mt-3 bg-amber-50/70 border border-amber-200/70 rounded-md p-3 text-xs text-amber-900 flex items-start gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 mt-0.5 text-amber-600"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <div>
                            <strong>Note:</strong> We do not track your location in the background when the app is closed, nor do we sell your location data to third-party data brokers or advertisers.
                          </div>
                        </div>
                      </div>

                      {/* Camera Access */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#17B85F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                          <h4 className="font-semibold text-brand-black text-sm">
                            Camera Access
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 ml-6">
                          Requested when you choose to take photos of colony sites, customer premises, or capture receipts/documents during your field visits.
                        </p>
                      </div>

                      {/* Photo Library / Storage */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200/80 shadow-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#17B85F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                          <h4 className="font-semibold text-brand-black text-sm">
                            Photo Library / Storage
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 ml-6">
                          Requested when you choose to upload existing images from your gallery to the app.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subsection C */}
                  <div className="bg-gray-50/60 rounded-xl p-5 border border-gray-100">
                    <h3 className="text-base font-bold text-brand-black mb-2 flex items-center gap-2">
                      <span className="text-[#17B85F] font-extrabold">C.</span>
                      Operational &amp; Usage Data
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                        <div>
                          <strong className="text-brand-black">Field Visit Records:</strong> Information about colony visits, check-ins, customer notes, orders, and interaction history submitted through the app.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                        <div>
                          <strong className="text-brand-black">Device &amp; Log Information:</strong> Device model, operating system version, app version, IP address, and crash reports to ensure app stability and performance.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 3. How We Use Your Information */}
              <section id="section-3" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 text-[15px]">
                  We use the collected data exclusively for business and operational purposes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-gray-200/80 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#17B85F]/10 text-[#17B85F] font-bold text-xs flex items-center justify-center">
                        1
                      </span>
                      <h4 className="font-bold text-sm text-brand-black">
                        Sales Route Optimization
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Calculating turn-by-turn directions and optimal visiting schedules between colonies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200/80 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#17B85F]/10 text-[#17B85F] font-bold text-xs flex items-center justify-center">
                        2
                      </span>
                      <h4 className="font-bold text-sm text-brand-black">
                        Account Authentication &amp; Security
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Authenticating authorized enterprise users and preventing unauthorized access.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200/80 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#17B85F]/10 text-[#17B85F] font-bold text-xs flex items-center justify-center">
                        3
                      </span>
                      <h4 className="font-bold text-sm text-brand-black">
                        Field Reporting &amp; Analytics
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Providing reports to your organization regarding colony status, route completions, and field operations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200/80 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#17B85F]/10 text-[#17B85F] font-bold text-xs flex items-center justify-center">
                        4
                      </span>
                      <h4 className="font-bold text-sm text-brand-black">
                        App Maintenance &amp; Troubleshooting
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Identifying and fixing technical issues, crashes, and performance bottlenecks.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 4. How Information is Shared */}
              <section id="section-4" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    How Information is Shared
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                  <p className="font-medium text-brand-black bg-gray-50 p-4 rounded-xl border border-gray-200/70">
                    We do not sell, rent, or trade your personal data to any third party for marketing or advertising.
                  </p>
                  <p>
                    We may share data only under the following circumstances:
                  </p>

                  <ul className="space-y-3 mt-4 text-sm">
                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-brand-black block text-sm mb-0.5">
                          With Your Organization / Employer
                        </strong>
                        <span className="text-gray-600">
                          Your visit logs, route history, and submitted data are accessible to your company&apos;s system administrators.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-brand-black block text-sm mb-1">
                          Third-Party Service Providers
                        </strong>
                        <span className="text-gray-600 block mb-2">
                          We use trusted third-party services necessary for app functionality:
                        </span>
                        <ul className="ml-4 space-y-1.5 list-disc text-gray-600">
                          <li>
                            <strong>Mapping Services (e.g., Google Maps SDK):</strong> For rendering maps, geolocation services, and route visualization.
                          </li>
                          <li>
                            <strong>Cloud Infrastructure &amp; Backend Hosting:</strong> For secure data storage and API operations.
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#17B85F] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-brand-black block text-sm mb-0.5">
                          Legal Requirements
                        </strong>
                        <span className="text-gray-600">
                          If required by law, subpoena, or government authority to comply with legal processes.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 5. Data Security */}
              <section id="section-5" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Data Security
                  </h2>
                </div>

                <p className="text-gray-700 mb-4 text-[15px] leading-relaxed">
                  We implement strict industry-standard technical and organizational security measures to protect your personal and location data:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      In-Transit Encryption
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      All data transmitted between the mobile application and our servers is encrypted using <strong>Transport Layer Security (TLS/HTTPS)</strong>.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m10 10 2 2 4-4" />
                        <rect width="16" height="20" x="4" y="2" rx="2" />
                      </svg>
                      Encrypted Device Storage
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Sensitive authentication tokens are stored securely in <strong>encrypted local device storage</strong> (Keychain/Keystore).
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 6. Account Creation & Deletion */}
              <section id="section-6" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Account Creation &amp; Deletion
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                  <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/70">
                    <strong className="text-brand-black block mb-1">
                      • Account Creation:
                    </strong>
                    <p className="text-sm text-gray-600">
                      User accounts are provisioned and managed directly by organization administrators. In-app public self-registration is disabled.
                    </p>
                  </div>

                  <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/70">
                    <strong className="text-brand-black block mb-1">
                      • Data Retention &amp; Account Deletion:
                    </strong>
                    <p className="text-sm text-gray-600">
                      To modify your profile, deactivate an account, or request deletion of your personal data, please contact your organization administrator or reach out to us at our support email below.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 7. Children's Privacy */}
              <section id="section-7" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Children&apos;s Privacy
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Colony Connection is an enterprise tool intended strictly for working professionals and is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <hr className="border-gray-100" />

              {/* 8. Changes to This Privacy Policy */}
              <section id="section-8" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Changes to This Privacy Policy
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
                </p>
              </section>

              <hr className="border-gray-100" />

              {/* 9. Contact Us */}
              <section id="section-9" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17B85F]/10 text-brand-green font-bold text-sm">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-black tracking-tight">
                    Contact Us
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                  If you have any questions or concerns regarding this Privacy Policy or data practices, please contact us:
                </p>

                <div className="bg-[#0A1108] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#17B85F] font-bold mb-1">
                        Application Details
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Colony</h4>
                      <p className="text-xs text-gray-400">
                        Enterprise Field Sales &amp; Route Management Platform
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                        Direct Support Email
                      </div>
                      <a
                        href="mailto:mrirusso@hotmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17B85F] hover:bg-[#139c50] text-white text-sm font-semibold transition-all shadow-[0_4px_14px_rgba(23,184,95,0.3)] hover:scale-[1.02]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        mrirusso@hotmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
