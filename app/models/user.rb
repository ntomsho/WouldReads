class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: {minimum: 6}, allow: nil

  after_initialize :ensure_session_token
  attr_reader :password

      #ASSOCIATIONS HERE#

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by({username: username})
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