// Default website content. The admin dashboard stores overrides in the
// `site_content` table; anything missing falls back to these values.

import studentsSmiling from '@/assets/hero/students-smiling.jpg';
import sewingTraining from '@/assets/hero/sewing-training.jpg';
import cookingClass from '@/assets/hero/cooking-class.jpg';
import tailoringWorkshop from '@/assets/hero/tailoring-workshop.jpg';
import outdoorActivity from '@/assets/hero/outdoor-activity.jpg';
import youthTraining from '@/assets/hero/youth-training.jpg';
import studentsGathering from '@/assets/hero/students-gathering.jpg';

import founderImage from '@/assets/founder-lucy.jpg';
import melindaImage from '@/assets/team/melinder-siner.jpg';
import lilyImage from '@/assets/team/lily-saki.jpg';
import founderPresidentImage from '@/assets/team/founder-president.jpg';
import revAlfredImage from '@/assets/team/rev-alfred-arthur.jpg';

import educationImage from '@/assets/education-support.jpg';
import womenImage from '@/assets/women-empowerment.jpg';
import healthcareImage from '@/assets/healthcare.jpg';
import agricultureImage from '@/assets/agriculture.jpg';
import vocationalImage from '@/assets/vocational-training.jpg';
import mentalHealthImage from '@/assets/mental-health.jpg';
import caregiverImage from '@/assets/caregiver-training.jpg';

import awardRecipientAlone from '@/assets/gallery/awards/award-recipient-alone.jpg';
import awardRecipientWithFriends from '@/assets/gallery/awards/award-recipient-with-friends.jpg';

import graceMovementLogo from '@/assets/partners/grace-movement-logo.jpg';
import interfaithTourismLogo from '@/assets/partners/interfaith-tourism-logo.jpg';

export type HeroSlide = { image: string; caption: string; alt: string };
export type HeroContent = {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  slides: HeroSlide[];
};

export type FounderContent = {
  badge: string;
  name: string;
  image: string;
  badgeLabel: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
};

export type TeamMember = {
  name: string;
  role: string;
  badge: string;
  image: string;
  bio: string[];
};
export type TeamContent = {
  badge: string;
  heading: string;
  intro: string;
  members: TeamMember[];
};

export type AboutContent = {
  badge: string;
  heading: string;
  intro: string;
  cards: { icon: string; title: string; text: string }[];
};

export type AwardsContent = {
  badge: string;
  heading: string;
  intro: string;
  logo: string;
  eligibility: string[];
  nominateText: string;
  partnersNote: string;
  recipientsHeading: string;
  photos: { image: string; alt: string; label: string }[];
  featured: { name: string; description: string; certificateUrl: string };
};

export type ProgramsContent = {
  badge: string;
  heading: string;
  intro: string;
  items: { icon: string; title: string; description: string; image: string; color: string }[];
};

export type GalleryContent = {
  badge: string;
  heading: string;
  subheading: string;
  intro: string;
  images: { image: string; alt: string; caption: string }[];
};

export type ImpactContent = {
  badge: string;
  heading: string;
  intro: string;
  stats: { value: number; suffix: string; label: string }[];
  note: string;
};

export type PartnersContent = {
  label: string;
  heading: string;
  intro: string;
  items: { name: string; logo: string }[];
};

export type ContactContent = {
  badge: string;
  heading: string;
  intro: string;
  connectHeading: string;
  connectText: string;
  locations: string[];
  email: string;
  phone: string;
  phoneHref: string;
};

export type DonationContent = {
  title: string;
  description: string;
  cashAppTag: string;
  cashAppUrl: string;
  zelleEmail: string;
  bankName: string;
  bankAccount: string;
  checkPayee: string;
  footnote: string;
};

export type FooterContent = {
  about: string;
  registration: string;
  usLocationLabel: string;
  usLocationLines: string[];
  programs: string[];
  socials: { facebook: string; instagram: string; twitter: string; youtube: string };
};

export type SiteContent = {
  hero: HeroContent;
  founder: FounderContent;
  team: TeamContent;
  about: AboutContent;
  awards: AwardsContent;
  programs: ProgramsContent;
  gallery: GalleryContent;
  impact: ImpactContent;
  partners: PartnersContent;
  contact: ContactContent;
  donation: DonationContent;
  footer: FooterContent;
};

