const sonicEntries = [
  {
    title: "Sonic the Hedgehog",
    year: 1991,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "The original super-speed platform game that launched Sonic on June 23, 1991.",
    tags: ["Genesis", "Debut", "Platformer"]
  },
  {
    title: "Sonic the Hedgehog (8-bit)",
    year: 1991,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "A handheld and Master System version that let early fans race with Sonic in a new format.",
    tags: ["Game Gear", "Master System", "Platformer"]
  },
  {
    title: "Waku Waku Sonic Patrol Car",
    year: 1991,
    type: "Side Project",
    lane: "Arcade Ride",
    decade: "1990s",
    tagline: "A children’s arcade ride where Sonic zoomed around in a police car.",
    tags: ["Arcade", "Kid Ride", "Japan"]
  },
  {
    title: "Sonic Eraser",
    year: 1991,
    type: "Side Project",
    lane: "Puzzle",
    decade: "1990s",
    tagline: "A falling-block puzzle spin-off from Sonic’s very first years.",
    tags: ["Puzzle", "Spin-off", "Genesis"]
  },
  {
    title: "Sonic the Hedgehog 2",
    year: 1992,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "Sonic’s huge sequel that introduced Tails to the world.",
    tags: ["Genesis", "Tails", "Platformer"]
  },
  {
    title: "Sonic the Hedgehog 2 (8-bit)",
    year: 1992,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "A different portable quest where Sonic races to rescue Tails.",
    tags: ["Game Gear", "Master System", "Platformer"]
  },
  {
    title: "Sonic CD",
    year: 1993,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "A time-traveling adventure that introduced Amy Rose and Metal Sonic.",
    tags: ["Sega CD", "Time Travel", "Platformer"]
  },
  {
    title: "Sonic Chaos",
    year: 1993,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "An 8-bit action game starring Sonic and Tails.",
    tags: ["Game Gear", "Master System", "Platformer"]
  },
  {
    title: "Dr. Robotnik's Mean Bean Machine",
    year: 1993,
    type: "Side Project",
    lane: "Puzzle",
    decade: "1990s",
    tagline: "A puzzle game built around Robotnik and his goofy bean battles.",
    tags: ["Puzzle", "Spin-off", "Genesis"]
  },
  {
    title: "SegaSonic the Hedgehog",
    year: 1993,
    type: "Side Project",
    lane: "Arcade",
    decade: "1990s",
    tagline: "An arcade adventure with a trackball controller and a rescue escape mission.",
    tags: ["Arcade", "Mighty", "Ray"]
  },
  {
    title: "Sonic Spinball",
    year: 1993,
    type: "Side Project",
    lane: "Pinball",
    decade: "1990s",
    tagline: "Sonic rolled through bumpers, loops, and robot-filled pinball boards.",
    tags: ["Pinball", "Genesis", "Spin-off"]
  },
  {
    title: "Adventures of Sonic the Hedgehog",
    year: 1993,
    type: "TV",
    lane: "Animation",
    decade: "1990s",
    tagline: "Sonic’s first cartoon show, packed with slapstick comedy and Sonic Says lessons.",
    tags: ["TV Series", "Animation", "65 Episodes"]
  },
  {
    title: "Sonic the Hedgehog",
    year: 1993,
    type: "TV",
    lane: "Animation",
    decade: "1990s",
    tagline: "The darker Saturday-morning cartoon often nicknamed SatAM by fans.",
    tags: ["TV Series", "Animation", "ABC"]
  },
  {
    title: "Sonic the Comic",
    year: 1993,
    type: "Comic",
    lane: "Printed Media",
    decade: "1990s",
    tagline: "A long-running UK comic series with its own Sonic story world.",
    tags: ["Fleetway", "UK", "Comic Series"]
  },
  {
    title: "Sonic the Hedgehog promotional comic",
    year: 1991,
    type: "Comic",
    lane: "Printed Media",
    decade: "1990s",
    tagline: "An early comic used to help introduce Sonic to readers and players.",
    tags: ["Promotional", "Comic", "1991"]
  },
  {
    title: "Sonic the Hedgehog manga",
    year: 1992,
    type: "Book",
    lane: "Manga",
    decade: "1990s",
    tagline: "A Japanese manga that introduced early versions of Amy Rose and Charmy Bee.",
    tags: ["Manga", "Shogakukan", "Japan"]
  },
  {
    title: "Sonic the Hedgehog Story Comic",
    year: 1991,
    type: "Book",
    lane: "Manga",
    decade: "1990s",
    tagline: "A short Japanese story comic tied to the original game.",
    tags: ["Manga", "Promotional", "Japan"]
  },
  {
    title: "Sonic the Hedgehog 3",
    year: 1994,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "A fast sequel that brought in Knuckles and giant multi-zone adventures.",
    tags: ["Genesis", "Knuckles", "Platformer"]
  },
  {
    title: "Sonic & Knuckles",
    year: 1994,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "The lock-on follow-up that completed Sonic 3’s grand story.",
    tags: ["Genesis", "Lock-On", "Platformer"]
  },
  {
    title: "Sonic Triple Trouble",
    year: 1994,
    type: "Game",
    lane: "Handheld",
    decade: "1990s",
    tagline: "A handheld quest starring Sonic and Tails against Fang and Robotnik.",
    tags: ["Game Gear", "Handheld", "Platformer"]
  },
  {
    title: "Sonic Drift",
    year: 1994,
    type: "Side Project",
    lane: "Racing",
    decade: "1990s",
    tagline: "Sonic’s first racing game, built for speedy kart-style fun.",
    tags: ["Racing", "Game Gear", "Spin-off"]
  },
  {
    title: "Sonic the Hedgehog's Gameworld",
    year: 1994,
    type: "Side Project",
    lane: "Educational",
    decade: "1990s",
    tagline: "A Sega Pico title made for younger children and early learning play.",
    tags: ["Educational", "Sega Pico", "Kids"]
  },
  {
    title: "Tails and the Music Maker",
    year: 1994,
    type: "Side Project",
    lane: "Educational",
    decade: "1990s",
    tagline: "A musical learning game where Tails helped kids make songs.",
    tags: ["Educational", "Sega Pico", "Kids"]
  },
  {
    title: "Sonic the Hedgehog (Archie Comics)",
    year: 1992,
    type: "Comic",
    lane: "Printed Media",
    decade: "1990s",
    tagline: "The long-running American comic universe that lasted for decades.",
    tags: ["Archie", "US", "Comic Series"]
  },
  {
    title: "Stay Sonic",
    year: 1993,
    type: "Book",
    lane: "Novel",
    decade: "1990s",
    tagline: "A UK Sonic book packed with lore, interviews, and game guide content.",
    tags: ["Book", "UK", "Reference"]
  },
  {
    title: "Sonic the Hedgehog Adventure Gamebooks",
    year: 1993,
    type: "Book",
    lane: "Gamebook",
    decade: "1990s",
    tagline: "A six-book choose-your-route style adventure line for readers.",
    tags: ["Gamebook", "UK", "Books"]
  },
  {
    title: "Knuckles' Chaotix",
    year: 1995,
    type: "Game",
    lane: "Spin-off",
    decade: "1990s",
    tagline: "A 32X adventure starring Knuckles and the Chaotix crew.",
    tags: ["32X", "Knuckles", "Chaotix"]
  },
  {
    title: "Tails Adventure",
    year: 1995,
    type: "Game",
    lane: "Spin-off",
    decade: "1990s",
    tagline: "A slower, gadget-filled quest that put Tails in the spotlight.",
    tags: ["Game Gear", "Tails", "Adventure"]
  },
  {
    title: "Sonic Drift 2",
    year: 1995,
    type: "Side Project",
    lane: "Racing",
    decade: "1990s",
    tagline: "A bigger handheld racing sequel with more Sonic characters.",
    tags: ["Racing", "Game Gear", "Spin-off"]
  },
  {
    title: "Sonic Labyrinth",
    year: 1995,
    type: "Side Project",
    lane: "Maze",
    decade: "1990s",
    tagline: "A maze game where Sonic’s shoes were gone and movement felt extra slippery.",
    tags: ["Game Gear", "Master System", "Spin-off"]
  },
  {
    title: "Sonic the Fighters",
    year: 1996,
    type: "Side Project",
    lane: "Fighting",
    decade: "1990s",
    tagline: "A 3D fighting game that let Sonic and friends punch, kick, and battle.",
    tags: ["Arcade", "Fighting", "AM2"]
  },
  {
    title: "Sonic 3D Blast",
    year: 1996,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "A 3D-style isometric adventure where Sonic rescued flickies.",
    tags: ["Genesis", "Saturn", "3D Style"]
  },
  {
    title: "Sonic Blast",
    year: 1996,
    type: "Game",
    lane: "Handheld",
    decade: "1990s",
    tagline: "A later 8-bit platform game starring Sonic and Knuckles.",
    tags: ["Game Gear", "Master System", "Platformer"]
  },
  {
    title: "Sonic's Schoolhouse",
    year: 1996,
    type: "Side Project",
    lane: "Educational",
    decade: "1990s",
    tagline: "A PC learning game with math, letters, and an educational Sonic spin.",
    tags: ["Educational", "PC", "Kids"]
  },
  {
    title: "Sonic Christmas Blast",
    year: 1996,
    type: "TV",
    lane: "Animation Special",
    decade: "1990s",
    tagline: "A holiday TV special where Sonic saves Christmas.",
    tags: ["Special", "Animation", "Holiday"]
  },
  {
    title: "Sonic the Hedgehog: The Movie",
    year: 1996,
    type: "Movie",
    lane: "Animation",
    decade: "1990s",
    tagline: "A Japanese OVA film adventure that later reached international audiences.",
    tags: ["OVA", "Animated Film", "Direct-to-Video"]
  },
  {
    title: "Sonic Jam",
    year: 1997,
    type: "Side Project",
    lane: "Compilation",
    decade: "1990s",
    tagline: "A Saturn collection that bundled classic Sonic games together.",
    tags: ["Compilation", "Saturn", "Classic"]
  },
  {
    title: "Sonic R",
    year: 1997,
    type: "Side Project",
    lane: "Racing",
    decade: "1990s",
    tagline: "A foot-racing game with colorful courses and memorable music.",
    tags: ["Racing", "Saturn", "Windows"]
  },
  {
    title: "Knuckles the Echidna",
    year: 1997,
    type: "Comic",
    lane: "Printed Media",
    decade: "1990s",
    tagline: "An Archie comic spin-off starring Knuckles in his own adventures.",
    tags: ["Archie", "Comic", "Knuckles"]
  },
  {
    title: "Sonic Adventure",
    year: 1998,
    type: "Game",
    lane: "Mainline",
    decade: "1990s",
    tagline: "The first major 3D Sonic game, famous for its speed and story jump.",
    tags: ["Dreamcast", "3D", "Mainline"]
  },
  {
    title: "Sonic Underground",
    year: 1999,
    type: "TV",
    lane: "Animation",
    decade: "1990s",
    tagline: "A music-filled cartoon where Sonic searched for his long-lost family.",
    tags: ["TV Series", "Animation", "Music"]
  },
  {
    title: "Sonic Shuffle",
    year: 2000,
    type: "Side Project",
    lane: "Party",
    decade: "2000s",
    tagline: "A Dreamcast party game packed with mini-games and board game chaos.",
    tags: ["Party", "Dreamcast", "Spin-off"]
  },
  {
    title: "Sonic the Hedgehog Pocket Adventure",
    year: 1999,
    type: "Game",
    lane: "Handheld",
    decade: "1990s",
    tagline: "A Neo Geo Pocket Color adventure that remixed classic Sonic ideas.",
    tags: ["Handheld", "Neo Geo Pocket", "Platformer"]
  },
  {
    title: "Sonic Adventure 2",
    year: 2001,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A fast 3D hero-versus-dark story that introduced Shadow the Hedgehog.",
    tags: ["Dreamcast", "Shadow", "3D"]
  },
  {
    title: "Sonic Advance",
    year: 2001,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A bright handheld platformer that helped Sonic leap onto Nintendo hardware.",
    tags: ["Game Boy Advance", "Platformer", "Handheld"]
  },
  {
    title: "Sonic Café games",
    year: 2001,
    type: "Side Project",
    lane: "Mobile Collection",
    decade: "2000s",
    tagline: "A Japanese mobile wave that included Sonic Tennis, Golf, Fishing, Billiards, and more.",
    tags: ["Mobile", "Japan", "Mini-Games"]
  },
  {
    title: "Sonic Advance 2",
    year: 2002,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A faster Game Boy Advance sequel with huge speed ramps and trickier levels.",
    tags: ["Game Boy Advance", "Platformer", "Handheld"]
  },
  {
    title: "Sonic Mega Collection",
    year: 2002,
    type: "Side Project",
    lane: "Compilation",
    decade: "2000s",
    tagline: "A GameCube collection that preserved a stack of classic Sonic adventures.",
    tags: ["Compilation", "GameCube", "Classic"]
  },
  {
    title: "Sonic X",
    year: 2003,
    type: "TV",
    lane: "Animation",
    decade: "2000s",
    tagline: "An anime series that sent Sonic and friends to Earth and then into space.",
    tags: ["Anime", "TV Series", "78 Episodes"]
  },
  {
    title: "Sonic Heroes",
    year: 2003,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A 3D team adventure where players swapped between speed, flight, and power.",
    tags: ["GameCube", "PS2", "Xbox"]
  },
  {
    title: "Sonic Pinball Party",
    year: 2003,
    type: "Side Project",
    lane: "Pinball",
    decade: "2000s",
    tagline: "A colorful handheld pinball game with Sonic and Sega-themed tables.",
    tags: ["Game Boy Advance", "Pinball", "Spin-off"]
  },
  {
    title: "Dash & Spin: Super Fast Sonic",
    year: 2003,
    type: "Book",
    lane: "Manga",
    decade: "2000s",
    tagline: "A slapstick manga series collected in two volumes in Japan.",
    tags: ["Manga", "CoroCoro", "Japan"]
  },
  {
    title: "Sonic Battle",
    year: 2003,
    type: "Side Project",
    lane: "Fighting",
    decade: "2000s",
    tagline: "A handheld arena fighter that also introduced the robot Emerl.",
    tags: ["Game Boy Advance", "Fighting", "Emerl"]
  },
  {
    title: "Sonic Advance 3",
    year: 2004,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A partner-based platformer with team-up powers and tag action.",
    tags: ["Game Boy Advance", "Platformer", "Handheld"]
  },
  {
    title: "Sega Superstars",
    year: 2004,
    type: "Side Project",
    lane: "Crossover",
    decade: "2000s",
    tagline: "A Sega crossover party game where Sonic joined stars from other Sega worlds.",
    tags: ["Crossover", "PS2", "EyeToy"]
  },
  {
    title: "Shadow the Hedgehog",
    year: 2005,
    type: "Game",
    lane: "Spin-off",
    decade: "2000s",
    tagline: "Shadow’s own action game with branching story paths and a darker tone.",
    tags: ["Shadow", "Action", "Spin-off"]
  },
  {
    title: "Sonic Rush",
    year: 2005,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A high-speed Nintendo DS hit that introduced Blaze the Cat.",
    tags: ["Nintendo DS", "Blaze", "Platformer"]
  },
  {
    title: "Sonic X comic",
    year: 2005,
    type: "Comic",
    lane: "Printed Media",
    decade: "2000s",
    tagline: "An Archie comic adaptation tied to the Sonic X cartoon universe.",
    tags: ["Archie", "Comic", "Adaptation"]
  },
  {
    title: "Sonic Riders",
    year: 2006,
    type: "Side Project",
    lane: "Racing",
    decade: "2000s",
    tagline: "Extreme Gear hoverboard racing with tricks, boosts, and the Babylon Rogues.",
    tags: ["Racing", "Hoverboards", "Spin-off"]
  },
  {
    title: "Sonic the Hedgehog",
    year: 2006,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "The 2006 reboot-style game often called Sonic 06 by fans.",
    tags: ["Xbox 360", "PS3", "3D"]
  },
  {
    title: "Sonic Rivals",
    year: 2006,
    type: "Side Project",
    lane: "Racing",
    decade: "2000s",
    tagline: "A handheld race-platform game where players sprinted side by side.",
    tags: ["PSP", "Racing", "Spin-off"]
  },
  {
    title: "Sonic and the Secret Rings",
    year: 2007,
    type: "Game",
    lane: "Storybook",
    decade: "2000s",
    tagline: "A Wii storybook adventure set inside the world of Arabian Nights.",
    tags: ["Wii", "Storybook", "Fantasy"]
  },
  {
    title: "Mario & Sonic at the Olympic Games",
    year: 2007,
    type: "Side Project",
    lane: "Crossover",
    decade: "2000s",
    tagline: "The first big Mario crossover, turning Sonic into an Olympic sports star.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic Rush Adventure",
    year: 2007,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A sea-crossing sequel where Sonic and Blaze sailed to new islands.",
    tags: ["Nintendo DS", "Blaze", "Adventure"]
  },
  {
    title: "Sonic Rivals 2",
    year: 2007,
    type: "Side Project",
    lane: "Racing",
    decade: "2000s",
    tagline: "A faster PSP follow-up with more racing rivals and boss showdowns.",
    tags: ["PSP", "Racing", "Spin-off"]
  },
  {
    title: "Sonic Riders: Zero Gravity",
    year: 2008,
    type: "Side Project",
    lane: "Racing",
    decade: "2000s",
    tagline: "A gravity-bending hoverboard sequel full of wild turns and speed tricks.",
    tags: ["Racing", "Wii", "PS2"]
  },
  {
    title: "Sonic Chronicles: The Dark Brotherhood",
    year: 2008,
    type: "Side Project",
    lane: "Role-Playing",
    decade: "2000s",
    tagline: "The franchise’s major RPG, with turn-based battles and a new echidna clan.",
    tags: ["Nintendo DS", "RPG", "BioWare"]
  },
  {
    title: "Sonic Unleashed",
    year: 2008,
    type: "Game",
    lane: "Mainline",
    decade: "2000s",
    tagline: "A globe-trotting boost adventure featuring both daytime Sonic and the Werehog.",
    tags: ["Boost", "3D", "Mainline"]
  },
  {
    title: "Sonic: Night of the Werehog",
    year: 2008,
    type: "Web Short",
    lane: "Animation",
    decade: "2000s",
    tagline: "A spooky animated short created to celebrate Sonic Unleashed.",
    tags: ["Short Film", "Animation", "Werehog"]
  },
  {
    title: "Mario & Sonic at the Olympic Winter Games",
    year: 2009,
    type: "Side Project",
    lane: "Crossover",
    decade: "2000s",
    tagline: "Sonic and Mario returned for icy events and snowy Olympic fun.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic and the Black Knight",
    year: 2009,
    type: "Game",
    lane: "Storybook",
    decade: "2000s",
    tagline: "A sword-swinging Sonic tale inspired by Arthurian legend.",
    tags: ["Wii", "Storybook", "Fantasy"]
  },
  {
    title: "Sonic Universe",
    year: 2009,
    type: "Comic",
    lane: "Printed Media",
    decade: "2000s",
    tagline: "An Archie comic spin-off that gave many Sonic side characters their own arcs.",
    tags: ["Archie", "Comic", "Spin-off"]
  },
  {
    title: "Sonic & Sega All-Stars Racing",
    year: 2010,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "A Sega crossover kart racer led by Sonic and his all-star friends.",
    tags: ["Racing", "Crossover", "All-Stars"]
  },
  {
    title: "Sonic Free Riders",
    year: 2010,
    type: "Side Project",
    lane: "Racing",
    decade: "2010s",
    tagline: "A Kinect-based racing game where players used body motion to ride.",
    tags: ["Racing", "Kinect", "Spin-off"]
  },
  {
    title: "Sonic the Hedgehog 4: Episode I",
    year: 2010,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "A downloadable sequel built to echo the classic Genesis style.",
    tags: ["Download", "Platformer", "Episode"]
  },
  {
    title: "Sonic Colors",
    year: 2010,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "A bright park adventure powered by colorful alien Wisps.",
    tags: ["Wii", "Nintendo DS", "Wisps"]
  },
  {
    title: "Mario & Sonic at the London 2012 Olympic Games",
    year: 2011,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "The Olympic crossover kept rolling with new events and party modes.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic Generations",
    year: 2011,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "Classic Sonic and modern Sonic teamed up for a birthday adventure.",
    tags: ["Anniversary", "Classic Sonic", "Modern Sonic"]
  },
  {
    title: "Sonic the Hedgehog 4: Episode II",
    year: 2012,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "The second half of Sonic 4 with Sonic and Tails working together.",
    tags: ["Download", "Platformer", "Episode"]
  },
  {
    title: "Sonic Jump",
    year: 2012,
    type: "Side Project",
    lane: "Mobile",
    decade: "2010s",
    tagline: "A mobile vertical-jumping game built around simple touch play.",
    tags: ["Mobile", "Jumping", "Spin-off"]
  },
  {
    title: "Sonic & All-Stars Racing Transformed",
    year: 2012,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "Races shifted between land, sea, and sky in this Sega crossover sequel.",
    tags: ["Racing", "Crossover", "Transforming Vehicles"]
  },
  {
    title: "Sonic Dash",
    year: 2013,
    type: "Side Project",
    lane: "Mobile",
    decade: "2010s",
    tagline: "A popular endless runner that brought Sonic to phones and tablets.",
    tags: ["Mobile", "Endless Runner", "Popular"]
  },
  {
    title: "Mario & Sonic at the Sochi 2014 Olympic Winter Games",
    year: 2013,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "The Olympic crossover series headed back into the snow.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic Lost World",
    year: 2013,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "A twisty world adventure that mixed running, parkour, and spherical stages.",
    tags: ["Wii U", "3DS", "Mainline"]
  },
  {
    title: "Sonic Boom",
    year: 2014,
    type: "TV",
    lane: "Animation",
    decade: "2010s",
    tagline: "A funny cartoon reimagining Sonic’s team with a fresh style and lots of jokes.",
    tags: ["TV Series", "Animation", "Comedy"]
  },
  {
    title: "Sonic Boom: Rise of Lyric",
    year: 2014,
    type: "Game",
    lane: "Spin-off",
    decade: "2010s",
    tagline: "A Wii U action-adventure built around the Sonic Boom version of the cast.",
    tags: ["Wii U", "Sonic Boom", "Action"]
  },
  {
    title: "Sonic Boom: Shattered Crystal",
    year: 2014,
    type: "Game",
    lane: "Spin-off",
    decade: "2010s",
    tagline: "A 3DS side adventure that expanded the Sonic Boom sub-series.",
    tags: ["3DS", "Sonic Boom", "Adventure"]
  },
  {
    title: "Sonic Boom comic",
    year: 2014,
    type: "Comic",
    lane: "Printed Media",
    decade: "2010s",
    tagline: "An Archie comic companion to the Sonic Boom TV and game universe.",
    tags: ["Archie", "Comic", "Sonic Boom"]
  },
  {
    title: "Mario & Sonic at the Rio 2016 Olympic Games",
    year: 2016,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "Another Olympic mash-up with events across Wii U and 3DS.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic Boom: Fire & Ice",
    year: 2016,
    type: "Game",
    lane: "Spin-off",
    decade: "2010s",
    tagline: "A 3DS follow-up that closed out the Sonic Boom game line.",
    tags: ["3DS", "Sonic Boom", "Adventure"]
  },
  {
    title: "Sonic Mania",
    year: 2017,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "A retro love letter that brought classic Sonic back with brand-new levels too.",
    tags: ["Classic Sonic", "Retro", "Platformer"]
  },
  {
    title: "Sonic Forces",
    year: 2017,
    type: "Game",
    lane: "Mainline",
    decade: "2010s",
    tagline: "A resistance story where players could even create their own hero.",
    tags: ["Modern Sonic", "Avatar", "Mainline"]
  },
  {
    title: "Sonic Forces digital comic",
    year: 2017,
    type: "Comic",
    lane: "Printed Media",
    decade: "2010s",
    tagline: "A pre-release digital comic that added background for Sonic Forces.",
    tags: ["Digital Comic", "Promotional", "Forces"]
  },
  {
    title: "Sonic Mania Adventures",
    year: 2018,
    type: "Web Short",
    lane: "Animation",
    decade: "2010s",
    tagline: "A five-part animated web series tied to Sonic Mania Plus.",
    tags: ["Web Series", "Animation", "Classic Sonic"]
  },
  {
    title: "Sonic the Hedgehog (IDW Publishing)",
    year: 2018,
    type: "Comic",
    lane: "Printed Media",
    decade: "2010s",
    tagline: "The current main Sonic comic line, continuing after the games with new arcs.",
    tags: ["IDW", "Comic", "Ongoing"]
  },
  {
    title: "Team Sonic Racing Overdrive",
    year: 2019,
    type: "Web Short",
    lane: "Animation",
    decade: "2010s",
    tagline: "A two-part animated short series made to celebrate Team Sonic Racing.",
    tags: ["Web Series", "Animation", "Racing"]
  },
  {
    title: "Chao in Space",
    year: 2019,
    type: "Web Short",
    lane: "Animation",
    decade: "2010s",
    tagline: "A tiny animated joke short starring a dreamy little Chao.",
    tags: ["Short Film", "Animation", "Chao"]
  },
  {
    title: "Team Sonic Racing",
    year: 2019,
    type: "Side Project",
    lane: "Racing",
    decade: "2010s",
    tagline: "A team-based kart racer where speed and teamwork mattered together.",
    tags: ["Racing", "Team Play", "Spin-off"]
  },
  {
    title: "Mario & Sonic at the Olympic Games Tokyo 2020",
    year: 2019,
    type: "Side Project",
    lane: "Crossover",
    decade: "2010s",
    tagline: "The final Mario and Sonic Olympic crossover released for Nintendo Switch.",
    tags: ["Crossover", "Olympics", "Sports"]
  },
  {
    title: "Sonic the Hedgehog",
    year: 2020,
    type: "Movie",
    lane: "Live Action",
    decade: "2020s",
    tagline: "The first Paramount live-action Sonic movie, released on February 14, 2020.",
    tags: ["Film", "Live Action", "Paramount"]
  },
  {
    title: "Around the World in 80 Seconds",
    year: 2020,
    type: "Web Short",
    lane: "Film Universe",
    decade: "2020s",
    tagline: "A speedy short tied to the live-action film universe.",
    tags: ["Short Film", "Movie Tie-In", "Paramount"]
  },
  {
    title: "Sonic Colors: Ultimate",
    year: 2021,
    type: "Game",
    lane: "Remaster",
    decade: "2020s",
    tagline: "A refreshed version of Sonic Colors for newer systems.",
    tags: ["Remaster", "Wisps", "Modern Consoles"]
  },
  {
    title: "Sonic the Hedgehog 30th Anniversary Symphony",
    year: 2021,
    type: "Side Project",
    lane: "Live Event",
    decade: "2020s",
    tagline: "A big anniversary concert celebrating Sonic music across the years.",
    tags: ["Concert", "Music", "Anniversary"]
  },
  {
    title: "Sonic the Hedgehog 2",
    year: 2022,
    type: "Movie",
    lane: "Live Action",
    decade: "2020s",
    tagline: "The second live-action movie brought Tails and Knuckles into the spotlight.",
    tags: ["Film", "Live Action", "Paramount"]
  },
  {
    title: "Sonic Drone Home",
    year: 2022,
    type: "Web Short",
    lane: "Film Universe",
    decade: "2020s",
    tagline: "A playful short film featuring Sonic, Tails, and Knuckles at home.",
    tags: ["Short Film", "Movie Tie-In", "Paramount"]
  },
  {
    title: "TailsTube",
    year: 2022,
    type: "Web Short",
    lane: "Web Series",
    decade: "2020s",
    tagline: "A YouTube information show where Tails explains Sonic history and lore.",
    tags: ["YouTube", "Web Series", "Lore"]
  },
  {
    title: "Sonic Frontiers Prologue: Divergence",
    year: 2022,
    type: "Web Short",
    lane: "Animation",
    decade: "2020s",
    tagline: "A prologue short that shows what happened to Knuckles before Frontiers.",
    tags: ["Short Film", "Animation", "Frontiers"]
  },
  {
    title: "Sonic Frontiers",
    year: 2022,
    type: "Game",
    lane: "Mainline",
    decade: "2020s",
    tagline: "An open-zone adventure where Sonic explored the Starfall Islands.",
    tags: ["Open Zone", "Mainline", "Modern"]
  },
  {
    title: "Sonic Origins",
    year: 2022,
    type: "Side Project",
    lane: "Compilation",
    decade: "2020s",
    tagline: "A modern collection of the first four big classic Sonic adventures.",
    tags: ["Compilation", "Classic", "Remaster"]
  },
  {
    title: "The Murder of Sonic the Hedgehog",
    year: 2023,
    type: "Side Project",
    lane: "Visual Novel",
    decade: "2020s",
    tagline: "A surprise April Fool’s visual novel mystery with a lot of charm.",
    tags: ["Visual Novel", "Mystery", "PC"]
  },
  {
    title: "Sonic Prime",
    year: 2022,
    type: "TV",
    lane: "Animation",
    decade: "2020s",
    tagline: "A multiverse animated series that ran from 2022 through 2024 on Netflix.",
    tags: ["TV Series", "Netflix", "Multiverse"]
  },
  {
    title: "Sonic Superstars",
    year: 2023,
    type: "Game",
    lane: "Mainline",
    decade: "2020s",
    tagline: "A modern co-op 2D platformer with a toy-box look and Emerald powers.",
    tags: ["Platformer", "Co-op", "Mainline"]
  },
  {
    title: "Knuckles",
    year: 2024,
    type: "TV",
    lane: "Live Action",
    decade: "2020s",
    tagline: "A Paramount+ live-action series set between the second and third Sonic movies.",
    tags: ["TV Series", "Live Action", "Paramount+"]
  },
  {
    title: "Sonic x Shadow Generations",
    year: 2024,
    type: "Game",
    lane: "Mainline",
    decade: "2020s",
    tagline: "A combined remaster and new Shadow campaign celebrating two generations of speed.",
    tags: ["Shadow", "Anniversary", "Action"]
  },
  {
    title: "Sonic x Shadow Generations: Dark Beginnings",
    year: 2024,
    type: "Web Short",
    lane: "Animation",
    decade: "2020s",
    tagline: "A prequel mini-series showing Shadow facing memories from the Space Colony Ark.",
    tags: ["Web Series", "Animation", "Shadow"]
  },
  {
    title: "A Very Sonic Christmas",
    year: 2024,
    type: "Web Short",
    lane: "Film Universe",
    decade: "2020s",
    tagline: "A holiday short tied to the live-action movie family.",
    tags: ["Short Film", "Holiday", "Paramount"]
  },
  {
    title: "Sonic the Hedgehog 3",
    year: 2024,
    type: "Movie",
    lane: "Live Action",
    decade: "2020s",
    tagline: "The third live-action film pushed the movie universe into Shadow territory.",
    tags: ["Film", "Live Action", "Paramount"]
  },
  {
    title: "The Jet Black Hedgehog: Shadow the Hedgehog",
    year: 2024,
    type: "Book",
    lane: "Manga",
    decade: "2020s",
    tagline: "A Shadow-focused manga created to help introduce new readers to his story.",
    tags: ["Manga", "Shadow", "CoroCoro"]
  },
  {
    title: "DC x Sonic the Hedgehog",
    year: 2025,
    type: "Comic",
    lane: "Crossover",
    decade: "2020s",
    tagline: "A crossover comic miniseries where Sonic heroes team up with DC superheroes.",
    tags: ["DC", "Crossover", "Comic"]
  },
  {
    title: "Chao Tales",
    year: 2025,
    type: "Web Short",
    lane: "Animation",
    decade: "2020s",
    tagline: "An eight-episode animated web series about Sonic visiting a Chao Garden all year.",
    tags: ["Web Series", "Animation", "Chao"]
  },
  {
    title: "Sonic Racing: CrossWorlds",
    year: 2025,
    type: "Side Project",
    lane: "Racing",
    decade: "2020s",
    tagline: "A new racing game that became the franchise’s latest release on September 25, 2025.",
    tags: ["Racing", "Latest Game", "CrossWorlds"]
  },
  {
    title: "Sonic Racing: CrossWorlds - The Animation",
    year: 2025,
    type: "Web Short",
    lane: "Animation",
    decade: "2020s",
    tagline: "An animated tie-in short released alongside the racing adventure.",
    tags: ["Short Film", "Animation", "Racing"]
  },
  {
    title: "Sonic the Hedgehog Presents: The Chaotix Casefiles",
    year: 2026,
    type: "Side Project",
    lane: "Podcast",
    decade: "2020s",
    tagline: "A 2026 audio drama podcast following Team Chaotix on a detective case.",
    tags: ["Podcast", "Audio Drama", "Chaotix"]
  },
  {
    title: "DC x Sonic the Hedgehog: Metal Legion",
    year: 2026,
    type: "Comic",
    lane: "Crossover",
    decade: "2020s",
    tagline: "A follow-up Sonic and DC crossover comic announced for 2026.",
    tags: ["DC", "Crossover", "Comic"]
  },
  {
    title: "Sonic the Hedgehog x Godzilla",
    year: 2026,
    type: "Comic",
    lane: "Crossover",
    decade: "2020s",
    tagline: "A wild 2026 crossover miniseries mixing Sonic speed with Godzilla size.",
    tags: ["Godzilla", "Crossover", "Comic"]
  }
];

