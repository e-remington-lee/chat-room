import os
import sys
sys.path.append(os.getcwd())
from python-server.chat_server import socketio
print(sys.path)

if __name__ == '__main__':
    socketio.run(app)
