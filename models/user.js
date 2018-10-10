var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    trips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }],
    favtrips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }]

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);