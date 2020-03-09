require 'rails_helper'

RSpec.describe 'Conversation Messages API', type: :request do
  let(:account) { create(:account) }

  describe 'POST /api/v1/conversations/<id>/messages' do
    let(:conversation) { create(:conversation, account: account) }

    context 'when it is an unauthenticated user' do
      it 'returns unauthorized' do
        post api_v1_conversation_messages_url(conversation.display_id)

        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'when it is an authenticated user' do
      let(:agent) { create(:user, account: account, role: :agent) }

      it 'creates a new outgoing message' do
        params = { message: 'test-message', private: true }

        post api_v1_conversation_messages_url(conversation.display_id),
             params: params,
             headers: agent.create_new_auth_token,
             as: :json

        expect(response).to have_http_status(:success)
        expect(conversation.messages.count).to eq(1)
        expect(conversation.messages.first.content).to eq(params[:message])
      end

      it 'creates a new outgoing message with attachment' do
        file = fixture_file_upload(Rails.root.join('spec/assets/avatar.png'), 'image/png')
        params = { message: 'test-message', attachment: { file: file } }

        post api_v1_conversation_messages_url(conversation.display_id),
             params: params,
             headers: agent.create_new_auth_token,
             as: :json
        expect(response).to have_http_status(:success)
        expect(conversation.messages.last.attachment.count).to eq(1)
      end
    end
  end
end
