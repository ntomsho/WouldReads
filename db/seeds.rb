# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Shelf.destroy_all
Book.destroy_all
ShelfBook.destroy_all
Review.destroy_all

  cage = User.create!(
    username: "Nicolas Cage",
    email: "wild@heart.com",
    password: "notthebees"
  );

  cageall = Shelf.create!(
    title: "All",
    user_id: cage.id,
    default_shelf: true
  )

  cageskim = Shelf.create!(
    title: "Skimmed",
    user_id: cage.id,
    default_shelf: true
  )

  cagepretend = Shelf.create!(
    title: "Pretending to Read",
    user_id: cage.id,
    default_shelf: true
  )

  cagewould = Shelf.create!(
    title: "Would Read",
    user_id: cage.id,
    default_shelf: true
  )

  cagevoodoo = Shelf.create!(
    title: "books about voodoo",
    user_id: cage.id,
    default_shelf: false
  )

  cagebuns = Shelf.create!(
    title: "fluffy bunnies",
    user_id: cage.id,
    default_shelf: false
  )


twentyone_lessons = Book.create(
    title: "21 Lessons for the 21st Century",
    isbn: 1,
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    synopsis: "How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children?\n \nYuval Noah Harari's 21 Lessons for the 21st Century is a probing and visionary investigation into today's most urgent issues as we move into the uncharted territory of the future. As technology advances faster than our understanding of it, hacking becomes a tactic of war, and the world feels more polarized than ever, Harari addresses the challenge of navigating life in the face of constant and disorienting change and raises the important questions we need to ask ourselves in order to survive."
  )
  twentyone_lessons.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/21_lessons.jpg"), filename: "twentyone_lessons")

black_gods_drums = Book.create(
  title: "The Black God's Drums",
  isbn: 2,
  author: "P. Djèlí Clark",
  genre: "Steampunk",
  synopsis: "Creeper, a scrappy young teen, is done living on the streets of New Orleans. Instead, she wants to soar, and her sights are set on securing passage aboard the smuggler airship Midnight Robber. Her ticket: earning Captain Ann-Marie’s trust using a secret about a kidnapped Haitian scientist and a mysterious weapon he calls The Black God’s Drums.\n \nBut Creeper keeps another secret close to heart--Oya, the African orisha of the wind and storms, who speaks inside her head and grants her divine powers. And Oya has her own priorities concerning Creeper and Ann-Marie…"
)
black_gods_drums.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/black_gods_drums.jpg"), filename: "black_gods_drums")

black_leopard = Book.create(
  title: "Black Leopard, Red Wolf (The Dark Star Trilogy #1)",
  isbn: 3,
  author: "Marlon James",
  genre: "Fantasy",
  synopsis: "Tracker is known far and wide for his skills as a hunter: 'He has a nose,' people say. Engaged to track down a mysterious boy who disappeared three years earlier, Tracker breaks his own rule of always working alone when he finds himself part of a group that comes together to search for the boy. The band is a hodgepodge, full of unusual characters with secrets of their own, including a shape-shifting man-animal known as Leopard.\n \nAs Tracker follows the boy's scent—from one ancient city to another; into dense forests and across deep rivers—he and the band are set upon by creatures intent on destroying them. As he struggles to survive, Tracker starts to wonder: Who, really, is this boy? Why has he been missing for so long? Why do so many people want to keep Tracker from finding him? And perhaps the most important questions of all: Who is telling the truth, and who is lying?"
)
black_leopard.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/black_leopard.jpg"), filename: "black_leopard")

black_panther = Book.create(
  title: "Black Panther #1",
  isbn: 4,
  author: "Ta-Nehisi Coates",
  genre: "Comic Book",
  synopsis: "A new era for the Black Panther starts here! Written by MacArthur Genius and National Book Award winner TA-NEHISI COATES (Between the World and Me) and illustrated by living legend BRIAN STELFREEZE, 'A Nation Under Our Feet' is a story about dramatic upheaval in Wakanda and the Black Panther's struggle to do right by his people as their ruler. The indomitable will of Wakanda -- the famed African nation known for its vast wealth, advanced technology and warrior traditions -- has long been reflected in the will of its monarchs, the Black Panthers. But now the current Black Panther, T'Challa, finds that will tested by a superhuman terrorist group called The People that has sparked a violent uprising among the citizens of Wakanda. T'Challa knows the country must change to survive -- the question is, will the Black Panther survive the change?"
)
black_panther.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/black_panther_1.jpg"), filename: "black_panther_1")

