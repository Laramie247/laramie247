import { tiers } from "@/data/membershipTiers";
import { notFound } from "next/navigation";
import TierDetails from "@/components/TierDetails";

export async function generateStaticParams() {
    return tiers.map((tier) => ({
        slug: tier.slug,
    }));
}

export default async function TierPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const tier = tiers.find((t) => t.slug === slug);

    if (!tier) {
        notFound();
    }

    return <TierDetails tier={tier} />;
}
