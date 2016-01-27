require 'spec_helper'

describe Api::OrdersController, :type => :controller do
  let(:user) { FactoryGirl.create :user } # factory girl
  let(:order) { FactoryGirl.create :order }
  context 'user is not logged in' do
    before do
      controller.stub(:current_user).and_return(nil)
    end

    describe 'GET new' do
      it 'restrict unauthorized users creating orders' do
        get :create
        expect(response.status).to eq(401)
      end
    end

    describe 'PUT update' do
      it 'restrict unauthorized users updating orders' do
        put :update, id: order.id
        expect(response.status).to eq(401)
      end
    end

    describe 'GET show' do
      it 'allow unauthorized users showing orders' do
        get :show, id: order.id
        expect(response.status).to eq(200)
      end
    end

    describe 'GET index' do
      it 'allow unauthorized users showing orders' do
        get :index
        expect(response.status).to eq(200)
      end
    end
  end

  context 'GET #index' do
    it 'is successful' do
      get :index
      response.should be_success
    end
  end

  context 'user is logged in' do
    before do
      controller.stub(:current_user).and_return(user)
    end

    it 'retrieves a specific message' do
      order = FactoryGirl.create(:order)
      get :show, id: order.id
      json = JSON.parse(response.body)
      # test for the 200 status-code
      expect(response).to be_success

      # check that the message attributes are the same.
      expect(json['finalized']).to eq(false)

      # ensure that private attributes aren't serialized
      expect(json['private_attr']).to eq(nil)
  	end

    it 'check if correct data is returned' do
    FactoryGirl.create(:order)

    get 'index'

    expect(response).to be_success
    json = JSON.parse(response.body)
    expect(json.last.length).to eq(5)
  end

    describe 'GET new' do
      it 'allow authorized users creating orders' do
        get :create
        expect(response.status).to eq(200)
      end
    end

    describe 'PUT update' do
      it 'restrict finalizing empty orders' do
        put :update, {id: order.id, finalized: true}
        expect(response.status).to eq(422)
      end
    end

    describe 'GET show' do
      it 'allow authorized users showing orders' do
        get :show, id: order.id
        expect(response.status).to eq(200)
      end
    end

    describe 'GET index' do
      it 'allow authorized users showing orders' do
        get :index
        expect(response.status).to eq(200)
      end
    end
  end

  context 'GET #index' do
    it "is successful" do
      get :index
      response.should be_success
    end
  end
end
