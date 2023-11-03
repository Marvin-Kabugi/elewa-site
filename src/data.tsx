import { Key } from "react";

interface KeyFigure {
    heading: number | string;
    description: string;
}

interface ImageDescription {
    heading: string;
    description1: string;
    description2?: string;
    imageUrl: string;
}

const KeyFigures: KeyFigure[] = [
    {
        heading: "1.3M",
        description: "Approx. number of Kenyan talents reaching the age of 18 in 2022"
    },
    {
        heading: "5M",
        description: "number of East-Africans(EAC) reaching the age of 18 in 2022"
    },
    {
        heading: 2022,
        description: "Democratic Republic of Congo joins the East African Community"
    },
    {
        heading: "1.5M",
        description: "The number of unfilled IT vacancies in the US and EU markets"
    },
    {
        heading: "10M",
        description: "Number of technical vacancies by 2030"
    },
    {
        heading: 2050,
        description: "Africa holds the worlds largest workforce"
    },
    {
        heading: "$4.6M",
        description: "Startup funding raised by African startups in 2022"
    },
    {
        heading: "310%",
        description: "Increase in startup funding for companies with HQ in Kenya"
    }
]

export const ImageDescriptionsInvestor: ImageDescription[] = [
    {
        heading: "Elewa NV, a multi-stakeholder cooperation",
        description1: "At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.",
        description2: "Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
    },
    {
        heading: "The Elewa Creative Hub",
        description1: "Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.",
        description2: "Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
    },
    {
        heading: "Investing in Elewa NV",
        description1: "From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
    }

]

export default KeyFigures