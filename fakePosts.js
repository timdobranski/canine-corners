

const posts = [
  {
    type: 'warning',
    content: 'We saw a coyote while crossing the street at Blackthorne this evening just before sunset. Be careful when you go out for walks!',
    date: '2023-08-06',
    time: '6:00pm',
    author: 'Growl Gadot',
    id: 54,
    author_id: 3
  },
  {
    type: 'giveaway',
    content: `I have an old crate that I no longer need. It's 18x24 and comes with a pad. If anyone wants it, let me know! First to respond gets it.`,
    date: '2023-08-06',
    time: '6:00pm',
    author: 'Bark Wahlberg',
    id: 2,
    author_id: 5
  },
  {
    type: 'story',
    content: 'Today Aria learned squirrels can climb trees. She is not amused.',
    date: '2023-11-01',
    time: '10:00am',
    author: 'Aria',
    id: 1,
    img: '/images/aria-canine-corners.jpeg',
    author_id: 1
  },
  {
    type: 'story',
    content: 'Anyone have any good recommendations for a dog walker? I need someone to take Charlie out for a walk while I\'m at work.',
    date: '2023-11-01',
    time: '10:00am',
    author: 'Charles Barkley',
    id: 5,
    author_id: 6
  },
  {
    type: 'recipe',
    title: 'Gopher Giggles Dog Treats',
    description: `My dog's grandma used to make these treats for him when he was a puppy. He loved them so much that I had to get the recipe from her!`,
    img: '/images/gopher.png',
    ingredients:
    [`1 cup of 'Gopher Grain' (whole wheat flour)`,
    `1/2 cup of 'Tunneling Tapioca' (tapioca flour)`,
    `1/4 cup of 'Burrow Broth' (chicken or beef broth)`,
    `2 tablespoons of 'Underground Peanut Paste' (natural peanut butter)`,
    `1/3 cup of 'Digging Delight' (shredded carrots)`,
    `A pinch of 'Subterranean Spice' (cinnamon)`,
    `A few 'Gopher Gems' (blueberries or peas)`,
    `1 'Egg from the Earth' (a regular chicken egg)`
    ],
    directions:
    [`Preheat your oven to the warmth of a gopher's burrow (or 350°F for non-gopher homes).`,
    `In a large mixing bowl, combine 'Gopher Grain' and 'Tunneling Tapioca'.`,
    `Stir in the 'Burrow Broth' and 'Underground Peanut Paste' until the mixture feels like soft earth.`,
    `Add in the 'Digging Delight', 'Subterranean Spice', and 'Gopher Gems', mixing until it looks like a well-traveled gopher tunnel.`,
    `Crack in the 'Egg from the Earth' and mix until everything is combined into a mound of potential burrows.`,
    `Scoop out small amounts of the mixture onto a parchment-lined baking tray, shaping them into tiny gopher mounds.`,
    `Bake in the oven for about 20 minutes, or until the treats are as crisp as a gopher's morning routine.`,
    `Let the Gopher Giggles Dog Treats cool down in a gopher lounge area (or just a cooling rack).`,
    `Serve these amusing treats to your dog and watch them sniff and snuffle with glee, just like a gopher in a field!`
  ],
    date: '2023-05-02',
    time: '6:00pm',
    author: 'Anderson Pooper',
    id: 3,
    author_id: 2
  },
  { type: 'story', content: 'Today Aria made a new friend at the park!', date: '2023-08-10', time: '9:00am', author: 'Aria', id: 11, author_id: 1 },
  { type: 'warning', content: 'Beware of the broken gate at the dog park!', date: '2023-08-12', time: '11:00am', author: 'Paw McCartney', id: 13, author_id: 4 },
  { type: 'giveaway', content: 'Giving away a slightly used dog bed!', date: '2023-11-13', time: '12:00pm', author: 'Growl Gadot', id: 4, author_id: 3 },
  { type: 'story', content: 'Bark Wahlberg found a new favorite fetch toy!', date: '2023-11-14', time: '1:00pm', author: 'Bark Wahlberg', id: 15, author_id: 5 },
  { type: 'warning', content: 'Ticks spotted in the long grass area of our usual walk.', date: '2023-11-16', time: '3:00pm', author: 'Furrah Fawcett', id: 17, author_id: 7 },
  { type: 'giveaway', content: 'Extra leash and collar set free to a good home.', date: '2023-09-17', time: '4:00pm', author: 'Aria', id: 18, author_id: 1 },
  { type: 'story', content: 'Anderson Pooper just learned a new trick!', date: '2023-09-18', time: '5:00pm', author: 'Anderson Pooper', id: 19, author_id: 2 },
  { type: 'warning', content: 'Found a broken bottle near the dog park entrance.', date: '2023-09-20', time: '7:00pm', author: 'Growl Gadot', id: 21, author_id: 3 },
  { type: 'giveaway', content: 'Anyone need a dog raincoat? Barely used.', date: '2023-09-21', time: '8:00pm', author: 'Bark Wahlberg', id: 22, author_id: 5 },
  { type: 'story', content: 'Charles Barkley had a blast at the beach today!', date: '2023-08-22', time: '9:00am', author: 'Charles Barkley', id: 23, author_id: 6 },
  { type: 'warning', content: 'Loud construction noise near our favorite walking trail.', date: '2023-08-24', time: '11:00am', author: 'Aria', id: 25, author_id: 1 },
  { type: 'giveaway', content: 'I have some extra dog toys if anyone wants them.', date: '2023-07-25', time: '12:00pm', author: 'Anderson Pooper', id: 26, author_id: 2 },
  { type: 'story', content: 'Paw McCartney helped a lost kitten find its way home.', date: '2023-07-26', time: '1:00pm', author: 'Paw McCartney', id: 27, author_id: 4 },
  { type: 'warning', content: `There's a new dog in town that seems a bit aggressive.`, date: '2023-06-28', time: '3:00pm', author: 'Bark Wahlberg', id: 29, author_id: 5 },
  { type: 'giveaway', content: 'Found a dog ball while walking. Does it belong to anyone?', date: '2023-05-29', time: '4:00pm', author: 'Charles Barkley', id: 30, author_id: 6 },
  {
    type: 'recipe',
    title: 'Pupperoni Pizza Delight',
    ingredients: [
      `1 cup of 'Canine Crust' (whole wheat flour)`,
      `1/2 cup of 'Puppy Sauce' (tomato sauce)`,
      `1/4 cup of 'Cheesy Cheer' (shredded cheese)`,
      `1/2 cup of 'Barking Beef' (cooked ground beef)`,
      `1/4 cup of 'Pooch Pepperoni' (turkey pepperoni slices)`,
      `A sprinkle of 'Tail Wagging Oregano'`
    ],
    directions: [
      `Preheat your oven to a toasty doggy delight temperature (or 375°F).`,
      `Roll out the 'Canine Crust' on a baking sheet.`,
      `Spread the 'Puppy Sauce' evenly over the crust.`,
      `Sprinkle the 'Cheesy Cheer' on top of the sauce.`,
      `Add the 'Barking Beef' and 'Pooch Pepperoni' as toppings.`,
      `Garnish with 'Tail Wagging Oregano'.`,
      `Bake in the oven for 20-25 minutes until the edges are crispy and cheese is bubbly.`,
      `Allow to cool slightly before serving a slice to your furry friend!`
    ],
    date: '2023-08-11',
    time: '10:00am',
    author: 'Anderson Pooper',
    id: 32,
    author_id: 2
  },
  {
    type: 'recipe',
    title: 'Woofle with Maple Syrup',
    ingredients: [
      `2 cups of 'Bark Batter' (whole wheat flour)`,
      `1 cup of 'Mutt Milk' (almond milk or water)`,
      `1 'Canine Egg' (a regular chicken egg)`,
      `2 tablespoons of 'Golden Tail Syrup' (pure maple syrup)`,
      `1 teaspoon of 'Puppy Powder' (baking powder)`,
      `A dash of 'Snout Salt'`
    ],
    directions: [
      `Preheat your waffle iron to a cozy canine level.`,
      `In a bowl, whisk together the 'Bark Batter', 'Mutt Milk', and 'Canine Egg'.`,
      `Stir in the 'Golden Tail Syrup', 'Puppy Powder', and 'Snout Salt'.`,
      `Pour the mixture into the waffle iron and cook until golden brown.`,
      `Let the woofle cool down before drizzling a bit more 'Golden Tail Syrup' on top.`,
      `Serve to your pup for a drool-worthy breakfast treat!`
    ],
    date: '2023-08-15',
    time: '2:00pm',
    author: 'Charles Barkley',
    id: 36,
    author_id: 6
  },
  {
    type: 'recipe',
    title: 'Bark-B-Q Ribs Feast',
    ingredients: [
      `1 rack of 'Canine Ribs' (baby back ribs)`,
      `1/2 cup of 'Puppy-Q Sauce' (low-sodium BBQ sauce)`,
      `1 tablespoon of 'Doggy Dry Rub' (mix of paprika, garlic powder, and black pepper)`,
      `1 'Tail Twist' of honey`,
      `A splash of 'Bark Broth' (low-sodium chicken broth)`
    ],
    directions: [
      `Preheat your grill or oven to a sizzling doggy day (or 300°F).`,
      `Rub the 'Doggy Dry Rub' all over the 'Canine Ribs'.`,
      `Place the ribs on the grill or in the oven, covered, for about 2 hours.`,
      `In a bowl, mix the 'Puppy-Q Sauce', honey, and 'Bark Broth'.`,
      `Baste the ribs with the sauce mixture in the last 30 minutes of cooking.`,
      `Let the ribs cool, then cut into dog-friendly sizes before serving.`,
      `Watch your pooch enjoy this tail-wagging Bark-B-Q feast!`
    ],
    date: '2023-08-19',
    time: '6:00pm',
    author: 'Paw McCartney',
    id: 40,
    author_id: 4
  },
  {
    type: 'recipe',
    title: 'Salmon and Sweet Potato Dog Treats',
    ingredients: [
      `1 cup of 'Swimming Salmon' (cooked and flaked salmon)`,
      `1/2 cup of 'Pooch Potato' (mashed sweet potato)`,
      `1 'Furry Friend Egg' (a regular chicken egg)`,
      `2 cups of 'Pup Flour' (oat flour)`,
      `A sprinkle of 'Tail Wagging Parsley'`
    ],
    directions: [
      `Preheat your oven to a fishy fun level (or 350°F).`,
      `In a bowl, mix the 'Swimming Salmon', 'Pooch Potato', and 'Furry Friend Egg'.`,
      `Gradually add the 'Pup Flour' to form a dough.`,
      `Roll out the dough and cut into paw-shaped treats.`,
      `Place on a baking sheet and sprinkle with 'Tail Wagging Parsley'.`,
      `Bake for about 20 minutes until the treats are firm.`,
      `Let them cool before treating your dog to this seafood delight!`
    ],
    date: '2023-08-23',
    time: '10:00am',
    author: 'Furrah Fawcett',
    id: 44,
    author_id: 7
  }
]

export default posts;