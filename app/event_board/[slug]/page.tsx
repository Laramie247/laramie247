import { events } from "@/data/communityEvents";
import { notFound } from "next/navigation";
import EventDetails from "@/components/EventDetails";

export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.slug,
    }));
}

export default async function EventPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return <EventDetails event={event} />;
}
