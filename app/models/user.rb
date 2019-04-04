class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :shelves,
    foreign_key: :user_id,
    class_name: :Shelf

  has_many :authored_reviews,
    foreign_key: :user_id,
    class_name: :Review

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by({email: email})
    return nil unless user && user.is_password(password)
    user
  end

  def is_password(password)
    bcrypt_password = BCrypt::Password.new(password_digest)
    bcrypt_password.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end