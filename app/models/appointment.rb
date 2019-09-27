# frozen_string_literal: true

class Appointment < ApplicationRecord
  validates_presence_of :title, :appt_time
  validates :title, presence: true, allow_blank: false

  belongs_to :user
end
