import mongoose from 'mongoose'

export {
  Profile
}

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  followedBy: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)