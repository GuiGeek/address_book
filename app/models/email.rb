class Email < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :email, :label
  
  validates :label, :presence => true,
                    :length => { :minimum => 2 }
end
