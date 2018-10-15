const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/travelHostel"
);

const tripSeed = [
    {
        user: "",
        title: "A trip to Chicago",
        city: "Chicago, IL, United States",
        duration: "7",
        season: "",
        food: "",
        accomodations: "Hotel",
        transportations: "",
        activities: "",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "Joe",
        title: "Waffles in Amsterdam",
        city: "Amsterdam, NH, Netherlands",
        duration: "5",
        season: "Summer",
        food: "Stroopwafel",
        accomodations: "Hostel",
        transportations: "NS",
        activities: "=]",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "Charlie",
        title: "All the seafood",
        city: "Amsterdam, NH, Netherlands",
        duration: "4",
        season: "Summer",
        food: "Pickled Herring",
        accomodations: "Hotel",
        transportations: "NS",
        activities: "=]",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "Mike",
        title: "5 days of pancakes",
        city: "Amsterdam, NH, Netherlands",
        duration: "5",
        season: "Summer",
        food: "Dutch Pancake",
        accomodations: "Hostel",
        transportations: "NS",
        activities: "=]",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "Dominic",
        title: "My trip to China",
        city: "Beijing, BJ, China",
        duration: "5",
        season: "Winter",
        food: "Sichuan-style chilli-spiked crayfish",
        accomodations: "Hotel",
        transportations: "East China Air",
        activities: "Business Trip",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "Chris",
        title: "Winter in Beijing",
        city: "Beijing, BJ, China",
        duration: "9",
        season: "Winter",
        food: "Mongolian Lamb",
        accomodations: "Ait Bnb",
        transportations: "Emerites",
        activities: "Business Trip",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "sbaig",
        title: "Maine Lobster",
        city: "Portland, ME, United States",
        duration: "4",
        season: "Fall",
        food: "Lobster",
        accomodations: "Air Bnb",
        transportations: "Driving my Nissan Murano!",
        activities: "Lol it's Portland, Maine, not Portland, Oregon! But it's so pretty here in the fall! And the lobster is delicious!",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "joe",
        title: "All the loster!",
        city: "Portland, ME, United States",
        duration: "4",
        season: "Fall",
        food: "Lobster",
        accomodations: "Air Bnb",
        transportations: "Drive",
        activities: "Aint nothin' prettier than driving through the Appalachias in the fall.",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "john",
        title: "The Chicago Dog",
        city: "Chicago, IL, United States",
        duration: "7",
        season: "Fall",
        food: "Hot Dawgs with NO ketchup",
        accomodations: "Hotel",
        transportations: "The el",
        activities: "This is my f*** city!!!",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
    {
        user: "stacy",
        title: "The worst pizza in the US",
        city: "Chicago, IL, United States",
        duration: "3",
        season: "Winter",
        food: "Illuminati's or somthing? Idr",
        accomodations: "Air bnb",
        transportations: "Uber",
        activities: "It either snowed, rained, or was too cold to do anything. I just wanted to stay instide the whole time!",
        photo: "https://bulma.io/images/placeholders/128x128.png",
        date: new Date(Date.now())
    },
];

// Sometimes the below code has .remove({}) after db.trip; I think this clears out the database everytime there is a connection. I am not including it for now because I don't want data to be erased
db.Trip
    .remove({})
    .then(() => db.Trip.collection.insertMany(tripSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })