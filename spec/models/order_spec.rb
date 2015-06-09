require 'spec_helper'

describe Order do

	it { should have_many(:items) }	
	it { should have_many(:users) }	

  it 'should initialize not finalized' do
      order = FactoryGirl.create(:order)
      order.finalized.should == false
    end

  it 'should initialize not ordered' do
      order = FactoryGirl.create(:order)
      order.ordered.should == false
    end

  it 'should initialize not delivered' do
      order = FactoryGirl.create(:order)
      order.delivered.should == false
  end
end