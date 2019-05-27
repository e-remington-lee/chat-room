import chat_server
import unittest
from chat_server import get_post_messages

class Test_Requests(unittest.TestCase):

    def setUp(self):
        chat_server.app.testing = True
        self.app = chat_server.app.test_client()

    def test_get_messages(self):
        result = self.app.get('/messages')
        # self.assertEqual(type(result), type([]))
        self.assertIsNotNone(result)


if __name__ == '__main__':
    unittest.main() 