calypso = Book.create(
  title: "Calypso",
  isbn: 5,
  author: "David Sedaris",
  genre: "Essay Collection",
  synopsis: "If you've ever laughed your way through David Sedaris's cheerfully misanthropic stories, you might think you know what you're getting with Calypso. You'd be wrong.\n \nWhen he buys a beach house on the Carolina coast, Sedaris envisions long, relaxing vacations spent playing board games and lounging in the sun with those he loves most. And life at the Sea Section, as he names the vacation home, is exactly as idyllic as he imagined, except for one tiny, vexing realization: it's impossible to take a vacation from yourself.\n \nWith Calypso, Sedaris sets his formidable powers of observation toward middle age and mortality. Make no mistake: these stories are very, very funny--it's a book that can make you laugh 'til you snort, the way only family can. Sedaris's powers of observation have never been sharper, and his ability to shock readers into laughter unparalleled. But much of the comedy here is born out of that vertiginous moment when your own body betrays you and you realize that the story of your life is made up of more past than future."
)
calypso.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/calypso.jpg"), filename: "calypso")

changes = Book.create(
  title: "Changes (The Dresden Files #12)",
  isbn: 6,
  author: "Jim Butcher",
  genre: "Urban Fantasy",
  synopsis: "Long ago, Susan Rodriguez was Harry Dresden's lover-until she was attacked by his enemies, leaving her torn between her own humanity and the bloodlust of the vampiric Red Court. Susan then disappeared to South America, where she could fight both her savage gift and those who cursed her with it.\n \nNow Arianna Ortega, Duchess of the Red Court, has discovered a secret Susan has long kept, and she plans to use it-against Harry. To prevail this time, he may have no choice but to embrace the raging fury of his own untapped dark power. Because Harry's not fighting to save the world...\n \nHe's fighting to save his child."
)
changes.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/changes.jpg"), filename: "changes")

circe = Book.create(
  title: "Circe",
  isbn: 7,
  author: "Madeline Miller",
  genre: "Mythological Retelling",
  synopsis: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.\n \nThreatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.\n \nBut there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love."
)
circe.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/circe.jpg"), filename: "circe")

dark_matter = Book.create(
  title: "Dark Matter",
  isbn: 8,
  author: "Blake Crouch",
  genre: "Science-fiction Thriller",
  synopsis: "'Are you happy with your life?'\n \nThose are the last words Jason Dessen hears before the masked abductor knocks him unconscious.\n \nBefore he awakens to find himself strapped to a gurney, surrounded by strangers in hazmat suits.\n \nBefore a man Jason’s never met smiles down at him and says, 'Welcome back, my friend.'\n \nIn this world he’s woken up to, Jason’s life is not the one he knows. His wife is not his wife. His son was never born. And Jason is not an ordinary college physics professor, but a celebrated genius who has achieved something remarkable. Something impossible."
)
dark_matter.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/dark_matter.jpg"), filename: "dark_matter")

friday_black = Book.create(
  title: "Friday Black",
  isbn: 9,
  author: "Nana Kwame Adjei-Brenyah",
  genre: "Short Story Collection",
  synopsis: "In the stories of Adjei-Brenyah’s debut, an amusement park lets players enter augmented reality to hunt terrorists or shoot intruders played by minority actors, a school shooting results in both the victim and gunman stuck in a shared purgatory, and an author sells his soul to a many-tongued god.\n \nAdjei-Brenyah's writing will grab you, haunt you, enrage, and invigorate you. By placing ordinary characters in extraordinary situations, Adjei-Brenyah reveals the violence, injustice, and painful absurdities that black men and women contend with every day. These stories tackle urgent instances of racism and cultural unrest and explore the many ways we fight for humanity in an unforgiving world."
)
friday_black.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/friday_black.jpg"), filename: "friday_black")

