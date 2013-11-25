class Address < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :city, :country, :label, :postal_code, :region, :street1, :street2
  
  validates :label, :presence => true,
                    :length => { :minimum => 2 }
                    
  def full_address(html)
    if html
      "#{street1} #{street2}<br/>#{city} #{region}<br/>#{postal_code} #{country}".html_safe
    else
      "#{street1} #{street2} #{city} #{region} #{postal_code} #{country}"
    end
  end
  
end
