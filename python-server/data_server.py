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
user_databse = 'users'
user_id = 7
username = 'Derek'
cursor = connect.cursor()

cursor.execute(f"INSERT INTO {user_databse} VALUES ({user_id}, '{username}, {timestamp}')")

select_all = f'select * from {user_databse}'

cursor.execute(select_all)
rows = cursor.fetchall()

for r in rows:
    print(r)

# connect.commit()
cursor.close()
connect.close()