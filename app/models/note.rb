class Note < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :note, :contact
end
