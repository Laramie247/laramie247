import TierCard from "@/components/TierCard";
import { tiers } from "@/data/membershipTiers";

export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
                        Join the Laramie247 Community
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Support local media and get exclusive benefits with our membership tiers.
                        Choose the level that&apos;s right for you and help keep Laramie&apos;s voice strong.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                        <TierCard
                            key={index}
                            title={tier.title}
                            slug={tier.slug}
                            price={tier.price}
                            benefits={tier.benefits}
                            imageUrl={tier.heroImage}
                            previousTier={index > 0 ? tiers[index - 1].title : undefined}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
