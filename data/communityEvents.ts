export interface Event {
    title: string;
    slug: string;
    description: string;
    detailedDescription: string;
    socials: {
        name: string;
        url: string;
        icon: string;
    }[];
    image: string;
    heroImage: string;
    frequency: string;
}

export const events: Event[] = [
    {
        title: "Charity Roundup",
        slug: "charity-roundup",
        description: "Join us every month for an in-depth look at those who are making a difference in our community.",
        detailedDescription: "The Charity Roundup is our monthly spotlight on the unsung heroes of Laramie. Each episode, we sit down with the founders, volunteers, and beneficiaries of local non-profits to understand their mission, their struggles, and their triumphs. It's more than just an interview; it's a deep dive into the heart of our community's philanthropy. We highlight upcoming fundraisers, volunteer opportunities, and success stories that will restore your faith in humanity.",
        socials: [],
        image: "/images/events/charity-roundup.png",
        heroImage: "/images/events/charity-roundup.png",
        frequency: "Monthly"
    },
    {
        title: "Chuckle Saloon",
        slug: "chuckle-saloon",
        description: "Get ready to guffaw at the best comedy in town. Seasonal special with our own rodeo clown!",
        detailedDescription: "Step into the Chuckle Saloon, where the drinks are cold and the jokes are hot! This seasonal special brings the best local and regional stand-up talent to Laramie. Hosted by our very own resident rodeo clown, Buster, expect a night of raucous laughter, slapstick humor, and maybe a little bit of country charm. It's the perfect way to unwind and let loose. Warning: Side-splitting laughter may occur.",
        socials: [],
        image: "/images/events/chuckle-saloon.png",
        heroImage: "/images/events/chuckle-saloon.png",
        frequency: "Seasonal"
    },
    {
        title: "Equality State News",
        slug: "equality-state-news",
        description: "Listen in to our panel of local minds as they discuss the latest news and issues.",
        detailedDescription: "Equality State News is your premier source for in-depth analysis of Laramie's current events. Our monthly panel features a diverse group of local experts, journalists, and community leaders who dissect the issues utilizing facts, not rhetoric. From city council decisions to statewide legislation, we break down how it affects you. Join the conversation and stay informed about the future of our great state.",
        socials: [],
        image: "/images/events/equality-state-news.png",
        heroImage: "/images/events/equality-state-news.png",
        frequency: "Monthly"
    },
    {
        title: "PVA Laramie Stream",
        slug: "pva-laramie",
        description: "Streaming live every month, The Progressive Voter Alliance connects advocates of a wide range of issues.",
        detailedDescription: "The Progressive Voter Alliance (PVA) Laramie Stream is a digital town square for progressive voices. We provide a platform for advocacy, education, and organization around critical social and political issues. Each stream features guest speakers, legislative updates, and actionable steps you can take to make a difference. Connect with like-minded individuals and help build a more inclusive Laramie.",
        socials: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/PVALaramie/",
                icon: "FaFacebook"
            },
        ],
        image: "/images/events/pva-laramie.png",
        heroImage: "/images/events/pva-laramie.png",
        frequency: "Monthly"
    },
    {
        title: "Town Hall Stream",
        slug: "town-hall-stream",
        description: "Every week, we stream live from our community center. Ask questions and learn about Laramie.",
        detailedDescription: "Our weekly Town Hall Stream brings the community center to your living room. It's an open forum where residents can engage directly with local officials, organizers, and each other. Have a question about a new development project? promoting a local event? This is the place. We believe in transparent communication and active civic engagement. Tune in, speak up, and be part of the solution.",
        socials: [],
        image: "/images/events/town-hall-stream.png",
        heroImage: "/images/events/town-hall-stream.png",
        frequency: "Weekly"
    }
]    