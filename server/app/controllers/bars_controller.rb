require 'rest-client'

class BarsController < ApplicationController
    def index
        endpoint = 'https://api.yelp.com/v3/businesses/search?location=NYC&categories=bars&limit=50&price=1,2,3&sort_by=rating'
        config = { :Authorization => 'Bearer ' + ENV['YELP_API_KEY'] }
        
        res = RestClient.get(endpoint, config)
        render json: res
    end
end