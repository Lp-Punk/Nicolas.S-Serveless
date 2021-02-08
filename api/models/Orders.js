const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const Orders = mongoose.model('Orders', new Schema({
  meal_id:{type: Schema.Types.ObjectId, ref: 'Meal'},
  User_id: String
}))


module.exports = Orders;