const characterBios = [
  {
    name: "Sonic the Hedgehog",
    group: "Heroes",
    species: "Hedgehog",
    debut: "Sonic the Hedgehog (1991)",
    alignment: "Hero",
    affiliation: "Team Sonic",
    crest: "S",
    color: "linear-gradient(180deg, #1677ff, #083da8)",
    summary: "The blue blur and Sega mascot. Sonic lives for freedom, momentum, and doing the right thing without slowing down for rules he thinks are silly.",
    details: [
      "Sonic's identity is built around speed, confidence, and a refusal to let tyrants control other people. In most versions he is a wanderer rather than a homebody, which gives him a cool drifter feel instead of a formal leader vibe.",
      "His big character hook is that he acts first because he trusts his instincts. That can make him reckless, but fans usually love him because his bravery is sincere and he almost always uses it to protect somebody weaker.",
      "Across the classic and modern games, Sonic's core rivalries with Dr. Eggman, Metal Sonic, and Shadow all test a different part of his personality: heroism, identity, and self-belief."
    ],
    highlights: [
      "Signature moves: Spin Dash, Homing Attack, Light-Speed Dash, Boost in many modern games",
      "Close bonds: Tails is his most trusted friend, Knuckles is a rival-ally, Amy is his most persistent admirer",
      "Fan-favorite trait: even when stories change tone, Sonic usually stays emotionally readable, stubbornly free, and impossible to intimidate"
    ],
    tags: ["Main Hero", "Speed", "Attitude", "Freedom"]
  },
  {
    name: "Miles 'Tails' Prower",
    group: "Heroes",
    species: "Fox",
    debut: "Sonic the Hedgehog 2 (1992)",
    alignment: "Hero",
    affiliation: "Team Sonic",
    crest: "T",
    color: "linear-gradient(180deg, #ffb347, #ff7e1b)",
    summary: "Sonic's best friend, a mechanical genius, and one of the franchise's emotional anchors.",
    details: [
      "Tails began as the sidekick who could keep up with Sonic, but over time he became the franchise's main inventor. His workshop role lets stories give Sonic gadgets, planes, scanners, and technical explanations without losing Sonic's simple heroic energy.",
      "His strongest arcs usually center on confidence. Tails knows he is brilliant, but he sometimes has to prove to himself that he is also brave enough to stand alone when Sonic is gone.",
      "Fans care a lot about how competent Tails feels in any given game or show. When he is written well, he is both adorable and frighteningly capable."
    ],
    highlights: [
      "Signature gear: the Tornado biplane, handheld scanners, custom machines, chaos-tech analysis",
      "Special ability: spinning his twin tails to fly and carry others",
      "Notable dynamic: he admires Sonic, but the best stories let him grow beyond being only a follower"
    ],
    tags: ["Inventor", "Flight", "Best Friend", "Genius Kid"]
  },
  {
    name: "Knuckles the Echidna",
    group: "Heroes",
    species: "Echidna",
    debut: "Sonic the Hedgehog 3 (1994)",
    alignment: "Hero",
    affiliation: "Team Sonic",
    crest: "K",
    color: "linear-gradient(180deg, #ff5f52, #b01618)",
    summary: "Guardian of the Master Emerald and the last major echidna hero in the game canon.",
    details: [
      "Knuckles is defined by duty. While Sonic represents freedom, Knuckles represents responsibility and tradition, which is why their friendship always has a little tension built into it.",
      "He is famously gullible around Eggman, but fans do not like him being reduced to just comic relief. At his best, he is stoic, proud, physically overwhelming, and spiritually tied to Angel Island and the Master Emerald.",
      "His lore matters because he connects the modern cast to ancient echidna history, the Chaos Emerald myth, and the wider mystical side of the franchise."
    ],
    highlights: [
      "Signature abilities: gliding, wall climbing, heavy punches, treasure hunting",
      "Core duty: protects the Master Emerald and often Angel Island itself",
      "Important contrast: Sonic moves, Knuckles stays; Sonic improvises, Knuckles guards"
    ],
    tags: ["Guardian", "Power", "Master Emerald", "Rival Ally"]
  },
  {
    name: "Amy Rose",
    group: "Heroes",
    species: "Hedgehog",
    debut: "Sonic CD (1993)",
    alignment: "Hero",
    affiliation: "Team Sonic",
    crest: "A",
    color: "linear-gradient(180deg, #ff7bb8, #d52f80)",
    summary: "A cheerful but determined hedgehog whose kindness, persistence, and emotional courage make her much more than 'the girl who likes Sonic.'",
    details: [
      "Amy started as the classic fangirl character, but over time she became one of Sonic's emotional leaders. Modern portrayals often make her the person most willing to reach out, mediate conflict, or remind the team why they are fighting.",
      "Her hammer gives her a fun contrast: she is bright and affectionate, yet also fully capable of flattening robots and charging into danger.",
      "Fans usually appreciate Amy most when writers balance romance, independence, and leadership without flattening her into only one of those traits."
    ],
    highlights: [
      "Signature weapon: the Piko Piko Hammer",
      "Strongest stories: moments where her empathy changes outcomes that brute force cannot",
      "Frequent fan point: Amy is at her best when she feels proactive and respected by the rest of the cast"
    ],
    tags: ["Heart", "Hammer", "Leader", "Optimist"]
  },
  {
    name: "Dr. Eggman",
    group: "Villains",
    species: "Human",
    debut: "Sonic the Hedgehog (1991)",
    alignment: "Villain",
    affiliation: "Eggman Empire",
    crest: "E",
    color: "linear-gradient(180deg, #ffca3a, #d14d00)",
    summary: "Sonic's classic arch-enemy, a theatrical super-scientist who wants to reshape the world into a machine empire under his control.",
    details: [
      "Eggman works because he is both ridiculous and dangerous. His round design, big mustache, and dramatic speeches make him funny, but his machines can still cause apocalyptic disasters.",
      "His role shifts smoothly between cartoon villain, genuine warlord, and weirdly entertaining coworker when a bigger threat forces a temporary alliance.",
      "A lot of Sonic lore runs through Eggman: ancient weapons, bad experiments, AI gone wrong, and his constant need to prove his genius against Sonic's natural talent."
    ],
    highlights: [
      "Signature style: giant mechs, industrial fortresses, captured animals turned into Badniks",
      "Key relationships: hates Sonic, manipulates Knuckles, creates Metal Sonic, indirectly shaped Shadow's path through family history",
      "Fan appeal: he is funny enough to quote and dangerous enough to still matter"
    ],
    tags: ["Main Villain", "Scientist", "Badniks", "Empire"]
  },
  {
    name: "Shadow the Hedgehog",
    group: "Rivals",
    species: "Hedgehog",
    debut: "Sonic Adventure 2 (2001)",
    alignment: "Antihero",
    affiliation: "G.U.N. Ally / Independent",
    crest: "Sh",
    color: "linear-gradient(180deg, #3b3b3b, #a30f17)",
    summary: "The Ultimate Life Form, built around tragedy, power, and the question of what a perfect being should live for.",
    details: [
      "Shadow was created by Professor Gerald Robotnik aboard the Space Colony ARK. His emotional core is tied to Maria Robotnik, whose death shaped his bitterness and later his sense of purpose.",
      "Unlike Sonic, Shadow is heavy, deliberate, and intimidating. He is not simply an edgy recolor in fan eyes; his appeal comes from grief, discipline, and enormous power held under control.",
      "His best stories revolve around identity and agency. Because his memories and origin were manipulated, Shadow constantly has to decide which parts of himself are chosen rather than assigned."
    ],
    highlights: [
      "Signature powers: Chaos Control, Chaos Spear, inhibitor rings, high durability",
      "Important themes: memory, loss, redemption, self-definition",
      "Common fan expectation: Shadow should be stern and sharp, but not stripped of compassion or depth"
    ],
    tags: ["Antihero", "Chaos Power", "ARK", "Fan Favorite"]
  },
  {
    name: "Rouge the Bat",
    group: "Rivals",
    species: "Bat",
    debut: "Sonic Adventure 2 (2001)",
    alignment: "Antihero",
    affiliation: "Team Dark / G.U.N.",
    crest: "R",
    color: "linear-gradient(180deg, #ffffff, #9b4fc2)",
    summary: "A treasure hunter, spy, and opportunist who mixes charm, danger, and sharp intelligence.",
    details: [
      "Rouge plays multiple roles at once: government agent, jewel thief, Team Dark member, and constant wildcard. That flexibility keeps her unpredictable in a way fans enjoy.",
      "She is one of the franchise's most socially savvy characters. Rouge reads people quickly and usually enters scenes already knowing what she wants.",
      "Her chemistry with Shadow and Omega is central to Team Dark's popularity. She often acts as the social glue that turns two emotionally closed combat machines into a real unit."
    ],
    highlights: [
      "Signature focus: treasure hunting, infiltration, hand-to-hand combat",
      "Notable dynamic: flirty on the surface, extremely calculating underneath",
      "Fan appeal: stylish, competent, and rarely the least interesting person in the room"
    ],
    tags: ["Spy", "Treasure Hunter", "Team Dark", "Wildcard"]
  },
  {
    name: "E-123 Omega",
    group: "Rivals",
    species: "Robot",
    debut: "Sonic Heroes (2003)",
    alignment: "Heroic Destruction Machine",
    affiliation: "Team Dark",
    crest: "O",
    color: "linear-gradient(180deg, #d91b1b, #6c0f0f)",
    summary: "An Eggman robot who turned on his creator and expresses nearly everything through overwhelming firepower.",
    details: [
      "Omega's personality is simple in the best possible way: pride, anger, and a total commitment to blowing up enemies. Fans like him because he is loud, direct, and weirdly funny without trying to be.",
      "Despite his bluntness, Omega becomes one of Shadow's most dependable allies. Team Dark works because Omega's absolute loyalty balances Rouge's pragmatism and Shadow's distance.",
      "He also fills the franchise's heavy-weapons niche, giving Sonic stories a tank-like hero who can solve problems with raw force."
    ],
    highlights: [
      "Signature trait: every solution becomes a combat solution",
      "Primary motivation: revenge against Eggman and proof that he is Eggman's greatest robot",
      "Team role: the unstoppable artillery piece of Team Dark"
    ],
    tags: ["Robot", "Heavy Weapons", "Team Dark", "Comedy"]
  },
  {
    name: "Cream the Rabbit",
    group: "Heroes",
    species: "Rabbit",
    debut: "Sonic Advance 2 (2002)",
    alignment: "Hero",
    affiliation: "Cream and Cheese",
    crest: "C",
    color: "linear-gradient(180deg, #ffd4a3, #ff9e52)",
    summary: "A tiny, very polite hero whose sweetness hides real bravery.",
    details: [
      "Cream is one of the franchise's gentlest characters, often used to soften the tone of scenes or remind rougher heroes how to behave around civilians and children.",
      "Her relationship with her Chao partner Cheese is essential. They act as a unit, which gives Cream a surprisingly strong combat identity in games where Cheese can attack on command.",
      "Fans often see Cream as proof that Sonic can include softness without losing energy. She expands the emotional range of the cast."
    ],
    highlights: [
      "Signature partner: Cheese the Chao",
      "Core trait: impeccable manners paired with hidden courage",
      "Important connection: her mother Vanilla helps ground Cream's home life and innocence"
    ],
    tags: ["Kind", "Flight", "Cheese", "Cute Power"]
  },
  {
    name: "Big the Cat",
    group: "Support",
    species: "Cat",
    debut: "Sonic Adventure (1998)",
    alignment: "Hero",
    affiliation: "Independent",
    crest: "B",
    color: "linear-gradient(180deg, #9471ff, #4830b5)",
    summary: "A giant easygoing cat whose quiet life keeps getting interrupted by world-ending problems and missing frogs.",
    details: [
      "Big is a comic-relief support hero, but his popularity comes from his sincerity. He is never trying to be clever or cool. He just loves fishing, naps, and his frog friend.",
      "Because the rest of the cast can be dramatic, Big's calm weirdness gives the series breathing room. He makes Sonic's world feel larger and stranger in a pleasant way.",
      "Fans often joke about Big, but many also genuinely enjoy how unbothered he remains next to apocalyptic stakes."
    ],
    highlights: [
      "Signature companion: Froggy",
      "Gameplay identity: fishing, casual exploration, low-stress energy",
      "Meme value: constantly appears in places where he should not be, somehow still fitting"
    ],
    tags: ["Fishing", "Froggy", "Comic Relief", "Gentle Giant"]
  },
  {
    name: "Blaze the Cat",
    group: "Rivals",
    species: "Cat",
    debut: "Sonic Rush (2005)",
    alignment: "Hero",
    affiliation: "Sol Dimension Royalty",
    crest: "Bl",
    color: "linear-gradient(180deg, #a35cff, #5422b4)",
    summary: "A royal guardian from another dimension whose restraint, loneliness, and pyrokinesis make her one of Sonic's most respected counterparts.",
    details: [
      "Blaze is often positioned as a mirror to Sonic. She is fast and heroic too, but where Sonic is carefree, Blaze is disciplined and guarded.",
      "Her strongest arcs focus on isolation. Because she sees herself as a protector first, she can struggle to trust others or admit that she needs friendship.",
      "Fans care about Blaze because she combines elegance with real combat credibility and because her bond with Silver and Cream shows her softer side."
    ],
    highlights: [
      "Signature powers: fire manipulation and acrobatic speed",
      "Lore role: guardian of the Sol Emeralds and princess of the Sol Dimension",
      "Common fan praise: one of the franchise's most consistently dignified characters"
    ],
    tags: ["Royalty", "Fire", "Sol Dimension", "Counterpart"]
  },
  {
    name: "Silver the Hedgehog",
    group: "Rivals",
    species: "Hedgehog",
    debut: "Sonic the Hedgehog (2006)",
    alignment: "Hero",
    affiliation: "Future Hero",
    crest: "Si",
    color: "linear-gradient(180deg, #d9edf7, #78c8d7)",
    summary: "A hopeful time-traveling hedgehog from a ruined future who fights to stop disasters before they begin.",
    details: [
      "Silver's main appeal is earnestness. He is powerful and dramatic, but he is also genuinely idealistic and sometimes socially awkward, which makes him easy to root for.",
      "Because he comes from bad futures, his stories often revolve around difficult moral choices, bad information, and whether changing history is worth the risk.",
      "Fans tend to enjoy Silver most when his optimism survives the darkness around him rather than when he is treated as only a meme."
    ],
    highlights: [
      "Signature powers: telekinesis, psychic lifts, projectile control, airborne movement",
      "Major theme: hope in the face of disaster",
      "Important dynamic: often paired with Blaze because their personalities balance each other well"
    ],
    tags: ["Future", "Psychic", "Hopeful", "Time Travel"]
  },
  {
    name: "Metal Sonic",
    group: "Villains",
    species: "Robot",
    debut: "Sonic CD (1993)",
    alignment: "Villain",
    affiliation: "Eggman Empire",
    crest: "M",
    color: "linear-gradient(180deg, #9ad9ff, #196db2)",
    summary: "Eggman's ultimate anti-Sonic machine and one of the franchise's coolest recurring threats.",
    details: [
      "Metal Sonic is terrifying because he is not just another robot. He is specifically designed to replace Sonic, surpass Sonic, and prove that manufactured perfection can beat natural freedom.",
      "Different stories lean into different aspects of him: silent assassin, obsessive rival, identity crisis, or army-leading conqueror like Neo Metal Sonic.",
      "Fans love him because his design is sleek, his presence is intense, and his rivalry with Sonic feels personal even when he says almost nothing."
    ],
    highlights: [
      "Signature traits: high speed, copied abilities, relentless focus, cold body language",
      "Best-known upgrade: Neo Metal Sonic in Sonic Heroes",
      "Thematic role: the machine-made shadow of Sonic's image"
    ],
    tags: ["Robot Rival", "Speed", "Neo Metal", "Cold Threat"]
  },
  {
    name: "Vector the Crocodile",
    group: "Support",
    species: "Crocodile",
    debut: "Knuckles' Chaotix (1995)",
    alignment: "Hero",
    affiliation: "Chaotix Detective Agency",
    crest: "V",
    color: "linear-gradient(180deg, #45c25b, #157233)",
    summary: "The loud but dependable boss of the Chaotix, always chasing answers, justice, and enough money to pay the bills.",
    details: [
      "Vector's charm comes from how real he feels compared with the larger-than-life cast around him. He is ambitious, messy, and usually one unpaid invoice away from yelling.",
      "Underneath the comedy, he cares deeply about his team and tends to step up when cases turn serious.",
      "He gives Sonic's world a working-class detective flavor that stands out from the main heroic adventure tone."
    ],
    highlights: [
      "Signature role: field leader of the Chaotix",
      "Personality blend: comic bluster plus sincere loyalty",
      "Fan favorite detail: his detective-agency energy is uniquely Sonic and oddly lovable"
    ],
    tags: ["Chaotix", "Detective", "Leader", "Comic Energy"]
  },
  {
    name: "Espio the Chameleon",
    group: "Support",
    species: "Chameleon",
    debut: "Knuckles' Chaotix (1995)",
    alignment: "Hero",
    affiliation: "Chaotix Detective Agency",
    crest: "Es",
    color: "linear-gradient(180deg, #8a47b9, #4a1a77)",
    summary: "A disciplined ninja detective whose calm professionalism balances the chaos around him.",
    details: [
      "Espio brings stealth and restraint to the Chaotix. He is often the most composed person in the room, which makes Vector's and Charmy's behavior even funnier by contrast.",
      "He is not usually the loudest character, but fans appreciate him because he feels competent in a franchise where many characters are intentionally bigger and goofier.",
      "His ninja identity helps the series include stealth, shuriken-style attacks, and spy-flavored action without breaking Sonic's tone."
    ],
    highlights: [
      "Signature skills: camouflage, ninja tools, sharp observation",
      "Team role: the quiet specialist who keeps the Chaotix credible",
      "Fan appeal: understated coolness"
    ],
    tags: ["Chaotix", "Ninja", "Stealth", "Calm"]
  },
  {
    name: "Charmy Bee",
    group: "Support",
    species: "Bee",
    debut: "Sonic the Hedgehog manga (1992) / Knuckles' Chaotix game debut (1995)",
    alignment: "Hero",
    affiliation: "Chaotix Detective Agency",
    crest: "Ch",
    color: "linear-gradient(180deg, #ffe24c, #f08d00)",
    summary: "The tiny whirlwind of the Chaotix, bringing hyper energy, childlike honesty, and constant noise.",
    details: [
      "Charmy is intentionally chaotic. He can be annoying, adorable, useful, or all three at once, which gives the Chaotix their full oddball tone.",
      "Because he is younger and less filtered, he often says what everyone else is thinking or accidentally derails serious moments in ways fans remember.",
      "His presence also keeps the Sonic cast from becoming too cool-for-school. Charmy reminds you this is still a world where fun matters."
    ],
    highlights: [
      "Signature abilities: flight, rapid stingers, fast scouting",
      "Team role: distraction machine and cheerful wildcard",
      "Common fan view: part mascot, part little menace"
    ],
    tags: ["Chaotix", "Flight", "Comedy", "Kid Energy"]
  },
  {
    name: "Chaos",
    group: "Ancients",
    species: "Mutated Chao Guardian",
    debut: "Sonic Adventure (1998)",
    alignment: "Tragic Force",
    affiliation: "Master Emerald / Chao Protector",
    crest: "Ca",
    color: "linear-gradient(180deg, #8fe8ff, #158dc3)",
    summary: "A watery guardian spirit whose rage and sorrow made him one of Sonic's first truly mythic threats.",
    details: [
      "Chaos transformed the franchise's lore by tying the Chao, echidnas, Master Emerald, and ancient tragedy into one sweeping backstory.",
      "He is more than a boss monster. Chaos is driven by grief and fury over violence against the Chao, which makes him one of the series' earliest major examples of a sympathetic catastrophe villain.",
      "Fans remember him for the escalating transformations and for proving Sonic stories could mix speed-platforming with grand mythology."
    ],
    highlights: [
      "Signature form line: Chaos 0 through Perfect Chaos",
      "Lore role: connects ancient echidnas, Tikal, Chao, and the Master Emerald",
      "Impact: raised the stakes of the series from cartoon villainy to civilization-level danger"
    ],
    tags: ["Mythic", "Water", "Tragic", "Ancient Lore"]
  },
  {
    name: "Tikal",
    group: "Ancients",
    species: "Echidna",
    debut: "Sonic Adventure (1998)",
    alignment: "Spiritual Guide",
    affiliation: "Ancient Echidna Tribe",
    crest: "Ti",
    color: "linear-gradient(180deg, #ffba7a, #cd5c31)",
    summary: "An ancient echidna spirit whose compassion tried to stop her people from abusing power.",
    details: [
      "Tikal is central to Sonic Adventure's emotional core. She serves as the moral counterweight to echidna aggression and the character who truly understands Chaos's pain.",
      "Her story gives Knuckles' heritage a conscience. Without Tikal, the echidna backstory would feel more like spectacle than tragedy.",
      "Fans appreciate her because she added sincerity and mythic sadness to the series without losing its hopeful tone."
    ],
    highlights: [
      "Key role: mediator between Chaos and the world",
      "Thematic weight: mercy, responsibility, and historical regret",
      "Legacy: one of the franchise's most memorable lore figures despite limited appearances"
    ],
    tags: ["Ancient Lore", "Spirit", "Compassion", "Echidna"]
  },
  {
    name: "Gamma",
    group: "Support",
    species: "Robot",
    debut: "Sonic Adventure (1998)",
    alignment: "Redeemed Robot",
    affiliation: "Former Eggman Robot",
    crest: "G",
    color: "linear-gradient(180deg, #ff6d5c, #9d2618)",
    summary: "A combat robot whose brief story is one of the franchise's most beloved tragedy-and-redemption arcs.",
    details: [
      "Gamma gains self-awareness after seeing the cruelty behind Eggman's systems and the suffering of the animals trapped inside robots.",
      "His campaign in Sonic Adventure is short, but fans remember it intensely because it is quiet, sad, and surprisingly thoughtful for an action platformer.",
      "He matters to the fanbase as proof that Sonic stories can land emotional endings when they slow down and commit to a character's internal change."
    ],
    highlights: [
      "Signature theme: liberation through self-sacrifice",
      "Emotional link: Amy's compassion helps set him on his path",
      "Fan legacy: often cited as one of Sonic Adventure's strongest stories"
    ],
    tags: ["Robot", "Tragic", "Redemption", "Adventure Era"]
  },
  {
    name: "Jet the Hawk",
    group: "Rivals",
    species: "Hawk",
    debut: "Sonic Riders (2006)",
    alignment: "Rival",
    affiliation: "Babylon Rogues",
    crest: "J",
    color: "linear-gradient(180deg, #7ed957, #2f9a1d)",
    summary: "Sonic's hoverboard racing rival and the swagger-heavy leader of the Babylon Rogues.",
    details: [
      "Jet is built to challenge Sonic in a more competitive, style-driven way than Shadow does. He is arrogant, flashy, and convinced that speed alone does not make Sonic special.",
      "His heritage and the Babylon Rogues' treasure-hunter identity give the Riders games a distinct world and mythology separate from standard Eggman plots.",
      "Fans enjoy Jet most when he feels smug but skilled enough to earn the rivalry."
    ],
    highlights: [
      "Signature identity: Extreme Gear specialist",
      "Team role: leader and loudmouth of the Babylon Rogues",
      "Rival flavor: more sports anime than tragic antihero"
    ],
    tags: ["Racing Rival", "Babylon Rogues", "Hoverboards", "Swagger"]
  },
  {
    name: "Wave the Swallow",
    group: "Rivals",
    species: "Swallow",
    debut: "Sonic Riders (2006)",
    alignment: "Rival",
    affiliation: "Babylon Rogues",
    crest: "W",
    color: "linear-gradient(180deg, #a36bff, #5a2cc7)",
    summary: "The mechanic brain of the Babylon Rogues and one of the franchise's sharper-tongued engineers.",
    details: [
      "Wave fills a fun mirror role opposite Tails: both are technical geniuses, but Wave is smug, cutting, and much less interested in being nice about it.",
      "She gives the Rogues credibility by making them more than a pair of loud racers with attitude. Her engineering skill is part of why the team stays competitive.",
      "Fans like her because she adds bite, intelligence, and rivalry without needing a huge amount of screentime."
    ],
    highlights: [
      "Signature role: mechanic and strategist of the Babylon Rogues",
      "Notable dynamic: constant tech rivalry with Tails",
      "Personality edge: prideful, sarcastic, and very aware of her own talent"
    ],
    tags: ["Engineer", "Babylon Rogues", "Rival", "Sarcastic"]
  },
  {
    name: "Storm the Albatross",
    group: "Rivals",
    species: "Albatross",
    debut: "Sonic Riders (2006)",
    alignment: "Rival",
    affiliation: "Babylon Rogues",
    crest: "St",
    color: "linear-gradient(180deg, #c7c45b, #7b7420)",
    summary: "The powerhouse of the Babylon Rogues, built around muscle, loyalty, and short-tempered comedy.",
    details: [
      "Storm gives the Rogues physical heft and broad comedy. He is not subtle, but his size and force make him a natural counterweight in racing and action scenes.",
      "His loyalty to Jet is a core part of his charm. Even when Jet is being insufferable, Storm usually backs him completely.",
      "Fans tend to remember him as the group's lovable bruiser rather than as a deeply layered character, and that role works for him."
    ],
    highlights: [
      "Signature role: strength specialist",
      "Team dynamic: loyal muscle with frequent frustration",
      "Energy: loud, simple, effective"
    ],
    tags: ["Power", "Babylon Rogues", "Bruiser", "Comedy"]
  },
  {
    name: "Fang the Sniper",
    group: "Rivals",
    species: "Jerboa / Weasel-styled outlaw",
    debut: "Sonic the Hedgehog Triple Trouble (1994)",
    alignment: "Rogue",
    affiliation: "Independent Treasure Hunter",
    crest: "F",
    color: "linear-gradient(180deg, #8a58d1, #4d2384)",
    summary: "A sneaky treasure-hunting outlaw whose old-school game villain energy made a big comeback with modern fans.",
    details: [
      "Fang was one of the classic era's stranger rivals, mixing cowboy flair, cartoon crime energy, and selfish opportunism.",
      "He was absent for long stretches, which only made fans more attached to him as a cult-favorite oddball from the Game Gear years.",
      "His reappearance in newer projects worked because he still feels mischievous, slippery, and a little less grand than the world-ending villains."
    ],
    highlights: [
      "Signature trait: tricks, traps, and running off with treasure if nobody stops him",
      "Fan status: cult favorite resurrected into the spotlight",
      "Tone role: reminds the series that not every villain has to threaten the planet"
    ],
    tags: ["Classic Era", "Outlaw", "Treasure Hunter", "Cult Favorite"]
  },
  {
    name: "Trip the Sungazer",
    group: "Support",
    species: "Sungazer",
    debut: "Sonic Superstars (2023)",
    alignment: "Hero",
    affiliation: "Northstar Islands",
    crest: "Tr",
    color: "linear-gradient(180deg, #f7cb5d, #9a7d10)",
    summary: "A shy but courageous new ally from Sonic Superstars who quickly won fans with her earnestness and transformation arc.",
    details: [
      "Trip enters the story as nervous and uncertain, which stands out in a cast full of confident personalities. That makes her growth feel visible and rewarding.",
      "Her role in Sonic Superstars gives the classic-style side of the franchise a fresh character who still fits the older era's tone and visual language.",
      "Fans responded well to her because she feels genuine rather than manufactured to chase nostalgia."
    ],
    highlights: [
      "Signature arc: anxiety turning into courage",
      "World role: local guide and ally in the Northstar Islands story",
      "Fan response: warmly received as a new classic-style face"
    ],
    tags: ["New Hero", "Classic Style", "Northstar Islands", "Growth Arc"]
  },
  {
    name: "Sage",
    group: "Villains",
    species: "Artificial Intelligence",
    debut: "Sonic Frontiers (2022)",
    alignment: "Complicated AI Ally",
    affiliation: "Eggman Family Orbit",
    crest: "Sa",
    color: "linear-gradient(180deg, #ff5b77, #7f2048)",
    summary: "A digital girl born from Eggman's systems whose bond with him gave Sonic Frontiers much of its heart.",
    details: [
      "Sage begins as an ominous guide and obstacle, but she gradually becomes one of the most emotionally important characters in Frontiers.",
      "Her relationship with Eggman is what fans discuss most. She humanizes him without erasing his crimes, and in return he reveals a protective, fatherly side that the games had rarely emphasized so directly.",
      "Sage matters because she makes Sonic lore's AI and cyber-space ideas feel personal instead of purely mechanical."
    ],
    highlights: [
      "Signature role: cyber guide, threat assessor, and Eggman's daughter-like AI",
      "Emotional hook: her bond with Eggman surprised many players",
      "Fan interest: widely seen as one of Frontiers' biggest story wins"
    ],
    tags: ["AI", "Frontiers", "Eggman", "Emotional Core"]
  },
  {
    name: "Infinite",
    group: "Villains",
    species: "Jackal",
    debut: "Sonic Forces (2017)",
    alignment: "Villain",
    affiliation: "Eggman War Machine",
    crest: "In",
    color: "linear-gradient(180deg, #ae1e4e, #4a1029)",
    summary: "A masked mercenary empowered by the Phantom Ruby, defined by illusion powers and a wounded ego.",
    details: [
      "Infinite's concept is strong: a villain who weaponizes reality-warping illusion and theatrical menace during Eggman's global takeover.",
      "Fans are split on his execution, but that debate is exactly why he remains interesting. His insecurity, theatricality, and visual style left a mark even among people who wanted more from him.",
      "He represents a very modern Sonic kind of villain: stylish, memeable, and built around spectacle-heavy boss energy."
    ],
    highlights: [
      "Signature power: Phantom Ruby illusions and warped battle spaces",
      "Tone role: Sonic Forces' dramatic enforcer",
      "Fan discourse: memorable aesthetic, contested characterization"
    ],
    tags: ["Phantom Ruby", "Masked Villain", "Forces", "Illusions"]
  },
  {
    name: "Orbot and Cubot",
    group: "Villains",
    species: "Robots",
    debut: "Sonic Colors era",
    alignment: "Comedic Henchmen",
    affiliation: "Eggman Empire",
    crest: "OC",
    color: "linear-gradient(180deg, #9db7d5, #596f87)",
    summary: "Eggman's bickering robot attendants, turning villain scenes into comedy without fully draining their menace.",
    details: [
      "Orbot is the dry, sarcastic assistant; Cubot is the more clueless, randomly silly counterpart. Together they became the modern replacement for one-off Eggman henchmen.",
      "Their job is to bounce off Eggman and make exposition scenes funnier. They are especially useful in games where the villain cast would otherwise be too thin.",
      "Fans enjoy them when the writing is sharp because they let Eggman be absurdly theatrical without talking only to himself."
    ],
    highlights: [
      "Signature role: commentary duo for Eggman's plans",
      "Best function: adding humor to villain scenes and cutscenes",
      "Dynamic: one snarky robot plus one lovable fool"
    ],
    tags: ["Comedy", "Eggman", "Robots", "Modern Era"]
  }
];

