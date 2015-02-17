class Restaurant
  include MongoMapper::Document
  #migrations portion
  key :name, String, :required => true
  key :description, String
  key :location, String
  
  timestamps!
  
  many :ratings
end