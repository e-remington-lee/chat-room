import os

import psycopg2
import sqlalchemy


def create_connection():
    return psycopg2.connect(
        host = os.environ['db_host'],
        database = os.environ['db_database_chatroom'],
        user = os.environ['db_username'],
        password = os.environ['db_password']
        )
    

def create_message(user_id, message):
    connect = create_connection()
    cursor = connect.cursor()

    cursor.execute("INSERT INTO messages (message, user_id) VALUES (%(message)s, %(user_id)s)", {"message": message, "user_id": user_id})
    
    connect.commit()
    cursor.close()
    connect.close()
    return None

def create_user(username):
    connect = create_connection()
    cursor = connect.cursor()

    cursor.execute("INSERT INTO users (username) VALUES (%(username)s)", {"username": username})
    connect.commit()

    cursor.execute("SELECT * FROM users WHERE username =%(username)s", {"username": username})
    row = cursor.fetchone()

    cursor.close()
    connect.close()
    return {'user_id': row[0], 'username': row[1], 'created_date': row[2]}

def get_all_messages():
    connect = create_connection()
    cursor = connect.cursor()

    select_all = 'select * from messages inner join users on messages.user_id = users.user_id order by messages.message_id asc'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    messages =[]
    for row in rows:
        messages.append({
        'message_id': row[0],
        'user': 
                {'user_id': row[3],
                'username': row[5]
        },
        'message': row[1], 
        'message_time': row[2]
        })

    cursor.close()
    connect.close()

    return messages

def find_specific_user():
    return None

def get_all_users():
    connect = create_connection()
    cursor = connect.cursor()

    select_all = 'select * from users'

    cursor.execute(select_all)
    rows = cursor.fetchall()

    users =[]
    for row in rows:
        users.append({
        'user_id': row[0],
        'username': row[1], 
        'timestamp': row[2]
        })

    cursor.close()
    connect.close()

    return users