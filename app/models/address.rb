class Address < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :city, :country, :label, :postal_code, :region, :street1, :street2
  
  validates :label, :presence => true,
                    :length => { :minimum => 2 }
end
