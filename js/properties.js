/* cspell: disable */
const properties = [
  {
    id: 1,
    name: "Luxury 4 Bedroom Duplex",
    purpose: "buy",
    location: "Abuja",
    type: "Duplex",
    price: 85000000,
    bedrooms: 4,
    bathrooms: 5,
    street: "Maitama, Abuja",
    agent: "David Okafor",
    phone: "08031234567",
    email: "john@prestigehomes.com",
    agentImage: "images/agents/john.jpg",
    features: [
      "Swimming Pool",
      "Boys Quarters",
      "2-Car Garage",
      "24/7 Security"
    ],
    images: [
      "img/house1.avif"
    ]
  },
  {
    id: 2,
    name: "Modern 3 Bedroom Apartment",
    purpose: "rent",
    location: "Lagos",
    type: "Apartment",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 3,
    street: "Lekki Phase 1, Lagos",
    agent: "Sarah Williams",
    phone: "08145678901",
    email: "nwabuezeagoziem@gmail.com",
    agentImage: "images/agents/sarah.jpg",
    features: [
      "Fitted Kitchen",
      "Parking Space",
      "24/7 Power",
      "Security"
    ],
    images: [
      "img/house2.avif"
    ]
  },
  {
    id: 3,
    name: "Contemporary 5 Bedroom Detached House",
    purpose: "buy",
    location: "Port Harcourt",
    type: "Detached House",
    price: 120000000,
    bedrooms: 5,
    bathrooms: 6,
    street: "Peter Odili Road, Port Harcourt",
    agent: "Michael Johnson",
    phone: "08098765432",
    email: "michael@prestigehomes.com",
    agentImage: "images/agents/michael.jpg",
    features: [
      "Large Compound",
      "Swimming Pool",
      "Boys Quarters",
      "Security Gate"
    ],
    images: [
      "img/house3.avif"
    ]
  },
  {
    id: 4,
    name: "Cozy 2 Bedroom Flat",
    purpose: "rent",
    location: "Abuja",
    type: "Apartment",
    price: 1800000,
    bedrooms: 2,
    bathrooms: 2,
    street: "Gwarinpa, Abuja",
    agent: "Grace Eze",
    phone: "08123456789",
    email: "grace@prestigehomes.com",
    agentImage: "images/agents/grace.jpg",
    features: [
      "Parking Space",
      "Fitted Kitchen",
      "Water Supply",
      "Security"
    ],
    images: [
      "img/house4.avif"
    ]
  },
  {
    id: 5,
    name: "Executive 3 Bedroom Terrace",
    purpose: "buy",
    location: "Lagos",
    type: "Terrace",
    price: 65000000,
    bedrooms: 3,
    bathrooms: 4,
    street: "Chevron Drive, Lagos",
    agent: "Daniel Adams",
    phone: "08034567890",
    email: "daniel@prestigehomes.com",
    agentImage: "images/agents/daniel.jpg",
    features: [
      "Estate Security",
      "Fitted Kitchen",
      "Private Parking",
      "Serviced Estate"
    ],
    images: [
      "img/house5.avif"
    ]
  },
  {
    id: 6,
    name: "Spacious 2 Bedroom Apartment",
    purpose: "rent",
    location: "Port Harcourt",
    type: "Apartment",
    price: 2200000,
    bedrooms: 2,
    bathrooms: 2,
    street: "Old GRA, Port Harcourt",
    agent: "Amaka Nwosu",
    phone: "08156789012",
    email: "amaka@prestigehomes.com",
    agentImage: "images/agents/amaka.jpg",
    features: [
      "Air Conditioning",
      "Parking Space",
      "Water Supply",
      "Security"
    ],
    images: [
      "img/house6.avif"
    ]
  },
  {
    id: 7,
    name: "Premium 6 Bedroom Mansion",
    purpose: "buy",
    location: "Abuja",
    type: "Mansion",
    price: 250000000,
    bedrooms: 6,
    bathrooms: 7,
    street: "Asokoro, Abuja",
    agent: "Victor James",
    phone: "08067890123",
    email: "victor@prestigehomes.com",
    agentImage: "images/agents/victor.jpg",
    features: [
      "Swimming Pool",
      "Gym",
      "Cinema Room",
      "Boys Quarters",
      "Large Compound"
    ],
    images: [
      "img/house7.avif"
    ]
  },
  {
    id: 8,
    name: "Elegant 3 Bedroom Flat",
    purpose: "rent",
    location: "Lagos",
    type: "Apartment",
    price: 4500000,
    bedrooms: 3,
    bathrooms: 3,
    street: "Ikoyi, Lagos",
    agent: "Jennifer Brown",
    phone: "08178901234",
    email: "jennifer@prestigehomes.com",
    agentImage: "images/agents/jennifer.jpg",
    features: [
      "Ocean View",
      "Swimming Pool",
      "Gym",
      "24/7 Security"
    ],
    images: [
      "img/house8.avif"
    ]
  },
  {
    id: 9,
    name: "Classic 4 Bedroom Family Home",
    purpose: "buy",
    location: "Enugu",
    type: "Detached House",
    price: 55000000,
    bedrooms: 4,
    bathrooms: 4,
    street: "Independence Layout, Enugu",
    agent: "Chinedu Obi",
    phone: "08089012345",
    email: "chinedu@prestigehomes.com",
    agentImage: "images/agents/chinedu.jpg",
    features: [
      "Large Compound",
      "Garden",
      "Parking Space",
      "Security Fence"
    ],
    images: [
      "img/house9.avif"
    ]
  },
  {
    id: 10,
    name: "Modern 1 Bedroom Serviced Apartment",
    purpose: "rent",
    location: "Abuja",
    type: "Apartment",
    price: 2500000,
    bedrooms: 1,
    bathrooms: 1,
    street: "Wuse 2, Abuja",
    agent: "Mary Peters",
    phone: "08190123456",
    email: "mary@prestigehomes.com",
    agentImage: "images/agents/mary.jpg",
    features: [
      "Fully Furnished",
      "Wi-Fi",
      "Housekeeping",
      "24/7 Power"
    ],
    images: [
      "img/house10.avif"
    ]
  },
  {
    id: 11,
    name: "Luxury 5 Bedroom Smart Home",
    purpose: "buy",
    location: "Lagos",
    type: "Detached House",
    price: 180000000,
    bedrooms: 5,
    bathrooms: 6,
    street: "Banana Island, Lagos",
    agent: "Samuel Williams",
    phone: "08021234567",
    email: "samuel@prestigehomes.com",
    agentImage: "images/agents/samuel.jpg",
    features: [
      "Smart Home System",
      "Swimming Pool",
      "Home Theatre",
      "Gym",
      "Security"
    ],
    images: [
      "img/house11.avif"
    ]
  },
  {
    id: 12,
    name: "Affordable 2 Bedroom Flat",
    purpose: "rent",
    location: "Enugu",
    type: "Apartment",
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    street: "New Haven, Enugu",
    agent: "Blessing Okoro",
    phone: "08132345678",
    email: "blessing@prestigehomes.com",
    agentImage: "images/agents/blessing.jpg",
    features: [
      "Parking Space",
      "Water Supply",
      "Gated Compound",
      "Security"
    ],
    images: [
      "img/house12.avif"
    ]
  },
  {
    id: 13,
    name: "Executive 4 Bedroom Terrace Duplex",
    purpose: "buy",
    location: "Port Harcourt",
    type: "Terrace",
    price: 75000000,
    bedrooms: 4,
    bathrooms: 5,
    street: "Trans Amadi, Port Harcourt",
    agent: "Emeka George",
    phone: "08043456789",
    email: "emeka@prestigehomes.com",
    agentImage: "images/agents/emeka.jpg",
    features: [
      "Fitted Kitchen",
      "Estate Security",
      "Parking Space",
      "Boys Quarters"
    ],
    images: [
      "img/house13.avif"
    ]
  },
  {
    id: 14,
    name: "Beautiful 3 Bedroom Bungalow",
    purpose: "rent",
    location: "Ibadan",
    type: "Bungalow",
    price: 1800000,
    bedrooms: 3,
    bathrooms: 3,
    street: "Bodija, Ibadan",
    agent: "Esther Adeyemi",
    phone: "08154567890",
    email: "esther@prestigehomes.com",
    agentImage: "images/agents/esther.jpg",
    features: [
      "Large Compound",
      "Garden",
      "Parking Space",
      "Security Fence"
    ],
    images: [
      "img/house14.avif"
    ]
  },
  {
    id: 15,
    name: "Luxury 4 Bedroom Penthouse",
    purpose: "buy",
    location: "Lagos",
    type: "Penthouse",
    price: 150000000,
    bedrooms: 4,
    bathrooms: 5,
    street: "Victoria Island, Lagos",
    agent: "Alex Morgan",
    phone: "08065678901",
    email: "alex@prestigehomes.com",
    agentImage: "images/agents/alex.jpg",
    features: [
      "City View",
      "Private Elevator",
      "Swimming Pool",
      "Gym",
      "24/7 Security"
    ],
    images: [
      "img/house15.avif"
    ]
  },
  {
    id: 16,
    name: "Spacious 3 Bedroom Family Apartment",
    purpose: "rent",
    location: "Abuja",
    type: "Apartment",
    price: 3000000,
    bedrooms: 3,
    bathrooms: 3,
    street: "Jabi, Abuja",
    agent: "Faith Emmanuel",
    phone: "08176789012",
    email: "faith@prestigehomes.com",
    agentImage: "images/agents/faith.jpg",
    features: [
      "Fitted Kitchen",
      "Parking Space",
      "Balcony",
      "24/7 Security"
    ],
    images: [
      "img/house16.avif"
    ]
  }
];
/* cspell: enable */

// Debug logs removed