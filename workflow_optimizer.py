# workflow_optimizer.py

from langgraph import LangGraph
import networkx as nx

def generate_workflow(tasks, dependencies, deadlines, team_availability):
    """
    Generates a workflow graph based on project details such as tasks, dependencies, deadlines, and team availability.
    """
    # Initialize the graph
    G = LangGraph()

    # Add nodes for each task
    for task in tasks:
        G.add_node(task['id'], name=task['name'], deadline=task['deadline'], team_availability=team_availability.get(task['id'], []))

    # Add edges based on task dependencies
    for dep in dependencies:
        G.add_edge(dep['from'], dep['to'])

    # Visualize the graph (optional)
    G.visualize()
    return G


# Import LangChain for reasoning
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def rebalance_priorities(workflow, updated_tasks):
    """
    Rebalances task priorities in the workflow based on updated task parameters like deadlines and team availability.
    """
    # Define LangChain prompt template for reasoning
    prompt_template = "Given the following task data, re-rank the tasks based on their urgency and team availability:\n\n{tasks}"
    prompt = PromptTemplate(input_variables=["tasks"], template=prompt_template)
    chain = LLMChain(prompt=prompt)
    
    # Prepare updated task data
    updated_data = [{"task_id": task['id'], "deadline": task['deadline'], "availability": task['team_availability']} for task in updated_tasks]
    
    # Use LangChain to generate rebalanced priorities
    prioritized_tasks = chain.run({"tasks": updated_data})
    
    return prioritized_tasks

# Import the Trello API client
import requests
from config import TRELLO_API_KEY, TRELLO_API_TOKEN, TRELLO_BOARD_ID

def fetch_trello_tasks():
    """
    Fetches task details from Trello board using the API.
    """
    url = f"https://api.trello.com/1/boards/{TRELLO_BOARD_ID}/cards?key={TRELLO_API_KEY}&token={TRELLO_API_TOKEN}"
    response = requests.get(url)
    tasks = response.json()
    
    return [{"id": task['id'], "name": task['name'], "deadline": task['due']} for task in tasks]

from requests.auth import HTTPBasicAuth

def fetch_jira_tasks():
    """
    Fetches tasks from Jira.
    """
    url = f"{JIRA_API_URL}/rest/api/3/search?jql=assignee={JIRA_EMAIL}"
    auth = HTTPBasicAuth(JIRA_EMAIL, JIRA_API_TOKEN)
    response = requests.get(url, auth=auth)
    issues = response.json()['issues']
    
    return [{"id": issue['id'], "name": issue['fields']['summary'], "deadline": issue['fields']['duedate']} for issue in issues]
