import { PortfolioCategorySection, PartnerBrand, ProductionService } from '../types';

export const PORTFOLIO_SECTIONS: PortfolioCategorySection[] = [
  {
    id: 'conferences',
    counter: '01 — 06',
    title: 'Conferences',
    subtitle: 'High-Level Summits & Corporate Assemblies',
    badge: 'Conferences',
    description: 'Bespoke corporate conference production featuring high-definition curved LED stages, simultaneous translation audio networks, crystal-clear line-array sound, and pristine broadcast illumination.',
    exploreLabel: 'Explore Conferences Work',
    projects: [
      {
        id: 'conf-1',
        title: 'Airtel Conference',
        category: 'Conferences',
        client: 'Airtel Uganda',
        year: '2024',
        venue: 'Serena Hotel Conference Hall, Kampala',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
        description: 'Comprehensive 360 audio-visual setup for Airtel annual leadership conference. Dual P2.6 ultra-wide LED stage backdrops, multi-zone speech reinforcement, live stream feeds to pan-African branches, and branded ambient illumination.',
        specs: ['P2.6 LED Wall 14m x 4m', 'L-Acoustics Kiva II Line Array', 'Shure Axient Digital Wireless', 'Broadcast Robotic Cameras'],
        attendees: '850+ Delegates',
        highlight: 'Zero latency international livestream & crystal speech intelligibility'
      },
      {
        id: 'conf-2',
        title: 'PAPU Conference',
        category: 'Conferences',
        client: 'Pan African Postal Union (PAPU)',
        year: '2024',
        venue: 'Speke Resort Munyonyo International Convention Center',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
        description: 'Intergovernmental Pan-African Postal summit bringing ministerial delegations across 45 nations. 8-channel simultaneous multilingual interpretation, custom curved dais staging, and high-CRI diplomatic rostrum lighting.',
        specs: ['Bosch DCN Multilingual Interpretation (8 Lng)', 'Chauvet Ovation Warm White Lekos', 'Custom Curved CNC Stage Dais', 'Dual 4K Confidence Monitors'],
        attendees: '1,200+ Ministers & Diplomats',
        highlight: 'Strict diplomatic protocol & multi-channel ISO compliant translation'
      },
      {
        id: 'conf-3',
        title: 'UBL Day 2 Conference',
        category: 'Conferences',
        client: 'Uganda Breweries Limited (UBL)',
        year: '2023',
        venue: 'Imperial Royale Grand Ballroom, Kampala',
        imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
        description: 'Day 2 strategic planning and commercial conference for UBL Diageo. Dynamic branded stage with kinetic moving light bars, keynote presentation switching, and immersive multi-screen breakout sessions.',
        specs: ['Analog Way Ascender 48 Multi-Screen Switcher', 'Claypaky Sharpy Wash Lights', 'Electro-Voice XLC Audio System', 'Wireless Presenter Timers & Cue Systems'],
        attendees: '600+ Executives & Partners',
        highlight: 'Seamless multi-presenter cueing with interactive real-time polling screens'
      },
      {
        id: 'conf-4',
        title: 'Total - Sustainab\'ALL Day',
        category: 'Conferences',
        client: 'TotalEnergies Uganda',
        year: '2024',
        venue: 'Mestil Hotel & Residences, Nsambya',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80',
        description: 'Flagship sustainability and environmental transition summit. Eco-conscious low-draw LED fixtures, recycled aluminum modular trussing, high-impact keynote projection, and crisp acoustic spatial coverage.',
        specs: ['High-Efficiency Low-Wattage LED Array', 'Yamaha CL5 Digital Console with Dante', 'P3.9 Outdoor/Indoor LED Panels', 'Zero-Flicker 60fps Broadcast Lighting'],
        attendees: '750+ Industry Stakeholders',
        highlight: 'Carbon-efficient power distribution & sustainable stage architecture'
      }
    ]
  },
  {
    id: 'concerts',
    counter: '02 — 06',
    title: 'Concerts',
    subtitle: 'Arena Rigs, Stadium Sound & Mega Festivals',
    badge: 'Concerts',
    description: 'Colossal stage designs for East Africa\'s biggest headliners. Heavy-duty ground support trusses, high-output beam lasers, thunderous sub-bass arrays, and sync-locked timecode pyrotechnics.',
    exploreLabel: 'Explore Concerts Work',
    projects: [
      {
        id: 'conc-1',
        title: '10 Years of Spice Diana',
        category: 'Concerts',
        client: 'Source Management / Spice Diana',
        year: '2023',
        venue: 'Lugogo Cricket Oval, Kampala',
        imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=80',
        description: 'Monumental 10-year anniversary concert celebrating Ugandan superstar Spice Diana. Massive 22-meter arch stage, 120-panel LED visual wall, CO2 cryo jets, cold spark fountains, and stadium-shaking Meyer Sound line arrays.',
        specs: ['Meyer Sound LEO Family Line Array', 'GrandMA3 Full Size Lighting Console', '60x 380W BSW Moving Heads', '40-meter Heavy Duty Roof Trussing'],
        attendees: '18,000+ Fans',
        highlight: 'Timecoded beam laser synchronized with live acoustic drums and pyro'
      },
      {
        id: 'conc-2',
        title: 'Uganda One Festival',
        category: 'Concerts',
        client: 'Uganda One Entertainment',
        year: '2024',
        venue: 'Kololo Airstrip Grounds, Kampala',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80',
        description: 'Multi-genre national music extravaganza hosting 35 top East African artists. 3-tier hydraulic stage risers, continuous 14-hour live sound reinforcement, and 360-degree aerial beam light canopies over Kololo.',
        specs: ['d&b audiotechnik J-Series Rig', '180x Beam & Wash Automated Lights', 'P3.9 Curved Festival Backstage Walls', 'Dual Redundant Soundcraft Vi3000'],
        attendees: '25,000+ Festival Goers',
        highlight: 'Flawless 14-hour continuous performance without single drop or failure'
      },
      {
        id: 'conc-3',
        title: 'Sol and the Gang 2',
        category: 'Concerts',
        client: 'Sol Generation & Swangz Avenue',
        year: '2024',
        venue: 'Jinja Sailing Club / Victoria Amphitheatre',
        imageUrl: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=80',
        description: 'High-octane fusion concert featuring live orchestral instruments and Afro-pop rhythms. Acoustic isolation staging, individual IEM wireless monitor channels, warm vintage tungsten blinder banks, and water-front trussing.',
        specs: ['Sennheiser 6000 In-Ear Monitoring (24 ch)', 'Vintage Mole-Richardson Blinders', 'Solid State Logic Live L550 Console', 'IP65 Weatherproof Moving Spotlights'],
        attendees: '9,500+ Attendees',
        highlight: 'Pristine live broadcast multitrack audio recording for streaming album'
      },
      {
        id: 'conc-4',
        title: 'Sol and the Gang',
        category: 'Concerts',
        client: 'Swangz Avenue',
        year: '2023',
        venue: 'Kampala Serena Victoria Hall',
        imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1400&q=80',
        description: 'The viral inaugural edition that set new production standards in Uganda. Immersive ceiling-hung pixel tubes, live visual DJ VJ mapping, and customized sub-bass cardioid clusters preventing auditorium resonance.',
        specs: ['120x Astera Titan Pixel Tubes', 'L-Acoustics SB28 Subwoofer Cardioid Array', 'Chamsys MagicQ Stadium Lighting Control', 'Kvant ClubMax 10W RGB Lasers'],
        attendees: '4,000+ Attendees',
        highlight: 'Sold-out crowd with viral social buzz for the custom kinetic lighting rig'
      }
    ]
  },
  {
    id: 'product-launch',
    counter: '03 — 06',
    title: 'Product Launch',
    subtitle: 'Sensory Brand Reveals & Kinetic Spectacles',
    badge: 'Product Launch',
    description: 'Transforming corporate unveils into unforgettable sensory experiences with motorized reveal screens, synchronized laser unveils, holographic projections, and custom brand lighting hues.',
    exploreLabel: 'Explore Product Launch Work',
    projects: [
      {
        id: 'launch-1',
        title: 'Blue Label',
        category: 'Product Launch',
        client: 'Johnnie Walker / Uganda Breweries Ltd',
        year: '2024',
        venue: 'Kampala Serena VIP Ballroom',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
        description: 'Exclusive luxury launch for the Johnnie Walker Blue Label rare blend. Custom midnight-blue ambient lighting with warm liquid-gold illumination, mirrored glass reveal pedestals, and pneumatic haze curtain unveil.',
        specs: ['Motorized Kabuki Drop System', 'Custom RGBW Gold/Cobalt Wash Fixtures', '4K Micro-LED Product Pillar Displays', 'Bowers & Wilkins Acoustic Soundscapes'],
        attendees: '300 High-Net-Worth VIPs',
        highlight: 'Whisper-quiet kabuki unveil with synchronized gold laser beam reveal'
      },
      {
        id: 'launch-2',
        title: 'TECNO CAMON 30',
        category: 'Product Launch',
        client: 'TECNO Mobile Uganda',
        year: '2024',
        venue: 'Sheraton Kampala Rwenzori Ballroom',
        imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80',
        description: 'Futuristic AI-themed flagship smartphone launch event. Giant wrap-around cyberpunk LED tunnel, robotic arm live phone camera feed to big screen, and electro-luminescent runway for model demonstrations.',
        specs: ['P1.9 Ultra-Fine Pitch Curved LED Wall', '3D Motion Graphics Engine & Media Servers', 'Robotic Tracking Camera System', 'Avolites Titan Mobile Visual Suite'],
        attendees: '500+ Tech Press & Creators',
        highlight: 'Immersive 3D tunnel walkthrough with real-time reactive floor LED panels'
      },
      {
        id: 'launch-3',
        title: 'E-Mobility Expo 2025',
        category: 'Product Launch',
        client: 'Ministry of Science, Tech & Kiira Motors',
        year: '2025',
        venue: 'Kololo Ceremonial Grounds',
        imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
        description: 'Historic East African electric vehicle expo and electric bus debut. Motorized vehicle turntable stage with 360-degree high-CRI automotive lighting rigs to eliminate paint glare, and battery-backed power units.',
        specs: ['10-Meter Heavy-Duty Revolving Stage Platform', 'ARRI SkyPanel S60-C Softlights for Cars', 'Outdoor High-Brightness P4.8 LED Video Tower', 'Silent Hybrid Power Generation'],
        attendees: '3,000+ Government & Automotive Leaders',
        highlight: 'Zero-glare automotive studio lighting highlighting clean EV body designs'
      },
      {
        id: 'launch-4',
        title: 'C-Care',
        category: 'Product Launch',
        client: 'C-Care Health Uganda',
        year: '2023',
        venue: 'IHK International Hospital Grounds, Namuwongo',
        imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
        description: 'Comprehensive brand transition and national healthcare identity launch. Pristine clinical white and teal ambient lighting, panoramic 180-degree curved presentation screen, and crystal speech dispersion.',
        specs: ['180-Degree Panoramic Projection Wall', 'Martin MAC Quantum Wash Lights', 'Electro-Voice Column Array Audio', 'Custom Acrylic Illuminated Lecterns'],
        attendees: '700+ Medical Specialists & Partners',
        highlight: 'Seamless transition video countdown with building exterior architectural projection'
      }
    ]
  },
  {
    id: 'parties',
    counter: '04 — 06',
    title: 'Parties',
    subtitle: 'High-Energy Nights, Galas & Corporate Bashes',
    badge: 'Parties',
    description: 'Electric atmosphere creation with club-grade bass impact, immersive neon laser tunnels, automated moving beam patterns, CO2 blasters, and custom DJ production stations.',
    exploreLabel: 'Explore Parties Work',
    projects: [
      {
        id: 'party-1',
        title: 'Airtel - To The Top',
        category: 'Parties',
        client: 'Airtel Uganda',
        year: '2024',
        venue: 'Kampala Serena Hotel Gardens',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80',
        description: 'High-octane commercial achievement celebration. Elevated double-deck DJ booth, custom illuminated Airtel-red trusses, continuous confetti bursts, and high-impact moving beam light show.',
        specs: ['MagicFX Stadium Confetti Cannons', '40x 17R Moving Beam Fixtures', 'Pioneering DJ Nexus 3 Rig Setup', 'Bose ShowMatch DeltaQ Array'],
        attendees: '1,400+ Staff & VIP Guests',
        highlight: 'Electric synchronized red-and-gold lighting chase with confetti finale'
      },
      {
        id: 'party-2',
        title: 'Airtel EOY',
        category: 'Parties',
        client: 'Airtel Uganda',
        year: '2023',
        venue: 'Speke Resort Munyonyo Marina Deck',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80',
        description: 'Epic End of Year corporate celebration on the shores of Lake Victoria. 360-degree party lighting grid over the pool and deck, water-reflection laser effects, and massive outdoor dance floor sound.',
        specs: ['IP65 Waterproof Laser Projectors', 'Turbosound Manchester Line Array', 'Custom Illuminated LED Dance Floor 12x12m', 'Low-Fog Dry Ice Generators'],
        attendees: '1,800+ Employees & Partners',
        highlight: 'Nighttime laser projection over the Lake Victoria water surface'
      },
      {
        id: 'party-3',
        title: 'AIRTEL GAMES DAY',
        category: 'Parties',
        client: 'Airtel Uganda',
        year: '2024',
        venue: 'Kyadondo Rugby Grounds, Lugogo',
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80',
        description: 'Full-day corporate sports gala, outdoor games, and after-party celebration. 8 sound delay towers across the sports grounds, giant digital scoreboard video walls, and lively DJ sound setups.',
        specs: ['8x Distributed JBL VRX Sound Towers', 'High-Nits Daylight LED Scoreboards (6000 nits)', 'Wireless Field Announcer Roaming Mics', 'Portable Solar-Hybrid Power Backup'],
        attendees: '2,500+ Participants',
        highlight: '360-degree field sound coverage without audio delay or echo across 100m'
      },
      {
        id: 'party-4',
        title: 'Airtel Neon Party',
        category: 'Parties',
        client: 'Airtel Uganda',
        year: '2023',
        venue: 'Club Guvnor & Parking Concourse, Industrial Area',
        imageUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1400&q=80',
        description: 'Vibrant ultraviolet party experience with custom reactive neon installations. 80 UV blacklight floodlights, glowing pixel tube tunnels, laser labyrinths, and pounding low-end sub frequencies.',
        specs: ['High-Output 400W UV Blacklight Cannons', 'Astera Wireless Pixel Tubes in Custom Geometric Rig', 'Funktion-One Sound System', 'RGB Geometric Tunnel Trussing'],
        attendees: '1,100+ Partygoers',
        highlight: 'Ultraviolet reactive lighting grid with glowing custom event art installations'
      }
    ]
  },
  {
    id: 'weddings',
    counter: '05 — 06',
    title: 'Weddings',
    subtitle: 'Fairytale Romances & Luxury Nuptial Staging',
    badge: 'Weddings',
    description: 'Breathtaking wedding production crafted for memories that last a lifetime. Ethereal fairy-light canopies, sparkling crystal chandelier trusses, custom dance floor monograms, and cold-spark entrances.',
    exploreLabel: 'Explore Weddings Work',
    projects: [
      {
        id: 'wed-1',
        title: 'Tinah & Paul',
        category: 'Weddings',
        client: 'Tinah & Paul Nuptials',
        year: '2024',
        venue: 'Lake Victoria Serena Golf Resort, Kigo',
        imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
        description: 'Epitome of modern luxury fairytale wedding. 50,000-bulb warm incandescent micro-fairy light canopy, custom-wrapped white gloss stage, pin-spotting for floral centerpieces, and intimate acoustic sound.',
        specs: ['Custom Cathedral Fairy Light Canopy', 'Warm White 2700K Pin-Spot Lighting', 'Low-Lying Fog Cloud Machine for First Dance', 'Bose F1 Model 812 Portable Array'],
        attendees: '600 Cherished Guests',
        highlight: 'Dreamlike "dancing on clouds" first dance with indoor cold spark fountains'
      },
      {
        id: 'wed-2',
        title: 'WEDDING PRODUCTION WITH ICANDY',
        category: 'Weddings',
        client: 'In Collaboration with iCandy Events Uganda',
        year: '2024',
        venue: 'Commonwealth Resort Speke Ballroom, Munyonyo',
        imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80',
        description: 'Grand ballroom transformation partnering with renowned decorator iCandy. Hanging circular crystal chandelier trusses, soft pastel architectural perimeter washes, and hidden subwoofers for acoustic band.',
        specs: ['Circular Rigging Truss with 6 Vintage Chandeliers', 'Chauvet Freedom Wireless Uplighting (60 units)', 'Digital Gobo Monogram Projector', 'RCF HDL 20-A Audio System'],
        attendees: '800 Guests',
        highlight: 'Flawless synergy between luxury floral artistry and warm architectural illumination'
      },
      {
        id: 'wed-3',
        title: 'WEDDING PRODUCTION WITH ICANDY',
        category: 'Weddings',
        client: 'In Collaboration with iCandy Events Uganda',
        year: '2023',
        venue: 'Victoria Serena Kigo Presidential Marquee',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
        description: 'Glass marquee evening reception with panoramic lake views. Exterior illuminated palm trees, ambient interior candle-warm glow, custom stage backdrops, and live jazz ensemble sound balance.',
        specs: ['IP65 Exterior Architectural Uplights', 'Warm Tungsten Festoon & Chandelier Integration', 'Yamaha TF5 Console with Precision EQ', 'DMX Controlled Moving Centerpiece Highlights'],
        attendees: '750 Guests',
        highlight: 'Illuminated glass marquee glowing into the night against Lake Victoria waters'
      },
      {
        id: 'wed-4',
        title: 'WEDDING PRODUCTION WITH ICANDY',
        category: 'Weddings',
        client: 'In Collaboration with iCandy Events Uganda',
        year: '2023',
        venue: 'Chobe Safari Lodge / Murchison Falls Luxury Setup',
        imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=80',
        description: 'Destination wilderness luxury wedding setup along the River Nile. Off-grid silent power generation, discreet audio distribution that blends into nature, and magical golden sunset ambient fixtures.',
        specs: ['Whisper-Quiet Off-Grid Inverter Power Units', 'Minimalist Wood-Grain Speaker Enclosures', 'Warm Amber Wash Lights (3000K)', 'Battery-Powered Wireless Fixtures'],
        attendees: '250 Exclusive Destination Guests',
        highlight: '100% off-grid luxury technical execution in pristine natural safari reserve'
      }
    ]
  },
  {
    id: 'corporate-events',
    counter: '06 — 06',
    title: 'Corporate events',
    subtitle: 'Executive Galas, AGMs & Milestone Celebrations',
    badge: 'Corporate events',
    description: 'Flawless execution for multinational brands, embassies, and top financial institutions. Precision stage architecture, seamless presentation switching, speech clarity, and sophisticated gala lighting.',
    exploreLabel: 'Explore Corporate events Work',
    projects: [
      {
        id: 'corp-1',
        title: 'The Bridge',
        category: 'Corporate events',
        client: 'The Bridge Leadership Network',
        year: '2024',
        venue: 'Kampala Serena Katonga Hall',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
        description: 'High-profile leadership gala and bilateral business dinner. Sophisticated amber-gold table washes, customized speaker lectern with integrated digital branding, and speech acoustics tuned to speech intelligibility index > 0.85.',
        specs: ['Bespoke Acrylic LED Podium', 'ETC Source Four LED Lekos', 'L-Acoustics Syva Colinear System', 'Barco ClickShare Presentation System'],
        attendees: '450 CEOs & Diplomats',
        highlight: 'Acoustic treatment and linear speaker column for 100% speech clarity in reverberant hall'
      },
      {
        id: 'corp-2',
        title: 'OLD MUTUAL - Staff Launch',
        category: 'Corporate events',
        client: 'Old Mutual Uganda',
        year: '2023',
        venue: 'Sheraton Kampala Victoria Room',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80',
        description: 'Corporate rebranding and pan-African staff launch celebration. Kinetic green-and-white Old Mutual brand lighting, interactive video wall timeline, and high-energy awards ceremony staging.',
        specs: ['P2.9 High-Refresh LED Wall', 'Martin Professional MAC Aura Fixtures', 'Electro-Voice ETX Stage Monitors', 'Wireless DMX Transmitters'],
        attendees: '700+ Staff Members',
        highlight: 'Dynamic brand reveal video with synchronized room-wide emerald green lighting wash'
      },
      {
        id: 'corp-3',
        title: 'CCBU CELEBRATION',
        category: 'Corporate events',
        client: 'Coca-Cola Beverages Uganda (CCBU)',
        year: '2024',
        venue: 'Speke Resort Munyonyo Royal Palm Grounds',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80',
        description: 'Massive annual milestone celebration for CCBU staff and commercial partners. Vibrant Coca-Cola red stage architecture, giant 20m wide outdoor LED backdrop, award presentation sound, and live band rig.',
        specs: ['20m x 4.5m Outdoor P3.9 LED Screen', 'd&b audiotechnik V-Series Rig', 'Showtec Sunstrip Active DMX Blinders', 'Red & White Custom Moving Head Profiles'],
        attendees: '2,200+ Team Members',
        highlight: 'Iconic Coca-Cola contour bottle illuminated stage framework with pyrotechnic confetti'
      },
      {
        id: 'corp-4',
        title: 'EACOP -END OF YEAR PARTY',
        category: 'Corporate events',
        client: 'East African Crude Oil Pipeline (EACOP)',
        year: '2024',
        venue: 'Lake Victoria Serena Kigo Grand Ballroom',
        imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
        description: 'End of Year celebration and project milestone gala for the multinational EACOP consortium. Immersive corporate staging, multi-national flag illumination, awards ceremony sound, and dynamic gala evening party lighting.',
        specs: ['Custom Trussing Arc with Intelligent Fixtures', 'JBL VRX Line Array Audio System', 'Dual 75-Inch 4K Side Displays', 'Hazer & Warm Atmosphere Effects'],
        attendees: '850 Multinational Delegates',
        highlight: 'Seamless transition from formal ministerial dinner to high-energy corporate live band celebration'
      }
    ]
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  { name: 'Airtel Uganda', category: 'Telecom & Tech', logoText: 'airtel', country: 'Uganda' },
  { name: 'TotalEnergies', category: 'Energy & Infrastructure', logoText: 'TotalEnergies', country: 'Global / East Africa' },
  { name: 'Uganda Breweries (UBL)', category: 'Beverage & FMCG', logoText: 'UBL / Diageo', country: 'Uganda' },
  { name: 'Old Mutual', category: 'Financial Services', logoText: 'OLD MUTUAL', country: 'East Africa' },
  { name: 'CCBU (Coca-Cola)', category: 'Beverages', logoText: 'Coca-Cola CCBU', country: 'East Africa' },
  { name: 'TECNO Mobile', category: 'Consumer Electronics', logoText: 'TECNO', country: 'Global' },
  { name: 'Johnnie Walker Blue Label', category: 'Luxury Spirits', logoText: 'BLUE LABEL', country: 'Global' },
  { name: 'EACOP', category: 'Energy & Infrastructure', logoText: 'EACOP Pipeline', country: 'East Africa' },
  { name: 'PAPU', category: 'Intergovernmental', logoText: 'PAPU Summit', country: 'Pan-Africa' },
  { name: 'C-Care Uganda', category: 'Healthcare', logoText: 'C-Care', country: 'Uganda' },
  { name: 'Stanbic Bank', category: 'Banking', logoText: 'Stanbic Bank', country: 'East Africa' },
  { name: 'MTN Uganda', category: 'Telecom', logoText: 'MTN', country: 'East Africa' },
  { name: 'iCandy Events', category: 'Luxury Event Design', logoText: 'iCANDY', country: 'Uganda' },
  { name: 'Swangz Avenue', category: 'Music & Talent', logoText: 'Swangz', country: 'Uganda' }
];

export const SERVICE_TAGS = [
  'Lighting',
  'Sound Setup',
  'Weddings',
  'Concerts',
  'Luxury',
  'Corporate',
  'Launch',
  'Parties',
  'Stage',
  'Audio-Visual',
  'Production Design',
  'Festivals',
  'Exhibitions',
  'Gala',
  'Ceremony',
  'Conferences',
  'Activation',
  'Creative Shows',
  'Events',
  'Decor'
];

export const PRODUCTION_SERVICES: ProductionService[] = [
  {
    icon: 'Sparkles',
    title: 'Intelligent Stage Lighting',
    tag: 'DMX Lighting & Lasers',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    description: 'DMX computer-controlled moving heads, beam lasers, warm tungsten blinders, architectural LED uplighting, and timecode synchronization.',
    specs: '60+ BSW moving heads, Claypaky, Martin, GrandMA3 control'
  },
  {
    icon: 'Volume2',
    title: 'Concert & Arena Audio',
    tag: 'Line Array Sound',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision line array audio distribution engineered for maximum acoustic intelligibility, zero feedback, and deep punchy bass response.',
    specs: 'Meyer Sound, L-Acoustics, d&b audiotechnik, Yamaha & SSL consoles'
  },
  {
    icon: 'MonitorPlay',
    title: 'High-Res LED Screens & Video',
    tag: 'Ultra-HD Visual Grids',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description: 'Indoor & outdoor high-refresh LED walls (P1.9 - P3.9), curved backdrops, video mapping servers, live camera switching, and confidence monitors.',
    specs: 'Over 250m² of high-brightness daylight & studio LED panels'
  },
  {
    icon: 'Layers',
    title: 'Structural Trussing & Staging',
    tag: 'Rigging & Heavy Staging',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    description: 'Heavy-duty certified aluminum box trusses, goal-post and circular rigs, multi-tier hydraulic risers, stage roofs, and custom scenic fabrication.',
    specs: 'TUV-certified load rated aluminum structures up to 25m spans'
  },
  {
    icon: 'Zap',
    title: 'SFX & Pyrotechnics',
    tag: 'Atmospheric Effects',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Indoor cold spark fountain machines, low-lying heavy dry ice fog clouds, high-velocity CO2 cryo jets, flame projectors, and confetti storm cannons.',
    specs: 'Safe, non-toxic, fire-marshal certified atmospheric special effects'
  },
  {
    icon: 'Radio',
    title: 'Live Broadcast & Multi-Cam',
    tag: '4K Multi-Cam & Stream',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    description: 'Full HD/4K robotic and operated camera packages, wireless video transmitters, ISO-recording, and low-latency international multi-platform streaming.',
    specs: 'Sony FX / Blackmagic 4K studio chains with dedicated stream encoders'
  }
];
