export interface Rental {
    term: string;
    rentalPrice: number;
}

export interface Equipment {
    title: string;
    purchasePrice: number;

}


export interface PurchasePackage {
    title: string;
    slug: string;
    equipment: Equipment[];
}

export interface RentalPackage {
    title: string;
    slug: string;
    rental: Rental[];
    equipment: Equipment[];
}

export const purchasePackages: PurchasePackage[] = [
    {
        title: "Studio in A Box",
        slug: "studio-in-a-box",
        equipment: [
            {
                title: "10U ABS Rack Case",
                purchasePrice: 126.00
            },
            {
                title: "Pyle 19 Outlet 1U power supply (SIAB)",
                purchasePrice: 103.00
            },
            {
                title: "Dsub XLR pigtails",
                purchasePrice: 105.00
            },
            {
                title: "2x Rack Panel 8 D-Series Punch Out",
                purchasePrice: 23.00
            },
            {
                title: "Pyle 8 Channel Wireless Microphone System",
                purchasePrice: 172.49
            },
            {
                title: "ArtNet DMX Interface, 8 Channel",
                purchasePrice: 162.44
            },
            {
                title: "Behringer X Air XR18 Digital Mixer",
                purchasePrice: 459.00
            },
            {
                title: "TP-Link TL-SG1008MP 8 Port PoE Switch",
                purchasePrice: 98.99
            },
            {
                title: "2x 19-inch Rack Mount Brush Panel 1U",
                purchasePrice: 30.00
            },
            {
                title: "4U Vented Rack Panel",
                purchasePrice: 25.00
            },
            {
                title: "Rack Screw Pack 25ct",
                purchasePrice: 8.75
            },
            {
                title: "3x 1U Blank Rack Mount Panels",
                purchasePrice: 11.40
            },
            {
                title: "4x NEUTRIK Powercon Out Grey",
                purchasePrice: 26.00
            },
            {
                title: "NEUTRIK Powercon In Blue",
                purchasePrice: 6.50
            },
            {
                title: "2x 1U Blank Rack Mount Panels",
                purchasePrice: 11.40
            },
            {
                title: "4x NEUTRIK Powercon Out Grey",
                purchasePrice: 26.00
            },
            {
                title: "NEUTRIK Powercon In Blue",
                purchasePrice: 6.50
            },
            {
                title: "Ethercon passthrough",
                purchasePrice: 17.00
            },
            {
                title: "Generic 19in Antenna Relocation Rack Mount Kit",
                purchasePrice: 48.00
            },
        ]
    },
]
