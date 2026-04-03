import type { Constellation } from '../types'

export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'ursa_major',
    iauAbbr: 'UMa',
    name: 'Ursa Major',
    altNames: ['Big Dipper', 'Great Bear', 'Plow'],
    stars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    lines: [
      { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
      { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
      { from: 1, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 },
    ],
    centerRa: 11.5, centerDec: 55.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Callisto was a nymph beloved by Zeus who was transformed into a bear by the jealous Hera. Zeus placed her among the stars as Ursa Major so she would be immortal, eternally circling the celestial pole.',
        significance: 'The two "pointer stars" Merak and Dubhe always point toward Polaris, making Ursa Major the most important navigational constellation in the northern hemisphere.',
      },
      {
        culture: 'Iroquois (Haudenosaunee)',
        story: 'The bowl of the Big Dipper represents a great bear, and the three handle stars are hunters pursuing her. In autumn when the bear "descends" lower in the sky, the hunters have wounded her — and her blood turns the leaves red.',
        significance: "Served as a seasonal calendar: the bear's position in the sky marked planting and harvest times through the year.",
      },
      {
        culture: 'Chinese',
        story: 'Known as Beidou, the Northern Dipper, these seven stars form a ladle that pours the celestial waters of life. The star Dubhe is the palace of the celestial emperor, ruling from the north.',
        significance: 'The Northern Dipper was used to determine the direction of north and to mark the progression of seasons in ancient Chinese astronomy.',
      },
    ],
  },
  {
    id: 'ursa_minor',
    iauAbbr: 'UMi',
    name: 'Ursa Minor',
    altNames: ['Little Dipper', 'Little Bear'],
    stars: [20, 21, 22, 23, 24, 25, 26],
    lines: [
      { from: 20, to: 23 }, { from: 23, to: 24 }, { from: 24, to: 25 },
      { from: 25, to: 26 }, { from: 26, to: 21 }, { from: 21, to: 22 },
    ],
    centerRa: 15.0, centerDec: 78.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Arcas, the son of Callisto, was placed in the sky as Ursa Minor by Zeus. He nearly killed his mother (transformed into Ursa Major) when hunting, and Zeus prevented the tragedy by lifting them both to the stars.',
        significance: 'Polaris, the North Star at the tip of the Little Dipper\'s handle, stays fixed in the sky while all other stars rotate around it — making it the perfect navigational anchor.',
      },
      {
        culture: 'Phoenician',
        story: 'Ancient Phoenician sailors called Polaris the "Guiding Star" and used the Little Bear to navigate the Mediterranean. Unlike Greek sailors who used the Big Dipper, Phoenicians relied on this tighter constellation for precision.',
        significance: 'The fixed position of Polaris enabled open-ocean navigation across the Mediterranean and beyond, enabling the Phoenicians to become the greatest traders of the ancient world.',
      },
      {
        culture: 'Hindu (Jyotisha)',
        story: 'Polaris is Dhruva, a young prince who meditated so devoutly that Vishnu granted him an eternal place in the heavens as the immovable star around which all creation revolves.',
        significance: 'Dhruva symbolizes devotion and steadfastness. The story teaches that sincere effort and focus can elevate anyone to the highest position.',
      },
    ],
  },
  {
    id: 'leo',
    iauAbbr: 'Leo',
    name: 'Leo',
    altNames: ['The Lion', 'Lion'],
    stars: [40, 41, 42, 43, 44, 45, 46, 47],
    lines: [
      { from: 40, to: 46 }, { from: 46, to: 44 }, { from: 44, to: 45 },
      { from: 45, to: 42 }, { from: 42, to: 43 }, { from: 43, to: 41 },
      { from: 41, to: 47 }, { from: 47, to: 43 },
      { from: 40, to: 46 }, { from: 46, to: 108 },
    ],
    centerRa: 10.5, centerDec: 18.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek / Roman',
        story: 'Leo represents the Nemean Lion, a ferocious beast with impenetrable golden fur that Hercules strangled with his bare hands as the first of his Twelve Labors. Zeus honored the lion\'s ferocity by placing it in the sky.',
        significance: 'In ancient times, the Sun passed through Leo during summer solstice. When the Nile flooded each year (vital for Egyptian agriculture), Leo was prominent in the sky — some believe the Sphinx was built facing Leo rising at dawn.',
      },
      {
        culture: 'Mesopotamian',
        story: 'In the oldest star catalogs, the Babylonians called Leo "The Great Lion" (UR.GU.LA) and associated it with the king and the Sun. The bright star Regulus — meaning "little king" — was considered the most royal star in the sky.',
        significance: 'Regulus in Leo marks the ecliptic so precisely that it was used to calibrate ancient star catalogs. Royal coronations were sometimes timed to align with Regulus.',
      },
      {
        culture: 'Hindu (Vedic)',
        story: 'Leo corresponds to Simha in Vedic astrology, ruled by the Sun. It represents Narasimha, the half-lion half-man avatar of Vishnu who protected his devotee Prahlada from the demon king Hiranyakashipu.',
        significance: 'The Lion\'s sickle asterism (Regulus through the curve of stars) was used as a calendar marker for agricultural seasons in the Indus Valley.',
      },
    ],
  },
  {
    id: 'cassiopeia',
    iauAbbr: 'Cas',
    name: 'Cassiopeia',
    altNames: ['The Queen', 'The W', 'The M'],
    stars: [60, 61, 62, 63, 64],
    lines: [
      { from: 61, to: 60 }, { from: 60, to: 62 }, { from: 62, to: 63 }, { from: 63, to: 64 },
    ],
    centerRa: 1.0, centerDec: 60.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Queen Cassiopeia of Ethiopia boasted she was more beautiful than the sea nymphs. Poseidon punished her hubris by chaining her daughter Andromeda to a rock as a sea monster\'s sacrifice. As punishment, Cassiopeia was placed in the sky chained to her throne, spinning around the north pole — sometimes hanging upside down in humiliation.',
        significance: 'Cassiopeia is circumpolar from most of the northern hemisphere, meaning it never sets. It always points toward the Milky Way\'s most star-rich regions and serves as a landmark for finding Andromeda galaxy.',
      },
      {
        culture: 'Arabic',
        story: 'Arab astronomers called this constellation Al-Kaff al-Khadib ("the stained hand"), depicting a hand dyed with henna in a gesture of celebration. The five stars traced the fingers and palm of an outstretched hand.',
        significance: 'The constellation was used by Arabian navigators to track the seasons and locate the north celestial pole when Polaris was harder to see.',
      },
    ],
  },
  {
    id: 'gemini',
    iauAbbr: 'Gem',
    name: 'Gemini',
    altNames: ['The Twins', 'Castor and Pollux'],
    stars: [80, 81, 82, 83, 84, 85, 86, 87],
    lines: [
      { from: 81, to: 84 }, { from: 84, to: 82 }, { from: 82, to: 85 },
      { from: 80, to: 83 }, { from: 83, to: 86 }, { from: 86, to: 85 },
      { from: 81, to: 80 },
    ],
    centerRa: 7.1, centerDec: 23.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek / Roman',
        story: 'Castor and Pollux were the twin sons of Leda. Castor was mortal (son of the king of Sparta) and Pollux was divine (son of Zeus). When Castor died in battle, Pollux was so grief-stricken he begged Zeus to share his immortality — so they alternate between Olympus and the underworld, forever together.',
        significance: 'Sailors considered Castor and Pollux protective spirits of the sea. "St. Elmo\'s fire" — the electrical glow seen on ship masts during storms — was thought to be the twins watching over sailors.',
      },
      {
        culture: 'Mesopotamian',
        story: 'The Babylonians called these stars "The Great Twins" (MASH.TAB.BA.GAL.GAL), associating them with Lugalirra and Meslamtaea, twin gods of the underworld who also protected the living from evil.',
        significance: 'The Sun entered Gemini at summer solstice in ancient times. Gemini was called the "Gate of the Sun" — the doorway between the mortal world and the realm of the gods.',
      },
    ],
  },
  {
    id: 'orion',
    iauAbbr: 'Ori',
    name: 'Orion',
    altNames: ['The Hunter', 'The Giant'],
    stars: [100, 101, 102, 103, 104, 105, 107, 108],
    lines: [
      { from: 100, to: 102 }, { from: 100, to: 104 },
      { from: 101, to: 107 }, { from: 107, to: 105 },
      { from: 102, to: 103 }, { from: 103, to: 104 }, { from: 104, to: 105 },
      { from: 108, to: 102 },
    ],
    centerRa: 5.5, centerDec: 0.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Orion was the greatest hunter in the world, son of Poseidon, so mighty he could walk on water. He boasted he would hunt all animals to extinction, so Gaia sent a scorpion to kill him. They were placed on opposite sides of the sky so they would never meet again.',
        significance: 'Orion rises in the east and sets in the west like all stars, but his belt — three perfectly aligned stars — points east to west. For thousands of years, the rising of Orion marked the beginning of the agricultural year in many cultures.',
      },
      {
        culture: 'Egyptian',
        story: 'The Egyptians saw Orion as Osiris, god of the afterlife and resurrection. The three belt stars aligned with the three pyramids of Giza. The Nile mirrored the Milky Way, and Orion\'s rising announced the Nile flood that brought fertility to Egypt.',
        significance: 'The alignment of the Giza pyramids with Orion\'s belt remains one of archaeology\'s most discussed architectural alignments — though debated, it reflects the profound importance of Orion to Egyptian civilization.',
      },
      {
        culture: 'Aboriginal Australian (Yolŋu)',
        story: 'The Yolŋu people of Arnhem Land see three men in a canoe fishing — the belt stars are the men, and the nebula below is their catch. As Orion rises, it signals the time for certain fish to be plentiful along the coasts.',
        significance: 'Indigenous Australians developed sophisticated ecological calendars based on star positions — Orion\'s visibility was tied to seasonal food availability, tidal patterns, and ceremony timing.',
      },
    ],
  },
  {
    id: 'canis_major',
    iauAbbr: 'CMa',
    name: 'Canis Major',
    altNames: ['The Greater Dog', 'Orion\'s Dog'],
    stars: [120, 121, 122, 123, 124, 125],
    lines: [
      { from: 120, to: 122 }, { from: 120, to: 125 }, { from: 125, to: 121 },
      { from: 121, to: 123 }, { from: 123, to: 124 },
    ],
    centerRa: 6.9, centerDec: -22.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Canis Major is one of Orion\'s faithful hunting dogs. Some say it represents Laelaps, the fastest dog in the world, given to Europa by Zeus. Laelaps could catch anything — but was set to chase a fox that could never be caught. Zeus solved the paradox by turning them both to stone and casting them to the stars.',
        significance: 'Sirius, the "Dog Star," is the brightest star in the entire night sky. Its annual return at dawn (the "heliacal rising") was used by Egyptians to predict the Nile flood and marked their new year.',
      },
      {
        culture: 'Egyptian',
        story: 'Sirius was Sopdet to the Egyptians, the goddess who announced the Nile flood. Her disappearance from the sky for 70 days mirrored the 70-day mummification period. When she rose again before dawn, it was the Egyptian New Year — a moment of rebirth.',
        significance: 'The Great Pyramid of Giza has a shaft aligned precisely with Sirius. Ancient Egyptians considered Sirius to be the soul of Isis, and its appearance was the most important astronomical event of their year.',
      },
    ],
  },
  {
    id: 'canis_minor',
    iauAbbr: 'CMi',
    name: 'Canis Minor',
    altNames: ['The Lesser Dog', 'Orion\'s Little Dog'],
    stars: [140, 141],
    lines: [
      { from: 140, to: 141 },
    ],
    centerRa: 7.6, centerDec: 6.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Canis Minor is Orion\'s second hunting dog. Some legends identify it as Maera, the faithful dog of the shepherd Icarius who was killed unjustly. The dog grieved so deeply at his master\'s grave that the gods honored his loyalty by placing him among the stars.',
        significance: 'Procyon, meaning "before the dog" in Greek, rises shortly before Sirius — acting as a herald. Sailors and farmers used its appearance to prepare for seasonal changes signaled by Sirius\'s rising.',
      },
    ],
  },
  {
    id: 'cancer',
    iauAbbr: 'Cnc',
    name: 'Cancer',
    altNames: ['The Crab', 'The Crayfish'],
    stars: [160, 161, 162, 163, 164],
    lines: [
      { from: 161, to: 163 }, { from: 163, to: 162 },
      { from: 162, to: 164 }, { from: 164, to: 160 }, { from: 160, to: 162 },
    ],
    centerRa: 8.7, centerDec: 19.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'When Hercules fought the Lernaean Hydra as his second labor, Hera sent a crab to distract him by pinching his foot. Hercules crushed it — but Hera honored its small act of bravery by placing it in the sky, where it shines dimly as a reminder that even small creatures can act courageously.',
        significance: 'In ancient times the Sun was in Cancer during the summer solstice. The "Tropic of Cancer" — where the Sun reaches its highest point — is named after this constellation. Cancer marked the celestial gateway through which souls were said to descend to Earth.',
      },
    ],
  },
  {
    id: 'virgo',
    iauAbbr: 'Vir',
    name: 'Virgo',
    altNames: ['The Maiden', 'The Virgin'],
    stars: [180, 181, 182, 183, 184, 185, 186],
    lines: [
      { from: 181, to: 182 }, { from: 182, to: 186 }, { from: 186, to: 184 },
      { from: 184, to: 180 }, { from: 180, to: 185 },
      { from: 183, to: 202 }, { from: 202, to: 182 },
    ],
    centerRa: 13.0, centerDec: -2.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Virgo is Demeter, goddess of the harvest. When her daughter Persephone was taken to the underworld, Demeter withdrew her gifts from the Earth, creating winter. When Persephone returns each spring, Virgo rises in the night sky and the Earth blooms again.',
        significance: 'Spica, the bright blue-white star in Virgo\'s hand, was used by Hipparchus around 127 BCE to discover the precession of the equinoxes — one of the most important discoveries in the history of astronomy.',
      },
      {
        culture: 'Mesopotamian',
        story: 'The Babylonians called Virgo "The Furrow," depicting the goddess Shala holding an ear of grain (represented by Spica). She was the embodiment of the agricultural year — planting, growing, and harvest.',
        significance: 'Virgo marks the beginning of spring planting season. The Virgo Cluster of galaxies — 1,300 galaxies located near Spica — makes this the richest region of deep sky objects visible to amateur astronomers.',
      },
    ],
  },
  {
    id: 'bootes',
    iauAbbr: 'Boo',
    name: 'Boötes',
    altNames: ['The Herdsman', 'The Bear Driver'],
    stars: [200, 201, 202, 203, 204, 205, 206],
    lines: [
      { from: 200, to: 204 }, { from: 204, to: 202 }, { from: 202, to: 203 },
      { from: 203, to: 201 }, { from: 201, to: 206 },
      { from: 200, to: 205 }, { from: 205, to: 202 },
    ],
    centerRa: 14.7, centerDec: 30.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Boötes is Arcas, the son who was placed in the sky to "drive" Ursa Major around the celestial pole. In another myth, he is Icarius, the first man taught to make wine by Dionysus. Neighbors who drank his wine thought they were poisoned (they were just drunk) and killed him — the gods immortalized him in stars.',
        significance: 'Arcturus, the fourth brightest star in the sky and the brightest in the northern celestial hemisphere, anchors Boötes. Follow the arc of the Big Dipper\'s handle and you "Arc to Arcturus" — one of the most reliable star-finding techniques.',
      },
      {
        culture: 'Arabic',
        story: 'Arab astronomers saw Boötes as Al-Auwwa ("the barker") — a herding dog barking to drive the Great Bear around the pole. The stars were also seen as a shepherd with a crook, guiding his flock across the sky.',
        significance: 'Arcturus was the first star ever observed in daylight, seen through a telescope in 1635. Its high proper motion — visibly moving relative to other stars over centuries — helped astronomers understand that stars are not fixed objects.',
      },
    ],
  },
  {
    id: 'corvus',
    iauAbbr: 'Crv',
    name: 'Corvus',
    altNames: ['The Crow', 'The Raven'],
    stars: [220, 221, 222, 223, 224],
    lines: [
      { from: 223, to: 220 }, { from: 220, to: 224 }, { from: 224, to: 222 },
      { from: 222, to: 221 }, { from: 221, to: 223 },
    ],
    centerRa: 12.4, centerDec: -20.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Apollo sent the crow (originally white) to fetch water in a cup (the neighboring constellation Crater). The lazy crow waited for figs to ripen to eat, then lied to Apollo that a water snake (Hydra) blocked the spring. Apollo saw through the lie and punished the crow by placing it forever in the sky, next to the cup but unable to drink — its feathers turned black as punishment.',
        significance: 'Corvus, Crater (the Cup), and Hydra (the Water Snake) are three constellations that form a connected story across the spring sky — one of the few multi-constellation myths where the figures are actually depicted adjacent to each other.',
      },
      {
        culture: 'Chinese',
        story: 'In Chinese astronomy, the four main stars of Corvus form the "Chariot" or "Military Camp," part of the Vermilion Bird of the South — one of the four symbols of the Chinese constellations representing the southern direction and summer.',
        significance: 'The compact, distinctive quadrilateral of Corvus makes it one of the easiest constellations to recognize in the spring sky once you know it.',
      },
    ],
  },
  {
    id: 'auriga',
    iauAbbr: 'Aur',
    name: 'Auriga',
    altNames: ['The Charioteer', 'The Wagoner'],
    stars: [240, 241, 242, 243, 244],
    lines: [
      { from: 240, to: 241 }, { from: 241, to: 242 }, { from: 242, to: 244 },
      { from: 244, to: 243 }, { from: 243, to: 240 },
    ],
    centerRa: 5.5, centerDec: 42.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Auriga is Erichthonius, a prince of Athens who was the first to harness four horses to a chariot, mimicking the Sun god\'s ride across the sky. Athena was so impressed she convinced Zeus to honor him with a constellation.',
        significance: 'Capella, the sixth brightest star in the sky, is actually four stars — two pairs of stars orbiting each other. The name "Capella" means "little she-goat," and the three faint stars nearby (the "Kids") are the goat\'s offspring according to myth.',
      },
      {
        culture: 'Mesopotamian',
        story: 'Babylonian astronomers knew Capella as the "Shepherd of the Heavenly Flock," a star of the god Anu who presided over the sky. Capella\'s prominent position at winter zenith made it a time-keeping star for ancient calendars.',
        significance: 'In April, Auriga is visible in the western sky after sunset, with Capella unmistakably bright. It was one of the first constellations to be identified by ancient cultures due to Capella\'s extreme brightness.',
      },
    ],
  },
  {
    id: 'perseus',
    iauAbbr: 'Per',
    name: 'Perseus',
    altNames: ['The Hero'],
    stars: [260, 261, 262, 263, 264, 265],
    lines: [
      { from: 265, to: 260 }, { from: 260, to: 264 }, { from: 264, to: 262 },
      { from: 262, to: 263 }, { from: 260, to: 261 }, { from: 261, to: 263 },
    ],
    centerRa: 3.5, centerDec: 47.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Perseus was tasked with slaying Medusa, the Gorgon whose gaze turned men to stone. Armed with a mirrored shield from Athena, winged sandals from Hermes, and a helmet of invisibility from Hades, he beheaded Medusa while looking at her reflection. He carried her severed head on his journey, using it to rescue Andromeda from a sea monster.',
        significance: 'Algol — Beta Persei — is the most famous variable star, dimming and brightening every 2.87 days as a companion star eclipses it. Ancient Arabic astronomers called it "the Demon Star" (Ra\'s al-Ghul, "head of the ghoul") — possibly because they noticed its mysterious variability, giving it an ominous reputation.',
      },
      {
        culture: 'Arabic',
        story: 'Medieval Arab astronomers depicted Perseus as a man holding a Gorgon\'s head in one hand and a sword in the other. Algol, the demon star in the Gorgon\'s head, was considered an ill omen — no major undertakings were advised when it was bright.',
        significance: 'The Perseid meteor shower, one of the most spectacular annual meteor showers (peaking in August), appears to radiate from the constellation Perseus, making this hero a source of celestial fireworks every year.',
      },
    ],
  },
  {
    id: 'hydra',
    iauAbbr: 'Hya',
    name: 'Hydra',
    altNames: ['The Water Snake', 'The Sea Serpent'],
    stars: [280, 281, 282, 283, 284, 285, 286, 287],
    lines: [
      { from: 286, to: 281 }, { from: 281, to: 280 }, { from: 280, to: 282 },
      { from: 282, to: 284 }, { from: 284, to: 283 }, { from: 283, to: 285 },
    ],
    centerRa: 10.5, centerDec: -18.0,
    difficulty: 3,
    mythology: [
      {
        culture: 'Greek',
        story: 'The Lernaean Hydra was a monstrous water serpent with nine heads — when one was cut off, two grew back. Hercules defeated it as his second labor by having his companion Iolaus sear each neck after he severed the head, preventing regrowth. He dipped his arrows in the Hydra\'s poison, which led to his eventual death.',
        significance: 'Hydra is the largest constellation in the sky, stretching 100 degrees across the celestial equator. Following it from head to tail takes you past five other constellations — Corvus and Crater sit on its back like passengers.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians knew Hydra as the cosmic sea serpent Mušhuššu, the dragon-serpent of the chaos god Tiamat. After Marduk defeated Tiamat to create the ordered cosmos, the serpent was placed in the sky as a reminder of the chaos that predates creation.',
        significance: 'Alphard, the brightest star in Hydra, means "the solitary one" in Arabic — it stands alone in a large area with no other bright stars nearby, making it both easy and satisfying to find once you know where to look.',
      },
    ],
  },
]

export const CONSTELLATIONS_BY_ID: Record<string, Constellation> = Object.fromEntries(
  CONSTELLATIONS.map(c => [c.id, c])
)

// Ordered learning path (difficulty 1 first, then 2, then 3)
export const LEARNING_ORDER: string[] = [
  'ursa_major', 'ursa_minor', 'cassiopeia',   // northern anchors
  'orion', 'gemini', 'canis_major', 'canis_minor', // winter/spring transition
  'leo', 'cancer',                             // spring center
  'virgo', 'corvus',                           // spring south
  'bootes',                                    // spring north
  'auriga', 'perseus',                         // winter/spring overhead
  'hydra',                                     // challenge
]
