class Appointment < ApplicationRecord
  validates :title, presence: true, allow_blank: false
end
