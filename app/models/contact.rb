class Contact < ActiveRecord::Base
  attr_accessible :company, :first_name, :job_title, :last_name, :title, :emails_attributes, :phones_attributes, :addresses_attributes
  
  validates :first_name, :last_name, presence: true, length: { minimum: 2 }
  
  has_many :emails
  has_many :phones
  has_many :addresses
  has_many :notes, :dependent => :destroy
  
  accepts_nested_attributes_for :emails, :allow_destroy => :true,
    :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }
  accepts_nested_attributes_for :phones, :allow_destroy => :true,
    :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }
  accepts_nested_attributes_for :addresses, :allow_destroy => :true,
    :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }
  
  default_scope { order("first_name ASC") }
  
  def self.search(search)
    if search
      where('lower(first_name) LIKE ? 
	            OR lower(last_name) LIKE ? 
              OR lower(job_title) LIKE ?
              OR lower(company) LIKE ?',
              "%#{search}%".downcase,
              "%#{search}%".downcase,
              "%#{search}%".downcase,
              "%#{search}%".downcase)
    else
      scoped
    end
  end
  
  def full_name(with_title=false)
    if with_title
      "#{first_name} #{last_name}"
    else
      "#{title} #{first_name} #{last_name}"
    end
  end
  
  def job
    "#{job_title} at #{company}"
  end
end
