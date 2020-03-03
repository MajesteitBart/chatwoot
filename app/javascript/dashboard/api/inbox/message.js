/* eslint no-console: 0 */
/* global axios, FormData */
import ApiClient from '../ApiClient';

class MessageApi extends ApiClient {
  constructor() {
    super('conversations');
  }

  create({ conversationId, message, private: isPrivate }) {
    return axios.post(`${this.url}/${conversationId}/messages`, {
      message,
      private: isPrivate,
    });
  }

  getPreviousMessages({ conversationId, before }) {
    return axios.get(`${this.url}/${conversationId}`, {
      params: { before },
    });
  }

  sendAttachment([conversationId, { file, file_type }]) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', file_type);
    return axios({
      method: 'post',
      url: `${this.url}/${conversationId}/messages`,
      data: formData,
    });
  }
}

export default new MessageApi();
