import psycopg2
import sqlalchemy
import datetime

connect = psycopg2.connect(
        host = "localhost",
        database = "Chat_room",
        user = "postgres",
        password = "Bob!3489")

#how was I supposed to know the host, I just guessed at localhost
user_database = 'users'
message_database = 'messages'

cursor = connect.cursor()


def create_message():
    return None

def create_user():
    return None

def get_all_messages():
    select_all = f'select * from {message_database}'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    messages =[]
    for row in rows:
        messages.append({'id': row[0], 'user': {'user_id': row[4], 'username': row[1]}, 'message': row[2]})

    message_list = {
        'message_list': messages
    }
    # cursor.close()
    # connect.close()

    print(message_list['message_list'])
    return message_list['message_list']




def find_specific_user():
    return None

def get_all_users():
    select_all = f'select * from {user_database}'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    users =[]
    for row in rows:
        users.append({'id': row[0], 'username': row[1], 'timestamp': row[2]})

    user_list = {
        'user_list': users
    }

    cursor.close()
    connect.close()

    print(user_list['user_list'])
    return user_list['user_list']


def main ():
    cursor.execute(f"INSERT INTO users VALUES (4, 'Remington')")
    connect.commit()
    cursor.close()
    connect.close()

# if __name__ =='__main__':
#     main()

get_all_messages()
# get_all_users()