import TierCard from "@/components/TierCard";

const tiers = [
    {
        title: "General Member",
        price: {
            monthly: "$4.99/month",
            yearly: "$100/year"
        },
        benefits: [
            "Jackalope Alert: Text notifications when new local shows drop on our Roku station",
            "Social Media Horn Toss: Your name shared in a fun jackalope-themed thank-you post"
        ]
    },
    {
        title: "Prairie Listener",
        price: {
            monthly: "$14.99/month",
            yearly: "$150/year"
        },
        benefits: [
            "Voting Membership: Vote in annual board elections and influence station priorities",
            "Jackalope Insider Newsletter: Weekly highlights of local shows, citizen journalism tips, and community events",
            "Bumper Sticker to showcase your support",
            "Virtual Studio Tour: Peek behind the curtain at how Laramie247 makes community content",
            "Story Pitch Submission: Suggest topics for community programs"
        ]
    },
    {
        title: "Jackalope Producer",
        price: {
            monthly: "$49.99/month",
            yearly: "$500/year"
        },
        benefits: [
            "All Prairie Listener benefits plus",
            "Studio Time + Gear: Monthly access to Blackmagic Design equipment and our staff to film your show",
            "Swag Pack: T-shirt with Laramie 247 logo and the tagline &quot;Made in Laramie, Streamed Worldwide&quot;",
            "On-Air Shout-Out: Your name or local business featured in the credits of Laramie247 productions",
            "Free Access to all of our Workshops!"
        ]
    },
    {
        title: "Mountain Visionary",
        price: {
            monthly: "$100/month",
            yearly: "$1000/year"
        },
        benefits: [
            "All Jackalope producer benefits plus",
            "Invited to all quarterly round-table on the range meetings",
            "Giving an opportunity to select the next quarter&apos;s programming schedule",
            "Name on Legendary Jackalope Plaque",
            "And a seat at our annual Wyoming style cookout honoring top supporters"
        ]
    }
];

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
                            price={tier.price}
                            benefits={tier.benefits}
                            previousTier={index > 0 ? tiers[index - 1].title : undefined}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
