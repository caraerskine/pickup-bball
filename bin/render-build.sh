#!/usr/bin/env bash
# exit on error
set -o errexit

# builds the front end code
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# builds the back end code
bundle install
# bundle exec rake db:reset DISABLE_DATABASE_ENVIRONMENT_CHECK=1
# bundle exec rake db:seed # if you have seed data, run this command for the initial deploy only


# bundle exec rake db:reset #used to be migrate line 12
# commented out 12 and 13 w igor and will not mess w tables
# if you do make changes, then you want to migrate