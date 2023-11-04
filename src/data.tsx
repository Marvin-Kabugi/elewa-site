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

interface SocialImpactInterface {
    heading: string;
    description: string;
    description2?: string;
    description3?: string;
    imageUrl: string;
    cssClass?: string;
}
export interface ProjectListInterface {
    imageUrl: string
}

export interface MetricsInterface {
    metric: string;
    description: string;
}

export interface LinkDescription {
    name: string;
    link: string;
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

export const SocialImpact: SocialImpactInterface[] = [
    {
        heading: '(Social) business for the win',
        description: "With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg",
        cssClass: "bg-black"
    },
    {
        heading: "A cooperative mindset",
        description: "Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg",
        cssClass: "bg-grey"
    },
    {
        heading: "Beyond business",
        description: "We channel a good amount of our resources into giving back.",
        description2: "Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers",
        description3: "These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png",
        cssClass: "bg-none"
    },
    {
        heading: "Open knowledge",
        description: "What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships.",
        description2: "We build for today, with a lens on tomorrow.",
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png",
        cssClass: "bg-black"
    }
]

export const metricsData: MetricsInterface[] = [
    {
        metric: '733+',
        description: 'People trained'
    },
    {
        metric: '733k',
        description: 'careers launched'
    },
    {
        metric: '200+',
        description: 'Projects finished'
    },
    {
        metric: '56',
        description: 'Investors'
    }
]

export const appLinks: LinkDescription[] = [
    {name: 'Home', link: "#"},
    {name: 'About Us', link: "/about"},
    {name: 'Social Impact', link: '/social-impact'},
    {name: 'Invest', link: "/"},
    {name: 'Venture Labs', link: "#"},
    {name: 'Brands', link: "#"},
    {name: 'Careers', link: "#"},
    {name: 'Contact', link: "#"},
]

export const ProjectListData: ProjectListInterface[] = [
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/hoplit-logo_nsryy7.webp"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png"},
    {imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/adc-logo_dgxpul.jpg"},
]

export default KeyFigures