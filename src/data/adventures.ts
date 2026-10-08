export interface Adventure {
  id: string;
  title: string;
  price: string;
  currency?: 'INR' | 'USD';
  priceInr?: string;
  priceUsd?: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  duration: string;
  difficulty: string;
  category: 'Himalayan' | 'Desert' | 'Snow' | 'Jungle' | 'Camping';
  highlights: string[];
  itinerary: { 
    day: number | string; 
    title: string; 
    description: string;
    details?: {
      elevation?: string;
      distance?: string;
      hikingTime?: string;
      habitat?: string;
      meals?: string;
      lodging?: string;
    }
  }[];
  inclusions?: string[];
  exclusions?: string[];
}

export const adventures: Adventure[] = [
  {
    id: '1',
    title: 'Conquer the Roof of Africa in Just 6 Days',
    price: '₹1,89,000',
    location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/RoofOfAfrica1.jpg',
    description: 'Mount Kilimanjaro is the highest mountain in Africa and the highest single free-standing mountain in the world.',
    duration: '6 Days',
    difficulty: 'Challenging',
    category: 'Snow',
    highlights: ['Uhuru Peak Summit', 'Stunning Sunrises', 'Diverse Ecosystems', 'Expert Guides'],
    itinerary: [
      { day: 1, title: 'Machame Gate to Machame Camp', description: 'Begin your journey through lush rainforests.' }
    ]
  },
  {
    id: '2',
    title: 'Conquer the Roof of the World - Everest Expedition',
    price: '₹38,00,000',
    location: 'Mount Everest, Nepal',
    rating: 5,
    image: '/image/RoofofEverest.jpg',
    description: 'The ultimate adventure. Standing at 8,848.86m, Everest is the highest point on Earth.',
    duration: '60 Days',
    difficulty: 'Extreme',
    category: 'Himalayan',
    highlights: ['Khumbu Icefall', 'South Col', 'Hillary Step', 'World Record Achievement'],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Gear check and briefing.' }
    ]
  },
  {
    id: '4',
    title: 'Kedarkantha Winter Trek - The Snow Paradise',
    price: '₹14,500',
    location: 'Uttarakhand, India',
    rating: 4.8,
    image: '/image/Kedarnath.jpg',
    description: 'Kedarkantha is one of the most popular winter treks in India.',
    duration: '6 Days',
    difficulty: 'Easy to Moderate',
    category: 'Snow',
    highlights: ['Juda Ka Talab', 'Summit Sunrise', 'Pine Forests', 'Snow Slopes'],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: 'Long drive through scenic mountains.' }
    ]
  },
  {
    id: '5',
    title: 'Roopkund Trek - The Skeleton Lake Adventure',
    price: '₹18,000',
    location: 'Uttarakhand, India',
    rating: 4.9,
    image: '/image/RoopkundTrek.jpg',
    description: 'A trek shrouded in mystery. Roopkund lake is famous for the hundreds of human skeletons found at its edge.',
    duration: '8 Days',
    difficulty: 'Moderate to Difficult',
    category: 'Himalayan',
    highlights: ['Skeleton Lake', 'Ali & Bedni Bugyal', 'Junargali Pass', 'Mt Trishul Views'],
    itinerary: [
      { day: 1, title: 'Kathgodam to Lohajung', description: 'Scenic drive to the base village.' }
    ]
  },
  {
    id: '8',
    title: 'Chadar Frozen River Trek - Leh Ladakh',
    price: '₹35,000',
    location: 'Leh Ladakh, India',
    rating: 5,
    image: '/image/ChadarFrozenRiverTrek.jpg',
    description: 'Walking on the frozen Zanskar river is a once-in-a-lifetime experience.',
    duration: '9 Days',
    difficulty: 'Difficult',
    category: 'Snow',
    highlights: ['Walking on Ice', 'Nerak Waterfall', 'Caves', 'Sub-zero Temperatures'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Full day rest for acclimatization.' }
    ]
  },
  {
    id: '101',
    title: 'Valley of Flowers Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.9,
    image: '/image/ValleyofFlowers.jpg',
    description: 'A UNESCO World Heritage site known for its meadows of endemic alpine flowers.',
    duration: '6 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Alpine Flowers', 'UNESCO Site', 'Hemkund Sahib', 'Snowy Peaks'],
    itinerary: [{ day: 1, title: 'Haridwar to Joshimath', description: 'Scenic drive.' }]
  },
  {
    id: '102',
    title: 'Aconcagua',
    price: '₹6,99,000',
    location: 'Mendoza, Argentina',
    rating: 4.9,
    image: '/image/Aconcagua.jpg',
    description: 'Stand at the summit of Aconcagua — the highest peak in the Western and Southern Hemispheres. Rising majestically to 6,961m in the Argentine Andes, this legendary "Stone Sentinel" is the crown jewel of the Seven Summits and a defining moment for any high-altitude mountaineer.',
    duration: '21 Days',
    difficulty: 'Extreme',
    category: 'Snow',
    highlights: ['Seven Summits Achievement', '6,961m Summit Push', 'Andes Traverse', 'Plaza de Mulas Base Camp', 'Professional High-Altitude Team'],
    itinerary: [
      { day: 1, title: 'Arrival in Mendoza', description: 'Transfer to hotel. Equipment check, medical briefing, and welcome dinner with expedition team.' },
      { day: 2, title: 'Penitentes to Confluencia', description: 'Drive into the Andes. Begin trek through dramatic arid canyons to Confluencia base camp (3,400m).' },
      { day: 3, title: 'Confluencia Acclimatization Hike', description: 'Acclimatization rotation to Plaza Francia viewpoint. Return to Confluencia for rest.' },
      { day: 4, title: 'Confluencia to Plaza de Mulas', description: 'Full trekking day along the Horcones Valley. Reach Plaza de Mulas base camp (4,370m).' },
      { day: '5-8', title: 'Rotations & Acclimatization', description: 'Carry rotations to Camp 1 (5,000m) and Camp 2 (5,500m). Build red blood cells and adapt to altitude.' },
      { day: 9, title: 'Move to Camp 1 (Canada)', description: 'Permanent move to Camp 1 at 5,000m. Rest and hydrate for the higher camps.' },
      { day: 10, title: 'Move to Camp 2 (Nido)', description: 'Climb to Nido de Condores Camp at 5,600m. Settle in, watch the condors soar.' },
      { day: 11, title: 'Move to Camp 3 (Colera)', description: 'Move to high camp Colera (6,000m). Rest, breathe, prepare mentally for summit day.' },
      { day: 12, title: 'SUMMIT DAY — Aconcagua (6,961m)', description: 'Midnight departure. 10-12 hour push to the roof of the Americas via the Normal Route. Descend to Camp 2.' },
      { day: 13, title: 'Descent to Plaza de Mulas', description: 'Return to base camp. Celebrate the achievement with a hot meal.' },
      { day: 14, title: 'Trek Out to Penitentes', description: 'Descend the Horcones Valley. Vehicle transfer back to Mendoza for well-deserved showers and hotel.' },
      { day: 15, title: 'Rest & Recovery Day', description: 'Free day in Mendoza. Optional city tour, winery visit, or pure rest.' },
      { day: '16-21', title: 'Weather & Summit Buffer', description: 'Reserve days for high-altitude weather windows, airlift support, and flexible scheduling on a challenging mountain.' }
    ]
  },
  {
    id: '103',
    title: 'Mount Kosciuszko Trek',
    price: '₹1,42,000',
    location: 'New South Wales, Australia',
    rating: 4.7,
    image: '/image/MountKosciuszko.jpg',
    description: 'Trek to the summit of Mount Kosciuszko — the highest mountain in mainland Australia at 2,228m. Located in the breathtaking Snowy Mountains of Kosciuszko National Park, this accessible alpine summit rewards hikers with wildflower meadows, glacial lakes, and panoramic views of the Australian Alps.',
    duration: '6 Days',
    difficulty: 'Easy to Moderate',
    category: 'Himalayan',
    highlights: ['Australia\'s Highest Summit', 'Mainland Alps Panorama', 'Snowy Mountains Heritage', 'Alpine Wildflowers', 'Lake Cootapatamba Glacial Lake'],
    itinerary: [
      { day: 1, title: 'Arrive in Sydney', description: 'Arrival in Sydney. Transfer to hotel. Evening welcome briefing and Australian alpine dinner.' },
      { day: 2, title: 'Sydney to Jindabyne', description: 'Domestic flight or private transfer to Jindabyne (Snowy Mountains). Overnight at mountain lodge, gear check.' },
      { day: 3, title: 'Thredbo to Charlotte Pass', description: 'Transfer to Thredbo. Chairlift to Eagles Nest. Begin high-country trek. Overnight at historic Charlotte Pass (1,760m).' },
      { day: 4, title: 'SUMMIT DAY — Mount Kosciuszko (2,228m)', description: '13km return summit walk. Summit push past Lake Cootapatamba, Australia\'s highest glacial lake. 360 views at the top. Return to Charlotte Pass.' },
      { day: 5, title: 'Kosciuszko Walk & Snowy River', description: 'Relaxed exploration day. Optional Mount Townsend lookout walk or Snowy River heritage trail. Lodge farewell dinner.' },
      { day: 6, title: 'Return to Sydney & Depart', description: 'Morning transfer back to Sydney via Cooma. Connect with departure flights or extend stay in Sydney.' }
    ]
  },
  {
    id: '104',
    title: 'Mount Vinson Expedition',
    price: '₹59,00,000',
    location: 'Sentinel Range, Antarctica',
    rating: 5,
    image: '/image/MountVinson.jpg',
    description: 'Embark on the ultimate polar expedition to Mount Vinson Massif — the highest mountain on the Antarctic continent at 4,892m. This remote, brutally cold, and logistically complex Seven Summits challenge combines Antarctic logistics, over-snow travel, and a stunning alpine summit deep within the pristine Sentinel Range.',
    duration: '18 Days',
    difficulty: 'Extreme',
    category: 'Snow',
    highlights: ['Seven Summits Antarctica', '4,892m Vinson Summit', 'Union Glacier Camp', 'IL-76 Ice Runway Flight', 'Sentinel Range Beauty', 'Extreme Cold Survival'],
    itinerary: [
      { day: 1, title: 'Arrive in Punta Arenas, Chile', description: 'Gateway to the White Continent. Full expedition briefing, extreme-gear fitting, and medical examination at the southern tip of South America.' },
      { day: 2, title: 'Flight to Union Glacier (Antarctica)', description: 'Historic 5-hour Ilyushin IL-76 cargo flight over the Drake Passage. Land on the blue-ice runway at Union Glacier Camp. Settle into polar tents.' },
      { day: 3, title: 'Union Glacier Acclimatization', description: 'Base-day orientation. Snowmobiling intro, crevasse rescue drills, and practice roping up on the nearby Vinson Massif glacier tongue.' },
      { day: 4, title: 'Fly to Vinson Base Camp', description: 'Ski-plane or Twin Otter flight to Vinson Base Camp (2,100m). Land directly on the Branscomb Glacier. Organize high-altitude loads.' },
      { day: 5, title: 'Move to Low Camp (2,800m)', description: 'Rope teams form. Hike and climb fixed lines to Low Camp. Polar-grade tents dug into wind-protected snow trenches.' },
      { day: 6, title: 'Carry to High Camp Rotation', description: 'Acclimatization carry through the Headwall and up the 35-degree valley towards High Camp (3,800m). Cache equipment, descend to Low.' },
      { day: 7, title: 'Move to High Camp (3,800m)', description: 'Permanent move up to High Camp. Rest, hydrate, and prepare for summit push in -40°C temperatures.' },
      { day: 8, title: 'SUMMIT DAY — Vinson Massif (4,892m)', description: 'Pre-dawn departure. Long summit push up the west face. 8-10 hours round trip. Celebrate on the rooftop of Antarctica. Descend to High Camp.' },
      { day: 9, title: 'Descent to Base Camp', description: 'Descend Branscomb Glacier back to Vinson Base. Pack camp for flight back to Union Glacier.' },
      { day: 10, title: 'Return to Union Glacier Camp', description: 'Ski-plane flight out of Vinson Massif. Welcome back at Union Glacier main camp with celebratory polar dinner.' },
      { day: 11, title: 'Union Glacier to Punta Arenas', description: 'Weather permitting, return IL-76 flight to Chile. Hotel night with showers, sauna, and real food.' },
      { day: '12-18', title: 'Weather Contingency & Departure', description: 'Critical 7-day Antarctic weather buffer. Blue-ice runways and polar flight schedules depend on conditions. Connect with international departures from Punta Arenas.' }
    ]
  },
  {
    id: '105',
    title: 'Mount Denali Expedition',
    price: '₹11,99,000',
    location: 'Denali National Park, Alaska, USA',
    rating: 5,
    image: '/image/MountDenali.jpg',
    description: 'Test yourself against the Great One — Mount Denali (formerly McKinley), the highest peak in North America at 6,190m. Climbing via the classic West Buttress route demands Arctic stamina, glacier crevasse rescue, and a full 14,000ft camp to 17,200ft high camp push in brutal sub-zero conditions. A legendary Seven Summits crown jewel.',
    duration: '22 Days',
    difficulty: 'Extreme',
    category: 'Snow',
    highlights: ['North America\'s Highest Peak', 'West Buttress Classic Route', 'Kahiltna Glacier Base Camp', '17,200ft High Camp', 'Denali Pass Summit Push', 'Alaskan Range Awe'],
    itinerary: [
      { day: 1, title: 'Arrive in Anchorage, Alaska', description: 'Gateway city arrival. Full medical, gear inspection, Denali National Park briefing, and expedition welcome dinner.' },
      { day: 2, title: 'Anchorage to Talkeetna', description: 'Drive 120 miles north to Talkeetna. Air taxi weight & gear sorting. Flightseeing briefing to the glacier.' },
      { day: 3, title: 'Fly to Base Camp — Kahiltna Glacier (2,200m)', description: 'Bush plane flight onto the Kahiltna Glacier runway. Build Base Camp at 7,200ft. Establish kitchen and gear cache.' },
      { day: 4, title: 'Carry to Camp 1 (3,050m)', description: 'First load carry up Ski Hill past crevasse fields to Camp 1 at 10,000ft. Return to Base Camp, sleep low.' },
      { day: 5, title: 'Move to Camp 1 (3,050m)', description: 'Permanent move up to Camp 1. Settle into team tents on the wind-exposed ridge.' },
      { day: 6, title: 'Carry to Camp 2 (3,400m)', description: 'Heavy load carry through Motorcycle Hill to Camp 2 at 11,200ft. Bury and cache food/fuel.' },
      { day: 7, title: 'Move to Camp 2 (3,400m)', description: 'Team move up. 11,200ft is the "bust stop" — the largest and most social camp on the mountain.' },
      { day: 8, title: 'Rest & Rescue Practice Day', description: 'Active rest day. Crevasse extraction drills on the Kahiltna. Prep for the 14k push.' },
      { day: 9, title: 'Carry to Camp 3 — 14,000ft (4,270m)', description: 'Iconic carry up the Squirrel, past Windy Corner to 14,200ft basin. Build snow walls, cache gear, descend to 11,200ft.' },
      { day: 10, title: 'Move to Camp 3 (4,270m)', description: 'Full team move to 14,000ft camp. Medical checks and acclimatization assessment before the headwall.' },
      { day: 11, title: 'Rest at 14,000ft + Foraker Hike', description: 'Acclimatization hike around the basin. Stunning views of Mount Foraker and Mount Hunter.' },
      { day: 12, title: 'Carry to High Camp — 17,200ft (5,240m)', description: 'The technical Headwall climb with fixed lines up to 16,200ft, then traverse to 17,200ft basin. Cache, descend to 14k.' },
      { day: 13, title: 'Move to High Camp (5,240m)', description: 'Final move up to High Camp at 17,200ft. Oxygen on-hand from here. Weather window watch begins.' },
      { day: 14, title: 'Weather & Summit Watch', description: 'Standby day at 17,200ft. Monitor forecasts for a Denali Pass summit weather window.' },
      { day: 15, title: 'SUMMIT DAY — Denali (6,190m)', description: 'Early morning start. Climb Denali Pass, traverse Autobahn, then Pig Hill to the Summit Plateau. Reach the rooftop of North America (20,310ft). Descend back to High Camp (12-18 hours).' },
      { day: 16, title: 'Summit Contingency Day', description: 'Reserve summit day. If summit was delayed, push today. Otherwise rest and recover.' },
      { day: 17, title: 'Descent to 14,000ft Camp', description: 'Headwall rappel back to 14,000ft. Celebratory hot meal and radio call to Talkeetna Air Taxi.' },
      { day: 18, title: 'Return to Base Camp', description: 'Controlled descent through all camps back to Kahiltna Glacier Base Camp at 7,200ft.' },
      { day: 19, title: 'Fly Out to Talkeetna', description: 'De-construct base camp. Weather-permitting ski-plane flight back to Talkeetna. Hotel night, showers, and steak dinner.' },
      { day: 20, title: 'Return to Anchorage', description: 'Drive back to Anchorage. Return expedition gear. Celebratory Seven Summits banquet.' },
      { day: '21-22', title: 'Weather Buffer & Departure', description: 'Two additional weather and de-icing days for glacier flight scheduling. International departures from Anchorage.' }
    ]
  },
  {
    id: '106',
    title: 'Kailas Manassarovar Yatra',
    price: '₹2,30,000',
    location: 'Tibet Autonomous Region, China',
    rating: 5,
    image: '/image/KailasManassarovar.webp',
    description: 'Embark on the most sacred pilgrimage in the Himalayas — the legendary Kailash Manasarovar Yatra. Circumnavigate Mount Kailash (6,638m), the mystical abode of Lord Shiva, and take a holy dip in Lake Manasarovar, the highest freshwater lake on the Tibetan plateau. A transformative spiritual journey across high passes, monasteries, and ancient trade routes of western Tibet.',
    duration: '14 Days',
    difficulty: 'Challenging',
    category: 'Himalayan',
    highlights: ['Mount Kailash Parikrama', 'Holy Lake Manasarovar Dip', 'Darchen Base Camp', 'Yama Dwar to Dolma La Pass', 'Gauri Kund Sacred Lake', 'Tibetan Buddhist Monasteries', 'Tibet Chinese Visa & Permits'],
    itinerary: [
      { day: 1, title: 'Arrive in Kathmandu, Nepal', description: 'Tibetan liaison office briefing. Welcome dinner, yatra passport, permit collection, and sacred yatra orientation.' },
      { day: 2, title: 'Kathmandu to Nyalam (Tibet)', description: 'Drive to the Nepal-Tibet border at Rasuwa Gadhi. Cross into China\'s Tibet region. Overnight at scenic Nyalam town (3,750m).' },
      { day: 3, title: 'Nyalam Acclimatization Day', description: 'Rest day for altitude acclimatization. Short walks around the Tibetan town, visit local monastery, Tibetan butter tea welcome.' },
      { day: 4, title: 'Nyalam to Saga', description: 'Long drive over 5,100m Lalung-La pass onto the Tibetan high plateau. Cross the mighty Brahmaputra (Yarlung Tsangpo). Reach Saga (4,400m).' },
      { day: 5, title: 'Saga to Paryang / Hor Qu', description: 'Drive across open Changthang plateau, past yak and nomadic encampments. Arrive at Manasarovar lake region (4,500m).' },
      { day: 6, title: 'Lake Manasarovar Parikrama & Holy Dip', description: 'Sacred circumambulation of Lake Manasarovar. Take a ritual holy dip (snan) at the ghats. Visit Chiu Gompa monastery perched above the lake.' },
      { day: 7, title: 'Rakshas Tal & Drive to Darchen', description: 'Visit the mysterious Rakshas Tal (Demon Lake) nearby. Drive to Darchen (4,680m), the base camp and starting point of Kailash Parikrama.' },
      { day: 8, title: 'Day 1 of Kailash Parikrama: Darchen to Dirapuk', description: 'Begin the sacred 3-day clockwise kora around Mount Kailash. Trek 18km past Yam Dwar (Yama\'s Gate) and the Buddha footprint. Overnight at Dirapuk Gompa (4,860m).' },
      { day: 9, title: 'Day 2: Dirapuk to Zuthulphuk (Cross Dolma La 5,630m)', description: 'The most dramatic day. Climb 770m to Dolma-La Pass (5,630m), the highest point of the yatra. Pray at Gauri Kund (Parvati Sarovar), descent to Zuthulphuk Monastery (4,790m).' },
      { day: 10, title: 'Day 3: Zuthulphuk Back to Darchen', description: 'Final 12km gentle descent along the Lha Chu river valley. Complete the 52km Kailash parikrama. Vehicle transfer back to Darchen. Celebrate yatra completion.' },
      { day: 11, title: 'Darchen → Hor Qu → Saga', description: 'Return drive from the Kailash-Manasarovar region. Stop en route at Tirthapuri hot springs and monasteries. Overnight at Saga.' },
      { day: 12, title: 'Saga to Nyalam', description: 'Descend the Tibetan plateau back to Nyalam. Farewell Tibetan dinner with the yatra team.' },
      { day: 13, title: 'Nyalam to Kathmandu', description: 'Cross back into Nepal at Rasuwa Gadhi. Drive to Kathmandu. Transfer to hotel. Prasad and yatra completion certificates distributed.' },
      { day: 14, title: 'Departure from Kathmandu', description: 'Free morning for Pashupatinath temple or Boudhanath stupa visit. Transfer to Tribhuvan International airport for onward departure flights.' }
    ]
  },
  {
    id: '107',
    title: 'Kuari Pass Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.8,
    image: '/image/KuariPassTrek.jpg',
    description: 'Known as the Lord Curzon Trail, offering 360-degree views of the Garhwal Himalayas.',
    duration: '6 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Nanda Devi View', 'Oak Forests', 'Gorson Bugyal'],
    itinerary: [{ day: 1, title: 'Haridwar to Joshimath', description: 'Scenic drive.' }]
  },
  {
    id: '108',
    title: 'Rupin Pass Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand/Himachal Pradesh, India',
    rating: 5,
    image: '/image/RupinPass.jpg',
    description: 'A high altitude pass trek that starts in Uttarakhand and ends in Himachal Pradesh.',
    duration: '9 Days',
    difficulty: 'Challenging',
    category: 'Himalayan',
    highlights: ['Three Stage Waterfall', 'Pass Crossing', 'Snow Bridge'],
    itinerary: [{ day: 1, title: 'Dehradun to Dhaula', description: 'Starting point drive.' }]
  },
  {
    id: '109',
    title: 'Tarsar Marsar Trek',
    price: 'Please Contact to team for more details',
    location: 'Kashmir, India',
    rating: 5,
    image: '/image/TarsarMarsa.jpg',
    description: 'Experience the pristine beauty of the twin alpine lakes in the heart of Kashmir.',
    duration: '7 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Twin Lakes', 'Kashmiri Meadows', 'Snow Peaks'],
    itinerary: [{ day: 1, title: 'Srinagar to Aru', description: 'Gateway to the lakes.' }]
  },
  {
    id: '110',
    title: 'Markha Valley Trek',
    price: 'Please Contact to team for more details',
    location: 'Ladakh, India',
    rating: 4.9,
    image: '/image/MarkhaValley.jpg',
    description: 'A popular trek in Ladakh, passing through high passes and ancient Buddhist monasteries.',
    duration: '9 Days',
    difficulty: 'Challenging',
    category: 'Himalayan',
    highlights: ['Kongmaru La Pass', 'Ladakhi Culture', 'Hemis National Park'],
    itinerary: [{ day: 1, title: 'Leh Acclimatization', description: 'Preparing for the altitude.' }]
  },
  {
    id: '111',
    title: 'Buran Ghati Trek',
    price: 'Please Contact to team for more details',
    location: 'Himachal Pradesh, India',
    rating: 4.9,
    image: '/image/BuranGhati.jpg',
    description: 'A perfect adventure trek with deep forests, meadows, and a thrilling pass crossing.',
    duration: '7 Days',
    difficulty: 'Challenging',
    category: 'Himalayan',
    highlights: ['Chandranahan Lake', 'Pass Descent', 'Pine Forests'],
    itinerary: [{ day: 1, title: 'Shimla to Janglik', description: 'Remote village drive.' }]
  },
  {
    id: '112',
    title: 'Bali Pass Trek',
    price: '₹Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 5,
    image: '/image/BaliPass.jpg',
    description: 'Connects the Tons river valley with the Yamuna river valley over a high pass.',
    duration: '8 Days',
    difficulty: 'Extreme',
    category: 'Himalayan',
    highlights: ['Ruinsara Lake', 'Bali Pass Summit', 'Yamunotri Temple'],
    itinerary: [{ day: 1, title: 'Dehradun to Sankri', description: 'Expedition start.' }]
  },
  {
    id: '113',
    title: 'Pin Parvati Pass Trek',
    price: 'Please Contact to team for more details',
    location: 'Himachal Pradesh, India',
    rating: 5,
    image: '/image/PinParvatiPass.jpg',
    description: 'One of the most challenging and rewarding treks in the Indian Himalayas.',
    duration: '11 Days',
    difficulty: 'Extreme',
    category: 'Himalayan',
    highlights: ['Mantalai Lake', 'Pass Crossing', 'Spiti Landscape'],
    itinerary: [{ day: 1, title: 'Manali to Barsheni', description: 'Entering Parvati Valley.' }]
  },
  {
    id: '114',
    title: 'Gaumukh Tapovan Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.9,
    image: '/image/GaumukhTapovan.jpg',
    description: 'Trek to the source of the Holy Ganges and the high altitude meadow of Tapovan.',
    duration: '7 Days',
    difficulty: 'Moderate to Difficult',
    category: 'Himalayan',
    highlights: ['Gangotri Glacier', 'Mt Shivling View', 'Holy Source'],
    itinerary: [{ day: 1, title: 'Rishikesh to Uttarkashi', description: 'Sacred journey.' }]
  },
  {
    id: '115',
    title: 'Pangarchulla Peak Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.8,
    image: '/image/PangarchullaPeak.jpg',
    description: 'A summit climb trek offering a great introduction to mountaineering.',
    duration: '6 Days',
    difficulty: 'Difficult',
    category: 'Himalayan',
    highlights: ['Summit Climb', 'Nanda Devi View', 'Snow Ridges'],
    itinerary: [{ day: 1, title: 'Haridwar to Joshimath', description: 'Summit base drive.' }]
  },
  {
    id: '116',
    title: 'Zanskar Valley Expedition',
    price: 'Please Contact to team for more details',
    location: 'Ladakh, India',
    rating: 5,
    image: '/image/ZanskarValley.jpg',
    description: 'Explore the remote and ancient kingdom of Zanskar, one of the last true wildernesses.',
    duration: '14 Days',
    difficulty: 'Extreme',
    category: 'Desert',
    highlights: ['Phugtal Monastery', 'Shinkula Pass', 'Remote Villages'],
    itinerary: [{ day: 1, title: 'Manali to Jispa', description: 'Leh-Manali Highway.' }]
  },
  {
    id: '117',
    title: 'Munsiyari Milam Glacier Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.7,
    image: '/image/MunsiyariMilamGlacier.jpg',
    description: 'A historic trade route trek to one of the largest glaciers in the Kumaon region.',
    duration: '10 Days',
    difficulty: 'Moderate to Difficult',
    category: 'Himalayan',
    highlights: ['Milam Glacier', 'Panchachuli Peaks', 'Johar Valley'],
    itinerary: [{ day: 1, title: 'Kathgodam to Munsiyari', description: 'Long Himalayan drive.' }]
  },
  {
    id: '118',
    title: 'Bhrigu Lake Trek',
    price: 'Please Contact to team for more details',
    location: 'Himachal Pradesh, India',
    rating: 4.6,
    image: '/image/BhriguLake.jpg',
    description: 'A short trek to a sacred high-altitude lake that never fully freezes.',
    duration: '4 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Sacred Lake', 'Alpine Meadows', 'Solang Valley Views'],
    itinerary: [{ day: 1, title: 'Manali to Gulaba', description: 'Short drive to start.' }]
  },
  {
    id: '119',
    title: 'Dayara Bugyal Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.8,
    image: '/image/DayaraBugyal.jpg',
    description: 'One of the most beautiful high-altitude meadows in India, perfect for beginners.',
    duration: '5 Days',
    difficulty: 'Easy to Moderate',
    category: 'Himalayan',
    highlights: ['High Meadows', 'Barnala Lake', 'Peak Panoramas'],
    itinerary: [{ day: 1, title: 'Dehradun to Raithal', description: 'Scenic village start.' }]
  },
  {
    id: '120',
    title: 'Pindari Glacier Trek',
    price: 'Please Contact to team for more details',
    location: 'Uttarakhand, India',
    rating: 4.7,
    image: '/image/PindariGlacier.jpg',
    description: 'A classic trek in the Kumaon region leading to the snout of the Pindari glacier.',
    duration: '7 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Zero Point', 'Kumaoni Culture', 'Pindar River'],
    itinerary: [{ day: 1, title: 'Kathgodam to Lohajung', description: 'Classic route start.' }]
  },
  {
    id: '201',
    title: 'Machu Picchu Inca Trail',
    price: 'Please Contact to team for more details',
    location: 'Cusco, Peru',
    rating: 5,
    image: '/image/MachuPicchuInca.jpg',
    description: 'Trek the legendary Inca Trail to the Lost City of the Incas.',
    duration: '4 Days',
    difficulty: 'Moderate',
    category: 'Camping',
    highlights: ['Sun Gate', 'Ancient Ruins', 'Cloud Forests'],
    itinerary: [{ day: 1, title: 'Cusco to Wayllabamba', description: 'Inca Trail start.' }]
  },
  {
    id: '202',
    title: 'Patagonia W-Trek',
    price: 'Please Contact to team for more details',
    location: 'Torres del Paine, Chile',
    rating: 5,
    image: '/image/PatagoniaW.jpg',
    description: 'Experience the dramatic granite towers and glaciers of Chilean Patagonia.',
    duration: '5 Days',
    difficulty: 'Moderate',
    category: 'Snow',
    highlights: ['Grey Glacier', 'French Valley', 'The Towers'],
    itinerary: [{ day: 1, title: 'Puerto Natales to Paine', description: 'Entering the park.' }]
  },
  {
    id: '204',
    title: 'Annapurna Base Camp',
    price: 'Please Contact to team for more details',
    location: 'Annapurna, Nepal',
    rating: 4.9,
    image: '/image/AnnapurnaBase.jpg',
    description: 'Trek to the heart of the Annapurna massif for a 360-degree mountain view.',
    duration: '10 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Machapuchare View', 'Hot Springs', 'Base Camp'],
    itinerary: [{ day: 1, title: 'Pokhara to Ghandruk', description: 'Gurung village start.' }]
  },
  {
    id: '205',
    title: 'Iceland Laugavegur Trail',
    price: 'Please Contact to team for more details',
    location: 'Landmannalaugar, Iceland',
    rating: 4.9,
    image: '/image/IcelandLaugavegurTrail.jpg',
    description: 'Hike through volcanic landscapes, glaciers, and colorful rhyolite mountains.',
    duration: '4 Days',
    difficulty: 'Moderate',
    category: 'Snow',
    highlights: ['Geothermal Areas', 'Volcanic Deserts', 'Thorsmork Valley'],
    itinerary: [{ day: 1, title: 'Reykjavik to Landmannalaugar', description: 'Highland bus journey.' }]
  },
  {
    id: '206',
    title: 'Dolomites High Alta Via 1',
    price: 'Please Contact to team for more details',
    location: 'Cortina, Italy',
    rating: 5,
    image: '/image/DolomitesHighAlta.jpg',
    description: 'A stunning trek through the dramatic limestone peaks of the Italian Dolomites.',
    duration: '8 Days',
    difficulty: 'Challenging',
    category: 'Camping',
    highlights: ['Refugio Stays', 'Cinque Torri', 'Mountain Lakes'],
    itinerary: [{ day: 1, title: 'Lago di Braies start', description: 'Iconic lake start.' }]
  },
  {
    id: '207',
    title: 'Milford Track',
    price: 'Please Contact to team for more details',
    location: 'Fiordland, New Zealand',
    rating: 5,
    image: '/image/MilfordTrack.jpg',
    description: 'Described as "the finest walk in the world" through New Zealand\'s Fiordland.',
    duration: '4 Days',
    difficulty: 'Moderate',
    category: 'Jungle',
    highlights: ['Sutherland Falls', 'Mackinnon Pass', 'Milford Sound'],
    itinerary: [{ day: 1, title: 'Te Anau to Glade House', description: 'Boat to track start.' }]
  },
  {
    id: '208',
    title: 'Mount Fuji Summit',
    price: 'Please Contact to team for more details',
    location: 'Fujinomiya, Japan',
    rating: 4.8,
    image: '/image/MountFuji.jpg',
    description: 'Climb Japan\'s iconic volcano for a legendary sunrise view above the clouds.',
    duration: '2 Days',
    difficulty: 'Moderate',
    category: 'Snow',
    highlights: ['Goraiko Sunrise', 'Crater Walk', 'Iconic Summit'],
    itinerary: [{ day: 1, title: '5th Station to 8th Station', description: 'Mountain hut stay.' }]
  },
  {
    id: '209',
    title: 'Swiss Alps Eiger Trail',
    price: 'Please Contact to team for more details',
    location: 'Grindelwald, Switzerland',
    rating: 4.9,
    image: '/image/SwissAlpsEigerTrail.jpg',
    description: 'Hike directly under the famous Eiger North Face for world-class alpine views.',
    duration: '3 Days',
    difficulty: 'Moderate',
    category: 'Himalayan',
    highlights: ['Eiger North Face', 'Jungfrau Region', 'Alpine Meadows'],
    itinerary: [{ day: 1, title: 'Grindelwald to Alpiglen', description: 'Alpine village start.' }]
  },
  {
    id: '211',
    title: 'Grand Canyon Rim-to-Rim',
    price: 'Please Contact to team for more details',
    location: 'Arizona, USA',
    rating: 5,
    image: '/image/GrandCanyon.jpg',
    description: 'A life-changing journey from one rim of the Grand Canyon to the other.',
    duration: '3 Days',
    difficulty: 'Extreme',
    category: 'Desert',
    highlights: ['Phantom Ranch', 'Colorado River', 'Geologic History'],
    itinerary: [{ day: 1, title: 'North Rim to Cottonwood', description: 'Deep canyon descent.' }]
  },
  {
    id: '212',
    title: 'Tanzania Serengeti Safari',
    price: '₹Please Contact to team for more details',
    location: 'Serengeti, Tanzania',
    rating: 5,
    image: '/image/TanzaniaSerengetiSafari.jpg',
    description: 'Witness the Great Migration and the Big Five in the world\'s most famous park.',
    duration: '7 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Great Migration', 'Big Five', 'Luxury Camping'],
    itinerary: [{ day: 1, title: 'Arusha to Serengeti', description: 'Bush flight arrival.' }]
  },
  {
    id: '213',
    title: 'Galapagos Island Hopping',
    price: 'Please Contact to team for more details',
    location: 'Galapagos, Ecuador',
    rating: 5,
    image: '/image/GalapagosIslandHopping.jpg',
    description: 'Discover the unique wildlife that inspired Charles Darwin\'s theory of evolution.',
    duration: '8 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Giant Tortoises', 'Marine Iguanas', 'Snorkeling'],
    itinerary: [{ day: 1, title: 'Quito to Baltra', description: 'Island arrival.' }]
  },
  {
    id: '214',
    title: 'Jordan Petra & Wadi Rum',
    price: 'Please Contact to team for more details',
    location: 'Wadi Rum, Jordan',
    rating: 4.9,
    image: '/image/JordanPetra.jpg',
    description: 'Explore the ancient Rose City of Petra and camp in the majestic desert of Wadi Rum.',
    duration: '6 Days',
    difficulty: 'Moderate',
    category: 'Desert',
    highlights: ['The Treasury', 'Bedouin Camping', 'Star Gazing'],
    itinerary: [{ day: 1, title: 'Amman to Petra', description: 'Ancient history start.' }]
  },
  {
    id: '215',
    title: 'Norway Preikestolen Hike',
    price: 'Please Contact to team for more details',
    location: 'Stavanger, Norway',
    rating: 4.9,
    image: '/image/NorwayPreikestolenHike.jpg',
    description: 'Hike to the famous Pulpit Rock for a breathtaking view over Lysefjord.',
    duration: '3 Days',
    difficulty: 'Moderate',
    category: 'Snow',
    highlights: ['Pulpit Rock', 'Lysefjord View', 'Fjord Cruise'],
    itinerary: [{ day: 1, title: 'Stavanger to Preikestolen', description: 'Fjord adventure.' }]
  },
  {
    id: '216',
    title: 'Canadian Rockies Banf',
    price: 'Please Contact to team for more details',
    location: 'Alberta, Canada',
    rating: 5,
    image: '/image/CanadianRockiesBanf.jpg',
    description: 'Explore the turquoise lakes and towering peaks of Banff and Jasper National Parks.',
    duration: '7 Days',
    difficulty: 'Easy to Moderate',
    category: 'Snow',
    highlights: ['Lake Louise', 'Icefields Parkway', 'Glacier Walk'],
    itinerary: [{ day: 1, title: 'Calgary to Banff', description: 'Mountain town arrival.' }]
  },
  {
    id: '217',
    title: 'Australian Outback Red Centre',
    price: 'Please Contact to team for more details',
    location: 'Uluru, Australia',
    rating: 4.8,
    image: '/image/AustralianOutbackRedCentre.jpg',
    description: 'Discover the spiritual heart of Australia and the massive monolith of Uluru.',
    duration: '5 Days',
    difficulty: 'Moderate',
    category: 'Desert',
    highlights: ['Uluru Sunset', 'Kata Tjuta', 'Kings Canyon'],
    itinerary: [{ day: 1, title: 'Alice Springs arrival', description: 'Outback gateway.' }]
  },
  {
    id: '218',
    title: 'Amazon Rainforest Survival',
    price: 'Please Contact to team for more details',
    location: 'Manaus, Brazil',
    rating: 4.9,
    image: '/image/AmazonRainforestSurvival.jpg',
    description: 'Deep jungle immersion and survival training in the world\'s largest rainforest.',
    duration: '10 Days',
    difficulty: 'Extreme',
    category: 'Jungle',
    highlights: ['Jungle Trekking', 'Piranha Fishing', 'Indigenous Culture'],
    itinerary: [{ day: 1, title: 'Manaus to Jungle Lodge', description: 'Deep river journey.' }]
  },
  {
    id: '219',
    title: 'Antarctica Polar Expedition',
    price: 'Please Contact to team for more details',
    location: 'Antarctica',
    rating: 5,
    image: '/image/AntarcticaPolarExpedition.jpg',
    description: 'The ultimate bucket list expedition to the white continent at the bottom of the world.',
    duration: '12 Days',
    difficulty: 'Moderate',
    category: 'Snow',
    highlights: ['Drake Passage', 'Penguin Colonies', 'Iceberg Kayaking'],
    itinerary: [{ day: 1, title: 'Ushuaia Embarkation', description: 'Southernmost city start.' }]
  },
  {
    id: '220',
    title: 'Vietnam Ha Long Bay Kayak',
    price: 'Please Contact to team for more details',
    location: 'Ha Long, Vietnam',
    rating: 4.8,
    image: '/image/VietnamHaLongBayKayak.jpg',
    description: 'Paddle through the emerald waters and limestone karsts of a UNESCO World Heritage site.',
    duration: '4 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Hidden Caves', 'Floating Villages', 'Overnight Cruise'],
    itinerary: [{ day: 1, title: 'Hanoi to Ha Long', description: 'Bay arrival.' }]
  },
  {
    id: 'zanzibar-beach-3',
    title: '3 Days Zanzibar Beach stay',
    price: 'Please Contact to team for more details',
    location: 'Zanzibar, Tanzania',
    rating: 5,
    image: '/image/ZanzibarBeach.jpg',
    description: 'Stone Town is the ancient city and cultural heart of Zanzibar. One could simply meander through the winding alleys, bustling bazaars and mosques for countless hours. This tour captures the essence of Zanzibar by visiting iconic landmarks.',
    duration: '3 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Stone Town Tour', 'Forodhani Garden', 'Kendwa Beaches', 'Cultural Heritage'],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrive in Zanzibar', 
        description: 'Our driver will collect you from the airport and transport you to the hotel in Stone Town. Stone Town is the ancient city and cultural heart of Zanzibar. Optional Historical Stone Town tour visiting the House of Wonders, the Palace Museum, Dr Livingston’s house and the Arab Fort.',
        details: { lodging: 'Tembo House Hotel' }
      },
      { 
        day: 2, 
        title: 'Stone Town to Kendwa', 
        description: 'Optional spice tour in the morning. After midday, make our way to Kendwa to explore the finest Zanzibar beaches with golden sand and shimmering water. Optional visit to the Tortoise Island.',
        details: { lodging: 'Tembo House Hotel' }
      },
      { 
        day: 3, 
        title: 'Departure', 
        description: 'Enjoy a delicious breakfast before transportation to Zanzibar International airport where you will connect your flight.' 
      }
    ],
    inclusions: [
      'Accommodation B&B',
      'Return airport transfers',
      'Excursion fees',
      'Pickups and drop-offs',
      'Entrance fees',
      'Local Taxes, VAT',
      'English-speaking Tour Guide'
    ],
    exclusions: [
      'Local flights',
      'Tippings',
      'Extras on holidays',
      'Dinner and Lunch'
    ]
  },
  {
    id: 'zanzibar-beach-4',
    title: '4 Days Zanzibar Beach stay',
    price: 'Please Contact to team for more details',
     location: 'Zanzibar, Tanzania',
    rating: 5,
    image: '/image/ZanzibarBeach2.jpg',
    description: 'Experience the best of Zanzibar with beach relaxation, spice farm trips, and Stone Town exploration. Stay at the beautiful Sunset Kendwa Beach resort.',
    duration: '4 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Sunset Kendwa Beach', 'Spice Farm Trip', 'Stone Town Shopping', 'Private Island Excursions'],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival in Zanzibar', 
        description: 'Pick up from Zanzibar airport and transfer to Sunset Kendwa Beach resort. Meet our guide for briefings and all activities explained.',
        details: { lodging: 'Sunset Kendwa Beach resort' }
      },
      { 
        day: 2, 
        title: 'Beach Time and Free Space', 
        description: 'Individual space and beach relaxing at Sunset Kendwa Bungalow resort. Plan activities like water sports on your own.',
        details: { lodging: 'Sunset Kendwa Beach resort' }
      },
      { 
        day: 3, 
        title: 'Spice Farm Trip', 
        description: 'Excursion to spice and fruit plantations for the famous Spice Tour. Detailed description of traditional uses in medicine, cosmetics and cooking. Opulent lunch at our guides’ home.',
        details: { lodging: 'Tembo House Hotel' }
      },
      { 
        day: 4, 
        title: 'Airport Transfer', 
        description: 'Take a tour in Stone Town and do shopping. Transfer to airport (about one hour drive).' 
      }
    ],
    inclusions: [
      'One way Flight to Zanzibar',
      'All Airport and Ground transfers',
      'All lodging and meals as noted',
      'Private guides for island excursions',
      'Government taxes, VAT and service charges'
    ],
    exclusions: [
      'Tanzania VISA $50',
      'Extras at the hotel (drinks, snacks, laundry, etc.)',
      'Tipping'
    ]
  },
  {
    id: 'zanzibar-island-5',
    title: '5 Days Zanzibar Island',
    price: 'Please Contact to team for more details',
     location: 'Zanzibar, Tanzania',
    rating: 5,
    image: '/image/ZanzibarIsland.jpg',
    description: 'World Class Highlights: Zanzibar island Kendwa beaches, Stone town, Dolphin watching, spice tour.',
    duration: '5 Days',
    difficulty: 'Easy',
    category: 'Jungle',
    highlights: ['Dolphin Watching', 'Stone Town (UNESCO)', 'Spice Plantations', 'Romantic Sunsets'],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival & Transfer', 
        description: 'Arrive Zanzibar airport, clear immigration, pick up and transfer to Kendwa beach resort. Itinerary briefing and unique gifts.',
        details: { lodging: 'Kendwa Rock Beach Resort' }
      },
      { 
        day: 2, 
        title: 'Dolphin Watching', 
        description: 'Early morning trip in the North for Dolphin watching. Optional swimming with them. Afternoon lunch and beach walk.',
        details: { lodging: 'Sunset Kendwa Beach Resort' }
      },
      { 
        day: 3, 
        title: 'Beach Unwind', 
        description: 'Kendwa beach is the perfect place to unwind. Haven for underwater lovers with snorkeling or scuba diving.',
        details: { lodging: 'Sunset Kendwa Beach Resort' }
      },
      { 
        day: 4, 
        title: 'Stone Town & Spices', 
        description: 'Guided tour of Stone Town (UNESCO World Heritage Site). Trace footsteps of Arab Sultans and see actual Zanzibar doors. Afternoon tour of spice plantations.',
        details: { lodging: 'Tembo Hotel or Equivalent' }
      },
      { 
        day: 5, 
        title: 'Free Morning & Departure', 
        description: 'Shopping, relaxing in the pool or beach. Afternoon transfer to airport at 14:00.' 
      }
    ],
    inclusions: [
      'All Airport and Ground transfers',
      'All lodging and meals as noted',
      'Private guides for island excursions',
      'Government taxes, VAT and service charges'
    ],
    exclusions: [
      'Tanzania VISA $50',
      'Extras at the hotel',
      'Tipping'
    ]
  },
  {
    id: 'kilimanjaro-marangu-6',
    title: '6 Days Kilimanjaro Trek Marangu Route',
    price: 'Please Contact to team for more details',
     location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/-418.jpg',
    description: 'The Marangu Route is one of the most popular routes to the summit of Kilimanjaro, offering hut accommodation.',
    duration: '7 Days',
    difficulty: 'Challenging',
    category: 'Snow',
    highlights: ['Uhuru Peak Summit', 'Maundi Crater', 'Diverse Habitats', 'Hut Accommodation'],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival', 
        description: 'Pick up and transfer to the Keys Hotel. Pre-trek orientation.',
        details: { lodging: 'Keys Hotel' }
      },
      { 
        day: 2, 
        title: 'National Park Gate to Mandara Hut', 
        description: 'Drive to Kilimanjaro National Park entrance. Walk through rainforest to Mandara camp. Side trip to Maundi Crater for altitude adjustment.',
        details: { 
          elevation: '1860m/6100ft to 2700m/8875ft',
          distance: '8km/5mi',
          hikingTime: '3-4 hours',
          habitat: 'Montane Forest',
          meals: 'Lunch/ Dinner (LD)',
          lodging: 'Mandara Hut'
        }
      },
      { 
        day: 3, 
        title: 'Mandara Hut to Horombo Hut', 
        description: 'Follow ascending path over open moorlands. Views of Mawenzi and Kibo summit. Look for giant Lobelia and Groundsel plants.',
        details: { 
          elevation: '2700m/8875ft to 3700m/12,200ft',
          distance: '12km/7.5mi',
          hikingTime: '5-6 hours',
          habitat: 'Heathland',
          meals: 'All',
          lodging: 'Horombo Hut'
        }
      },
      { 
        day: 4, 
        title: 'Horombo Hut to Kibo Hut', 
        description: 'Pass the last watering point onto the saddle of Kilimanjaro. Transition into the "Moonscape". Early dinner and preparation for summit.',
        details: { 
          elevation: '3700m/12,200ft to 4700m/15,500ft',
          distance: '9km/5.5mi',
          hikingTime: '5-6 hours',
          habitat: 'Alpine Desert',
          meals: 'All',
          lodging: 'Kibo Hut'
        }
      },
      { 
        day: 5, 
        title: 'Kibo Hut to Summit, descend to Horombo Hut', 
        description: 'Midnight departure for summit. Steep ascent to Gilman\'s point and then Uhuru Peak (5895m), the highest point in Africa. Descent to Horombo encampment.',
        details: { 
          elevation: '4700 to 5895 to 3700m',
          distance: '6km up, 15km down',
          hikingTime: '10-12 hours',
          habitat: 'Alpine Desert',
          meals: 'All',
          lodging: 'Horombo Camp'
        }
      },
      { 
        day: 6, 
        title: 'Horombo Hut to Trail Head, drive to Moshi', 
        description: 'Steady descent through moorland and rainforest path to Marangu gate. Vehicle transfer back to hotel.',
        details: { 
          elevation: '3700m/12,200ft to 1700m/5500ft',
          distance: '20km/12.5mi',
          hikingTime: '4-5 hours',
          habitat: 'Forest',
          meals: 'All'
        }
      },
      { 
        day: 7, 
        title: 'Departure', 
        description: 'Drop at Kilimanjaro International airport or extend stay.' 
      }
    ],
    inclusions: [
      'Accommodation on Mountain huts',
      '2 NIGHT accommodation before and after',
      'Professional mountain guides',
      'All Park and Rescue fees',
      'All meals while on Mountain',
      'Arrival and Departure transfers',
      'Mess hut/tents with tables and chairs',
      'Clean, purified drinking water'
    ],
    exclusions: [
      'Tanzania Visa $50',
      'Personal Expenses',
      'Optional Tours',
      'Tips',
      'Special high-altitude insurance',
      'Equipment and clothing (Available on rent)'
    ]
  },
  {
    id: 'kilimanjaro-rongai-6',
    title: '6 Days Kilimanjaro Trekking Rongai route',
    price: 'Please Contact to team for more details',
     location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/-047.jpg',
    description: 'The Rongai route begins at the remote northern side of Kilimanjaro near the Kenyan border. It offers a true wilderness experience and a more gradual ascent.',
    duration: '8 Days',
    difficulty: 'Challenging',
    category: 'Snow',
    highlights: ['Northern Slopes', 'Jagged Mawenzi Peak', 'Barren Desert Saddle', 'Gradual Ascent'],
    itinerary: [
      { day: 1, title: 'Arrive in Moshi', description: 'Private transfer from JRO airport to Moshi. Pre-climb briefing and equipment check at the hotel.' },
      { day: 2, title: 'Rongai One', description: 'Climb begins from Nale Moru (1,950 m) through fields of maize and potatoes before entering the pine forest. Track winds consistently through attractive forest sheltering Colobus monkeys.', details: { elevation: '1950m to 2600m', hikingTime: '3-4 hours', habitat: 'Forest/Moorland', lodging: 'Rongai One Camp' } },
      { day: 3, title: 'Kikelewa campsite', description: 'Morning walk is a steady ascent to Second Cave (3,450 m) with superb views of Kibo. Strike out across moorland toward the jagged peaks of Mawenzi.', details: { elevation: '2600m to 3600m', hikingTime: '6-7 hours', habitat: 'Moorland', lodging: 'Kikelewa Camp' } },
      { day: 4, title: 'Mawenzi Tarn', description: 'Short but steep climb rewarded by superball-roundd views. Tangible sense of wilderness beneath towering spires of Mawenzi. Afternoon free for acclimatization.', details: { elevation: '4330m', hikingTime: '3-4 hours', habitat: 'Alpine Desert', lodging: 'Mawenzi Tarn' } },
      { day: 5, title: 'Kibo campsite', description: 'Cross the lunar desert of the ‘Saddle’ between Mawenzi and Kibo peaks. Preparation for the final ascent.', details: { elevation: '4700m', hikingTime: '5-6 hours', habitat: 'Alpine Desert', lodging: 'Kibo Camp' } },
      { day: 6, title: 'Gillman’s Point & Uhuru Peak', description: 'Final steepest climb by torchlight at 1 a.m. Spectacular sunrise over Mawenzi. Round trip to Uhuru Peak (5896m) passing glaciers.', details: { elevation: '5896m to 3720m', hikingTime: '11-15 hours', habitat: 'Arctic/Moorland', lodging: 'Horombo Hut' } },
      { day: 7, title: 'Marangu Gate', description: 'Steady descent through moorland to Mandara Hut (2,700m). Continue through lovely lush forest to Marangu Gate. Transfer to Moshi.', details: { elevation: '3720m to 1830m', hikingTime: '5-6 hours', habitat: 'Forest', lodging: 'Moshi' } },
      { day: 8, title: 'Departure', description: 'After breakfast, transfer to Kilimanjaro Airport (JRO). Option to extend for safari or relax in Indian Ocean.' }
    ],
    inclusions: ['Pre/Post trek Moshi hotel', 'Waterproof 4-season tents', 'Professional guides', 'Park & Rescue fees', 'All mountain meals', 'Airport transfers', 'Emergency Oxygen', 'Summit certificate', 'Private chemical flush toilets'],
    exclusions: ['Tanzania Visa $50', 'Personal Expenses', 'Optional Tours', 'Tips', 'High-altitude insurance', 'Equipment rental']
  },
  {
    id: 'kilimanjaro-machame-6',
    title: '6 Days Kilimanjaro Machame Route',
    price: 'Please Contact to team for more details',
     location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/-234.jpg',
    description: 'The Machame route, also known as the "Whiskey route", is a scenic but physically demanding journey through diverse ecological zones.',
    duration: '8 Days',
    difficulty: 'Extreme',
    category: 'Snow',
    highlights: ['Rainforest Ascent', 'Shira Plateau', 'Lava Tower', 'Barranco Wall', 'Uhuru Peak'],
    itinerary: [
      { day: 1, title: 'Machame Gate to Machame Camp', description: 'Drive to Machame Gate through Machame village. Walk through rain forest on a winding trail up a ridge. Trail can be muddy and slippery.', details: { elevation: '1830m to 3050m', distance: '11km', hikingTime: '5-6 hours', habitat: 'Montane Forest', lodging: 'Machame Camp' } },
      { day: 2, title: 'Machame Camp to Shira Camp', description: 'Leave forest glades and continue on ascending path, crossing the valley along a steep rocky ridge. Turn west onto a river gorge.', details: { elevation: '3050m to 3850m', distance: '5km', hikingTime: '4-5 hours', habitat: 'Moorland', lodging: 'Shira Camp' } },
      { day: 3, title: 'Lava Tower & Barranco Camp', description: 'Direction changes South East towards Lava Tower ("Shark’s Tooth"). Descent to Barranco Camp for important acclimatization.', details: { elevation: '3850m to 4000m', distance: '10km', hikingTime: '5-6 hours', habitat: 'Semi-desert', lodging: 'Barranco Camp' } },
      { day: 4, title: 'Barranco Wall to Barafu Camp', description: 'Steep ridge up Barranco Wall (4250m) through Karanga Valley. Complete the South Circuit with views of the summit from many angles.', details: { elevation: '4000m to 4700m', distance: '9km', hikingTime: '6-8 hours', habitat: 'Alpine Desert', lodging: 'Barafu Camp' } },
      { day: 5, title: 'Summit Day & Mweka Camp', description: 'Midnight ascent through heavy scree to Stella Point. Continue 1-hour to Uhuru Peak. Descent straight down to Mweka Camp.', details: { elevation: '4700m to 5895m to 3090m', distance: '18km', hikingTime: '10-13 hours', habitat: 'Arctic/Forest', lodging: 'Mweka Camp' } },
      { day: 6, title: 'Mweka Gate to Moshi', description: 'Final descent through forest to Mweka Park Gate for certificates. Drive back to hotel in Moshi/Arusha.', details: { elevation: '3090m to 1680m', distance: '10km', hikingTime: '3-4 hours', habitat: 'Forest', lodging: 'Outpost Lodge' } },
      { day: 7, title: 'Departure', description: 'Transfer to Airport.' }
    ],
    inclusions: ['Waterproof tents', 'Professional guides', 'Park & Rescue fees', 'All mountain meals', 'Airport transfers', 'Porters', 'Hotel in Arusha/Moshi', 'Sleeping Mattress'],
    exclusions: ['Visa $50', 'Personal Expenses', 'Optional Tours', 'Tips', 'Insurance', 'Equipment rental']
  },
  {
    id: 'kilimanjaro-machame-7',
    title: '7 Days Hike Via Machame Route',
    price: 'Please Contact to team for more details',
     location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/-440.jpg',
    description: 'The 7-day Machame route adds an extra day at Karanga Camp for superior acclimatization, significantly increasing summit success rates.',
    duration: '9 Days',
    difficulty: 'Extreme',
    category: 'Snow',
    highlights: ['Acclimatization Day', 'Barranco Wall', 'Stella Point Sunrise', 'Uhuru Peak', 'Diverse Habitats'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrival at Kilimanjaro International airport. Pick up and transfer to the Hotel for pre-trek orientation.' },
      { day: 2, title: 'Machame Gate to Machame Camp', description: 'Drive to National Park Gate. Hike through rain forest on a winding trail up a ridge.', details: { elevation: '1830m to 3050m', distance: '11km', hikingTime: '5-6 hours', habitat: 'Montane Forest', lodging: 'Machame Camp' } },
      { day: 3, title: 'Machame Camp to Shira Camp', description: 'Ascend along a steep rocky ridge. Turn west onto a river gorge until arriving at Shira campsite.', details: { elevation: '3050m to 3850m', distance: '5km', hikingTime: '4-5 hours', habitat: 'Moorland', lodging: 'Shira Camp' } },
      { day: 4, title: 'Shira Camp to Lava Tower to Barranco Camp', description: 'Hike east up a ridge, then South East to Lava Tower. Descend to Barranco for acclimatization.', details: { elevation: '3850m to 4000m', distance: '10km', hikingTime: '5-6 hours', habitat: 'Semi-desert', lodging: 'Barranco Camp' } },
      { day: 5, title: 'Barranco to Karanga Camp', description: 'Climb the steep Barranco Wall to Karanga Valley. Short hiking day for energy conservation.', details: { elevation: '4000m to 4050m', distance: '5km', hikingTime: '3-4 hours', habitat: 'Alpine Desert', lodging: 'Karanga Camp' } },
      { day: 6, title: 'Karanga to Barafu Camp', description: 'Final approach to base camp. Prepare for the midnight summit attempt.', details: { elevation: '4050m to 4700m', distance: '4km', hikingTime: '3-4 hours', habitat: 'Alpine Desert', lodging: 'Barafu Camp' } },
      { day: 7, title: 'Summit & Mweka Camp', description: 'Midnight departure for summit. Magnificent sunrise at Stella Point. Uhuru Peak (5895m). Descent to Mweka.', details: { elevation: '4700m to 5895m to 3090m', distance: '18km', hikingTime: '10-13 hours', habitat: 'Arctic/Forest', lodging: 'Mweka Camp' } },
      { day: 8, title: 'Mweka Gate to Moshi', description: 'Final descent to gate. Receive certificates. Drive back to hotel in Moshi.', details: { elevation: '3090m to 1680m', distance: '10km', hikingTime: '3-4 hours', habitat: 'Forest' } },
      { day: 9, title: 'Departure', description: 'Transfer to Airport for flight home or safari extension.' }
    ],
    inclusions: ['2 nights hotel', 'Professional guides', 'Park & Rescue fees', 'All mountain meals', 'Mess tents', 'Purified water', 'Crater fees'],
    exclusions: ['Visa $50', 'Personal Expenses', 'Tips', 'Insurance', 'Equipment rental']
  },
  {
    id: 'kilimanjaro-marangu-8',
    title: '8 Days Kilimanjaro Trek Marangu Route',
    price: 'Please Contact to team for more details',
     location: 'Mount Kilimanjaro, Tanzania',
    rating: 5,
    image: '/image/-445.jpg',
    description: 'The 8-day Marangu route provides the most comfortable and successful ascent with hut accommodation and two acclimatization days.',
    duration: '8 Days',
    difficulty: 'Challenging',
    category: 'Snow',
    highlights: ['Hut Accommodation', 'Zebra Rock', 'Maundi Crater', 'Uhuru Peak Summit'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrival at JRO airport. Transfer to Keys Hotel for pre-trek orientation.', details: { lodging: 'Keys Hotel' } },
      { day: 2, title: 'Mandara Hut', description: 'Hike through rainforest. Side trip to Maundi Crater for altitude adjustment.', details: { elevation: '1860m to 2700m', distance: '8km', hikingTime: '3-4 hours', habitat: 'Montane Forest', lodging: 'Mandara Hut' } },
      { day: 3, title: 'Horombo Hut', description: 'Follow ascending path over open moorlands. Views of Mawenzi and Kibo peaks.', details: { elevation: '2700m to 3700m', distance: '12km', hikingTime: '5-6 hours', habitat: 'Heathland', lodging: 'Horombo Hut' } },
      { day: 4, title: 'Acclimatization Day', description: 'Free Extra Day at Horombo. Visit Zebra Rock for acclimatization.', details: { lodging: 'Horombo Hut' } },
      { day: 5, title: 'Kibo Hut', description: 'Cross the saddle of Kilimanjaro between Kibo and Mawenzi. Early dinner and sleep.', details: { elevation: '3700m to 4700m', distance: '9km', hikingTime: '5-6 hours', habitat: 'Alpine Desert', lodging: 'Kibo Hut' } },
      { day: 6, title: 'Summit & Horombo', description: 'Midnight departure for Uhuru Peak (5895m). Spectacular views at every turn. Descend to Horombo.', details: { elevation: '4700m to 5895m to 3700m', distance: '21km', hikingTime: '10-12 hours', habitat: 'Arctic/Alpine Desert', lodging: 'Horombo Camp' } }
    ],
    inclusions: ['Mountain huts', '2 nights hotel', 'Professional guides', 'Park & Rescue fees', 'All mountain meals', 'Transfers', 'Purified water'],
    exclusions: ['Visa $50', 'Personal Expenses', 'Tips', 'Equipment rental']
  },
  {
    id: 'bhutan-meditation-10',
    title: '10 Days Bhutan Inner Silence Meditation Journey',
    price: 'Please Contact to team for more details',
     location: 'Bhutan',
    rating: 5,
    image: '/image/-512.jpg',
    description: 'A journey into self-discovery. Practice yoga with 360-degree views, meditate with monks, and walk through rhododendron forests in the Land of the Thunder Dragon.',
    duration: '10 Days',
    difficulty: 'Easy',
    category: 'Himalayan',
    highlights: ['Buddha Dordenma', 'Tiger’s Nest (Taktsang)', 'Monk Meditation', 'Shinrin Yoku', 'Sound Bath'],
    itinerary: [
      { day: '1-3', title: 'Thimphu: Spiritual Awakening', description: 'Soar over Himalayas. Visit Textile and Folk Heritage museums. Meditate at Buddha Dordenma. Traditional cultural program. Zen walking and outdoor silent meditation.', details: { lodging: 'Thimphu Hotel' } },
      { day: '3-5', title: 'Punakha: Flow and Energy', description: 'Drive through Dochu La Pass (108 stupas). Yoga overlooking valleys. Hike to Chimi Lhakhang. Laughter Yoga and Sun Salutations at Punakha Dzong.', details: { lodging: 'Punakha Hotel' } },
      { day: '5-7', title: 'Gangtey: Mindful Immersion', description: 'Visit Gangtey Monastery. Mindful "Forest Bathing" in pine forests. Sound bath with Tibetan singing bowls. Meditation session with 300 monks.', details: { lodging: 'Gangtey Hotel' } },
      { day: '7-9', title: 'Paro: The Sacred Path', description: 'Visit local farmhouse. Stop at Kyichu Lhakhang (oldest temple). Epic hike to Tiger’s Nest (Taktsang) monastery. Closing wellness session.', details: { lodging: 'Paro Hotel' } },
      { day: 10, title: 'Departure', description: 'Wonderful journey ends. Drive to Paro Airport for flight onwards.' }
    ],
    inclusions: [
      'Private yoga & meditation sessions',
      'All accommodation (Thimphu, Punakha, Gangtey, Paro)',
      'Expert spiritual guides',
      'Monastery entry fees',
      'Airport transfers',
      'Vegan & Mindful dining plan',
      'Tibetan singing bowl session'
    ],
    exclusions: [
      'International flights',
      'Bhutan Visa fee',
      'Personal wellness treatments',
      'Tips for guides',
      'Travel insurance'
    ]
  },
  {
    id: 'everest-basecamp-15',
    title: '15 Days Life Transformational Everest Basecamp Trek',
    price: '₹99,000',
    currency: 'INR',
    location: 'Everest Region, Nepal',
    rating: 5,
    image: '/image/EverestBasecampTrek.jpg',
    description: 'A life-transforming 15-day journey to the base of the world\'s highest peak. Designed for proper acclimatization and a complete cultural immersion in the Himalayas.',
    duration: '15 Days',
    difficulty: 'Extreme',
    category: 'Himalayan',
    highlights: ['Everest Base Camp (5364m)', 'Kala Pathar Sunrise', 'Namche Bazaar', 'Tengboche Monastery', 'Sherpa Culture'],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Airport pickup and transfer to hotel. Traditional Nepali dinner and cultural program with local folk dance.' },
      { day: 2, title: 'Kathmandu Sightseeing', description: 'Full day at leisure to explore UNESCO Heritage sites like Durbar Square, Boudhanath, and Swayambhunath.' },
      { day: 3, title: 'Fly to Lukla & Trek to Phakding', description: 'Scenic flight to Lukla (2800m). Begin trekking to Phakding alongside spectacular views.', details: { elevation: '2800m to 2652m', hikingTime: '3-4 hours', lodging: 'Lodge in Phakding' } },
      { day: 4, title: 'Trek to Namche Bazaar', description: 'Cross Dudhkoshi River and hanging bridges. Enter Everest National Park at Jorsale.', details: { elevation: '2652m to 3446m', hikingTime: '6-7 hours', lodging: 'Lodge in Namche Bazaar' } },
      { day: 5, title: 'Acclimatization Walk', description: 'Hike to Mt. Everest View Point (3870m) for sunrise. Visit Sherpa museum and monasteries.', details: { elevation: '3446m to 3870m', hikingTime: '3 hours', lodging: 'Lodge in Namche Bazaar' } },
      { day: 6, title: 'Walk to Khumjung', description: 'Visit the capital of Sherpas, Sir Edmund Hillary school, and monastery with yeti scalp.', details: { elevation: '3446m to 3780m', lodging: 'Lodge in Namche Bazaar' } },
      { day: 7, title: 'Trek to Tengboche', description: 'Steep uphill trek through rhododendron forests. Visit the famous Tengboche Monastery.', details: { elevation: '3860m', hikingTime: '6 hours', habitat: 'Forest', lodging: 'Lodge in Tengboche' } },
      { day: 8, title: 'Trek to Dingboche', description: 'Path alongside the valley. Pass Pangboche and see ancient limestone caves.', details: { elevation: '3860m to 4410m', hikingTime: '6-7 hours', lodging: 'Lodge in Dingboche' } },
      { day: 9, title: 'Trek to Lobuche', description: 'Steep route uphill passing memorials of climbers. Views of Mt. Pumori and Khumbu Glacier.', details: { elevation: '4410m to 4930m', hikingTime: '6-8 hours', habitat: 'Alpine Desert', lodging: 'Lodge in Lobuche' } },
      { day: 10, title: 'Trek to EBC & Gorakshep', description: 'Reach Gorakshep, then continue to Everest Base Camp (5364m). Return to Gorakshep for night.', details: { elevation: '4930m to 5364m to 5170m', hikingTime: '7-8 hours', habitat: 'Glacier', lodging: 'Lodge in Gorakshep' } },
      { day: 11, title: 'Kala Pathar & Lobuche', description: 'Sunrise hike to Kala Pathar (5540m) for the best Everest view. Descend to Lobuche.', details: { elevation: '5170m to 5540m to 4940m', hikingTime: '9 hours', lodging: 'Lodge in Lobuche' } },
      { day: 12, title: 'Trek to Tengboche', description: 'Resume descent towards Tengboche. Easier breathing as altitude decreases.', details: { elevation: '4940m to 3860m', hikingTime: '8-9 hours', lodging: 'Lodge in Tengboche' } },
      { day: 13, title: 'Trek to Jorsale', description: 'Moderate trek descending to Jorsale via Namche Bazaar.', details: { elevation: '3860m to 3000m', hikingTime: '5-6 hours', lodging: 'Lodge in Jorsale' } },
      { day: 14, title: 'Back to Lukla & Kathmandu', description: 'Final trek to Lukla, then catch a scenic flight back to Kathmandu.', details: { elevation: '3000m to 2800m to 1400m', hikingTime: '4-5 hours', lodging: 'Hotel in Kathmandu' } },
      { day: 15, title: 'Departure', description: 'Airport drop-off for flight back home with golden memories.' }
    ],
    inclusions: [
      'Airport pickup & drop in KTM',
      'BB accommodation in Kathmandu',
      'KTM-Lukla-KTM air fare',
      'Lodge accommodation during trek',
      'All meals (B, L, D) and Tea/Coffee',
      'National Park & TIMS fees',
      'Porter (1 for 2 members, 15kg limit)',
      'Professional Guide & Co-guide',
      'Traditional Nepali Dinner & Program'
    ],
    exclusions: [
      'International flights',
      'Nepal Visa fee',
      'Personal trekking gear',
      'Hot shower & battery charging fees',
      'Tips for guides and porters',
      'Travel & Medical Insurance'
    ]
  }
];
