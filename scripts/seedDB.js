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
        photo: "https://www.enjoyillinois.com/assets/Uploads/CHICAGO-RIVER-FACEBOOK.jpg",
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
        photo: "https://www.iamsterdam.com/media/canals-and-cityscapes/v-c-planyourtrip-merijn-roubroeks.jpg?as=false&h=338&w=600&iar=true",
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
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg",
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
        photo: "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-netherlands.jpg?itok=06hB8z3i",
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
        photo: "https://www.thoughtco.com/thmb/xDampLXhoBehZTbr7qQXv6q7U00=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-871980162-5b61d35646e0fb0050498370.jpg",
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
        photo: "https://nouvelles.umontreal.ca/fileadmin/_processed_/csm_20180124_pekin-chine_35a2571e88.jpg",
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
        photo: "https://moneyinc.com/wp-content/uploads/2018/08/MIP-AERIAL-MOUNT-WASHINGTON-AND-PORTLAND-ME-3490-XL-750x500.jpg",
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
        photo: "https://wolfcoveinn.com/wp-content/uploads/Old-Port-Portland-Maine-800x533.jpg",
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
        photo: "https://d3qi0qp55mx5f5.cloudfront.net/www/i/homepage/spotlight/urban-chicago-spotlight.jpg?mtime=1473347326",
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
        photo: "http://www.trbimg.com/img-5a3d3316/turbine/ct-edit-amazon-chicago-rank-edit-20171206",
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