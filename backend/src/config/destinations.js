const BASE_CITIES = [
  {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Mar',
    priceLevel: '$$',
    category: 'Spiritual',
    lat: 25.3176,
    lng: 82.9739,
    baseImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    sites: [
      { name: 'Kashi Vishwanath Temple', badge: 'Sacred Shiva Yatra', desc: 'The historic golden spire temple dedicated to Lord Shiva, one of the 12 Jyotirlingas.' },
      { name: 'Dashashwamedh Ghat Ganga Aarti', badge: 'Evening Devotion', desc: 'World-famous ghat known for the magnificent evening multi-priest Ganga Aarti.' },
      { name: 'Sarnath Buddhist Stupa', badge: 'Buddhist Trail', desc: 'Ancient deer park where Gautama Buddha first taught the Dharma after enlightenment.' },
      { name: 'Assi Ghat Sunrise', badge: 'Subah-e-Banaras', desc: 'Famous ghat where pilgrims bathe and attend morning yoga, Vedic chants, and early Aarti.' },
      { name: 'Manikarnika Ghat Cremation Site', badge: 'Eternal Ghat', desc: 'The primary sacred cremation ghat along the Ganges, representing life and liberation.' },
      { name: 'Durga Kund Temple', badge: 'Goddess Shrine', desc: '18th-century multi-tiered red stone temple built in Nagara style with a sacred pond.' },
      { name: 'Ramnagar Fort & Museum', badge: 'Royal Heritage', desc: 'Historic 18th-century cream-colored sandstone fort containing royal vintage artifacts.' },
      { name: 'Tulsi Manas Mandir', badge: 'Ramayana Walls', desc: 'Beautiful white marble temple where the entire Ramcharitmanas epic is engraved on the walls.' }
    ]
  },
  {
    name: 'Ayodhya',
    state: 'Uttar Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Mar',
    priceLevel: '$$',
    category: 'Spiritual',
    lat: 26.7922,
    lng: 82.1998,
    baseImage: 'https://images.unsplash.com/photo-1609946782782-96c21e6c3e98',
    sites: [
      { name: 'Shri Ram Janmabhoomi Mandir', badge: 'Lord Rama Birthplace', desc: 'The newly consecrated grand temple of Lord Rama, representing traditional stone architecture.' },
      { name: 'Hanuman Garhi Fort Temple', badge: 'Guardian Shrine', desc: '10th-century temple fortress dedicated to Lord Hanuman, located on a hilltop.' },
      { name: 'Kanak Bhawan Temple', badge: 'Golden House', desc: 'Ornate palace temple housing golden-crowned deities of Lord Rama and Goddess Sita.' },
      { name: 'Nageshwarnath Temple', badge: 'Ancient Shiva Shrine', desc: 'Historic Shiva temple believed to be established by Kush, son of Lord Rama.' },
      { name: 'Ram ki Paidi Ghats', badge: 'Riverbank Lights', desc: 'A beautiful series of bathing steps on the banks of the sacred Sarayu River.' },
      { name: 'Guptar Ghat', badge: 'Sacred Samadhi', desc: 'Sacred riverfront ghat where Lord Rama is believed to have taken his heavenly departure.' },
      { name: 'Treta Ke Thakur Temple', badge: 'Treta Era Memorial', desc: 'Historic temple showcasing deities carved from a single black stone block.' },
      { name: 'Mani Parbat Stupa', badge: 'Heritage Mound', desc: 'Sacred hill mound associated with medicinal herbs dropped by Hanuman.' }
    ]
  },
  {
    name: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'India',
    region: 'North India',
    bestTime: 'Sep – Apr',
    priceLevel: '$$',
    category: 'Spiritual',
    lat: 30.0869,
    lng: 78.2676,
    baseImage: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5',
    sites: [
      { name: 'Triveni Ghat Evening Aarti', badge: 'Holy Confluence', desc: 'Sacred bathing spot where three rivers meet, famous for oil lamp offerings and chants.' },
      { name: 'Lakshman Jhula Suspension Bridge', badge: 'Historic Span', desc: 'Iconic hanging iron suspension bridge spanning the holy Ganges river.' },
      { name: 'Ram Jhula Bridge & Ashrams', badge: 'Spiritual Crossing', desc: 'Famous suspension footbridge connecting Geeta Bhawan and Swargashram.' },
      { name: 'Parmarth Niketan Ashram', badge: 'Yoga Center', desc: 'Largest ashram in Rishikesh offering holistic spiritual courses and clean stays.' },
      { name: 'Beatles Ashram Ruins', badge: 'Pop Culture History', desc: 'Graffiti-covered ruins where The Beatles studied meditation in 1968.' },
      { name: 'Neer Garh Waterfall Trek', badge: 'Nature Trail', desc: 'Scenic mountain trek leading to a multi-tiered natural cold water cascade.' },
      { name: 'Vashishta Gufa Cave', badge: 'Sage Meditation', desc: 'Deeply spiritual cave along the Ganges used by Sage Vashishta for intense meditation.' },
      { name: 'Kunjapuri Temple Sunrise', badge: 'Himalayan Peaks', desc: 'Hilltop shrine offering 360-degree panoramic views of Himalayan snow ranges.' }
    ]
  },
  {
    name: 'Haridwar',
    state: 'Uttarakhand',
    country: 'India',
    region: 'North India',
    bestTime: 'Sep – Apr',
    priceLevel: '$$',
    category: 'Spiritual',
    lat: 29.9457,
    lng: 78.1642,
    baseImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e2e',
    sites: [
      { name: 'Har Ki Pauri Ghat', badge: 'Ganga Descent', desc: 'The most sacred ghat in Haridwar, featuring footprints of Lord Vishnu on a stone wall.' },
      { name: 'Mansa Devi Temple Bilwa Parvat', badge: 'Wish-Fulfilling Hill', desc: 'Popular hilltop temple dedicated to Mansa Devi, accessed by a scenic ropeway.' },
      { name: 'Chandi Devi Temple Neel Parvat', badge: 'Siddh Peeth Shrine', desc: 'Ancient hilltop temple built in 1929 by the King of Kashmir.' },
      { name: 'Maya Devi Temple Complex', badge: 'Adhishthatri Goddess', desc: 'Dating back to the 11th century, it is one of the three ancient Siddh Peeths here.' },
      { name: 'Daksh Mahadev Temple Kankhal', badge: 'Daksha Yajna Site', desc: 'Historic Shiva temple commemorating the sacrificial yajna of King Daksha.' },
      { name: 'Sapt Rishi Ashram Retreat', badge: 'Seven Streams', desc: 'Tranquil ashram site where the Ganges split into seven channels to avoid disturbing meditating sages.' },
      { name: 'Bharat Mata Mandir', badge: 'Patriotic Heritage', desc: 'Unique multi-story temple map dedicated to unified India and historical heroes.' },
      { name: 'Shanti Kunj Ashram Complex', badge: 'Gayatri Pariwar', desc: 'Spiritual academy and center for moral training, botanical sciences, and Yajna.' }
    ]
  },
  {
    name: 'Mathura',
    state: 'Uttar Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Mar',
    priceLevel: '$',
    category: 'Spiritual',
    lat: 27.4924,
    lng: 77.6737,
    baseImage: 'https://images.unsplash.com/photo-1590076214227-f4955b2049e0',
    sites: [
      { name: 'Krishna Janmabhoomi Complex', badge: 'Lord Krishna Birth', desc: 'Sacred prison cell room believed to be the exact birthplace of Lord Krishna.' },
      { name: 'Dwarkadhish Temple Architecture', badge: 'Brij Mahotsav', desc: 'Grand temple built in 1814, famous for beautiful murals and swinging cradles.' },
      { name: 'Vishram Ghat', badge: 'Sacred Resting', desc: 'Central bathing ghat where Lord Krishna rested after slaying the tyrant King Kansa.' },
      { name: 'Gita Mandir Pillars', badge: 'Vedic Inscriptions', desc: 'Ornate temple housing a beautiful marble chariot, with walls carrying complete verses of the Gita.' }
    ]
  },
  {
    name: 'Vrindavan',
    state: 'Uttar Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Mar',
    priceLevel: '$',
    category: 'Spiritual',
    lat: 27.5650,
    lng: 77.6850,
    baseImage: 'https://images.unsplash.com/photo-1590076214227-f4955b2049e0',
    sites: [
      { name: 'Bankey Bihari Temple Darshan', badge: 'Bihari Ji Seva', desc: 'One of the most revered temples of Vrindavan, dedicated to a unique form of Krishna.' },
      { name: 'Prem Mandir White Marble Complex', badge: 'Temple of Love', desc: 'Magnificent temple featuring life-like resin statues of Lord Krishna’s pastimes.' },
      { name: 'ISKCON Sri Krishna Balaram Temple', badge: 'Hare Krishna Center', desc: 'International spiritual complex built in pure white marble with high towers.' },
      { name: 'Radha Raman Temple Shrine', badge: 'Self-Manifested Deity', desc: 'Historic temple preserving a 500-year-old self-manifested saligram deity.' }
    ]
  },
  {
    name: 'Kedarnath',
    state: 'Uttarakhand',
    country: 'India',
    region: 'North India',
    bestTime: 'May – Oct',
    priceLevel: '$$$',
    category: 'Spiritual',
    lat: 30.7352,
    lng: 79.0669,
    baseImage: 'https://images.unsplash.com/photo-1626715693005-efb553e110b6',
    sites: [
      { name: 'Kedarnath Jyotirlinga Temple', badge: 'Himalayan Shiva Shrine', desc: 'Majestic ancient stone temple of Shiva set against the snowy Kedarnath peaks.' },
      { name: 'Bhairavnath Temple Hilltop', badge: 'Guardian Deity', desc: 'Hilltop shrine offering panoramic valley views, dedicated to the guardian Bhairava.' },
      { name: 'Adi Shankaracharya Samadhi Memorial', badge: 'Spiritual Reformer', desc: 'Sacred grave memorial dedicated to the saint who restored Vedic Hinduism.' },
      { name: 'Vasuki Tal Glacial Lake', badge: 'Alpine Glacier Trek', desc: 'High-altitude cold water lake trek offering sights of Brahmakamal flowers.' }
    ]
  },
  {
    name: 'Badrinath',
    state: 'Uttarakhand',
    country: 'India',
    region: 'North India',
    bestTime: 'May – Oct',
    priceLevel: '$$$',
    category: 'Spiritual',
    lat: 30.7433,
    lng: 79.4938,
    baseImage: 'https://images.unsplash.com/photo-1617653202545-930ccf05646d',
    sites: [
      { name: 'Badrinath Temple Shrine', badge: 'Lord Vishnu Dham', desc: 'Colorful multi-tiered facade temple dedicated to Lord Vishnu as Badrinarayan.' },
      { name: 'Tapt Kund Hot Sulfur Spring', badge: 'Sacred Bath', desc: 'Natural hot springs outside the temple, containing therapeutic mineral properties.' },
      { name: 'Mana Indo-Tibetan Village border', badge: 'Last Indian Village', desc: 'Historic border village featuring stone houses, caves, and Alaknanda waterfalls.' },
      { name: 'Vyas Gufa Vedic Cave', badge: 'Mahabharata Writing', desc: 'Ancient stone cave where Sage Vyas composed the Mahabharata with Lord Ganesha.' }
    ]
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    region: 'North India',
    bestTime: 'Nov – Feb',
    priceLevel: '$$$',
    category: 'Heritage',
    lat: 26.9124,
    lng: 75.7873,
    baseImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    sites: [
      { name: 'Hawa Mahal Palace', badge: 'Palace of Winds', desc: 'Pink sandstone palace featuring 953 small windows designed for royal ladies.' },
      { name: 'Amer Fort Palace', badge: 'Sheesh Mahal Heritage', desc: 'Hilltop fortress featuring royal gateways, courtyards, and mirror halls.' },
      { name: 'City Palace Museum', badge: 'Royal Courtyards', desc: 'Royal residence showcasing peacock gates, armor collections, and textiles.' },
      { name: 'Jantar Mantar Astronomical Observatory', badge: 'UNESCO Instruments', desc: 'Collection of nineteen architectural astronomical instruments built by Sawai Jai Singh II.' },
      { name: 'Nahargarh Hill Fort', badge: 'Sunset Ramparts', desc: 'Fortress overlooking the entire pink city, providing gorgeous twilight views.' },
      { name: 'Jaigarh Fort Cannon Complex', badge: 'Jaivana Cannon', desc: 'Victory fort housing Jaivana, the worlds largest historic cannon on wheels.' },
      { name: 'Albert Hall State Museum', badge: 'Indo-Saracenic Art', desc: 'Grand historic state museum displaying miniature paintings, woodcraft, and metalwork.' },
      { name: 'Jal Mahal Water Palace', badge: 'Lake Palace', desc: 'Symmetrical red sandstone palace floating in the middle of Man Sagar Lake.' }
    ]
  },
  {
    name: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    region: 'North India',
    bestTime: 'Nov – Feb',
    priceLevel: '$$$$',
    category: 'Heritage',
    lat: 24.5854,
    lng: 73.7125,
    baseImage: 'https://images.unsplash.com/photo-1593693411515-c202e974fe08',
    sites: [
      { name: 'Lake Palace Jag Niwas', badge: 'Floating Marble Palace', desc: 'Luxury white marble palace situated in Lake Pichola, built in 1743.' },
      { name: 'City Palace Museum Complex', badge: 'Mewar Royal Fort', desc: 'Towering palace complex containing mirrors, tiles, and murals overlooking Udaipur.' },
      { name: 'Jagmandir Island Palace', badge: 'Lake Pichola Gardens', desc: 'Yellow sandstone palace featuring stone elephants and lakeside dining.' },
      { name: 'Sajjangarh Monsoon Palace', badge: 'Hilltop Retreat', desc: 'Hilltop castle built to track monsoon clouds, offering gorgeous valley views.' },
      { name: 'Saheliyon-ki-Bari Garden', badge: 'Courtyard of Fountains', desc: 'Historic garden featuring marble fountains, lotus pools, and stone elephants.' },
      { name: 'Bagore-ki-Haveli Museum', badge: 'Rajasthani Folk Art', desc: 'Historic lakeside mansion hosting traditional puppet shows and tribal dance festivals.' },
      { name: 'Jagdish Temple Carvings', badge: 'Indo-Aryan Architecture', desc: 'Historic three-story temple dedicated to Lord Vishnu, decorated with detailed carvings.' },
      { name: 'Fateh Sagar Lake Boat Ride', badge: 'Tranquil Lake', desc: 'Beautiful artificial lake hosting three small islands and boating clubs.' }
    ]
  },
  {
    name: 'Jodhpur',
    state: 'Rajasthan',
    country: 'India',
    region: 'North India',
    bestTime: 'Nov – Feb',
    priceLevel: '$$$',
    category: 'Heritage',
    lat: 26.2389,
    lng: 73.0243,
    baseImage: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be',
    sites: [
      { name: 'Mehrangarh Hill Fort', badge: 'Massive Citadel', desc: 'Majestic red sandstone fort towering 400 feet above the blue city houses.' },
      { name: 'Jaswant Thada Cenotaph', badge: 'Taj of Marwar', desc: 'White marble cenotaph built in memory of Maharaja Jaswant Singh II.' },
      { name: 'Umaid Bhawan Palace Museum', badge: 'Art Deco Royal Residence', desc: 'One of the worlds largest private residences, constructed using golden sandstone.' },
      { name: 'Clock Tower & Sardar Market', badge: 'Spices & Handcrafts', desc: 'Vibrant local bazaar surrounding the historic Ghanta Ghar clock tower.' },
      { name: 'Mandore Gardens Cenotaph Ruins', badge: 'Ancient Marwar Capital', desc: 'Historic gardens housing rock-cut cenotaphs and temples.' },
      { name: 'Rao Jodha Desert Rock Park', badge: 'Volcanic Formations', desc: 'Ecological park showcasing desert plants and volcanic rhyolite rock formations.' },
      { name: 'Kaylana Lake Boating', badge: 'Scenic Reservoir', desc: 'Scenic artificial lake located in the western outskirts, famous for sunset views.' },
      { name: 'Toorji Ka Jhalra Stepwell', badge: 'Historic Sandstone Pool', desc: 'Beautifully carved 18th-century stepwell showcasing Rajput water engineering.' }
    ]
  },
  {
    name: 'Delhi',
    state: 'Delhi',
    country: 'India',
    region: 'North India',
    bestTime: 'Nov – Mar',
    priceLevel: '$$$',
    category: 'Heritage',
    lat: 28.6139,
    lng: 77.2090,
    baseImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    sites: [
      { name: 'Red Fort Lal Qila', badge: 'Mughal Architecture', desc: 'Historic fortress complex constructed of red sandstone by Emperor Shah Jahan.' },
      { name: 'Qutub Minar Complex Monuments', badge: 'Medieval Victory Tower', desc: '73-meter brick victory tower built in 1193, surrounded by historical ruins.' },
      { name: 'Humayun Tomb Garden Palace', badge: 'Pre-Taj Architecture', desc: 'Symmetrical garden tomb built in 1570, the first garden tomb on the subcontinent.' },
      { name: 'India Gate War Memorial', badge: 'National Archway', desc: 'War memorial dedicated to the soldiers of Undivided Indian Army.' },
      { name: 'Lotus Temple Baha\'i House', badge: 'Modern Architecture', desc: 'Baha\'i House of Worship designed in the shape of a white lotus flower.' },
      { name: 'Akshardham Temple Complex', badge: 'Indian Vedic Art', desc: 'Grand modern temple complex showcasing Hindu culture, architecture, and spirituality.' },
      { name: 'Jama Masjid Mosque', badge: 'Historic Mosque', desc: 'One of the largest mosques in India, constructed using red sandstone and marble.' },
      { name: 'Chandni Chowk Market Street', badge: 'Vibrant Old Delhi', desc: 'One of the oldest and busiest trading markets in Delhi, famous for spices and street food.' },
      { name: 'Rashtrapati Bhavan Presidential Palace', badge: 'Government Center', desc: 'Official residence of the President of India, boasting Mughal Gardens.' },
      { name: 'Jantar Mantar Delhi Observatory', badge: 'Astronomy Instruments', desc: 'Historic sun dials and instruments built by Maharaja Jai Singh II of Jaipur.' }
    ]
  },
  {
    name: 'Agra',
    state: 'Uttar Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Nov – Mar',
    priceLevel: '$$$',
    category: 'Heritage',
    lat: 27.1767,
    lng: 78.0081,
    baseImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    sites: [
      { name: 'Taj Mahal Mausoleum', badge: 'Wonders of World', desc: 'The iconic white marble mausoleum built by Shah Jahan for his wife Mumtaz Mahal.' },
      { name: 'Agra Fort Sandstone Palace', badge: 'Imperial Mughal Fort', desc: 'Walled city fortress containing marble palaces, mosques, and audience halls.' },
      { name: 'Fatehpur Sikri Ruins', badge: 'Mughal Capital Ruins', desc: '16th-century ghost town containing Buland Darwaza and Salim Chishti tomb.' },
      { name: 'Tomb of Itimad-ud-Daulah', badge: 'Baby Taj', desc: 'Ornate tomb showcasing the first use of Pietra Dura marble inlay work.' },
      { name: 'Mehtab Bagh Sunset Garden', badge: 'Taj Mirror View', desc: 'Garden complex aligned across the Yamuna River, providing sunset views of the Taj.' },
      { name: 'Agra Jama Masjid', badge: 'Mughal Mosque', desc: 'Red sandstone mosque built by Shah Jahan in honor of his daughter Jahanara Begum.' }
    ]
  },
  {
    name: 'Amritsar',
    state: 'Punjab',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Mar',
    priceLevel: '$$',
    category: 'Spiritual',
    lat: 31.6340,
    lng: 74.8723,
    baseImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073',
    sites: [
      { name: 'Harmandir Sahib Golden Temple', badge: 'Sikh Spiritual Center', desc: 'Vibrant golden temple surrounded by a holy pool, offering free community kitchen meals.' },
      { name: 'Jallianwala Bagh Memorial', badge: 'Historical Park', desc: 'Memorial park preserving the bullet-marked walls and historic well from the 1919 massacre.' },
      { name: 'Wagah Border Beating Retreat', badge: 'Patriotic Ceremony', desc: 'Vibrant military border closing ceremony with high kicks and patriotic music.' },
      { name: 'Durgiana Temple', badge: 'Silver Temple Matha', desc: 'Historic Hindu temple similar in architecture to the Golden Temple.' },
      { name: 'Gobindgarh Fort Museum', badge: 'Military Heritage', desc: '18th-century clay-brick fort showcasing Punjabi history, light shows, and armor.' },
      { name: 'Partition Museum', badge: 'Modern History Archives', desc: 'World’s first museum dedicated to the stories and memories of the 1947 partition.' }
    ]
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    country: 'India',
    region: 'North India',
    bestTime: 'Oct – Jun',
    priceLevel: '$$$',
    category: 'Nature',
    lat: 32.2396,
    lng: 77.1887,
    baseImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
    sites: [
      { name: 'Hadimba Temple Forest', badge: 'Wooden Pagoda Temple', desc: 'Ancient wooden temple dedicated to Goddess Hadimba, surrounded by towering cedar trees.' },
      { name: 'Solang Valley Adventure activities', badge: 'Paragliding & Skiing', desc: 'Vibrant side valley offering adventure sports, zorbing, and ropeways.' },
      { name: 'Rohtang Snowy Pass Peak', badge: 'Himalayan Glaciers', desc: 'High mountain pass offering snowy peak panoramas and sledging opportunities.' },
      { name: 'Jogini Waterfall Trek trail', badge: 'Himalayan Streams', desc: 'Scenic walking trail through pine forests leading to a tall mountain waterfall.' },
      { name: 'Vashisht Hot Water Springs pool', badge: 'Therapeutic Bath', desc: 'Natural hot springs located inside the historic stone temple of Sage Vashisht.' },
      { name: 'Old Manali Village Lanes', badge: 'Cafe Culture Lanes', desc: 'Relaxing village path known for wooden houses, orchards, and live music cafes.' },
      { name: 'Manu Temple Old Manali', badge: 'Only Manu Shrine', desc: 'Wood-and-stone temple dedicated to Sage Manu, the mythological creator of mankind.' },
      { name: 'Van Vihar Forest Sanctuary park', badge: 'Cedar Nature Park', desc: 'Lush municipal park filled with deodar trees and a small boating pond.' }
    ]
  },
  {
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    country: 'India',
    region: 'North India',
    bestTime: 'Jun – Sep',
    priceLevel: '$$$$',
    category: 'Nature',
    lat: 34.1526,
    lng: 77.5771,
    baseImage: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf',
    sites: [
      { name: 'Pangong Tso Lake', badge: 'High Altitude Lake', desc: 'Endorheic lake extending from India to China, famous for shifting blue shades.' },
      { name: 'Nubra Valley Sand Dunes desert', badge: 'Bactrian Camel Trail', desc: 'Cold desert valley famous for sand dunes and double-humped camel rides.' },
      { name: 'Khardung La High Pass peak', badge: 'High Mountain Pass', desc: 'One of the worlds highest motorable passes, gateway to the Shyok and Nubra valleys.' },
      { name: 'Magnetic Hill Illusion stretch', badge: 'Gravity Hill Road', desc: 'A gravitational anomaly stretch where vehicles appear to roll uphill.' },
      { name: 'Shanti Stupa White Dome', badge: 'Peace Monument', desc: 'White-domed Buddhist stupa built by Japanese monks, overlooking Leh town.' },
      { name: 'Leh Palace Royal Residence', badge: 'Tibetan Palace Style', desc: 'Nine-story stone fortress built in the 17th century by King Sengge Namgyal.' },
      { name: 'Thiksey Monastery Complex', badge: 'Little Potala Palace', desc: 'Twelve-story monastery complex containing a giant statue of Maitreya Buddha.' },
      { name: 'Hemis High-Altitude Sanctuary', badge: 'Snow Leopard Habitat', desc: 'Protected national park famous for snow leopards, blue sheep, and valleys.' }
    ]
  },
  {
    name: 'Munnar',
    state: 'Kerala',
    country: 'India',
    region: 'South India',
    bestTime: 'Sep – May',
    priceLevel: '$$$',
    category: 'Nature',
    lat: 10.0889,
    lng: 77.0595,
    baseImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    sites: [
      { name: 'Eravikulam National Park', badge: 'Nilgiri Tahr habitat', desc: 'Forest sanctuary home to the endangered Nilgiri Tahr mountain goat.' },
      { name: 'Mattupetty Dam Reservoir', badge: 'Lakeside Pine forest', desc: 'Scenic storage concrete gravity dam offering speed boating and elephant sightings.' },
      { name: 'Anamudi High Peak trail', badge: 'Western Ghats Roof', desc: 'The highest peak in South India, covered in dense tropical evergreen forests.' },
      { name: 'Tea Museum Heritage Center', badge: 'Tea Estate History', desc: 'Century-old tea estate building showcasing vintage rollers, leaf dryers, and tasting.' },
      { name: 'Kundala Lake Arch Dam', badge: 'Cherry Blossom Lake', desc: 'Scenic lake flanked by tea gardens, famous for pedal boating and Kashmiri Shikara rides.' },
      { name: 'Echo Point Valley View', badge: 'Natural Acoustic spot', desc: 'Confluence point of three mountain streams, popular for echoing voices.' },
      { name: 'Lakkam Waterfalls Forest stream', badge: 'Cascading Forest Pool', desc: 'Quiet mountain waterfall surrounded by red sandalwood forests.' },
      { name: 'Attukad Cascading Falls gorge', badge: 'Deep Mountain Gorge', desc: 'Dramatic waterfall situated amidst hills, accessible via narrow bridges.' }
    ]
  },
  {
    name: 'Ooty',
    state: 'Tamil Nadu',
    country: 'India',
    region: 'South India',
    bestTime: 'Oct – Jun',
    priceLevel: '$$$',
    category: 'Nature',
    lat: 11.4102,
    lng: 76.6950,
    baseImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3',
    sites: [
      { name: 'Ooty Botanical Gardens', badge: 'Fossil Tree Gardens', desc: '55-acre public garden containing a 20-million-year-old fossilized tree trunk.' },
      { name: 'Ooty Boat House Lake', badge: 'Scenic Row Boating', desc: 'Boating lake constructed in 1824, surrounded by groves of Eucalyptus.' },
      { name: 'Doddabetta High Peak View', badge: 'Nilgiri Horizon', desc: 'The highest mountain peak in the Nilgiri Hills, with a hilltop telescope house.' },
      { name: 'Pykara Waterfalls & Dam park', badge: 'Toda Tribe land', desc: 'Sacred river cascade falling over rocky ledges, featuring boating clubs.' },
      { name: 'Ooty Rose Garden Botanical', badge: 'World Federation Award', desc: 'Terraced rose garden hosting over 20,000 varieties of hybrid roses.' },
      { name: 'Mudumalai Wildlife Sanctuary', badge: 'Tiger Reserves', desc: 'National park reserve hosting elephants, Bengal tigers, and leopards.' },
      { name: 'Toy Train Nilgiri Mountain Line', badge: 'Steam Engine Track', desc: 'UNESCO toy train line running through tunnels and wooden bridges.' },
      { name: 'Avalanche Lake Reserve hills', badge: 'Trout Fishing Valley', desc: 'Serene lake area formed by a historic landslide, popular for hiking.' }
    ]
  },
  {
    name: 'Hampi',
    state: 'Karnataka',
    country: 'India',
    region: 'South India',
    bestTime: 'Oct – Mar',
    priceLevel: '$$',
    category: 'Heritage',
    lat: 15.3350,
    lng: 76.4600,
    baseImage: 'https://images.unsplash.com/photo-1600100397608-f010e42fa4bf',
    sites: [
      { name: 'Virupaksha Temple Gopuram', badge: 'Active Shiva Shrine', desc: 'Historic temple with a 160-foot entry tower, dedicated to Lord Shiva.' },
      { name: 'Stone Chariot Vittala Temple', badge: 'Musical Stone Pillars', desc: 'Historic courtyard containing the iconic stone chariot and columns that emit musical tones.' },
      { name: 'Lotus Mahal Palace structure', badge: 'Indo-Islamic Arch', desc: 'Symmetrical double-storied pavilion palace featuring archways shaped like lotus petals.' },
      { name: 'Elephant Stables Monument park', badge: 'Vijayanagara Cavalry', desc: 'Domed structures built to house the royal ceremonial elephants of the state.' },
      { name: 'Matanga Hill Sunset View', badge: 'Tungabhadra panoramas', desc: 'The highest point in Hampi, offering spectacular views of ruins and banana fields.' },
      { name: 'Hazara Rama Temple Carvings', badge: 'Ramayana Stone Art', desc: 'Royal temple complex featuring extensive carvings depicting the epic Ramayana.' },
      { name: 'Queen\'s Bath Enclosure pool', badge: 'Islamic Water Works', desc: 'Ornate bathing chamber surrounded by arches and stone balconies.' },
      { name: 'Hemakuta Hill Temple Ruins', badge: 'Pre-Empire Temples', desc: 'Granite hill containing early medieval monolithic Shiva temples.' }
    ]
  },
  {
    name: 'Mysore',
    state: 'Karnataka',
    country: 'India',
    region: 'South India',
    bestTime: 'Oct – Mar',
    priceLevel: '$$',
    category: 'Heritage',
    lat: 12.2958,
    lng: 76.6394,
    baseImage: 'https://images.unsplash.com/photo-1582103444431-7b3b9b47e2cc',
    sites: [
      { name: 'Mysore Palace Illumination', badge: 'Wodeyar Heritage Palace', desc: 'Three-story stone palace lit up by 97,000 lightbulbs on Sunday evenings.' },
      { name: 'Chamundi Hill Temple temple', badge: 'Goddess Mahishasuramardini', desc: 'Hilltop temple dedicated to Goddess Chamundeshwari, featuring a giant Nandi bull statue.' },
      { name: 'Brindavan Gardens Fountains park', badge: 'Musical Water Fountains', desc: 'Terraced ornamental gardens built across the KRS dam on Kaveri River.' },
      { name: 'Jaganmohan Palace Art Gallery', badge: 'Ravi Varma Paintings', desc: 'Historic palace housing royal artifacts and oil paintings by Raja Ravi Varma.' },
      { name: 'St. Philomena Cathedral spire', badge: 'Neo-Gothic Spire Cathedral', desc: 'Tall cathedral featuring twin 175-foot spires inspired by Cologne Cathedral.' },
      { name: 'Mysore Zoo Conservation park', badge: 'Indian Rhino Refuge', desc: '150-acre zoological park home to rhinos, tigers, and exotic bird species.' }
    ]
  },
  {
    name: 'Goa',
    state: 'Goa',
    country: 'India',
    region: 'West India',
    bestTime: 'Nov – Feb',
    priceLevel: '$$$',
    category: 'Beach & Island',
    lat: 15.2993,
    lng: 74.1240,
    baseImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    sites: [
      { name: 'Calangute Sandy Beach shore', badge: 'Queen of Beaches', desc: 'Wide sandy beach offering water sports, shacks, and souvenir shops.' },
      { name: 'Baga Beach Nightlife lanes', badge: 'Nightlife Hub shacks', desc: 'Famous beach strip featuring clubs, beach parties, and parasailing.' },
      { name: 'Basilica of Bom Jesus shrine', badge: 'Francis Xavier relics', desc: 'UNESCO monument preserving the sacred mortal remains of Saint Francis Xavier.' },
      { name: 'Fort Aguada Lighthouse tower', badge: 'Portuguese Sea Fort', desc: '17th-century clifftop fort overlooking the Arabian Sea.' },
      { name: 'Dudhsagar Cascade Falls forest', badge: 'Sea of Milk waterfalls', desc: 'Four-tiered mountain waterfall surrounded by deciduous forests.' },
      { name: 'Mangueshi Temple Shrine complex', badge: 'Saraswat Temple temple', desc: 'Historic temple featuring a seven-story lamp tower (Deepastambha).' },
      { name: 'Anjuna Flea Market Shore sands', badge: 'Hippy Market sands', desc: 'Vibrant beach market famous for handicrafts, clothing, and spices.' },
      { name: 'Palolem Crescent Bay palms', badge: 'Silent Noise Beach', desc: 'Crescent-shaped beach in South Goa, famous for calm waters and dolphin tours.' },
      { name: 'Colva Palms Beach dunes', badge: 'White Sand Beach', desc: 'Wide white sand coastline popular for local seafood shacks.' },
      { name: 'Divar Island River Crossing ferry', badge: 'Old Goa villages', desc: 'Quiet island on Mandovi River, accessible only via local ferry boats.' }
    ]
  },
  {
    name: 'Swaraj Dweep (Havelock)',
    state: 'Andaman & Nicobar',
    country: 'India',
    region: 'Islands',
    bestTime: 'Oct – May',
    priceLevel: '$$$$',
    category: 'Beach & Island',
    lat: 11.9699,
    lng: 92.9841,
    baseImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
    sites: [
      { name: 'Radhanagar Crescent Beach shore', badge: 'Asia\'s Best Shore', desc: 'Pristine curved white sand beach backed by ancient forest trees.' },
      { name: 'Elephant Beach Corals reef', badge: 'Snorkeling Reef', desc: 'Fringed coral reef area popular for glass-bottom boat rides and sea walks.' },
      { name: 'Vijaynagar Palms Shore bay', badge: 'Sun Rise Bay', desc: 'Quiet sandy bay lined with coconut palms, offering shallow waters.' },
      { name: 'Kalapathar Rocky Beach woods', badge: 'Black Rocks Beach', desc: 'Scenic coastline with black rocks contrasting with turquoise sea water.' },
      { name: 'Neil Island Shaheed Dweep', badge: 'Natural Bridge Reef', desc: 'Quiet island nearby, famous for its natural bridge formations and coral reefs.' },
      { name: 'Ross Island Netaji Subhash', badge: 'British Colony Ruins', desc: 'Charming ruins of old British administrative quarters overrun by roots and deer.' },
      { name: 'Cellular Jail Memorial port', badge: 'Kala Pani History', desc: 'Historic colonial prison monument dedicated to Indian freedom fighters.' },
      { name: 'Mount Harriet Rainforest park', badge: 'National Forest trail', desc: 'Protected evergreen rainforest area offering views of the island group.' }
    ]
  },
  {
    name: 'Kyoto',
    state: 'Kansai',
    country: 'Japan',
    region: 'International',
    bestTime: 'Mar–May, Oct-Nov',
    priceLevel: '$$$$',
    category: 'Heritage',
    lat: 35.0116,
    lng: 135.7681,
    baseImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    sites: [
      { name: 'Fushimi Inari Torii Gates pathway', badge: 'Shinto Shrine path', desc: 'Hillside path winding under thousands of bright red vermilion torii gates.' },
      { name: 'Kinkaku-ji Golden Pavilion pond', badge: 'Zen Temple pond', desc: 'Zen Buddhist temple covered in pure gold leaf, overlooking Kyoko-chi pond.' },
      { name: 'Kiyomizu-dera Temple Stage deck', badge: 'UNESCO Wooden Stage', desc: 'Wooden temple balcony built without nails, offering views of cherry blossoms.' },
      { name: 'Arashiyama Bamboo Groves walk', badge: 'Saga Wild Bamboo', desc: 'Walking path cut through towering bamboo stalks rustling in the wind.' },
      { name: 'Nijo Castle Palace Halls palace', badge: 'Nightingale floors palace', desc: 'Feudal castle containing squeaking floors built to warn against ninjas.' },
      { name: 'Gion Traditional District lanes', badge: 'Geisha Heritage lanes', desc: 'Historic neighborhood of wooden merchant houses and teahouses.' },
      { name: 'Ginkaku-ji Silver Pavilion gardens', badge: 'Sand Gardens Zen', desc: 'Zen temple featuring dry sand gardens and moss terrace gardens.' },
      { name: 'Kyoto Imperial Palace Gardens park', badge: 'Emperor Residence park', desc: 'Walled imperial park containing ponds, gardens, and classical halls.' }
    ]
  },
  {
    name: 'Bali',
    state: 'Bali',
    country: 'Indonesia',
    region: 'International',
    bestTime: 'Apr – Oct',
    priceLevel: '$$$',
    category: 'Beach & Island',
    lat: -8.4095,
    lng: 115.1889,
    baseImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    sites: [
      { name: 'Uluwatu Cliffside Temple shrine', badge: 'Sea Temple cliff', desc: 'Ancient Hindu temple perched on a cliff edge rising 70 meters above the sea.' },
      { name: 'Tanah Lot Sea Shrine rock', badge: 'Offshore Rock Temple', desc: 'Historic temple situated on a wave-lashed rock, accessible at low tide.' },
      { name: 'Ubud Sacred Monkey Forest park', badge: 'Banyan tree forest', desc: 'Sanctuary hosting hundreds of long-tailed macaques and temple ruins.' },
      { name: 'Tegallalang Rice Terraces hills', badge: 'Subak Irrigation hills', desc: 'Beautiful terraced green rice paddies using traditional Balinese irrigation.' },
      { name: 'Mount Batur Volcano Sunrise path', badge: 'Volcano Hiking path', desc: 'Active volcano trail popular for morning hikes above the clouds.' },
      { name: 'Seminyak Sunset Coast sands', badge: 'Beach Club coast', desc: 'Coastal strip known for luxury resorts, shopping, and beach clubs.' },
      { name: 'Nusa Penida Kelingking Cliff bay', badge: 'T-Rex Cliff bay', desc: 'Coastal cliff formation shaped like a dinosaur, framing a white sand bay.' },
      { name: 'Besakih Mother Temple complex', badge: 'Mount Agung Shrine', desc: 'The largest and holiest Hindu temple complex in Bali, built on volcanic slopes.' }
    ]
  },
  {
    name: 'Paris',
    state: 'Île-de-France',
    country: 'France',
    region: 'International',
    bestTime: 'Apr – Oct',
    priceLevel: '$$$$',
    category: 'Heritage',
    lat: 48.8566,
    lng: 2.3522,
    baseImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    sites: [
      { name: 'Eiffel Tower Steel Arch park', badge: 'Iron Lady landmark', desc: 'Iconic 324-meter wrought iron lattice tower overlooking Champ de Mars.' },
      { name: 'Louvre Palace Art Museum palace', badge: 'Glass Pyramid palace', desc: 'The worlds largest art museum, home to the Mona Lisa and Venus de Milo.' },
      { name: 'Notre-Dame Cathedral Spire square', badge: 'French Gothic square', desc: 'Historic cathedral famous for its gargoyles and rose stained glass windows.' },
      { name: 'Arc de Triomphe Landmark square', badge: 'Champs-Elysees avenue', desc: 'Monument honoring those who fought for France in the Napoleonic Wars.' },
      { name: 'Seine River Cruise cruise', badge: 'Seine River Cruise', desc: 'Romantic cruise passing by illuminated bridges and landmarks.' },
      { name: 'Montmartre Sacré-Cœur dome', badge: 'Artist Quarter dome', desc: 'Bohemian hilltop district featuring the white-domed Basilica of the Sacred Heart.' },
      { name: 'Palace of Versailles Hall palace', badge: 'Hall of Mirrors palace', desc: 'Historic royal residence featuring mirror galleries and gardens.' },
      { name: 'Musee d\'Orsay Gallery gallery', badge: 'Impressionist Art gallery', desc: 'Museum housed in a grand railway station, containing impressionist masterpieces.' }
    ]
  },
  {
    name: 'Rome',
    state: 'Lazio',
    country: 'Italy',
    region: 'International',
    bestTime: 'Apr – Oct',
    priceLevel: '$$$$',
    category: 'Heritage',
    lat: 41.9028,
    lng: 12.4964,
    baseImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    sites: [
      { name: 'Colosseum Ancient Amphitheater ruins', badge: 'Gladiator Arena ruins', desc: 'The largest ancient amphitheater built by the Roman Empire.' },
      { name: 'Roman Forum Stone Ruins paths', badge: 'Heart of Old Rome', desc: 'Historic plaza surrounded by ruins of government buildings.' },
      { name: 'Trevi Stone Fountain pool', badge: 'Wish Coin Pool pool', desc: 'Baroque travertine stone fountain depicting Oceanus on his chariot.' },
      { name: 'Pantheon Domed Temple dome', badge: 'Oculus Ceiling dome', desc: 'Former Roman temple featuring a massive unreinforced concrete dome.' },
      { name: 'Vatican City St. Peter\'s square', badge: 'Sistine Chapel dome', desc: 'The enclave state hosting St. Peter’s Basilica and papal museums.' },
      { name: 'Piazza Navona Fountains piazza', badge: 'Bernini Fountains piazza', desc: 'Elegant public square built on the site of the Stadium of Domitian.' },
      { name: 'Spanish Steps Piazza steps', badge: 'Trinita dei Monti steps', desc: 'Scenic monumental stairway connecting Piazza di Spagna and the church.' },
      { name: 'Villa Borghese Gardens park', badge: 'Renaissance Villa park', desc: 'Landscape gardens containing museums, lakes, and temple replicas.' }
    ]
  },
  {
    name: 'Singapore',
    state: 'Singapore',
    country: 'Singapore',
    region: 'International',
    bestTime: 'All Year',
    priceLevel: '$$$$',
    category: 'Nature',
    lat: 1.3521,
    lng: 103.8198,
    baseImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
    sites: [
      { name: 'Gardens by the Bay Domes domes', badge: 'Supertree Grove domes', desc: 'Futuristic park featuring steel supertrees, cloud forests, and flower domes.' },
      { name: 'Marina Bay Sands Deck deck', badge: 'Infinity Pool deck', desc: 'Three towers topped by a cantilevered sky park, offering skyline views.' },
      { name: 'Sentosa Beach & Resort island', badge: 'Cable Car Island island', desc: 'Island resort hosting sandy beaches, theme parks, and golf clubs.' },
      { name: 'Singapore Botanic Gardens park', badge: 'Orchid Collection park', desc: '160-year-old tropical garden, the first UNESCO site in Singapore.' },
      { name: 'Night Safari Animal Park train', badge: 'Nocturnal Zoo train', desc: 'The worlds first safari park for nocturnal animals, viewed via tram.' },
      { name: 'Universal Studios Theme Park rides', badge: 'Sci-Fi City rides', desc: 'Amusement park featuring movie-themed rides, shows, and attractions.' },
      { name: 'Clarke Quay Waterfront Dining river', badge: 'Historical Quay river', desc: 'Waterfront dining and nightlife hub housed in restored warehouses.' },
      { name: 'Jewel Changi Rain Vortex waterfall', badge: 'Indoor Rainforest waterfall', desc: 'Indoor waterfall cascading seven stories down from a glass-domed ceiling.' }
    ]
  }
];

const DESTINATIONS = [];
let destId = 1;
BASE_CITIES.forEach((city) => {
  city.sites.forEach((site, index) => {
    DESTINATIONS.push({
      id: destId++,
      name: `${site.name}, ${city.name}`,
      state: city.state,
      country: city.country,
      region: city.region,
      bestTime: city.bestTime,
      priceLevel: city.priceLevel,
      category: city.category,
      badge: site.badge,
      lat: city.lat + (index * 0.003 - 0.01),
      lng: city.lng + (index * 0.003 - 0.01),
      image: `${city.baseImage}?auto=format&fit=crop&w=800&q=80`,
      description: site.desc
    });
  });
});

const ACTIVITIES = [
  {
    id: 201,
    name: 'Dashashwamedh Ghat Ganga Aarti',
    city: 'Varanasi',
    category: 'Spiritual',
    cost: 0,
    duration: '90',
    description: 'Sunset prayer ceremony featuring oil lamps, Vedic chanting, and holy fire rituals.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 202,
    name: 'Shri Ram Janmabhoomi Darshan',
    city: 'Ayodhya',
    category: 'Spiritual',
    cost: 0,
    duration: '120',
    description: 'Darshan at the newly built holy temple complex dedicated to Lord Rama.',
    image: 'https://images.unsplash.com/photo-1609946782782-96c21e6c3e98?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 203,
    name: 'Amber Fort Elephant Safari & Tour',
    city: 'Jaipur',
    category: 'Heritage',
    cost: 400,
    duration: '180',
    description: 'Explore royal courtyards, mirror halls, and sunset views from historical bastions.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 204,
    name: 'White Water River Rafting',
    city: 'Rishikesh',
    category: 'Adventure',
    cost: 800,
    duration: '120',
    description: 'Thrilling white-water rafting in the holy rapids of the Ganga River.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 205,
    name: 'Kedarnath Temple Trek',
    city: 'Kedarnath',
    category: 'Spiritual',
    cost: 500,
    duration: '360',
    description: 'Breathtaking 16km trek through valley pathways to the high Himalayan temple of Shiva.',
    image: 'https://images.unsplash.com/photo-1626715693005-efb553e110b6?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 206,
    name: 'Jagannath Temple Darshan',
    city: 'Puri',
    category: 'Spiritual',
    cost: 0,
    duration: '90',
    description: 'Seek blessings at the ancient, towering coastal shrine of Lord Jagannath.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 207,
    name: 'Dwarkadhish Temple Prayer',
    city: 'Dwarka',
    category: 'Spiritual',
    cost: 0,
    duration: '100',
    description: 'Explore the 5-story historic monument dedicated to Lord Krishna.',
    image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 208,
    name: 'Kiyomizu-dera Temple Tour',
    city: 'Kyoto',
    category: 'Heritage',
    cost: 400,
    duration: '120',
    description: 'Visit the historic wooden temple stage overlooking maple valleys.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 209,
    name: 'Uluwatu Sunset Kecak Dance',
    city: 'Bali',
    category: 'Culture',
    cost: 150,
    duration: '90',
    description: 'Traditional fire dance performance on a cliffside temple overlooking the ocean.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80'
  }
];

module.exports = { DESTINATIONS, ACTIVITIES };
