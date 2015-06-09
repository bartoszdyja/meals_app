require 'spec_helper'

describe Api::ItemsController, :type => :controller do

let(:user) { FactoryGirl.create :user }
let(:order) { FactoryGirl.create :order }  
let(:item) { FactoryGirl.create :item }


context 'user is logged in' do
    before do
      controller.stub(:current_user).and_return(user)
    end

    it 'retrieves a specific item' do
      message = FactoryGirl.create(:item)    
      post :create, item: {id: item.id, name: item.name, price: item.price, order_id: item.order_id}

      json = JSON.parse(response.body)
     
      expect(response).to be_success
      expect(json['name']).to eq(item.name)
      expect(json['price']).to eq(item.price)
    end

  end



  context 'user is not logged in' do
    before do
      controller.stub(:current_user).and_return(nil)
    end

    describe 'GET new' do
      it 'restrict unauthorized users creating items' do
        get :create
        expect(response.status).to eq(401)
      end
    end

  end

end