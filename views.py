from flask import Blueprint, render_template
from flask import request
import requests
import os
import time
#from dotenv import load_dotenv
#load_dotenv()

# Create a blueprint
main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/', methods=['GET'])
def home():
    return render_template("index.html")



@main_blueprint.route('/task1')
def task1():
    return render_template('task1.html')


@main_blueprint.route('/task2')
def task2():
    return render_template('task2.html')


@main_blueprint.route('/task3')
def task3():
    return render_template('task3.html')

@main_blueprint.route('/task4')
def task4():
    return render_template('task4.html')