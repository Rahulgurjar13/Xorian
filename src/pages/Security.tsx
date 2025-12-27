import { ArrowLeft, Shield, Lock, Server, Key, Eye, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Security = () => {
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
                            <Lock className="w-6 h-6 text-foreground" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold">Security</h1>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        As a defense technology company, security is not just a feature—it's our foundation.
                        Learn about our comprehensive security measures.
                    </p>
                </div>
            </section>

            {/* Security Stats */}
            <section className="py-12 border-y border-border/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '256-bit', label: 'AES Encryption' },
                            { value: '24/7', label: 'Security Monitoring' },
                            { value: 'ISO 27001', label: 'Certified' },
                            { value: '100%', label: 'Indian Servers' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-muted-foreground font-tech tracking-wider">{stat.label}</div>
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
                                <Server className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Infrastructure Security</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Our infrastructure is built with defense-grade security in mind:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All servers located within India for data sovereignty</li>
                                    <li>Redundant power and network connections</li>
                                    <li>Regular backup and disaster recovery protocols</li>
                                    <li>Isolated network segments for sensitive operations</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Key className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Data Encryption</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>We employ multiple layers of encryption to protect your data:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>TLS 1.3 for all data in transit</li>
                                    <li>AES-256 encryption for data at rest</li>
                                    <li>End-to-end encryption for sensitive communications</li>
                                    <li>Hardware Security Modules (HSM) for key management</li>
                                    <li>Regular key rotation and cryptographic audits</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Access Control</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Strict access controls ensure only authorized personnel can access sensitive systems:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Multi-factor authentication (MFA) mandatory for all access</li>
                                    <li>Role-based access control (RBAC)</li>
                                    <li>Principle of least privilege enforcement</li>
                                    <li>Regular access reviews and audits</li>
                                    <li>Biometric authentication for physical access</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-l-2 border-foreground/30 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-5 h-5 text-foreground" />
                                <h2 className="text-2xl font-display font-semibold">Monitoring & Detection</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Continuous monitoring ensures rapid threat detection and response:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>24/7 Security Operations Center (SOC)</li>
                                    <li>Real-time intrusion detection systems</li>
                                    <li>Automated threat intelligence integration</li>
                                    <li>Security Information and Event Management (SIEM)</li>
                                    <li>Regular penetration testing by certified professionals</li>
                                </ul>
                            </div>
                        </div>

                        {/* Report Security Issue */}
                        <div className="bg-card border border-border p-8 mt-12">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="w-5 h-5 text-foreground" />
                                <h3 className="text-xl font-display font-semibold">Report a Security Issue</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                If you discover a security vulnerability, please report it responsibly to our security team:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-muted-foreground">Security Email:</span> <a href="mailto:security@xorianindustries.com" className="text-foreground hover:underline">security@xorianindustries.com</a></p>
                                <p className="text-muted-foreground text-xs mt-4">
                                    We appreciate responsible disclosure and may offer recognition for valid security reports.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Security;
