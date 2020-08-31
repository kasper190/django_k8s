"""
Simple python script that will wait on the availability of a PostgreSQL database.
"""

import os
import socket
import time


db_host = os.environ.get('POSTGRES_SERVICE_HOST', 'postgres')
port = int(os.environ.get('POSTGRES_SERVICE_PORT', 5432))

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
while True:
    try:
        s.connect((db_host, port))
        s.close()
        break
    except socket.error as ex:
        time.sleep(0.1)
