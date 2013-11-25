class Phone < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :label, :phone
  
  validates :label, :presence => true,
                    :length => { :minimum => 2 }
end
