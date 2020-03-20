import MessageFormatter from '../MessageFormatter';

describe('#MessageFormatter', () => {
  describe('content with links', () => {
    it('should format correctly', () => {
      const message =
        'Convert Chat is based on Chatwoot, an opensource tool\nSee more at https://www.github.com/chatwoot';
      expect(new MessageFormatter(message).formattedMessage).toEqual(
        'Convert Chat is based on Chatwoot, an opensource tool<br>See more at https://www.github.com/chatwoot'
      );
    });
  });
});
