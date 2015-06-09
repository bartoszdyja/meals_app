require 'spec_helper'

describe Item do

	it { should belong_to :user }
	it { should belong_to :order }

	describe 'validattions' do
	  it { should validate_presence_of(:name) }
	  it { should validate_presence_of(:price) }
	  it { should validate_presence_of(:user_id) }
	  it { should validate_presence_of(:order_id) }

	describe '#price' do
      let(:item) { FactoryGirl.build(:item, price: 12.345) }

      it 'is limited to two decimal places' do
        expect(item).to_not be_valid
      end
    end
	end
end
