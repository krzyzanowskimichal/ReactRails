require 'rest-client'

describe 'get data' do
  
    it 'should return all items from 3rd party API' do 
      result = RestClient.get 'http://127.0.0.1:5000/motorcycle', :content_type => :json, :accept => :json
      expect(result.code).to eq(200)
    end
  
  end


describe 'post item' do

    it 'should add new item' do
        RestClient::Request.execute(
            method: :post,
            url: 'http://127.0.0.1:5000/motorcycle',
            payload: {name: "test item", description: "test description", price: 999, photoURL: "testURL"},
            headers: {"Content-Type" => "application/json"}
        )
    end

end