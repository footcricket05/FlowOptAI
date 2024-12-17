# app.py

import streamlit as st
from workflow_optimizer import generate_workflow, rebalance_priorities, fetch_trello_tasks, fetch_jira_tasks
from config import GOOGLE_CALENDAR_API_KEY

# Streamlit UI
st.title('FlowOptAI: A Graph-Based Workflow Optimization Tool')

# Fetch and display tasks
st.header('Task List')

trello_tasks = fetch_trello_tasks()
jira_tasks = fetch_jira_tasks()

tasks = trello_tasks + jira_tasks

# Display tasks in the UI
for task in tasks:
    st.write(f"Task: {task['name']}, Deadline: {task['deadline']}")

# Option to generate workflow
if st.button('Generate Workflow'):
    workflow = generate_workflow(tasks, dependencies=[], deadlines=[], team_availability={})
    st.write("Workflow Generated")

# Option to rebalance priorities
if st.button('Rebalance Priorities'):
    updated_tasks = tasks  # Assuming the tasks list is updated
    prioritized_tasks = rebalance_priorities(workflow, updated_tasks)
    st.write("Rebalanced Priorities:")
    st.write(prioritized_tasks)