const state = {
  search: "",
  type: "All",
  decade: "All",
  spotlightKey: "",
  characterSearch: "",
  characterGroup: "All",
  selectedCharacter: "Sonic the Hedgehog"
};

const typeOrder = ["All", "Game", "Movie", "TV", "Comic", "Book", "Web Short", "Side Project"];
const decadeOrder = ["All", "1990s", "2000s", "2010s", "2020s"];
const characterGroupOrder = ["All", "Heroes", "Rivals", "Villains", "Support", "Ancients"];

const heroBadges = document.getElementById("heroBadges");
const typeFilters = document.getElementById("typeFilters");
const decadeFilters = document.getElementById("decadeFilters");
const timelineList = document.getElementById("timelineList");
const resultsLabel = document.getElementById("resultsLabel");
const searchInput = document.getElementById("searchInput");
const spotlightCard = document.getElementById("spotlightCard");
const spotlightSection = document.getElementById("spotlight");
const surpriseButton = document.getElementById("surpriseButton");
const entryTemplate = document.getElementById("entryTemplate");
const characterSearchInput = document.getElementById("characterSearchInput");
const characterGroupFilters = document.getElementById("characterGroupFilters");
const characterList = document.getElementById("characterList");
const characterDetail = document.getElementById("characterDetail");
const characterResultsLabel = document.getElementById("characterResultsLabel");

