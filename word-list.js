const wordList = [
    {
        word: "penguin",
        hint: "A flightless bird that loves the cold."
    },
    {
        word: "banana",
        hint: "A yellow fruit that monkeys love."
    },
    {
        word: "bubblegum",
        hint: "Chewy and pink, fun to blow into bubbles."
    },
    {
        word: "sunny",
        hint: "The weather when the sky is clear and bright."
    },
    {
        word: "giggles",
        hint: "The sound of uncontrollable laughter."
    },
    {
        word: "jellybean",
        hint: "A small, sweet, and colorful candy."
    },
    {
        word: "robot",
        hint: "A mechanical friend that follows commands."
    },
    {
        word: "superhero",
        hint: "A fictional character with extraordinary powers."
    },
    {
        word: "cupcake",
        hint: "A small, delicious cake often topped with frosting."
    },
    {
        word: "laughter",
        hint: "The joyful sound of amusement."
    },
    {
        word: "kite",
        hint: "A flying toy attached to a string."
    },
    {
        word: "snuggle",
        hint: "To embrace closely for warmth or affection."
    },
    {
        word: "sparkle",
        hint: "Shining with small, bright flashes of light."
    },
    {
        word: "gummybear",
        hint: "A chewy, fruity treat shaped like a bear."
    },
    {
        word: "cozy",
        hint: "Warm and comfortable, like a blanket."
    },
    {
        word: "whistle",
        hint: "A small device that makes a high-pitched sound."
    },
    {
        word: "bounce",
        hint: "To spring back after hitting a surface."
    },
    {
        word: "puzzle",
        hint: "A game or challenge to test your brain."
    },
    {
        word: "firefly",
        hint: "A tiny insect that glows in the dark."
    },
    {
        word: "campfire",
        hint: "A warm, outdoor fire for cooking or gathering."
    },
    {
        word: "wizard",
        hint: "A magical person with special powers."
    },
    {
        word: "daisy",
        hint: "A simple and cheerful white flower."
    },
    {
        word: "jungle",
        hint: "A dense, tropical forest full of wildlife."
    },
    {
        word: "muffin",
        hint: "A small, sweet bread often with fruit or nuts."
    },
    {
        word: "pillow",
        hint: "Soft and fluffy for resting your head."
    },
    {
        word: "robot",
        hint: "A mechanical friend that follows commands."
    },
    {
        word: "starry",
        hint: "Filled with bright and shining stars."
    },
    {
        word: "wizard",
        hint: "A magical person with special powers."
    },
    {
        word: "playful",
        hint: "Full of fun and lively activity."
    },
    {
        word: "magic",
        hint: "Mysterious and enchanting supernatural forces."
    },
    {
        word: "giggle",
        hint: "A light, happy laugh."
    },
    {
        word: "sunshine",
        hint: "The warm and bright rays of the sun."
    },
    {
        word: "fuzzy",
        hint: "Soft and slightly fluffy to the touch."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "playground",
        hint: "An outdoor area with equipment for children to play on."
    },
    {
        word: "lollipop",
        hint: "A sweet candy on a stick, often brightly colored."
    },
    {
        word: "giraffe",
        hint: "A tall African mammal with a long neck."
    },
    {
        word: "bubble",
        hint: "A thin sphere of liquid enclosing air or gas."
    },
    {
        word: "cartoon",
        hint: "An animated film or TV show with funny characters."
    },
    {
        word: "puzzle",
        hint: "A game or challenge to test your brain."
    },
    {
        word: "smile",
        hint: "A happy facial expression."
    },
    {
        word: "sprinkle",
        hint: "Tiny bits of candy or decoration."
    },
    {
        word: "acorn",
        hint: "The nut of an oak tree."
    },
    {
        word: "playful",
        hint: "Full of fun and lively activity."
    },
    {
        word: "giggle",
        hint: "A light, happy laugh."
    },
    {
        word: "sparkle",
        hint: "Shining with small, bright flashes of light."
    },
    {
        word: "snuggle",
        hint: "To embrace closely for warmth or affection."
    },
    {
        word: "laughter",
        hint: "The joyful sound of amusement."
    },
    {
        word: "campfire",
        hint: "A warm, outdoor fire for cooking or gathering."
    },
    {
        word: "pillow",
        hint: "Soft and fluffy for resting your head."
    },
    {
        word: "muffin",
        hint: "A small, sweet bread often with fruit or nuts."
    },
    {
        word: "giraffe",
        hint: "A tall African mammal with a long neck."
    },
    {
        word: "cartoon",
        hint: "An animated film or TV show with funny characters."
    },
    {
        word: "lollipop",
        hint: "A sweet candy on a stick, often brightly colored."
    },
    {
        word: "fuzzy",
        hint: "Soft and slightly fluffy to the touch."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "playground",
        hint: "An outdoor area with equipment for children to play on."
    },
    {
        word: "sparkle",
        hint: "Shining with small, bright flashes of light."
    },
    {
        word: "smile",
        hint: "A happy facial expression."
    },
    {
        word: "sprinkle",
        hint: "Tiny bits of candy or decoration."
    },
    {
        word: "acorn",
        hint: "The nut of an oak tree."
    },
    {word: "cryptocurrency", hint: "Digital money secured by advanced encryption."},
    {word: "metamorphosis", hint: "A profound transformation, like a caterpillar becoming a butterfly."},
    {word: "paradox", hint: "A statement that contradicts itself but might be true."},
    {word: "serendipity", hint: "Discovering something wonderful by chance."},
    {word: "symbiosis", hint: "Two different organisms living together for mutual benefit."},
    {word: "quicksilver", hint: "Another name for the element mercury."},
    {word: "zephyr", hint: "A gentle, soothing breeze."},
    {word: "labyrinth", hint: "A complex maze, difficult to navigate."},
    {word: "epiphany", hint: "A sudden realization or profound understanding."},
    {word: "nebula", hint: "A cloud of gas and dust in space."},
    {word: "conundrum", hint: "A confusing and puzzling problem."},
    {word: "phantasmagoria", hint: "A sequence of strange and shifting images."},
    {word: "equilibrium", hint: "A state of balance and stability."},
    {word: "zeitgeist", hint: "The defining spirit or mood of a particular period."},
    {word: "pyrotechnics", hint: "The art of creating fireworks displays."},
    {word: "soliloquy", hint: "A character speaking their thoughts aloud, often alone on stage."},
    {word: "euphoria", hint: "A feeling of intense happiness and excitement."},
    {word: "hieroglyphics", hint: "Ancient writing using pictures or symbols."},
    {word: "ethereal", hint: "Delicate and otherworldly, like a ghost."},
    {word: "parabola", hint: "A symmetrical curved line."},
    {word: "poltergeist", hint: "A mischievous and noisy ghost."},
    {word: "enigma", hint: "Something mysterious and puzzling."},
    {word: "cataclysm", hint: "A violent and sudden disaster."},
    {word: "quasar", hint: "A distant and incredibly bright celestial object."},
    {word: "resonance", hint: "Echoes or vibrations that linger in space or time."},
    {word: "wanderlust", hint: "A strong desire to travel and explore."},
    {word: "serenity", hint: "Calmness and peace in one's surroundings."},
    {word: "beacon", hint: "A guiding light or signal."},
    {word: "enchantment", hint: "A feeling of wonder and magic."},
    {word: "mirage", hint: "An optical illusion in the desert."},
    {word: "cascade", hint: "A series of small waterfalls."},
    {word: "citadel", hint: "A fortified stronghold protecting a city."},
    {word: "effervescent", hint: "Bubbly and full of life."},
    {word: "halcyon", hint: "Peaceful and prosperous times."},
    {word: "luminary", hint: "A person of great influence and inspiration."},
    {word: "mellifluous", hint: "Sweet and smooth-sounding."},
    {word: "elysium", hint: "A place of perfect happiness and bliss."},
    {word: "jubilant", hint: "Joyful and exuberant in celebration."},
    {word: "odyssey", hint: "A long and adventurous journey."},
    {word: "verdant", hint: "Green and lush with vegetation."},
    {word: "panacea", hint: "A cure-all remedy for problems."},
    {word: "tranquility", hint: "Calmness and peace in the environment."}
];