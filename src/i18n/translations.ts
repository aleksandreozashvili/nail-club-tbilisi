export type Language = 'KA' | 'EN' | 'RU';

export interface TranslationDictionary {
  nav: {
    services: string;
    about: string;
    howItWorks: string;
    portfolio: string;
    reviews: string;
    faq: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaBook: string;
    ctaCall: string;
    ctaWhatsApp: string;
    locationNote: string;
  };
  stats: {
    happyClients: string;
    happyClientsDesc: string;
    experience: string;
    experienceDesc: string;
    masters: string;
    mastersDesc: string;
    satisfaction: string;
    satisfactionDesc: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    bookService: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      price: string;
      duration: string;
      features: string[];
    }>;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  portfolio: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterNails: string;
    filterLaser: string;
    filterBrows: string;
    filterMakeup: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      service: string;
      comment: string;
      rating: number;
      date: string;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    infoTitle: string;
    addressLabel: string;
    addressValue: string;
    phoneInfoLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  whatsappMsg: {
    newBooking: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
    pressSend: string;
  };
  footer: {
    description: string;
    rights: string;
    quickLinks: string;
    contactInfo: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  floating: {
    whatsapp: string;
    call: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  KA: {
    nav: {
      services: 'სერვისები',
      about: 'ჩვენს შესახებ',
      howItWorks: 'პროცედურა',
      portfolio: 'ნამუშევრები',
      reviews: 'შეფასებები',
      faq: 'ხშირად დასმული კითხვები',
      contact: 'კონტაქტი',
      bookNow: 'ვიზიტის დაჯავშნა',
    },
    hero: {
      badge: '✨ პრემიუმ ესთეტიკის კლუბი თბილისში',
      headline: 'სრულყოფილება ყველა დეტალში',
      subheadline: 'აღმოაჩინეთ უმაღლესი სტანდარტის სილამაზის მოვლა. ნეილ არტი, უმტკივნეულო ლაზერული ეპილაცია, წარბების ლამინირება და პროფესიონალური მაკიაჟი — შექმნილი თქვენი უნიკალური სტილისთვის.',
      ctaBook: 'ონლაინ დაჯავშნა',
      ctaCall: 'დარეკვა ახლავე',
      ctaWhatsApp: 'WhatsApp ჩატი',
      locationNote: '📍 ა. ყაზბეგის გამზირი 47, თბილისი',
    },
    stats: {
      happyClients: '10,000+',
      happyClientsDesc: 'კმაყოფილი მომხმარებელი',
      experience: '7+ წელი',
      experienceDesc: 'უმაღლესი გამოცდილება',
      masters: '15+',
      mastersDesc: 'სერტიფიცირებული ოსტატი',
      satisfaction: '99.8%',
      satisfactionDesc: 'დადებითი შეფასება',
    },
    benefits: {
      title: 'რატომ ვირჩევთ ჩვენ',
      subtitle: 'ჩვენი მთავარი პრიორიტეტი თქვენი უსაფრთხოება, კომფორტი და უნაკლო შედეგია',
      items: [
        {
          title: '100% სტერილიზაცია',
          description: 'სამ-ეტაპიანი სამედიცინო სტერილიზაცია ავტოკლავში და ინდივიდუალური ერთჯერადი ნაკრებები ყოველი ვიზიტისას.',
        },
        {
          title: 'პრემიუმ ბრენდები',
          description: 'მუშაობა მხოლოდ ევროპული და ამერიკული ჰიპოალერგიული მასალებით (Luxio, Kodi, Soprano Titanium).',
        },
        {
          title: 'VIP კომფორტი',
          description: 'მყუდრო ინტერიერი, უფასო არომატული ყავა, Prosecco და დასასვენებელი ატმოსფერო პროცედურის დროს.',
        },
        {
          title: 'გარანტირებული ხარისხი',
          description: 'ჩვენ ვაძლევთ ხარისხის გარანტიას ყველა შესრულებულ სამუშაოზე — თქვენი სრული კმაყოფილებისთვის.',
        },
      ],
    },
    services: {
      title: 'ჩვენი სერვისები',
      subtitle: 'შეარჩიეთ სასურველი პროცედურა და მიიღეთ უმაღლესი კლასის მომსახურება',
      bookService: 'ამ სერვისის დაჯავშნა',
      items: [
        {
          id: 'nails',
          title: 'ფრჩხილის ესთეტიკა (Nails)',
          description: 'კლასიკური და აპარატული მანიკური, გელ-ლაქი, ფრჩხილის დაგრძელება და ექსკლუზიური ნეილ-არტი.',
          price: '40 ₾-დან',
          duration: '60 - 90 წთ',
          features: ['აპარატული დამუშავება', 'Luxio-ს გელ-ლაქი', 'კუტიკულის ზეთი და მასაჟი', 'ხარისხის გარანტია'],
        },
        {
          id: 'laser',
          title: 'ლაზერული ეპილაცია (Laser)',
          description: 'სრულიად უმტკივნეულო ეპილაცია ბოლო თაობის სამსხივიანი დიოდური აპარატით ყველა ტიპის კანისთვის.',
          price: '30 ₾-დან',
          duration: '15 - 60 წთ',
          features: ['ყინულოვანი გაგრილება', 'ეფექტური პირველივე სეანსზე', 'უსაფრთხო გარუჯულ კანზე', 'სწრაფი პროცედურა'],
        },
        {
          id: 'eyebrows',
          title: 'წარბები და წამწამები (Eyebrows)',
          description: 'წარბების არქიტექტურა, კორექცია, შეღებვა ჰენით ან საღებავით და ლამინირება.',
          price: '35 ₾-დან',
          duration: '30 - 45 წთ',
          features: ['სახის ფორმაზე მორგება', 'ხანგრძლივი ეფექტი (4-6 კვირა)', 'ნატურალური კომპონენტები', 'ვიზუალური ლიფტინგი'],
        },
        {
          id: 'makeup',
          title: 'პროფესიონალური მაკიაჟი (Make Up)',
          description: 'დღის, საღამოს, საქორწილო და ფოტოსესიის მაკიაჟი პრემიუმ კოსმეტიკით (Dior, MAC, Chanel).',
          price: '80 ₾-დან',
          duration: '60 - 75 წთ',
          features: ['24-საათიანი მდგრადობა', 'ინდივიდუალური ფერების შერჩევა', 'კანის წინასწარი დატენიანება', 'წამწამების დაწებება'],
        },
      ],
    },
    whyChooseUs: {
      title: 'ჩვენი უპირატესობები',
      subtitle: 'რატომ გვანდობს თბილისის ათასობით ქალბატონი საკუთარ სილამაზეს',
      items: [
        {
          title: 'სტანდარტების უმაღლესი დონე',
          description: 'ჩვენი ოსტატები მუდმივად გადიან კვალიფიკაციის ამაღლებას საერთაშორისო მასტერკლასებზე.',
        },
        {
          title: 'იდეალური ლოკაცია',
          description: 'ვقعდებით ქალაქის ცენტრში — საბურთალოზე, ა. ყაზბეგის 47-ში, მოსახერხებელი პარკინგით.',
        },
        {
          title: 'დროის დაზოგვა',
          description: 'შესაძლებელია პარალელური პროცედურების ჩატარება (მაგ: მანიკური + პედიკური + წარბი 4 ხელით).',
        },
      ],
    },
    howItWorks: {
      title: 'როგორ მუშაობს დაჯავშნა',
      subtitle: 'მარტივი 3-ეტაპიანი პროცესი ვიზიტის დასაგეგმად',
      steps: [
        {
          number: '01',
          title: 'სერვისის შერჩევა',
          description: 'გაეცანით ჩვენს მომსახურებებს და შეარჩიეთ თქვენთვის სასურველი პროცედურა.',
        },
        {
          number: '02',
          title: 'ფორმის შევსება',
          description: 'შეიყვანეთ თქვენი სახელი, ტელეფონი და სასურველი დრო საიტზე მოცემულ ფორმაში.',
        },
        {
          number: '03',
          title: 'დასტურის მიღება',
          description: 'დააჭირეთ გაგზავნას და ჩვენი ადმინისტრატორი WhatsApp-ში ან ტელეფონით მყისიერად დაგიდასტურებთ ვიზიტს.',
        },
      ],
    },
    portfolio: {
      title: 'ჩვენი ნამუშევრები',
      subtitle: 'გაეცანით ჩვენი ოსტატების მიერ შესრულებულ რეალურ შედეგებს',
      filterAll: 'ყველა',
      filterNails: 'ფრჩხილები',
      filterLaser: 'ლაზერი',
      filterBrows: 'წარბები',
      filterMakeup: 'მაკიაჟი',
    },
    testimonials: {
      title: 'მომხმარებელთა შეფასებები',
      subtitle: 'რას ამბობენ ჩვენი ერთგული სტუმრები Nail Club-ზე',
      items: [
        {
          name: 'ნინო ბერიძე',
          service: 'გელ-ლაქი და დიზაინი',
          comment: 'საუკეთესო სალონია თბილისში! სტერილიზაცია უმაღლეს დონეზეა. მანიკური 4 კვირაზე მეტხანს ძლებს უნაკლოდ. ყავა და გარემო კი ცალკე სიამოვნებაა!',
          rating: 5,
          date: '2 დღის წინ',
        },
        {
          name: 'სოფო კვარაცხელია',
          service: 'ლაზერული ეპილაცია',
          comment: 'ძალიან მეშინოდა ტკივილის, მაგრამ აპარატი მართლაც სასწაულია, საერთოდ ვერაფერი ვიგრძენი! შედეგი პირველივე სეანსის შემდეგ თვალსაჩინო იყო.',
          rating: 5,
          date: '1 კვირის წინ',
        },
        {
          name: 'ელენე მაჭავარიანი',
          service: 'წარბების ლამინირება & მაკიაჟი',
          comment: 'ჩემი ქორწილისთვის გავიკეთე მაკიაჟი და წარბები. მთელი დღე იდეალურად გაძლო! უღრმესი მადლობა გოგოებს ასეთი სითბოსთვის და პროფესიონალიზმისთვის.',
          rating: 5,
          date: '2 კვირის წინ',
        },
      ],
    },
    faq: {
      title: 'ხშირად დასმული კითხვები',
      subtitle: 'მიიღეთ პასუხები თქვენთვის საინტერესო კითხვებზე',
      items: [
        {
          question: 'როგორ ხდება ინსტრუმენტების სტერილიზაცია?',
          answer: 'ჩვენი ინსტრუმენტები გადის სამედიცინო სტანდარტის სრულ ციკლს: დეზინფექცია სპეციალურ ხსნარში, ულტრაბგერითი წმენდა და სტერილური ავტოკლავირება მაღალ ტემპერატურაზე. კრაფტ-პაკეტი იხსნება უშუალოდ თქვენს თვალწინ.',
        },
        {
          question: 'რამდენ ხანს გრძელდება გელ-ლაქის ეფექტი?',
          answer: 'ჩვენი პრემიუმ ბრენდების (Luxio, Kodi) გამოყენებით, გელ-ლაქი ინარჩუნებს იდეალურ ბზინვარებას და მთლიანობას 3-დან 5 კვირამდე, ფრჩხილის დაზიანების გარეშე.',
        },
        {
          question: 'არის თუ არა ლაზერული ეპილაცია უსაფრთხო ზაფხულში?',
          answer: 'დიახ! ჩვენი ახალი თაობის სამსხივიანი დიოდური ლაზერი აღჭურვილია ინოვაციური გაგრილების სისტემით და აბსოლუტურად უსაფრთხოა გარუჯულ კანზეც კი.',
        },
        {
          question: 'შესაძლებელია თუ არა წინასწარ ვიზიტის გაუქმება ან გადატანა?',
          answer: 'რა თქმა უნდა. გთხოვთ შეგვატყობინოთ ვიზიტამდე მინიმუმ 3-4 საათით ადრე ტელეფონით ან WhatsApp-ით, რათა შევძლოთ დროის სხვა მომხმარებლისთვის დათმობა.',
        },
      ],
    },
    contact: {
      title: 'დაჯავშნეთ ვიზიტი',
      subtitle: 'შევხვდეთ Nail Club-ში! შეავსეთ ფორმა და ჩვენი ადმინისტრატორი დაგიკავშირდებათ მყისიერად',
      formTitle: 'ონლაინ ჩაწერა',
      formSubtitle: 'ინფორმაციის გაგზავნის შემდეგ გაიხსნება მზა WhatsApp ჩატი',
      nameLabel: 'თქვენი სახელი და გვარი *',
      namePlaceholder: 'მაგ: ანა გელაშვილი',
      phoneLabel: 'ტელეფონის ნომერი *',
      phonePlaceholder: 'მაგ: 599 12 34 56',
      emailLabel: 'ელ. ფოსტა (არასავალდებულო)',
      emailPlaceholder: 'example@mail.com',
      serviceLabel: 'აირჩიეთ სერვისი *',
      servicePlaceholder: 'აირჩიეთ პროცედურა',
      messageLabel: 'დამატებითი სურვილი ან სასურველი დრო',
      messagePlaceholder: 'მაგ: შაბათს 15:00 საათის შემდეგ...',
      submitBtn: 'WhatsApp-ით დაჯავშნა ✨',
      submitting: 'მზადდება ჩატი...',
      infoTitle: 'საკონტაქტო ინფორმაცია',
      addressLabel: 'მისამართი',
      addressValue: 'ა. ყაზბეგის გამზირი 47, თბილისი, საქართველო',
      phoneInfoLabel: 'ტელეფონი / WhatsApp',
      hoursLabel: 'სამუშაო საათები',
      hoursValue: 'ყოველდღე: 10:00 — 21:00',
    },
    whatsappMsg: {
      newBooking: '🌟 ახალი ჯავშანი საიტიდან (Nail Club Tbilisi)',
      name: '👤 სახელი:',
      phone: '📞 ტელეფონი:',
      email: '📧 ელ. ფოსტა:',
      service: '💅 სერვისი:',
      message: '💬 კომენტარი / დრო:',
      pressSend: '👉 დააჭირეთ გაგზავნას (Press Send) ჯავშნის დასადასტურებლად!',
    },
    footer: {
      description: 'Nail Club Tbilisi — პრემიუმ ესთეტიკის ცენტრი, სადაც სილამაზე, უსაფრთხოება და უმაღლესი კომფორტი ერთიანდება.',
      rights: 'ყველა უფლება დაცულია.',
      quickLinks: 'სწრაფი ბმულები',
      contactInfo: 'კონტაქტი',
      privacyPolicy: 'კონფიდენციალურობის პოლიტიკა',
      termsOfService: 'მომსახურების წესები',
    },
    floating: {
      whatsapp: 'მოგვწერეთ WhatsApp-ში',
      call: 'დარეკვა',
    },
  },
  EN: {
    nav: {
      services: 'Services',
      about: 'About Us',
      howItWorks: 'How It Works',
      portfolio: 'Portfolio',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Book Appointment',
    },
    hero: {
      badge: '✨ Premium Aesthetic Club in Tbilisi',
      headline: 'Perfection in Every Detail',
      subheadline: 'Experience luxury beauty care of the highest standard. Flawless nail art, painless laser hair removal, brow styling, and professional makeup — crafted for your unique elegance.',
      ctaBook: 'Book Online Now',
      ctaCall: 'Call Now',
      ctaWhatsApp: 'WhatsApp Chat',
      locationNote: '📍 47 Kazbegi Avenue, Saburtalo, Tbilisi',
    },
    stats: {
      happyClients: '10,000+',
      happyClientsDesc: 'Satisfied Clients',
      experience: '7+ Years',
      experienceDesc: 'Excellence & Trust',
      masters: '15+',
      mastersDesc: 'Certified Top Masters',
      satisfaction: '99.8%',
      satisfactionDesc: 'Positive Feedback',
    },
    benefits: {
      title: 'Why Choose Us',
      subtitle: 'Your safety, absolute comfort, and flawless results are our highest priorities',
      items: [
        {
          title: '100% Medical Sterilization',
          description: 'Strict 3-stage autoclave medical sterilization and sealed individual disposable kits opened right in front of you.',
        },
        {
          title: 'Premium Brands Only',
          description: 'We work exclusively with high-end certified American and European hypoallergenic products (Luxio, Kodi, Soprano).',
        },
        {
          title: 'VIP Lounge Experience',
          description: 'Relaxing ambient lounge, complimentary specialty coffee, Prosecco, and soothing atmosphere during your session.',
        },
        {
          title: 'Quality Guarantee',
          description: 'We back all our artistic work with an unconditional quality guarantee ensuring your complete peace of mind.',
        },
      ],
    },
    services: {
      title: 'Our Signature Services',
      subtitle: 'Select your desired treatment and enjoy a world-class aesthetic experience',
      bookService: 'Book This Service',
      items: [
        {
          id: 'nails',
          title: 'Nail Aesthetics & Art',
          description: 'Russian hardware manicure, durable gel polish, nail extensions, signature nail art, and relaxing spa pedicure.',
          price: 'From 40 ₾',
          duration: '60 - 90 min',
          features: ['Flawless cuticle work', 'Original Luxio gel polish', 'Nourishing oil & hand massage', 'Long-lasting guarantee'],
        },
        {
          id: 'laser',
          title: 'Painless Laser Epilation',
          description: 'Next-generation triple-wave diode laser hair removal ensuring 100% pain-free and effective sessions for all skin types.',
          price: 'From 30 ₾',
          duration: '15 - 60 min',
          features: ['Advanced ice-cooling tip', 'Visible results from 1st session', 'Safe on tanned summer skin', 'Ultra-fast treatment'],
        },
        {
          id: 'eyebrows',
          title: 'Brows & Lashes Styling',
          description: 'Custom eyebrow architecture, precise shaping, natural tinting with premium henna or dye, and keratin lamination.',
          price: 'From 35 ₾',
          duration: '30 - 45 min',
          features: ['Tailored to your facial symmetry', 'Long-lasting effect (4-6 weeks)', 'Organic strengthening formulas', 'Instant visual eye lifting'],
        },
        {
          id: 'makeup',
          title: 'Professional Make Up',
          description: 'Stunning daytime, glamorous evening, bridal, and editorial photo-shoot makeup using luxury brands (Dior, MAC, Chanel).',
          price: 'From 80 ₾',
          duration: '60 - 75 min',
          features: ['24-hour waterproof endurance', 'Custom complexion matching', 'Deep skin prep & hydration', 'Individual silk lash clusters'],
        },
      ],
    },
    whyChooseUs: {
      title: 'The Nail Club Advantage',
      subtitle: 'Discover why thousands of sophisticated women in Tbilisi trust us with their beauty',
      items: [
        {
          title: 'Uncompromised Standards',
          description: 'Our stylists regularly train at top international beauty academies to master the latest global techniques.',
        },
        {
          title: 'Prime Central Location',
          description: 'Conveniently situated in the heart of Tbilisi at 47 Kazbegi Avenue, with accessible parking for our guests.',
        },
        {
          title: 'Time-Saving Parallel Services',
          description: 'Busy schedule? Enjoy simultaneous treatments (e.g., 4-hand manicure + pedicure + brow shaping) saving hours.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Effortless 3-step process to secure your beauty appointment',
      steps: [
        {
          number: '01',
          title: 'Choose Your Service',
          description: 'Browse our signature treatments and pick the service that fits your beauty desires.',
        },
        {
          number: '02',
          title: 'Fill Online Details',
          description: 'Enter your contact details and preferred date/time into our quick interactive booking form.',
        },
        {
          number: '03',
          title: 'Instant WhatsApp Confirmation',
          description: 'Submit to generate a ready WhatsApp chat where our receptionist confirms your slot instantly.',
        },
      ],
    },
    portfolio: {
      title: 'Our Masterpieces',
      subtitle: 'Explore untouched real results created by our talented senior artists',
      filterAll: 'All Work',
      filterNails: 'Nails',
      filterLaser: 'Laser',
      filterBrows: 'Brows',
      filterMakeup: 'Make Up',
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Read genuine reviews from our cherished guests',
      items: [
        {
          name: 'Nino Beridze',
          service: 'Gel Polish & Art Design',
          comment: 'The absolute best nail club in Tbilisi! The hygiene is flawless, and my gel polish looks freshly painted even after 4 weeks. The complimentary coffee and ambiance make every visit special!',
          rating: 5,
          date: '2 days ago',
        },
        {
          name: 'Sopo Kvaratskhelia',
          service: 'Laser Hair Removal',
          comment: 'I was so terrified of laser pain, but their cooling machine is truly miraculous—I felt zero discomfort! The hair reduction after just one session was unbelievable.',
          rating: 5,
          date: '1 week ago',
        },
        {
          name: 'Elene Machavariani',
          service: 'Brow Lamination & Bridal Makeup',
          comment: 'They did my bridal makeup and brows. I cried, danced all night, and my makeup stayed immaculate! Thank you to the wonderful team for making me feel like a queen.',
          rating: 5,
          date: '2 weeks ago',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our salon and treatments',
      items: [
        {
          question: 'How do you sterilize your salon instruments?',
          answer: 'We adhere to hospital-grade sterilization protocols. Tools undergo enzymatic ultrasonic cleaning followed by high-temperature autoclave sterilization. Sealed pouches are opened exclusively in front of you.',
        },
        {
          question: 'How long does your gel manicure last?',
          answer: 'Thanks to our Russian hardware technique and authentic Luxio bases, our gel polish stays chip-free and brilliantly shiny for 3 to 5 weeks without thinning your natural nail plate.',
        },
        {
          question: 'Is laser hair removal safe during summer?',
          answer: 'Yes! Our advanced triple-wavelength diode laser features a continuous ice-cooling probe that protects the epidermis, making treatments completely safe even on sun-kissed or tanned skin.',
        },
        {
          question: 'Can I reschedule or cancel my appointment?',
          answer: 'Certainly. We kindly request at least 3-4 hours notice via phone or WhatsApp if you need to adjust your time slot, allowing us to accommodate other waiting clients.',
        },
      ],
    },
    contact: {
      title: 'Book Your Visit',
      subtitle: 'We look forward to welcoming you at Nail Club! Complete the form below for instant WhatsApp reservation',
      formTitle: 'Online Reservation',
      formSubtitle: 'Submitting will launch a formatted WhatsApp chat ready to send',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Anna Smith',
      phoneLabel: 'Phone Number *',
      phonePlaceholder: 'e.g. +995 599 12 34 56',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'example@domain.com',
      serviceLabel: 'Select Treatment *',
      servicePlaceholder: 'Choose a service...',
      messageLabel: 'Preferred Date, Time or Special Notes',
      messagePlaceholder: 'e.g. This Saturday afternoon around 3 PM...',
      submitBtn: 'Book via WhatsApp ✨',
      submitting: 'Preparing Chat...',
      infoTitle: 'Contact Information',
      addressLabel: 'Salon Address',
      addressValue: '47 Kazbegi Avenue, Tbilisi, Georgia',
      phoneInfoLabel: 'Phone / WhatsApp',
      hoursLabel: 'Opening Hours',
      hoursValue: 'Daily: 10:00 AM — 09:00 PM',
    },
    whatsappMsg: {
      newBooking: '🌟 New Online Reservation (Nail Club Tbilisi)',
      name: '👤 Name:',
      phone: '📞 Phone:',
      email: '📧 Email:',
      service: '💅 Service:',
      message: '💬 Notes / Preferred Time:',
      pressSend: '👉 Press Send button below to confirm your reservation!',
    },
    footer: {
      description: 'Nail Club Tbilisi — A sanctuary of beauty, supreme sterilization standards, and luxury self-care in Georgia.',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      contactInfo: 'Get In Touch',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    floating: {
      whatsapp: 'Chat on WhatsApp',
      call: 'Call Salon',
    },
  },
  RU: {
    nav: {
      services: 'Услуги',
      about: 'О нас',
      howItWorks: 'Процесс',
      portfolio: 'Работы',
      reviews: 'Отзывы',
      faq: 'Вопросы',
      contact: 'Контакты',
      bookNow: 'Записаться онлайн',
    },
    hero: {
      badge: '✨ Премиум Эстетический Клуб в Тбилиси',
      headline: 'Совершенство в каждой детали',
      subheadline: 'Погрузитесь в атмосферу роскоши и заботы. Безупречный аппаратный маникюр, безболезненная лазерная эпиляция, ламинирование бровей и профессиональный макияж — для вашего неповторимого образа.',
      ctaBook: 'Записаться онлайн',
      ctaCall: 'Позвонить сейчас',
      ctaWhatsApp: 'Чат в WhatsApp',
      locationNote: '📍 пр. А. Казбеги 47, Сабуртало, Тбилиси',
    },
    stats: {
      happyClients: '10,000+',
      happyClientsDesc: 'Довольных клиентов',
      experience: '7+ Лет',
      experienceDesc: 'Безупречной работы',
      masters: '15+',
      mastersDesc: 'Топ-мастеров',
      satisfaction: '99.8%',
      satisfactionDesc: 'Положительных отзывов',
    },
    benefits: {
      title: 'Почему выбирают нас',
      subtitle: 'Ваша безопасность, абсолютный комфорт и идеальный результат — наши главные ценности',
      items: [
        {
          title: '100% Медицинская Стерилизация',
          description: 'Трехэтапная стерилизация в автоклаве по нормам СанПиН. Индивидуальный крафт-пакет вскрывается при вас.',
        },
        {
          title: 'Только Премиум Бренды',
          description: 'Работаем исключительно с гипоаллергенными материалами из США и Европы (Luxio, Kodi, Soprano Titanium).',
        },
        {
          title: 'VIP Атмосфера и Комфорт',
          description: 'Уютный лаундж, свежесваренный кофе на выбор, бокал Prosecco и расслабляющая музыка во время процедур.',
        },
        {
          title: 'Гарантия Качества',
          description: 'Мы уверены в мастерстве нашей команды и предоставляем полную гарантию на покрытие и услуги центра.',
        },
      ],
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Выберите желаемую процедуру и насладитесь сервисом премиум-класса',
      bookService: 'Записаться на услугу',
      items: [
        {
          id: 'nails',
          title: 'Эстетика ногтей (Nails)',
          description: 'Чистейший аппаратный маникюр, покрытие гель-лаком под кутикулу, наращивание, дизайнерский нейл-арт и смарт-педикюр.',
          price: 'От 40 ₾',
          duration: '60 - 90 мин',
          features: ['Идеальная обработка кутикулы', 'Оригинальный Luxio', 'Массаж рук с питательным маслом', 'Гарантия стойкости покрытия'],
        },
        {
          id: 'laser',
          title: 'Лазерная эпиляция (Laser)',
          description: 'Абсолютно безболезненное удаление волос на инновационном трехволновом диодном лазере с мощным охлаждением.',
          price: 'От 30 ₾',
          duration: '15 - 60 мин',
          features: ['Ледяное сапфировое охлаждение', 'Эффект после 1-го сеанса', 'Безопасно для загорелой кожи', 'Быстрые и комфортные сеансы'],
        },
        {
          id: 'eyebrows',
          title: 'Архитектура бровей и ресниц',
          description: 'Индивидуальная архитектура, коррекция, стойкое окрашивание премиальной хной/краской и долговременная укладка.',
          price: 'От 35 ₾',
          duration: '30 - 45 мин',
          features: ['Подбор формы под тип лица', 'Стойкость эффекта (4-6 недель)', 'Органические уходовые составы', 'Визуальный лифтинг взглядa'],
        },
        {
          id: 'makeup',
          title: 'Профессиональный Макияж',
          description: 'Дневной, роскошный вечерний, свадебный и фото-макияж с использованием косметики люкс (Dior, MAC, Chanel, Tom Ford).',
          price: 'От 80 ₾',
          duration: '60 - 75 мин',
          features: ['Стойкость до 24 часов', 'Идеальный тон без эффекта маски', 'Глубокое увлажнение кожи', 'Пучки ресниц в подарок'],
        },
      ],
    },
    whyChooseUs: {
      title: 'Преимущества Nail Club',
      subtitle: 'Узнайте, почему тысячи девушек в Тбилиси доверяют свою красоту именно нам',
      items: [
        {
          title: 'Высочайшие стандарты',
          description: 'Наши мастера регулярно повышают квалификацию у ведущих международных экспертов бьюти-индустрии.',
        },
        {
          title: 'Идеальная локация',
          description: 'Расположены в самом центре района Сабуртало — пр. Казбеги 47, с удобной парковочной зоной.',
        },
        {
          title: 'Экономия вашего времени',
          description: 'Предоставляем параллельные услуги (маникюр + педикюр + брови в 4-6 рук) без потери качества.',
        },
      ],
    },
    howItWorks: {
      title: 'Как мы работаем',
      subtitle: 'Простой 3-шаговый процесс для записи на визит',
      steps: [
        {
          number: '01',
          title: 'Выбор услуги',
          description: 'Ознакомьтесь с нашим перечнем процедур и выберите то, что нужно именно вам.',
        },
        {
          number: '02',
          title: 'Заполнение формы',
          description: 'Укажите имя, контактный телефон и удобное время в нашей онлайн-форме на сайте.',
        },
        {
          number: '03',
          title: 'Подтверждение в WhatsApp',
          description: 'Нажмите кнопку отправки, чтобы открыть WhatsApp-чат, где администратор моментально подтвердит запись.',
        },
      ],
    },
    portfolio: {
      title: 'Наши работы',
      subtitle: 'Реальные результаты и безупречные работы наших топ-мастеров',
      filterAll: 'Все работы',
      filterNails: 'Маникюр',
      filterLaser: 'Лазер',
      filterBrows: 'Брови',
      filterMakeup: 'Макияж',
    },
    testimonials: {
      title: 'Отзывы клиентов',
      subtitle: 'Что говорят наши любимые гостьи о посещении Nail Club',
      items: [
        {
          name: 'Нино Беридзе',
          service: 'Гель-лак и дизайн',
          comment: 'Лучший салон в Тбилиси! Стерильность на высшем уровне, крафт-пакет вскрыли при мне. Покрытие держится больше 4 недель без единого скола. А кофе с шампанским — отдельный восторг!',
          rating: 5,
          date: '2 дня назад',
        },
        {
          name: 'Софо Кварацхелия',
          service: 'Лазерная эпиляция',
          comment: 'Очень боялась боли, но аппарат действительно чудесный — насадка ледяная, боли нет вообще! Результат после первой же процедуры просто потрясающий.',
          rating: 5,
          date: '1 неделю назад',
        },
        {
          name: 'Элене Мачавариани',
          service: 'Ламинирование бровей и макияж',
          comment: 'Делала свадебный образ у девочек. Макияж выдержал слезы счастья, танцы и жару! Огромное спасибо за профессионализм и невероятную доброжелательность.',
          rating: 5,
          date: '2 недели назад',
        },
      ],
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Полезная информация о процедурах и стандартах нашего салона',
      items: [
        {
          question: 'Как проходит стерилизация инструментов?',
          answer: 'Мы соблюдаем полный медицинский цикл: дезинфекция в специальном растворе, ультразвуковая очистка и температурная обработка в автоклаве. Крафт-пакет вскрывается лично перед вами.',
        },
        {
          question: 'Сколько держится покрытие гель-лаком?',
          answer: 'Благодаря тщательной аппаратной подготовке ногтевой пластины и использованию оригинальной базы Luxio, покрытие сохраняет идеальный глянец и прочность от 3 до 5 недель.',
        },
        {
          question: 'Можно ли делать лазерную эпиляцию летом?',
          answer: 'Да! Наш трехволновый диодный лазер нового поколения оснащен мощнейшей сапфировой системой охлаждения, что делает процедуру безопасной и эффективной даже на загорелой коже.',
        },
        {
          question: 'Как перенести или отменить запись?',
          answer: 'Конечно. Пожалуйста, сообщите нам по телефону или в WhatsApp минимум за 3-4 часа до визита, чтобы мы могли предложить освободившееся время другим клиентам.',
        },
      ],
    },
    contact: {
      title: 'Запись на визит',
      subtitle: 'Ждем вас в Nail Club! Заполните форму ниже для быстрой записи через WhatsApp',
      formTitle: 'Онлайн запись',
      formSubtitle: 'При отправке сформируется готовое сообщение для WhatsApp чата',
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Например: Анна Иванова',
      phoneLabel: 'Номер телефона *',
      phonePlaceholder: 'Например: +995 599 12 34 56',
      emailLabel: 'Эл. почта (необязательно)',
      emailPlaceholder: 'example@mail.ru',
      serviceLabel: 'Выберите услугу *',
      servicePlaceholder: 'Выберите процедуру...',
      messageLabel: 'Желаемая дата, время или комментарий',
      messagePlaceholder: 'Например: В субботу после 15:00...',
      submitBtn: 'Записаться через WhatsApp ✨',
      submitting: 'Подготовка чата...',
      infoTitle: 'Контактная информация',
      addressLabel: 'Адрес салона',
      addressValue: 'пр. А. Казбеги 47, Тбилиси, Грузия',
      phoneInfoLabel: 'Телефон / WhatsApp',
      hoursLabel: 'Режим работы',
      hoursValue: 'Ежедневно: 10:00 — 21:00',
    },
    whatsappMsg: {
      newBooking: '🌟 Новая онлайн-запись (Nail Club Tbilisi)',
      name: '👤 Имя:',
      phone: '📞 Телефон:',
      email: '📧 Email:',
      service: '💅 Услуга:',
      message: '💬 Пожелания / Время:',
      pressSend: '👉 Нажмите кнопку «Отправить» (Press Send) для подтверждения записи!',
    },
    footer: {
      description: 'Nail Club Tbilisi — пространство премиальной заботы о себе, где безупречное качество сочетается с абсолютным комфортом.',
      rights: 'Все права защищены.',
      quickLinks: 'Навигация',
      contactInfo: 'Контакты',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Условия обслуживания',
    },
    floating: {
      whatsapp: 'Написать в WhatsApp',
      call: 'Позвонить',
    },
  },
};
