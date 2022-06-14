const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  leaderName: { type: String, trim: true },
  leaderSector:  {type:String, trim: true},
  leaderBio: { type: String, trim: true },
  leaderImgPath: { type: String, trim:true},
  leaderRBLink: {type: String, trim:true},
  leaderStoryLink: {type: String, trim:true},
  useTwitterImg : {type: Boolean},
  twitter: {id: { type: String, trim: true, unique: true },
            handle:{type: String, trim: true, unique: true}, 
            followers: { type: Number },
            ImgPath: {type: String, trim: true} },
  booksReco: [{
              id: {type: String, trim: true},
              ISBN13: {type: String, trim: true},
              ISBN10: {type: String, trim: true},
              ASIN: {type: String, trim: true}
            }],
  clickBy: [String],
  sortCount: {type: Number},
  createdBy: {type: String, trim: true},
  updatedBy: {type: String, trim: true}
},{
  timestamps: true,
  collection: 'leaders'
});

module.exports = mongoose.model("leader", leaderSchema);