kings_of_the_wyld = Book.create(
  title: "Kings of the Wyld (The Band #1)",
  isbn: 10,
  author: "Nicholas Eames",
  genre: "Comedic Epic Fantasy",
  synopsis: "Clay Cooper and his band were once the best of the best -- the meanest, dirtiest, most feared crew of mercenaries this side of the Heartwyld.\n \nTheir glory days long past, the mercs have grown apart and grown old, fat, drunk - or a combination of the three. Then an ex-bandmate turns up at Clay's door with a plea for help. His daughter Rose is trapped in a city besieged by an enemy one hundred thousand strong and hungry for blood. Rescuing Rose is the kind of mission that only the very brave or the very stupid would sign up for.\n \nIt's time to get the band back together for one last tour across the Wyld."
)
kings_of_the_wyld.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/kings_of_the_wild.jpg"), filename: "kings_of_the_wyld")

marlon_bundo = Book.create(
  title: "A Day in the Life of Marlon Bundo",
  isbn: 11,
  author: "Jill Twiss",
  genre: "Comedy",
  synopsis: "HBO's Emmy-winning Last Week Tonight with John Oliver presents a picture book about a Very Special boy bunny who falls in love with another boy bunny.\n \nMeet Marlon Bundo, a lonely bunny who lives with his Grampa, Mike Pence - the Vice President of the United States. But on this Very Special Day, Marlon's life is about to change forever..."
)
marlon_bundo.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/marlon_bundo.jpg"), filename: "marlon_bundo")

obelisk_gate = Book.create(
  title: "The Obelisk Gate (The Broken Earth #2)",
  isbn: 12,
  author: "N.K. Jemisin",
  genre: "Fantasy",
  synopsis: "THIS IS THE WAY THE WORLD ENDS... FOR THE LAST TIME.\n \nThe season of endings grows darker as civilization fades into the long cold night. Alabaster Tenring – madman, world-crusher, savior – has returned with a mission: to train his successor, Essun, and thus seal the fate of the Stillness forever.\n \nIt continues with a lost daughter, found by the enemy.\n \nIt continues with the obelisks, and an ancient mystery converging on answers at last.\n \nThe Stillness is the wall which stands against the flow of tradition, the spark of hope long buried under the thickening ashfall. And it will not be broken."
)
obelisk_gate.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/obelisk_gate.jpg"), filename: "obelisk_gate")

old_mans_war = Book.create(
  title: "Old Man's War (Old Man's War #1)",
  isbn: 13,
  author: "John Scalzi",
  genre: "Space Opera",
  synopsis: "John Perry did two things on his 75th birthday. First he visited his wife's grave. Then he joined the army.\n \nThe good news is that humanity finally made it into interstellar space. The bad news is that planets fit to live on are scarce-- and alien races willing to fight us for them are common. So: we fight. To defend Earth, and to stake our own claim to planetary real estate. Far from Earth, the war has been going on for decades: brutal, bloody, unyielding.\n \nEarth itself is a backwater. The bulk of humanity's resources are in the hands of the Colonial Defense Force. Everybody knows that when you reach retirement age, you can join the CDF. They don't want young people; they want people who carry the knowledge and skills of decades of living. You'll be taken off Earth and never allowed to return. You'll serve two years at the front. And if you survive, you'll be given a generous homestead stake of your own, on one of our hard-won colony planets.\n \nJohn Perry is taking that deal. He has only the vaguest idea what to expect. Because the actual fight, light-years from home, is far, far harder than he can imagine--and what he will become is far stranger."
)
old_mans_war.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/old_mans_war.jpg"), filename: "old_mans_war")

pachinko = Book.create(
  title: "Pachinko",
  isbn: 14,
  author: "Min Jin Lee",
  genre: "Historical Fiction",
  synopsis: "In the early 1900s, teenaged Sunja, the adored daughter of a crippled fisherman, falls for a wealthy stranger at the seashore near her home in Korea. He promises her the world, but when she discovers she is pregnant--and that her lover is married--she refuses to be bought. Instead, she accepts an offer of marriage from a gentle, sickly minister passing through on his way to Japan. But her decision to abandon her home, and to reject her son's powerful father, sets off a dramatic saga that will echo down through the generations.\n \nRichly told and profoundly moving, Pachinko is a story of love, sacrifice, ambition, and loyalty. From bustling street markets to the halls of Japan's finest universities to the pachinko parlors of the criminal underworld, Lee's complex and passionate characters--strong, stubborn women, devoted sisters and sons, fathers shaken by moral crisis--survive and thrive against the indifferent arc of history."
)
pachinko.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/pachinko.jpg"), filename: "pachinko")

