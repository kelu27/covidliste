source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby ::File.read(::File.expand_path(".ruby-version", __dir__))

gem "rails", "~> 6.1.1"

gem "bootsnap", ">= 1.4.4", require: false
gem "jbuilder", "~> 2.7"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"
gem "webpacker", "~> 5.0"

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

gem "appsignal"
gem "autoprefixer-rails"
gem "blazer"
gem "blind_index"
gem "bootstrap", "~> 5.0.0.beta2"
gem "devise"
gem "flipper"
gem "flipper-redis"
gem "flipper-ui"
gem "font-awesome-sass"
gem "geocoder"
gem "haml-rails", "~> 2.0"
gem "httparty"
gem "letter_opener", "~> 1.7"
gem "letter_opener_web", "~> 1.4"
gem "lockbox"
gem "pagy"
gem "pg_query", ">= 0.9.0"
gem "pg_search"
gem "pghero"
gem "rolify"
gem "sidekiq"
gem "simple_form"
gem "spring"
gem "standard"
gem "twilio-ruby", "~> 5.50"
gem "valid_email"
gem "lefthook"

group :development, :test do
  gem "dotenv-rails", "2.7.6"
  gem "faker", git: "https://github.com/faker-ruby/faker.git", branch: "master"
  gem "pry-byebug"
  gem "pry-rails"
end

group :development do
  gem "better_errors"
  gem "binding_of_caller"
  gem "brakeman"
  gem "bullet"
  gem "listen", "~> 3.3"
  gem "rack-mini-profiler", "~> 2.0"
  gem "web-console", ">= 4.1.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "codecov", require: false
  gem "cuprite"
  gem "database_cleaner-active_record"
  gem "factory_bot_rails"
  gem "rspec-rails", "~> 4.0.0"
  gem "rspec-sidekiq"
  gem "rspec_junit_formatter"
  gem "selenium-webdriver"
  gem "spring-commands-rspec", "~> 1.0"
  gem "webmock"
end
