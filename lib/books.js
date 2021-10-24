const books = {
  'non-fiction': [
    {
      'title': 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
      'creds': 'Mark Manson'
    },
    {
      'title': 'The Cosmic Serpent: DNA and the Origins of Knowledge',
      'creds': 'Jeremy Narby'
    },
    {
      'title': 'An Indigenous Peoples\' History of the United States',
      'creds': 'Roxanne Dunbar-Ortiz'
    },
    {
      'title': 'Why We Sleep: Unlocking the Power of Sleep and Dreams',
      'creds': 'Matthew Walker, PhD'
    },
    {
      'title': 'Extreme Ownership: How U.S. Navy SEALS Lead and Win',
      'creds': 'Jocko Willink, Leif Babin'
    },
    {
      'title': 'Unmasked: Inside Antifa\'s Radical Plan to Destroy Democracy',
      'creds': 'Andy Gno'
    },
    {
      'title': 'Detroit: An American Autopsy',
      'creds': 'Charlie LeDuff'
    },
    {
      'title': 'The Man Who Solved the Market: How Jim Simons Launched the Quant Revolution',
      'creds': 'Gregory Zuckerman'
    },
    {
      'title': 'The Immortality Key: The Secret History of the Religion With No Name',
      'creds': 'Brian C. Muraresku'
    },
    {
      'title': 'The Coddling of the American Mind: How Good Intentions and Bad Ideas are Setting Up a Generation for Failure',
      'creds': 'Greg Lukianoff, Jonathan Haidt'
    },
    {
      'title': 'The Rise and Fall of the Third Reich: A History of Nazi Germany',
      'creds': 'William L. Shirer'
    },
    {
      'title': 'American Buffalo: In Search of a Lost Icon',
      'creds': 'Steven Rinella'
    },
    {
      'title': 'How to Fight Anti-Semitism',
      'creds': 'Bari Weiss'
    },
    {
      'title': 'What I Talk About When I Talk About Running: A Memoir',
      'creds': 'Haruki Murakami, translated by Philip Gabriel'
    },
    {
      'title': 'The Village Effect: How Face-to-Face Contact Can Make Us Healthier, Happier, and Smarter',
      'creds': 'Susan Pinker'
    },
    {
      'title': 'The Happiness Hypothesis: Finding Modern Truth in Ancient Wisdom',
      'creds': 'Jonathan Haidt'
    },
    {
      'title': 'The End is Always Near: Apocalyptic Moments from the Bronze Age Collapse to Nuclear Near Misses',
      'creds': 'Dan Carlin'
    },
    {
      'title': 'Never Split the Difference: Negotiating As If Your Life Depended On It',
      'creds': 'Chris Voss'
    },
    {
      'title': 'The Meaning of it All: Thoughts of a Citizen Scientist',
      'creds': 'Richard P. Feynman'
    },
    {
      'title': 'The Righteous Mind: Why Good People are Divided by Politics and Religion',
      'creds': 'Jonathan Haidt'
    },
    {
      'title': '12 Rules for Life: An Antidote to Chaos',
      'creds': 'Jordan Peterson'
    },
    {
      'title': 'Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland',
      'creds': 'Christoper R. Browning'
    },
    {
      'title': 'Man’s Search for Meaning',
      'creds': 'Viktor E. Frankl'
    },
    {
      'title': 'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress',
      'creds': 'Steven Pinker'
    },
    {
      'title': 'MAUS: A Survivors Tale. My Father Bleeds History, Volume 1',
      'creds': 'Art Spiegelman'
    },
    {
      'title': 'MAUS: A Survivors Tale. And Here My Troubles Began, Volume 2',
      'creds': 'Art Spiegelman'
    },
    {
      'title': 'The Communist Manifesto and Other Writings',
      'creds': 'Karl Marx'
    },
    {
      'title': 'Kitchen Confidential: Adventures in the Culinary Underbelly',
      'creds': 'Anthony Bourdain'
    },
    {
      'title': 'Sapiens: A Brief History of Humankind',
      'creds': 'Yuval Noah Harari'
    },
    {
      'title': 'Magicians of the Gods: The Forgotten Wisdom of Earth\'s Lost Civilisation',
      'creds': 'Graham Hancock'
    },
    {
      'title': 'America Before: The Key to Earth\'s Lost Civilization',
      'creds': 'Graham Hancock'
    },
    {
      'title': 'Hacking Darwin: Genetic Engineering and the Future of Humanity',
      'creds': 'Jamie Metzl'
    },
    {
      'title': 'Guns, Germs and Steel: The Fates of Human Societies',
      'creds': 'Jared Diamond'
    },
  ],
  fiction: [
    {
      'title': 'Animal Farm',
      'creds': 'George Orwell'
    },
    {
      'title': 'The Screwtape Letters',
      'creds': 'C.S. Lewis'
    },
    {
      'title': 'Raptor Red',
      'creds': 'Robert T. Baker'
    },
    {
      'title': 'Ready Player Two',
      'creds': 'Ernest Cline'
    },
    {
      'title': 'The Templar Legacy',
      'creds': 'Steve Berry'
    },
    {
      'title': 'Dragon Teeth',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'State of Fear',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Micro',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Pirate Latitudes',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'The Lost World',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Timeline',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Airframe',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Prey',
      'creds': 'Michael Crichton'
    },
    {
      'title': 'Brave New World',
      'creds': 'Aldous Huxley'
    },
    {
      'title': 'The Adventures of Tom Sawyer',
      'creds': 'Mark Twain'
    },
    {
      'title': 'Speaker for the Dead',
      'creds': 'Orson Scott Card'
    },
    {
      'title': 'Xenocide',
      'creds': 'Orson Scott Card'
    },
    {
      'title': 'Children of the Mind',
      'creds': 'Orson Scott Card'
    },
    {
      'title': 'Ready Player One',
      'creds': 'Ernest Cline'
    },
    {
      'title': 'Armada',
      'creds': 'Ernest Cline'
    },
    {
      'title': 'John Carter in a Princess of Mars',
      'creds': 'Edgar Rice Burroughs'
    },
    {
      'title': 'The Gods of Mars',
      'creds': 'Edgar Rice Burroughs'
    },
    {
      'title': 'John Carter in the Warlord of Mars',
      'creds': 'Edgar Rice Burroughs'
    },
    {
      'title': 'Mrs. Frisby and the Rats of NIMH',
      'creds': 'Robert O’Brien'
    },
  ],
};

export default books;