function byYearThenTitle(a, b) {
  return a.year - b.year || a.title.localeCompare(b.title);
}

function getVisibleEntries() {
  return sonicEntries
    .filter((entry) => state.type === "All" || entry.type === state.type)
    .filter((entry) => state.decade === "All" || entry.decade === state.decade)
    .filter((entry) => {
      if (!state.search) return true;
      const haystack = [entry.title, entry.tagline, entry.lane, ...entry.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(state.search);
    })
    .sort(byYearThenTitle);
}

function createChip(label, isActive, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chip${isActive ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderHeroBadges() {
  const badgeData = [
    `Started on June 23, 1991`,
    `${sonicEntries.length} featured projects`,
    `Built for little Sonic fans`
  ];

  heroBadges.replaceChildren(
    ...badgeData.map((text) => {
      const badge = document.createElement("span");
      badge.className = "hero-badge";
      badge.textContent = text;
      return badge;
    })
  );
}

function renderFilters() {
  typeFilters.replaceChildren(
    ...typeOrder.map((type) =>
      createChip(type, state.type === type, () => {
        state.type = type;
        render();
      })
    )
  );

  decadeFilters.replaceChildren(
    ...decadeOrder.map((decade) =>
      createChip(decade, state.decade === decade, () => {
        state.decade = decade;
        render();
      })
    )
  );
}

function renderStats() {
  const total = sonicEntries.length;
  const games = sonicEntries.filter((entry) => entry.type === "Game" || entry.type === "Side Project").length;
  const screen = sonicEntries.filter((entry) => entry.type === "Movie" || entry.type === "TV").length;
  const other = total - games - screen;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("gameCount").textContent = games;
  document.getElementById("screenCount").textContent = screen;
  document.getElementById("otherCount").textContent = other;
}

function renderSpotlight(source = sonicEntries, forceDifferent = false) {
  const pool = source.length ? source : sonicEntries;
  let pick = pool[Math.floor(Math.random() * pool.length)];

  if (forceDifferent && pool.length > 1) {
    let attempts = 0;
    while (`${pick.year}-${pick.title}` === state.spotlightKey && attempts < 12) {
      pick = pool[Math.floor(Math.random() * pool.length)];
      attempts += 1;
    }
  }

  state.spotlightKey = `${pick.year}-${pick.title}`;

  spotlightCard.innerHTML = `
    <p class="eyebrow">${pick.year} • ${pick.type} • ${pick.lane}</p>
    <h4>${pick.title}</h4>
    <p>${pick.tagline}</p>
    <div class="entry-tags">
      ${pick.tags.map((tag) => `<span class="entry-tag">${tag}</span>`).join("")}
    </div>
  `;
}

function celebrateSpotlight() {
  spotlightCard.classList.remove("is-flashing");
  void spotlightCard.offsetWidth;
  spotlightCard.classList.add("is-flashing");
}

function getVisibleCharacters() {
  return characterBios
    .filter((character) => state.characterGroup === "All" || character.group === state.characterGroup)
    .filter((character) => {
      if (!state.characterSearch) return true;
      const haystack = [
        character.name,
        character.species,
        character.debut,
        character.alignment,
        character.affiliation,
        character.summary,
        ...character.details,
        ...character.highlights,
        ...character.tags
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(state.characterSearch);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function ensureSelectedCharacter(visibleCharacters) {
  if (!visibleCharacters.length) {
    state.selectedCharacter = "";
    return;
  }

  const stillVisible = visibleCharacters.some((character) => character.name === state.selectedCharacter);
  if (!stillVisible) {
    state.selectedCharacter = visibleCharacters[0].name;
  }
}

function renderCharacterFilters() {
  characterGroupFilters.replaceChildren(
    ...characterGroupOrder.map((group) =>
      createChip(group, state.characterGroup === group, () => {
        state.characterGroup = group;
        renderCharacters();
      })
    )
  );
}

function renderCharacterList(visibleCharacters) {
  if (!visibleCharacters.length) {
    characterList.innerHTML = `<div class="character-empty">No character bios match that search yet. Try another name, team, or role.</div>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  visibleCharacters.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `character-button${character.name === state.selectedCharacter ? " active" : ""}`;
    button.innerHTML = `
      <p class="character-button-name">${character.name}</p>
      <p class="character-button-meta">${character.group} • ${character.species} • Debut: ${character.debut}</p>
    `;
    button.addEventListener("click", () => {
      state.selectedCharacter = character.name;
      renderCharacters();
    });
    fragment.appendChild(button);
  });

  characterList.replaceChildren(fragment);
}

function renderCharacterDetail(visibleCharacters) {
  if (!visibleCharacters.length) {
    characterDetail.innerHTML = `<div class="character-empty">The character detail panel will fill in when a matching hero, rival, or villain appears.</div>`;
    return;
  }

  const character = visibleCharacters.find((item) => item.name === state.selectedCharacter) || visibleCharacters[0];

  characterDetail.innerHTML = `
    <div class="character-detail-top">
      <div>
        <p class="eyebrow">${character.group} • ${character.alignment}</p>
        <h4>${character.name}</h4>
        <p class="character-detail-meta">${character.species} • Debut: ${character.debut} • ${character.affiliation}</p>
        <p class="character-detail-copy">${character.summary}</p>
      </div>
      <div class="character-crest" style="background:${character.color};">${character.crest}</div>
    </div>

    <div class="character-detail-tags">
      ${character.tags.map((tag) => `<span class="entry-tag">${tag}</span>`).join("")}
    </div>

    <div class="character-detail-grid">
      <section class="detail-card">
        <h5>Why Fans Care</h5>
        <ul class="detail-list">
          ${character.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-card">
        <h5>Key Notes</h5>
        <ul class="detail-list">
          ${character.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderCharacters() {
  renderCharacterFilters();
  const visibleCharacters = getVisibleCharacters();
  ensureSelectedCharacter(visibleCharacters);
  characterResultsLabel.textContent = `${visibleCharacters.length} detailed character bio${visibleCharacters.length === 1 ? "" : "s"} ready to explore`;
  renderCharacterList(visibleCharacters);
  renderCharacterDetail(visibleCharacters);
}

function renderTimeline() {
  const visibleEntries = getVisibleEntries();

  resultsLabel.textContent = `${visibleEntries.length} project${visibleEntries.length === 1 ? "" : "s"} on this route`;

  if (!visibleEntries.length) {
    timelineList.innerHTML = `<div class="hidden-state">No matches yet. Try a different filter or search word.</div>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  visibleEntries.forEach((entry) => {
    const node = entryTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".entry-year").textContent = `${entry.year} • ${entry.lane}`;
    node.querySelector(".entry-type").textContent = entry.type;
    node.querySelector(".entry-title").textContent = entry.title;
    node.querySelector(".entry-tagline").textContent = entry.tagline;

    const tagsContainer = node.querySelector(".entry-tags");
    entry.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "entry-tag";
      chip.textContent = tag;
      tagsContainer.appendChild(chip);
    });

    fragment.appendChild(node);
  });

  timelineList.replaceChildren(fragment);
}

function render() {
  renderFilters();
  renderTimeline();
  renderSpotlight(getVisibleEntries());
  renderCharacters();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  render();
});

characterSearchInput.addEventListener("input", (event) => {
  state.characterSearch = event.target.value.trim().toLowerCase();
  renderCharacters();
});

surpriseButton.addEventListener("click", () => {
  renderSpotlight(getVisibleEntries(), true);
  celebrateSpotlight();
  spotlightSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderHeroBadges();
renderStats();
render();
