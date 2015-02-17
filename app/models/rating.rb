class Rating
  include MongoMapper::Document
  
  key :value, Integer, :required => true
  key :description, String
  
  # key :username, String
 #
 #  key :user_id, ObjectId
 
  timestamps!
  
  # belongs_to :user
  belongs_to :restaurant
  
  validates_presence_of :value, :restaurant_id
end