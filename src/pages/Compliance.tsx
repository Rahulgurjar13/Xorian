import { ArrowLeft, Award, FileCheck, Building, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Compliance = () => {
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
                            <Award className="w-6 h-6 text-foreground" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold">Compliance</h1>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Xorian Industries adheres to the highest standards of regulatory compliance
                        for defense technology development and manufacturing.
                    </p>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="py-12 border-y border-border/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-center text-sm font-tech tracking-wider text-muted-foreground mb-8">CERTIFICATIONS & STANDARDS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'ISO 9001:2015', desc: 'Quality Management' },
                            { name: 'ISO 27001', desc: 'Information Security' },
                            { name: 'AS9100D', desc: 'Aerospace Quality' },
                            { name: 'DGCA Approved', desc: 'Drone Operations' },
                        ].map((cert) => (
                            <div key={cert.name} className="bg-card border border-border p-6 text-center">
                                <div className="w-12 h-12 mx-auto mb-4 border border-foreground/30 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-foreground" />
                                </div>
                                <div className="font-display font-semibold text-foreground mb-1">{cert.name}</div>
                                <div className="text-xs text-muted-foreground font-tech">{cert.desc}</div>
                            </div>
                        ))}
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
                                <Building className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Defense Sector Compliance</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    As a defense technology company, we operate under strict regulatory frameworks
                                    to ensure our products meet national security requirements:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Ministry of Defence (MoD) vendor registration</li>
                                    <li>Directorate General of Civil Aviation (DGCA) compliance for UAS</li>
                                    <li>Department of Defence Production guidelines adherence</li>
                                    <li>Make in India initiative alignment</li>
                                    <li>Defence Acquisition Procedure (DAP) compliance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileCheck className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Quality Standards</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Our quality management system ensures consistent, high-quality products:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>ISO 9001:2015 certified quality management system</li>
                                    <li>AS9100D aerospace quality standards</li>
                                    <li>Rigorous testing and quality control procedures</li>
                                    <li>Traceable supply chain management</li>
                                    <li>Continuous improvement processes</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Data Protection</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>We comply with all applicable data protection regulations:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Information Technology Act, 2000 compliance</li>
                                    <li>IT (Reasonable Security Practices) Rules, 2011</li>
                                    <li>Personal Data Protection Bill readiness</li>
                                    <li>Data localization requirements for defense data</li>
                                    <li>Regular compliance audits and assessments</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Export Controls</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Our products are subject to Indian export control regulations:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>SCOMET (Special Chemicals, Organisms, Materials, Equipment and Technologies) compliance</li>
                                    <li>Directorate General of Foreign Trade (DGFT) authorization</li>
                                    <li>End-user certificate requirements</li>
                                    <li>Technology transfer restrictions</li>
                                    <li>International trade compliance monitoring</li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-card border border-border p-8 mt-12">
                            <h3 className="text-xl font-display font-semibold mb-4">Compliance Inquiries</h3>
                            <p className="text-muted-foreground mb-4">
                                For compliance-related questions or to request compliance documentation:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-muted-foreground">Email:</span> <a href="mailto:compliance@xorianindustries.com" className="text-foreground hover:underline">compliance@xorianindustries.com</a></p>
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

export default Compliance;
