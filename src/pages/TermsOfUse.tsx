import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-tech tracking-wider">BACK TO HOME</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-foreground" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold">Terms of Use</h1>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Please read these terms carefully before accessing or using the Xorian Industries website
                        and services.
                    </p>

                    <div className="mt-6 text-sm text-muted-foreground font-tech">
                        Effective Date: December 2024
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Acceptance of Terms</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    By accessing and using the Xorian Industries website, you accept and agree to be bound
                                    by these Terms of Use. If you do not agree to these terms, please do not use our website.
                                </p>
                                <p>
                                    Xorian Industries reserves the right to modify these terms at any time. Continued use
                                    of the website following any changes constitutes acceptance of those changes.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Scale className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Use of Website</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>You agree to use this website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Use the website in any way that violates applicable laws or regulations</li>
                                    <li>Attempt to gain unauthorized access to any part of the website</li>
                                    <li>Use the website to transmit any harmful or malicious code</li>
                                    <li>Collect or harvest any information from the website without authorization</li>
                                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Intellectual Property</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    All content on this website, including but not limited to text, graphics, logos, images,
                                    and software, is the property of Xorian Industries and is protected by Indian and
                                    international copyright laws.
                                </p>
                                <p>
                                    Our drone designs, flight control systems, and surveillance technologies are proprietary
                                    and protected by applicable intellectual property laws. Unauthorized reproduction or
                                    distribution is strictly prohibited.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Defense Technology Disclaimer</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Xorian Industries develops defense technology solutions. Access to detailed technical
                                    specifications and procurement is subject to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Verification of authorized government or defense entity status</li>
                                    <li>Compliance with Indian defense procurement regulations</li>
                                    <li>Appropriate security clearances</li>
                                    <li>Execution of non-disclosure agreements where applicable</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Scale className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Limitation of Liability</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Xorian Industries shall not be liable for any direct, indirect, incidental, special,
                                    or consequential damages arising from your use of this website or any information
                                    provided herein.
                                </p>
                                <p>
                                    The information on this website is provided "as is" without warranty of any kind.
                                    We do not guarantee the accuracy, completeness, or timeliness of the information.
                                </p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="bg-card border border-border p-8 mt-12">
                            <h3 className="text-xl font-display font-semibold mb-4">Governing Law</h3>
                            <p className="text-muted-foreground">
                                These Terms of Use shall be governed by and construed in accordance with the laws of
                                India. Any disputes shall be subject to the exclusive jurisdiction of the courts in
                                Kanpur, Uttar Pradesh, India.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsOfUse;
