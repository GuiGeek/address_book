class Address < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :city, :country, :label, :postal_code, :region, :street1, :street2
end
