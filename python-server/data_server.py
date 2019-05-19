import psycopg2
import sqlalchemy
import datetime

print(datetime.datetime.now())

connect = psycopg2.connect(
        host = "localhost",
        database = "Chat_room",
        user = "postgres",
        password = "Bob!3489")

#how was I supposed to know the host, I just guessed at localhost
timestamp = datetime.datetime.now()
user_databse = 'messages'
user_id = 7
username = 'Dr. E'
cursor = connect.cursor()

def create_message():
    return None

def create_user():
    return None

def get_all_messages():
    return None

def find_specific_user():
    return None

def get_all_users():
    return None

# cursor.execute(f"INSERT INTO {user_databse} VALUES ({user_id}, '{username}')")

select_all = f'select * from {user_databse}'

cursor.execute(select_all)
rows = cursor.fetchall()

messages =[]
for row in rows:
    messages.append({'id': row[0], 'username': row[1], 'message': row[3]})

message_list = {
    'message_list': messages
}

print(message_list['message_list'])
# connect.commit()
cursor.close()
connect.close()