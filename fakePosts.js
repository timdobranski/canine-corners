

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

  { type: 'pet News/Event',
    content: 'The annual dog show is coming up! Get your tickets now!',
    link: 'https://www.tmj4.com/news/local-news/meet-stache-the-sealyham-terrier-that-won-this-years-national-dog-show',
    image: 'https://cdn.theatlantic.com/media/img/photo/2022/06/photos-2022-westminster-dog-show/a01_1241383455-1/original.jpg',
    date: '2023-05-30',
    time: '5:00pm',
    author: 'Furrah Fawcett',
    id: 32,
    author_id: 7
  },
  {
    type: 'pet News/Event',
    content: 'ASPCA partners with Orange County Animal Care to relocate over 100 shelter dogs after the Tustin Hangar Fire.',
    link: 'https://www.aspca.org/about-us/press-releases/aspca-partners-orange-county-animal-care-relocate-more-100-shelter-dogs',
    image: 'https://www.holidayhousepetresort.com/wp-content/uploads/2018/04/17309155_10154656967826645_6224115650834524751_n.jpg',
    date: '2023-05-29',
    time: '5:00pm',
    author: 'ASPCA News',
    id: 33,
    author_id: 8
  },

  {
    type: 'pet News/Event',
    content: 'Mack® Trucks partners with the ASPCA for the second year to support animals in need on GivingTuesday.',
    link: 'https://www.aspca.org/about-us/press-releases/mack-trucks-partners-aspca-second-year-make-difference-animals-need',
    image: 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/08/happy-dog-yellow-flowers-023221.jpg',
    date: '2023-11-22',
    time: '5:00pm',
    author: 'ASPCA News',
    id: 34,
    author_id: 8
  },

  {
    type: 'pet News/event',
    content: '10 inspiring achievements for animals made possible this year with your help.',
    link: 'https://www.aspca.org/about-us/press-releases/10-inspiring-things-you-helped-make-possible-animals-year',
    image: 'https://images.squarespace-cdn.com/content/v1/61f07b5f03d9df72ad415962/ca05fda1-9499-4732-baf6-03548311ff0f/Smiling+Dog+With+Floppy+Ears+Laying+In+The+Grass.jpg',
    date: '2023-11-21',
    time: '5:00pm',
    author: 'ASPCA News',
    id: 35,
    author_id: 8
  },

  {
    type: 'pet News/Event',
    content: 'Discover Lucy’s journey from being abandoned to adored and loved.',
    link: 'https://www.aspca.org/about-us/press-releases/lucys-journey-abandoned-adored',
    image: 'https://images.squarespace-cdn.com/content/v1/61f07b5f03d9df72ad415962/ca05fda1-9499-4732-baf6-03548311ff0f/Smiling+Dog+With+Floppy+Ears+Laying+In+The+Grass.jpg',
    date: '2023-11-21',
    time: '5:00pm',
    author: 'ASPCA News',
    id: 36,
    author_id: 8
  }





]

export default posts;