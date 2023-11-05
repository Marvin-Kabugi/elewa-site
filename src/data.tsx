// This File contains data specific to the application.
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

interface LandingInterface {
    imageUrl: string;
    h2Header: string;
    h1Header: string;
}

interface TeamInterface {
    imageUrl: string;
    name: string;
    role: string;
    management: boolean;
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

export const LandingData: Record<string, LandingInterface> = {
    AboutLandingData: {
      imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg",
      h2Header: "HOW TO RECOGNIZE AN ELEWA MEMBER", // corrected property name
      h1Header: "Dependable, Creative, Supportive, Open Minded and Fun*" // corrected property name
    }, 
    InvestorLandingData: {
        imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg',
        h2Header: 'Trade, not aid',
        h1Header: 'Southern innovations addressing global problems'
    },
    SocialLandingData: {
        imageUrl:'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg',
        h2Header: 'Scaling impact. Beyond the norm',
        h1Header: 'Human and Environmental Impact through Social Enterprise',
    }
  };

export const AboutImageCardData: ImageDescription[] = [
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png",
        description1: "We go beyond a simple patch-up but develop lasting solutions through holistic design.",
        heading: "Holistic solutions"
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
        description1: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.",
        heading: "Impact"
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png",
        description1: "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.",
        heading: "Open data"
    },
]

export const TeamData: TeamInterface[] = [
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg",
        name: "Peter Reinartz",
        role: "Executive Chairman",
        management: true,
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg",
        name: "Stephen Mwaura",
        role: " Software Engineer",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg",
        name: " Jente Rosseel",
        role: " Founder, Managing Partner",
        management: true
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg",
        name: " Kennedy Adhola",
        role: " Operations & Partnerships",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg",
        name: " Noella Mwanzia",
        role: " Software Engineer",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg",
        name: " Ian Odhiambo",
        role: " Founder Kujali",
        management: true
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg",
        name: "Jane Njoroge",
        role: "Software Developer",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg",
        name: " Shawn Chiama ",
        role: " Software Engineer ",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_800/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg",
        name: " Joy-Lidah Wawira ",
        role: " Software Engineer ",
        management: false
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg",
        name: " Reagan Charana ",
        role: " Software Engineer ",
        management: false
    }
]

export const AboutCultureData: ImageDescription[] = [
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
        description1: "One for all ,all for one! We have a cooperative and open mindset. If one of us grows, all will follow.",
        heading: "Cooperative"
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png",
        description1: "We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.",
        heading: "Ownership"
    },
    {
        imageUrl: "https://static.thenounproject.com/png/1721983-200.png",
        description1: "We are a \"Centre of Excellence\" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.",
        heading: "Detail"
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
        description1: "We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need",
        heading: "Empathy"
    },
    {
        imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png",
        description1: "Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within.",
        heading: "Transparency"
    },
]

export const Paragraph1: string = "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us."
export const Paragraph2: string = "Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers."

export default KeyFigures