export const defaultContent: SiteContent = {
  hero: {
    badge: 'Since 2020 • Empowering Communities in Ghana',
    title: 'Wawa Seed Africa Foundation',
    titleHighlight: '(WASAF)',
    subtitle:
      'Empowering parents and caregivers to raise successful children through education, healthcare, and community development.',
    primaryCta: 'Support Our Cause',
    secondaryCta: 'Learn More',
    slides: [
      { image: studentsSmiling, caption: 'Education for Every Child', alt: 'Happy students in school uniforms' },
      { image: sewingTraining, caption: 'Skills Training & Empowerment', alt: 'Young girl learning sewing skills' },
      { image: tailoringWorkshop, caption: 'Vocational Training Programs', alt: 'Women in tailoring workshop' },
      { image: cookingClass, caption: 'Building Brighter Futures', alt: 'Youth in cooking training class' },
      { image: outdoorActivity, caption: 'Community Development', alt: 'Children in outdoor activities with instructor' },
      { image: youthTraining, caption: 'Empowering Young Women', alt: 'Youth in training program' },
      { image: studentsGathering, caption: 'Transforming Lives Together', alt: 'Students gathering for community event' },
    ],
  },

  founder: {
    badge: 'Meet Our Founder',
    name: 'Lucy Asantewaa Saki',
    image: founderImage,
    badgeLabel: 'Founder\n& CEO',
    paragraphs: [
      'Driven by a deep passion for community empowerment, Lucy Asantewaa Saki founded Wawa Seed Africa Foundation in 2020 during the challenging times of the COVID-19 pandemic. Her vision was to create lasting change for vulnerable children, women, and families across Ghana through education, healthcare, and sustainable development programs.',
      'Under her leadership, K A AMISSAH Foundation, now WASAF has grown to impact thousands of lives, providing educational support, vocational training, healthcare services, and community development initiatives that transform communities from within.',
    ],
    stats: [
      { value: '2020', label: 'Founded' },
      { value: '500+', label: 'Lives Impacted' },
      { value: '7+', label: 'Programs' },
    ],
  },

  team: {
    badge: 'Our Team',
    heading: 'Meet the People Behind Our Mission',
    intro: 'Dedicated leaders and volunteers working together to transform lives across Ghana and beyond.',
    members: [
      {
        name: 'Lucy Asantewaa Saki',
        role: 'President',
        badge: 'President',
        image: founderPresidentImage,
        bio: [
          'Driven by a deep passion for community empowerment, Lucy Asantewaa Saki founded Wawa Seed Africa Foundation in 2020 during the challenging times of the COVID-19 pandemic. Her vision was to create lasting change for vulnerable children, women, and families across Ghana through education, healthcare, and sustainable development programs.',
          'Under her leadership, K A AMISSAH Foundation, now WASAF has grown to impact thousands of lives, providing educational support, vocational training, healthcare services, and community development initiatives that transform communities from within.',
        ],
      },
      {
        name: 'Melinda Siner',
        role: 'Ordained Minister, Nurse & Board Member',
        badge: 'Board\nMember',
        image: melindaImage,
        bio: [
          'Melinda Siner is an ordained minister, nurse, and former business owner dedicated to faith and service. Raised in Virginia, she ran a landscaping business for 23 years, homeschooled her daughter, and later worked as a Labor and Delivery nurse.',
          "Deeply involved in women's ministry since 2016, Melinda expanded her global outreach in 2024 through the Wawa Seed Africa Foundation. She was officially ordained by the National Association of Christian Ministers in April 2026 and continues to dedicate her life to sharing the Gospel and serving communities.",
        ],
      },
      {
        name: 'Lucy Baiden',
        role: 'Board Member & Clerk',
        badge: 'Clerk',
        image: '/assets/team/lucy-baiden.jpg',
        bio: [
          'Lucy Baiden is a Financial Educator specializing in Insurance and Retirement Planning. She has a passion to see children grow and thrive unhindered wherever they find themselves and strongly believes that children are the future.',
          'Baking, cooking and crochet are some of her hobbies.',
        ],
      },
      {
        name: 'Lily Saki',
        role: 'Program Director',
        badge: 'Program\nDirector',
        image: lilyImage,
        bio: [
          'Lily Saki is an architect with a Master of Architecture from the Harvard Graduate School of Design and a Bachelor of Science in Architecture from Wentworth Institute of Technology. Her interests center on sustainable design, climate resilience, and creating meaningful impact through the built environment.',
          'She currently serves as Program Director at Wawa Seed Africa Foundation, where she leads programs focused on education, community development, and youth empowerment across Africa.',
        ],
      },
      {
        name: 'Rev Alfred Arthur',
        role: 'Secretary',
        badge: 'Secretary',
        image: revAlfredImage,
        bio: [
          'Rev. Alfred Arthur holds a Bachelor’s degree in Real Estate and a Master’s degree in Information Technology Management. A pastor and community leader with experience in Ghana and the United States, he brings expertise in leadership, organizational development, and community engagement.',
          'He is passionate about strengthening institutions, building strategic partnerships, and advancing initiatives that create meaningful and lasting impact. His diverse background enables him to provide balanced, innovative, and mission-focused leadership in board service.',
        ],
      },
      {
        name: 'Albert Paitoo',
        role: 'Accountant',
        badge: 'Accountant',
        image: '/assets/albert-paitoo.jpg',
        bio: [
          'Albert Paitoo is an Accountant with over 12 years of experience in multi-state and global payroll administration across the US, UK, Canada, Singapore, Australia, and France. He holds a Workday Pro Administrator certification and is currently pursuing a Master of Divinity at Moody Bible Institute.',
          'Alongside his career in payroll, Albert serves as a Deacon and Bible teacher, leading the ministry "The Lord\'s Feet". He is the author of Made for This and Understanding God\'s Sovereignty and Human Freedom. Albert lives with his wife, Isabella, and their two sons, Ian and Ephraim.',
        ],
      },
    ],
  },

  about: {
    badge: 'Our Story',
    heading: 'About Wawa Seed Africa Foundation',
    intro:
      'Established in 2020 during the COVID-19 pandemic, WASAF was created to provide hope and support to communities struggling with poverty, limited access to education, healthcare challenges, and livelihood insecurity.',
    cards: [
      {
        icon: 'Heart',
        title: 'Our Mission',
        text: 'To empower vulnerable children, women, and families through education, healthcare, and sustainable livelihood programs that transform communities.',
      },
      {
        icon: 'Sparkles',
        title: 'Our Vision',
        text: 'A thriving Africa where every child has access to quality education, every woman is economically empowered, and every family lives with dignity.',
      },
      {
        icon: 'Users',
        title: 'Our Values',
        text: 'Compassion, integrity, sustainability, and community partnership guide everything we do as we work to create lasting positive change.',
      },
    ],
  },

  awards: {
    badge: 'ISAAC SAKI AWARDS',
    heading: 'Isaac Saki Awards',
    intro:
      'The Isaac Saki Award recognizes children who face financial or emotional hardships but demonstrate outstanding academic performance. The award celebrates resilience, commitment to learning, and the potential of young people to overcome adversity.',
    logo: '/assets/isaac-saki-award-logo.jpg',
    eligibility: [
      'Students demonstrating outstanding school performance',
      'Children experiencing significant financial hardship',
      'Children facing emotional or psychosocial challenges',
    ],
    nominateText:
      'Nominate a student by sending their name, school, a short description of their circumstances, and any supporting documents to our team. Our panel reviews nominations and selects recipients based on impact and need.',
    partnersNote:
      'Our partners, including The Grace Movement USA and ADEA, help us identify and support awardees through program partnerships and capacity building.',
    recipientsHeading: 'Award Recipients',
    photos: [
      {
        image: '/assets/awards/img-20260708-wa0001.jpg',
        alt: 'Alaza Zakaria proudly holding his Isaac Saki Award certificate',
        label: 'THE AWARD RECIPIENT (Zakaria Alaza)',
      },
      {
        image: '/assets/awards/img-20260708-wa0004.jpg',
        alt: 'Students celebrating with the Isaac Saki Award recipient',
        label: 'Award recipient and friends',
      },
      {
        image: '/assets/awards/award-winner-family.jpg',
        alt: 'The award winner and his family standing together',
        label: 'The award winner and his family',
      },
    ],
    featured: {
      name: 'Zakaria Alaza — 2026 Isaac Saki Award Recipient',
      description:
        'Recognized for academic excellence, leadership, and helping secure a water project for Nyangbande Wawa Seed Academy.',
      certificateUrl: '/assets/zakaria-alaza-isaac-saki-award.pdf',
    },
  },

  programs: {
    badge: 'What We Do',
    heading: 'Our Programs',
    intro:
      'We operate in both Northern and Southern Ghana, reaching underserved rural communities through comprehensive programs designed for sustainable impact.',
    items: [
      {
        icon: 'GraduationCap',
        title: 'Basic Education Support',
        description:
          'Providing school supplies, uniforms, and tuition support to ensure every child can access quality education.',
        image: educationImage,
        color: 'primary',
      },
      {
        icon: 'HeartHandshake',
        title: 'Women Empowerment',
        description:
          'Economic empowerment programs including vocational training, microfinance, and business skills development.',
        image: womenImage,
        color: 'secondary',
      },
      {
        icon: 'Stethoscope',
        title: 'Healthcare Support',
        description:
          'Access to essential healthcare services, health education, and medical outreach in underserved communities.',
        image: healthcareImage,
        color: 'earth',
      },
      {
        icon: 'Wheat',
        title: 'Agriculture Support',
        description:
          'Supporting sustainable farming practices and food security through agricultural training and resources for rural communities.',
        image: agricultureImage,
        color: 'primary',
      },
      {
        icon: 'Wrench',
        title: 'Vocational Training',
        description:
          'Apprenticeship programs and skills training to help youth and adults build sustainable livelihoods.',
        image: vocationalImage,
        color: 'secondary',
      },
      {
        icon: 'Brain',
        title: 'Mental Health & Counseling',
        description:
          'Mental health support, drug abuse counseling, and psychosocial services for individuals and families.',
        image: mentalHealthImage,
        color: 'earth',
      },
      {
        icon: 'Users',
        title: 'Caregiver Training',
        description:
          'Equipping caregivers and community leaders with skills to nurture children into responsible individuals.',
        image: caregiverImage,
        color: 'primary',
      },
    ],
  },

  gallery: {
    badge: 'Our Impact',
    heading: 'Award Recipients',
    subheading: 'Gallery',
    intro: 'Highlights of our award recipients and their recognition moments.',
    images: [
      {
        image: awardRecipientAlone,
        alt: 'Zakaria Alaza standing alone as the award recipient',
        caption: 'Zakaria Alaza (The award recipient)',
      },
      {
        image: awardRecipientWithFriends,
        alt: 'Zakaria Alaza standing with friends as the award recipient',
        caption: 'The award recipient and his friends',
      },
    ],
  },

  impact: {
    badge: 'Our Reach',
    heading: 'Creating Lasting Impact',
    intro:
      'Since 2020, we have grown as a trusted community-based organization, committed to transforming lives across Ghana.',
    stats: [
      { value: 500, suffix: '+', label: 'Children Supported' },
      { value: 200, suffix: '+', label: 'Women Empowered' },
      { value: 15, suffix: '', label: 'Communities Reached' },
      { value: 6, suffix: '', label: 'Years of Impact' },
    ],
    note: 'Our collaboration with The Grace Movement USA has helped strengthen and scale our programs, extending our reach to more communities in need.',
  },

  partners: {
    label: 'Our Partners',
    heading: 'Working Together for Change',
    intro:
      'Our collaboration with The Grace Movement USA has helped strengthen and scale our programs, extending our reach to more communities in need. ADEA has helped us build our capacity in training and peer training support.',
    items: [
      { name: 'The Grace Movement USA', logo: graceMovementLogo },
      { name: 'ADEA', logo: '' },
      { name: 'Interfaith Tourism', logo: interfaithTourismLogo },
      { name: 'Image Ghana', logo: '' },
    ],
  },

  contact: {
    badge: 'Get In Touch',
    heading: 'Contact Us',
    intro: "Have questions or want to partner with us? We'd love to hear from you.",
    connectHeading: "Let's Connect",
    connectText:
      "Whether you want to volunteer, donate, or simply learn more about our work, we're here to answer your questions and welcome your support.",
    locations: ['Ghana: Lungni Jakpado', 'US: 56 Burnett St. Unit 2, Boston MA 02130'],
    email: 'lucysaki99@gmail.com',
    phone: '857-413-0329',
    phoneHref: '+18574130329',
  },

  donation: {
    title: 'Make a Donation',
    description: 'Choose your preferred payment method to support our mission.',
    cashAppTag: '$KAAF19',
    cashAppUrl: 'https://cash.app/$KAAF19',
    zelleEmail: 'lucysaki99@gmail.com',
    bankName: 'Universal Merchant Bank',
    bankAccount: '0292922566012',
    checkPayee: 'K A Amissah Foundation, Inc.',
    footnote: "Thank you for supporting WASAF's mission to empower communities in Ghana.",
  },

  footer: {
    about:
      'Wawa Seed Africa Foundation (WASAF) is a community-based organization committed to nurturing dreams and empowering Africa through sustainable development and compassionate service.',
    registration: 'Registered NGO in Ghana since 2020',
    usLocationLabel: 'US Location:',
    usLocationLines: ['56 Burnett St. Unit 2', 'Boston, MA 02130'],
    programs: ['Education Support', 'Women Empowerment', 'Healthcare', 'Vocational Training'],
    socials: {
      facebook: 'https://facebook.com/WASAFGhana',
      instagram: 'https://instagram.com/WASAFGhana',
      twitter: 'https://twitter.com/WASAFGhana',
      youtube: 'https://youtube.com/@WASAFGhana',
    },
  },
};

export type SectionKey = keyof SiteContent;
