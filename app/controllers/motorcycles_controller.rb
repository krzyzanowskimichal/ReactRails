class MotorcyclesController < ApplicationController
    skip_before_action :verify_authenticity_token

    require 'rest-client'

    def get_data

        url = "http://127.0.0.1:5000/motorcycle"
        response = RestClient.get(url)
        render json: response

    end

    def post_item
				
        item_name = params[:name]  
        item_description = params[:description]  
        item_price = params[:price]  
        item_photoURL = params[:photoURL]  
        
        RestClient::Request.execute(
            method: :post,
            url: 'http://127.0.0.1:5000/motorcycle',
            payload: {name: item_name, description: item_description, price: item_price, photoURL: item_photoURL},
            headers: {"Content-Type" => "application/json"}
        )

    end

    def delete_item

        itemId = params[:id]

        RestClient.delete "http://127.0.0.1:5000/motorcycle/#{itemId}"

    end


end
