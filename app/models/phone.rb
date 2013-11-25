class Phone < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :label, :phone
end
