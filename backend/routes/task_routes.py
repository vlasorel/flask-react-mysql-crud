from flask import Blueprint, request, jsonify
from database.db import db
from models.task_model import Task

task_bp = Blueprint("task_bp", __name__)

# Get all tasks
@task_bp.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{"id": t.id, "title": t.title, "description": t.description} for t in tasks])

# Create task
@task_bp.route("/tasks", methods=["POST"])
def create_task():
    data = request.json
    new_task = Task(title=data['title'], description=data.get('description'))
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task created"})

# Update task
@task_bp.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    data = request.json
    task = Task.query.get(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    task.title = data['title']
    task.description = data.get('description')
    db.session.commit()
    return jsonify({"message": "Task updated"})

# Delete task
@task_bp.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    task = Task.query.get(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"})