parable_of_the_sower = Book.create(
  title: "Parable of the Sower (Earthseed #1)",
  isbn: 15,
  author: "Octavia E. Butler",
  genre: "Science-fiction",
  synopsis: "In 2025, with the world descending into madness and anarchy, one woman begins a fateful journey toward a better future\n \nLauren Olamina and her family live in one of the only safe neighborhoods remaining on the outskirts of Los Angeles. Behind the walls of their defended enclave, Lauren’s father, a preacher, and a handful of other citizens try to salvage what remains of a culture that has been destroyed by drugs, disease, war, and chronic water shortages. While her father tries to lead people on the righteous path, Lauren struggles with hyperempathy, a condition that makes her extraordinarily sensitive to the pain of others.\n \nWhen fire destroys their compound, Lauren’s family is killed and she is forced out into a world that is fraught with danger. With a handful of other refugees, Lauren must make her way north to safety, along the way conceiving a revolutionary idea that may mean salvation for all mankind."
)
parable_of_the_sower.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/parable_of_the_sower.jpg"), filename:"parable_of_the_sower")

stone_sky = Book.create(
  title: "The Stone Sky (Broken Earth #3)",
  isbn: 16,
  author: "N.K. Jemisin",
  genre: "Fantasy",
  synopsis: "THIS IS THE WAY THE WORLD ENDS... FOR THE LAST TIME.\n \nThe Moon will soon return. Whether this heralds the destruction of humankind or something worse will depend on two women.\n \nEssun has inherited the power of Alabaster Tenring. With it, she hopes to find her daughter Nassun and forge a world in which every orogene child can grow up safe.\n \nFor Nassun, her mother's mastery of the Obelisk Gate comes too late. She has seen the evil of the world, and accepted what her mother will not admit: that sometimes what is corrupt cannot be cleansed, only destroyed."
)
stone_sky.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/stone_sky.jpg"), filename: "stone_sky")

thank_you_bunny = Book.create(
  title: "Thank You, Furry Bunny, for a Wonderful Afternoon",
  isbn: 17,
  author: "Ji Mi",
  genre: "Children's",
  synopsis: "about time. about friendship. about themselves. about the dream. This is the reason you are concerned about this book. but it can really impress you. maybe it just makes you think that deep Cangzaixinli Wednesday afternoon. In life. if you really have a wonderful afternoon. it must be very thankful for something. In young shallots. or when grown old. and the people closest. with such a simple. simply beautiful and intractable. But ultimately irresistible farewell. Thank you plush rabbit. this afternoon. really fun. and then only long recall. to taste once lost every sense of loss of detail. Forest where the little girl and thank you in the elderly. in the final are on the plush rabbit say something like this: Thank you plush rabbit. this afternoon. really fun. In a moment. two faces overlap. as if in t..."
)
thank_you_bunny.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/thank_you_bunny.jpg"), filename: "thank_you_bunny")

transmetropolitan = Book.create(
  title: "Transmetropolitan, Vol. 1: Back on the Street",
  isbn: 18,
  author: "Warren Ellis",
  genre: "Graphic Novel",
  synopsis: "After years of self-imposed exile from a civilization rife with degradation and indecency, cynical journalist Spider Jerusalem is forced to return to a job that he hates and a city that he loathes. Working as an investigative reporter for the newspaper The Word, Spider attacks the injustices of his surreal 23rd Century surroundings. Combining black humor, life-threatening situations, and moral ambiguity, this book is the first look into the mind of an outlaw journalist and the world he seeks to destroy."
)
transmetropolitan.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/transmetropolitan.jpg"), filename: "transmetropolitan")

