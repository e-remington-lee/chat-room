import psycopg2
import sqlalchemy
import datetime

#how was I supposed to know the host, I just guessed at localhost
user_database = 'users'
message_database = 'messages'

def create_connection():
    return psycopg2.connect(
        host = "localhost",
        database = "Chat_room",
        user = "postgres",
        password = "Bob!3489")


def create_message(user_id, message):
    connect = create_connection()
    cursor = connect.cursor()

    cursor.execute(f'''INSERT INTO messages (message, user_id) VALUES ('{message}', {user_id})''')
    

    connect.commit()
    cursor.close()
    connect.close()
    return None

def create_user(username):
    connect = create_connection()
    cursor = connect.cursor()

    cursor.execute(f"INSERT INTO users (username) VALUES ('{username}')")
    connect.commit()

    cursor.execute(f"SELECT * FROM users WHERE username ='{username}'")
    row = cursor.fetchone()

    cursor.close()
    connect.close()
    return {'user_id': row[0], 'username': row[1], 'created_date': row[2]}

def get_all_messages():
    connect = create_connection()
    cursor = connect.cursor()

    select_all = f'select * from messages inner join users on messages.user_id = users.user_id order by messages.message_id asc'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    messages =[]
    for row in rows:
        messages.append({'message_id': row[0], 'user': {'user_id': row[3], 'username': row[5]}, 'message': row[1]})

    message_list = {
        'message_list': messages
    }
    cursor.close()
    connect.close()

    return message_list['message_list']

def find_specific_user():
    return None

def get_all_users():
    connect = create_connection()
    cursor = connect.cursor()

    select_all = f'select * from {user_database}'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    users =[]
    for row in rows:
        users.append({'user_id': row[0], 'username': row[1], 'timestamp': row[2]})

    user_list = {
        'user_list': users
    }

    cursor.close()
    connect.close()

    return user_list['user_list']


# def main ():
#     cursor.execute(f"INSERT INTO users VALUES (4, 'Remington')")
#     connect.commit()
#     cursor.close()
#     connect.close()

# if __name__ =='__main__':
#     main()

get_all_messages()
get_all_users()