class Post < ApplicationRecord
  mount_uploader :image, PostImageUploader

  validates :title, presence: true, length: { minimum: 3 }
  validates :body, presence: true, length: { in: 10..400 }

end