vacationland = Book.create(
  title: "Vacationland: True Stories from Painful Beaches",
  isbn: 19,
  author: "John Hodgman",
  genre: "Essay Collection",
  synopsis: "Disarmed of falsehood, he was left only with the awful truth: John Hodgman is an older white male monster with bad facial hair, wandering like a privileged Sasquatch through three wildernesses: the hills of Western Massachusetts where he spent much of his youth; the painful beaches of Maine that want to kill him (and some day will); and the metaphoric haunted forest of middle age that connects them.\n \nVacationland collects these real life wanderings, and through them you learn of the horror of freshwater clams, the evolutionary purpose of the mustache, and which animals to keep as pets and which to kill with traps and poison. There is also some advice on how to react when the people of coastal Maine try to sacrifice you to their strange god.\n \nThough wildly, Hodgmaniacally funny as usual, it is also a poignant and sincere account of one human facing his forties, those years when men in particular must stop pretending to be the children of bright potential they were and settle into the failing bodies of the wiser, weird dads that they are."
)
vacationland.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/vacationland.jpg"), filename: "vacationland")

year_of_the_flood = Book.create(
  title: "The Year of the Flood (MaddAdam #2)",
  isbn: 20,
  author: "Margaret Atwood",
  genre: "Science-fiction",
  synopsis: "The times and species have been changing at a rapid rate, and the social compact is wearing as thin as environmental stability. Adam One, the kindly leader of the God's Gardeners--a religion devoted to the melding of science and religion, as well as the preservation of all plant and animal life--has long predicted a natural disaster that will alter Earth as we know it. Now it has occurred, obliterating most human life. Two women have survived: Ren, a young trapeze dancer locked inside the high-end sex club Scales and Tails, and Toby, a God's Gardener barricaded inside a luxurious spa where many of the treatments are edible.\n \nHave others survived? Ren's bioartist friend Amanda? Zeb, her eco-fighter stepfather? Her onetime lover, Jimmy? Or the murderous Painballers, survivors of the mutual-elimination Painball prison? Not to mention the shadowy, corrupt policing force of the ruling powers...\n \nMeanwhile, gene-spliced life forms are proliferating: the lion/lamb blends, the Mo'hair sheep with human hair, the pigs with human brain tissue. As Adam One and his intrepid hemp-clad band make their way through this strange new world, Ren and Toby will have to decide on their next move. They can't stay locked away..."
)
year_of_the_flood.cover.attach(io: open("https://s3.amazonaws.com/wouldreads-seed/book_covers/year_of_the_flood.jpg"), filename: "year_of_the_flood")


sb1a = ShelfBook.create(
    shelf_id: cageall.id,
    book_id: twentyone_lessons.id
)

sb1b = ShelfBook.create(
  shelf_id: cageskim.id,
  book_id: twentyone_lessons.id
)

r1 = Review.create(
  book_id: twentyone_lessons.id,
  user_id: cage.id,
  rating: 5,
  body: "Whoa! Crazy robots and radical mind-control, man!"
)

sb2a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: black_panther.id
)

sb2b = ShelfBook.create(
  shelf_id: cageskim.id,
  book_id: black_panther.id
)

r2 = Review.create(
  book_id: black_panther.id,
  user_id: cage.id,
  rating: 4
)

sb2a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: kings_of_the_wyld.id
)

sb2b = ShelfBook.create(
  shelf_id: cagepretend.id,
  book_id: kings_of_the_wyld.id
)

sb3a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: transmetropolitan.id
)

sb3b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: transmetropolitan.id
)

sb4a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: black_gods_drums.id
)

sb4b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: black_gods_drums.id
)

sb4c = ShelfBook.create(
  shelf_id: cagevoodoo.id,
  book_id: black_gods_drums.id
)

r4 = Review.create(
  book_id: black_gods_drums.id,
  user_id: cage.id,
  rating: 4,
  body: "I haven't read this yet, but it's got some crazy black-magic juju, man!"
)

sb5a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: marlon_bundo.id
)

sb5b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: marlon_bundo.id
)

sb5c = ShelfBook.create(
  shelf_id: cagebuns.id,
  book_id: marlon_bundo.id
)

sb6a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: thank_you_bunny.id
)

sb6b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: thank_you_bunny.id
)

sb6c = ShelfBook.create(
  shelf_id: cagebuns.id,
  book_id: thank_you_bunny.id
)

sb7a = ShelfBook.create(
  shelf_id: cageall.id,
  book_id: calypso.id
)

sb7b = ShelfBook.create(
  shelf_id: cagewould.id,
  book_id: calypso.id
)