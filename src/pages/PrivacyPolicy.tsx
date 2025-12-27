import { ArrowLeft, Shield, Lock, Eye, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
                            <Shield className="w-6 h-6 text-foreground" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold">Privacy Policy</h1>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Your privacy is critically important to us. This policy outlines how Xorian Industries
                        collects, uses, and protects your information.
                    </p>

                    <div className="mt-6 text-sm text-muted-foreground font-tech">
                        Last Updated: December 2024
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
                                <Eye className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Information We Collect</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    At Xorian Industries, we collect information that you voluntarily provide to us when
                                    expressing interest in our defense solutions, including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Organization name and contact details</li>
                                    <li>Name and professional title</li>
                                    <li>Email address and phone number</li>
                                    <li>Application requirements and technical specifications</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">How We Use Your Information</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>We use the information we collect for the following purposes:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>To respond to your inquiries about our defense technology solutions</li>
                                    <li>To provide product demonstrations and technical consultations</li>
                                    <li>To send relevant updates about our unmanned aerial systems</li>
                                    <li>To improve our products and services</li>
                                    <li>To comply with legal and regulatory requirements</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Server className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Data Security</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    As a defense technology company, security is at the core of everything we do.
                                    We implement industry-leading security measures to protect your data:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>End-to-end encryption for all communications</li>
                                    <li>Secure servers located in India</li>
                                    <li>Regular security audits and penetration testing</li>
                                    <li>Strict access controls and authentication protocols</li>
                                    <li>Compliance with Indian data protection regulations</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Your Rights</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Access the personal data we hold about you</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Lodge a complaint with relevant authorities</li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-card border border-border p-8 mt-12">
                            <h3 className="text-xl font-display font-semibold mb-4">Contact Us</h3>
                            <p className="text-muted-foreground mb-4">
                                For any privacy-related inquiries, please contact our Data Protection Officer:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-muted-foreground">Email:</span> <a href="mailto:privacy@xorianindustries.com" className="text-foreground hover:underline">privacy@xorianindustries.com</a></p>
                                <p><span className="text-muted-foreground">Address:</span> Xorian Industries, Kanpur, Uttar Pradesh, India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
