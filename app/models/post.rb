class Post < ApplicationRecord
  mount_uploader :image, PostImageUploader
  profanity_filter :title, :body

  validates :title, presence: true, length: { minimum: 3 }
  validates :body, presence: true, length: { in: 10..400 }

  def to_param
    id.to_s + "-" + title.parameterize
  end

end
