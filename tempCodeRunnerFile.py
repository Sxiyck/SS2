client = MongoClient('mongodb://localhost:27017/')
db = client['chatbotDatabase']
messages = db['messages']