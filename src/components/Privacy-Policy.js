"use client";
import React, { useEffect, useRef, useCallback } from "react";

import "../app/global.css"; 
import { ArrowRight, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-[85px]">
                <div className="max-w-4xl mx-auto">
                    <div>
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                            <p className="text-lg text-gray-600">Jenisys Software Development & Technology Consulting</p>
                            <p className="text-sm text-gray-500 mt-2">Last updated: 2024-07-22</p>
                        </div>

                        {/* Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Terms</h2>
                            <p className="text-gray-700 mb-4">
                                By accessing and using the website www.jenisys.in (the "Service") operated by Jenisys ("us", "we", or "our"), 
                                you accept and agree to be bound by the terms and provision of this agreement. 
                                These terms apply to the entire website and any email or other type of communication between you and Jenisys.
                            </p>
                            <p className="text-gray-700">
                                If you do not agree to abide by the above, please do not use this service. We reserve the right to change 
                                these terms at any time without prior notice.
                            </p>
                        </section>

                        {/* Use License */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                            <p className="text-gray-700 mb-4">
                                Permission is granted to temporarily download one copy of the materials on Jenisys's website for personal, 
                                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>modify or copy the materials</li>
                                <li>use the materials for any commercial purpose or for any public display</li>
                                <li>attempt to reverse engineer any software contained on Jenisys's website</li>
                                <li>remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                            <p className="text-gray-700">
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                                by Jenisys at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                                you must destroy any downloaded materials in your possession whether in electronic or printed format.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
                            <p className="text-gray-700 mb-4">
                                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                                this Company excludes all representations, warranties, conditions and terms whether express or implied, 
                                statutory or otherwise.
                            </p>
                            <p className="text-gray-700">
                                Jenisys provides software development and technology consulting services. While we strive to provide accurate 
                                and up-to-date information about our services, we make no warranties or representations about the completeness, 
                                accuracy, reliability, suitability or availability of the information, products, services, or related graphics 
                                contained on the website for any purpose.
                            </p>
                        </section>

                        {/* Limitations */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
                            <p className="text-gray-700 mb-4">
                                In no event shall Jenisys or its suppliers be liable for any damages (including, without limitation, damages 
                                for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
                                materials on Jenisys's Internet site, even if Jenisys or a Jenisys authorized representative has been notified 
                                orally or in writing of the possibility of such damage.
                            </p>
                            <p className="text-gray-700">
                                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for 
                                consequential or incidental damages, these limitations may not apply to you. Our total liability to you for 
                                all damages, losses, and causes of action shall not exceed the amount paid by you, if any, for accessing this site.
                            </p>
                        </section>

                        {/* Accuracy of Materials */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                            <p className="text-gray-700 mb-4">
                                The materials appearing on Jenisys's website could include technical, typographical, or photographic errors. 
                                Jenisys does not warrant that any of the materials on its website are accurate, complete, or current.
                            </p>
                            <p className="text-gray-700">
                                Jenisys may make changes to the materials contained on its website at any time without notice. However, 
                                Jenisys does not make any commitment to update the materials. Information about our software development 
                                services, technology consulting offerings, and project portfolios are updated regularly but may not reflect 
                                the most current developments.
                            </p>
                        </section>

                        {/* Links */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Links</h2>
                            <p className="text-gray-700 mb-4">
                                Jenisys has not reviewed all of the sites linked to our Internet website and is not responsible for the 
                                contents of any such linked site. The inclusion of any link does not imply endorsement by Jenisys of the site.
                            </p>
                            <p className="text-gray-700">
                                Use of any such linked website is at the user's own risk. We may provide links to third-party tools, 
                                frameworks, or services that we use in our development process, but we are not responsible for their 
                                privacy practices or content.
                            </p>
                        </section>

                        {/* Modifications */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
                            <p className="text-gray-700 mb-4">
                                Jenisys may revise these terms of service for its website at any time without notice. By using this website, 
                                you are agreeing to be bound by the then current version of these terms of service.
                            </p>
                            <p className="text-gray-700">
                                We will notify users of any material changes to this privacy policy by posting the updated policy on our 
                                website and updating the "Last updated" date. Your continued use of our services after such modifications 
                                constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        {/* Privacy and Cookies Policy */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Cookies Policy</h2>
                            <p className="text-gray-700 mb-4">
                                Your privacy is important to us. This Privacy Policy explains how Jenisys collects, uses, and protects 
                                your information when you visit our website or use our software development and technology consulting services.
                            </p>
                            <p className="text-gray-700">
                                We are committed to ensuring that your privacy is protected and that we comply with applicable data protection 
                                laws, including the General Data Protection Regulation (GDPR) where applicable.
                            </p>
                        </section>

                        {/* Data Controller */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Controller</h2>
                            <p className="text-gray-700 mb-4">
                                Jenisys acts as the data controller for personal data collected through our website and services. 
                                Our contact information is:
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-700"><strong>Company:</strong> Jenisys</p>
                                <p className="text-gray-700"><strong>Website:</strong> www.jenisys.in</p>
                                <p className="text-gray-700"><strong>Email:</strong> contact@jenisys.in</p>
                                <p className="text-gray-700"><strong>Business Type:</strong> Software Development and Technology Consulting</p>
                            </div>
                        </section>

                        {/* Purposes of Processing */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Purposes of the Processing of Personal Data</h2>
                            <p className="text-gray-700 mb-4">We process your personal data for the following purposes:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Service Provision:</strong> To provide software development, web applications, mobile apps, and technology consulting services</li>
                                <li><strong>Communication:</strong> To respond to inquiries, provide project updates, and maintain client relationships</li>
                                <li><strong>Contract Management:</strong> To manage contracts, invoicing, and project deliverables</li>
                                <li><strong>Website Functionality:</strong> To ensure our website functions properly and provide technical support</li>
                                <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legitimate interests</li>
                                <li><strong>Analytics:</strong> To improve our services and website performance</li>
                            </ul>
                        </section>

                        {/* Legal Basis */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Legal Basis of the Processing</h2>
                            <p className="text-gray-700 mb-4">We process your personal data based on the following legal grounds:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Contract Performance:</strong> Processing necessary for the performance of contracts for software development and consulting services</li>
                                <li><strong>Legitimate Interests:</strong> For business operations, improving services, and maintaining client relationships</li>
                                <li><strong>Consent:</strong> Where you have given specific consent for marketing communications or optional services</li>
                                <li><strong>Legal Obligation:</strong> To comply with accounting, tax, and other legal requirements</li>
                                <li><strong>Vital Interests:</strong> In rare cases, to protect someone's life or prevent serious harm</li>
                            </ul>
                        </section>

                        {/* Recipients */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Recipients of Personal Data</h2>
                            <p className="text-gray-700 mb-4">We may share your personal data with:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Service Providers:</strong> Cloud hosting providers, payment processors, and development tools</li>
                                <li><strong>Subcontractors:</strong> Trusted partners involved in project delivery (under strict confidentiality agreements)</li>
                                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                                <li><strong>Professional Advisors:</strong> Lawyers, accountants, and auditors as necessary</li>
                                <li><strong>Business Partners:</strong> In case of merger, acquisition, or business transfer</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                We do not sell, rent, or trade your personal data to third parties for marketing purposes.
                            </p>
                        </section>

                        {/* Period of Processing */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Period of Processing</h2>
                            <p className="text-gray-700 mb-4">We retain your personal data for the following periods:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Client Data:</strong> For the duration of the contract plus 7 years for legal and accounting purposes</li>
                                <li><strong>Website Analytics:</strong> 26 months from collection</li>
                                <li><strong>Marketing Data:</strong> Until you withdraw consent or 3 years of inactivity</li>
                                <li><strong>Support Requests:</strong> 2 years from resolution</li>
                                <li><strong>Legal Claims:</strong> Until the statute of limitations expires</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Data will be securely deleted or anonymized when no longer needed for the specified purposes.
                            </p>
                        </section>

                        {/* Transfer Outside EEA */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Transfer of Your Personal Data Outside the European Economic Area</h2>
                            <p className="text-gray-700 mb-4">
                                Some of our service providers may be located outside the European Economic Area (EEA). When we transfer 
                                personal data outside the EEA, we ensure appropriate safeguards are in place:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Adequacy decisions by the European Commission</li>
                                <li>Standard Contractual Clauses approved by the European Commission</li>
                                <li>Binding Corporate Rules</li>
                                <li>Certification schemes and codes of conduct</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                We regularly review our international transfers to ensure they meet current data protection requirements.
                            </p>
                        </section>

                        {/* Rights */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. What Are Your Rights?</h2>
                            <p className="text-gray-700 mb-4">Under data protection laws, you have the following rights:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Right of Access:</strong> Request a copy of your personal data we hold</li>
                                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete personal data</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                                <li><strong>Right to Restrict Processing:</strong> Limit how we use your personal data</li>
                                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing</li>
                                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                To exercise these rights, contact us at contact@jenisys.in. We will respond within one month.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Cookies and Similar Technologies</h2>
                            <p className="text-gray-700 mb-4">
                                We use cookies and similar technologies to enhance your experience on our website. Cookies are small 
                                text files stored on your device when you visit our website.
                            </p>
                            
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Types of Cookies We Use:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li><strong>Essential Cookies:</strong> Necessary for website functionality and cannot be disabled</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                                <li><strong>Functional Cookies:</strong> Remember your preferences and improve user experience</li>
                                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                            </ul>
                            
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Managing Cookies:</h3>
                            <p className="text-gray-700 mb-4">
                                You can control cookies through your browser settings. However, disabling certain cookies may affect 
                                website functionality. Most browsers allow you to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>View cookies stored on your device</li>
                                <li>Block cookies from specific websites</li>
                                <li>Block third-party cookies</li>
                                <li>Clear all cookies when you close the browser</li>
                                <li>Set preferences for specific websites</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Data Security</h2>
                            <p className="text-gray-700 mb-4">
                                We implement appropriate technical and organizational measures to protect your personal data against 
                                unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                            </p>
                            
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Technical Measures:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>SSL/TLS encryption for data transmission</li>
                                <li>Encryption of sensitive data at rest</li>
                                <li>Regular security updates and patches</li>
                                <li>Secure cloud infrastructure with reputable providers</li>
                                <li>Multi-factor authentication for system access</li>
                                <li>Regular security assessments and penetration testing</li>
                            </ul>
                            
                            <h3 className="text-xl font-medium text-gray-900 mb-3">Organizational Measures:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>Access controls and user authentication</li>
                                <li>Employee training on data protection</li>
                                <li>Confidentiality agreements with staff and contractors</li>
                                <li>Regular backup procedures</li>
                                <li>Incident response procedures</li>
                                <li>Privacy by design in software development</li>
                            </ul>
                            
                            <p className="text-gray-700 mt-4">
                                While we strive to protect your personal data, no method of transmission over the Internet or electronic 
                                storage is 100% secure. We cannot guarantee absolute security but will notify you of any material breaches 
                                as required by law.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 className="text-xl font-medium text-gray-900 mb-3">Contact Us</h3>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-700"><strong>Email:</strong> contact@jenisys.in</p>
                                    <p className="text-gray-700"><strong>Website:</strong> www.jenisys.in</p>
                                    <p className="text-gray-700"><strong>Business:</strong> Software Development and Technology Consulting</p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                This privacy policy is effective as of 2024-07-22 and will remain in effect 
                                except with respect to any changes in its provisions in the future, which will be in effect immediately 
                                after being posted on this page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <img 
                src="/img/Jenisys Hero.png" 
                alt="Jenisys" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Advancing Excellence Beyond Cost
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Delivering innovative solutions that drive business growth and operational excellence through cutting-edge technology and strategic consulting.
                                </p>
                            </div>
                            
                            {/* CTA Button */}
                            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                                Get Started Today
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Services', href: '#services' },
                                    { name: 'About Us', href: '#about' },
                                    { name: 'Blog', href: '#blog' },
                                    { name: 'Careers', href: '#careers' },
                                    { name: 'Case Studies', href: '#case-studies' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            {link.name}
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            123 Business District<br />
                                            Tech Park, Suite 400<br />
                                            Bangalore, Karnataka 560001<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <a 
                                        href="tel:+918240384648" 
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        +91 8240384648
                                    </a>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <a 
                                        href="mailto:contact@jenisys.in" 
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        contact@jenisys.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media & Newsletter */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Stay Connected</h4>
                            
                            {/* Social Media Icons */}
                            <div className="flex gap-4 mb-6">
                                {[
                                    { 
                                        name: 'Instagram', 
                                        href: 'https://www.instagram.com/jenisys.in/',
                                        icon: '/img/mdi_instagram.png'
                                    },
                                    { 
                                        name: 'LinkedIn', 
                                        href: 'https://www.linkedin.com/company/jenisys',
                                        icon: '/img/linkedIn.png'

                                    },
                                    { 
                                        name: 'Facebook', 
                                        href: 'https://www.facebook.com',
                                        icon: '/img/facebook.png'
                                    }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-gray-700 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                    >
                                        <span className="text-white text-sm font-semibold">
                                            {social.name.charAt(0)}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div>
                                <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
                                <div className="flex gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="Your email"
                                        className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                                    />
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            
                            {/* Copyright */}
                            <div className="text-gray-400 text-sm">
                                © 2025 Jenisys. All rights reserved.
                            </div>

                            {/* Legal Links */}
                            <div className="flex gap-6 text-sm">
                                <a
                                    href="#privacy"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default PrivacyPolicy;