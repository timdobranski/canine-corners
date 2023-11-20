const dogs = [
  {
  name: 'Aria',
  img: '/images/aria-profile-pic.jpeg',
  bio: 'Aria is super friendly, but she gets anxious around loud noises and bigger dogs. She loves to play with other dogs as long as they\'re her size. She doesn\'t fetch, but she loves chewtoys.',
  owner: [{name: 'Tim Dobranski', phone: '619-820-6213', email: 'timdobranski@gmail.com'}],
  age: 5,
  breed: 'Pomsky',
  id: 1,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
{
  name: 'Anderson Pooper',
  img: '/images/woof-profile-pic.jpeg',
  bio: `  Andy is a curious and adventurous little beagle who loves to sniff out new friends. He's always up for a game of fetch and enjoys long naps in the sun.`,
  owner: [{name: 'Sarah Jenkins', phone: '619-555-1234', email: 'sarahjenkins@gmail.com'}],
  age: 3,
  breed: 'Beagle',
  id: 2,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
{
  name: 'Paw McCartney',
  img: '/images/paw-profile-pic.jpeg',
  bio: 'Paw is a loyal and protective Rottweiler with a heart of gold. He enjoys leisurely walks and is incredibly gentle with his family members.',
  owner: [{name: 'Linda Gomez', phone: '619-555-6991', email: 'lindagomez31243542@gmail.com'}],
  age: 6,
  breed: 'Rottweiler',
  id: 4,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
{
  name: 'Growl Gadot',
  img: '/images/charlie-profile-pic.png',
  bio: 'Growl is a charming and energetic Corgi with a love for long walks and chasing squirrels. She has a friendly disposition and enjoys being the center of attention.',
  owner: [{name: 'Emma Brown', phone: '619-555-4637', email: 'emmabrown542543@gmail.com'}],
  age: 2,
  breed: 'Corgi',
  id: 3,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
{
  name: 'Bark Wahlberg',
  img: '/images/bark-profile-pic.png',
  bio: 'Bark is a gentle giant with a calm demeanor. As a Mastiff, he loves lounging around the house but also enjoys leisurely strolls around the neighborhood.',
  owner: [{name: 'Natalie Davis', phone: '619-555-8117', email: 'nataliedavis343255786@gmail.com'}],
  age: 5,
  breed: 'Mastiff',
  id: 5,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
{
  name: 'Charles Barkley',
  img: '/images/mutt-profile-pic.png',
  bio: 'Charlie is a friendly and sociable Oodle known for his curly fur and love of adventures. He enjoys outdoor activities and is always ready for a game of fetch.',
  owner: [{name: 'Alice Martin', phone: '619-555-4871', email: 'alicemartin54365675@gmail.com'}],
  age: 3,
  breed: 'Poodle Mix',
  id: 6,
  favorite_places: ["Balboa Park", "The Barking Lot", "Mount Sniffmore"],
  favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
  schedule: {
    Monday: {"time": "10:00 AM", "duration": "1 hour"},
    Tuesday: null,
    Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
    Thursday: null,
    Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
    Saturday: {"time": "9:00 AM", "duration": "2 hours"},
    Sunday: null
  },
  favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
},
  {
    name: 'Furrah Fawcett',
    img: '/images/furrah-profile-pic.png',
    bio: `Furrah is a strong and majestic Malamute with a love for snowy adventures and hikes. He's friendly, intelligent, and enjoys being part of a pack.`,
    owner: [{name: 'Henry Johnson', phone: '619-555-5498', email: 'henryjohnson1342467@gmail.com'}],
    age: 4,
    breed: 'Alaskan Malamute',
    id: 7,
    favorite_places: ["The Barking Lot", "Mount Sniffmore", "Waggy Woods"],
    favorite_foods: ["Pupperoni Pizza", "Woofle with Maple Syrup", "Bark-B-Q Ribs"],
    schedule: {
      Monday: {"time": "10:00 AM", "duration": "1 hour"},
      Tuesday: null,
      Wednesday: {"time": "2:00 PM", "duration": "2 hours"},
      Thursday: null,
      Friday: {"time": "4:00 PM", "duration": "1.5 hours"},
      Saturday: {"time": "9:00 AM", "duration": "2 hours"},
      Sunday: null
    },
    favorite_activities: ["Fetch", "Tug of War", "Hide and Seek"]
    }
]

export default dogs;