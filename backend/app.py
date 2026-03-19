from flask import Flask
from flask_cors import CORS
from database.db import db
import config
from routes.task_routes import task_bp

app = Flask(__name__)
CORS(app)
app.config.from_object(config)

db.init_app(app)
app.register_blueprint(task_bp)

with app.app_context():
    db.create_all()  # This creates the tables in MySQL

@app.route("/")
def index():
    return "Flask backend with SQLAlchemy is running!"

if __name__ == "__main__":
    app.run(debug=True)