
# 📝 React To-Do List

To-Do List is my first react js project, it is a web application that helps users manage their daily tasks efficiently 📝. Users can add, view, and delete tasks with ease. The app features a clean and simple interface, making it easy to stay organized and focused on completing tasks.

## ✨ Features

- **➕ Add Tasks: Quickly add tasks to your list.**
- **❌ Delete Tasks: Remove tasks once they're done or no longer needed.**

## 🛠️ Technologies



- **React**: Manages the application's components and state.
- **Tailwind CSS**: Provides a utility-first approach for styling.
- **DaisyUI**: Enhances UI components with prebuilt and customizable design elements.

## 🚀 Getting Started

### Prerequisites

- 💻 A web browser.

### Setup  

1. 📂 Clone the repository or download the project files:  
   ```bash  
   git clone <repository-link>
   ```
2. 📦 Navigate to the project directory and install dependencies:

   ```bash
   cd TODO-List  
   npm install
   ```
3. ⚛️ Ensure React and Tailwind CSS are properly set up in your environment.
   
4. ⚡ Start the development server with Vite:
   ```bash
   npm run dev
   ```  
5. 🌐 Open the app in your browser at the local Vite development server URL (usually http://localhost:5173).


## 📁 Project Structure  

- **`public/`**: Contains static assets for the app.  
- **`src/`**: Core application code.  
  - **`components/`**: Holds reusable React components.  
    - `FormToDo.jsx`: Component for adding tasks.  
    - `ToDo.jsx`: Component for displaying individual tasks.  
  - `App.jsx`: Main application logic and state management.  
  - `main.jsx`: Entry point for rendering the app.  
  - `index.css`: Global styles using Tailwind CSS.  
- **`index.html`**: The main HTML template.  
- **`tailwind.config.js`**: Tailwind CSS configuration file.  
- **`vite.config.js`**: Configuration file for Vite.  
- **`postcss.config.js`**: PostCSS configuration for styling.  
- **`.gitignore`**: Specifies files and directories to ignore in version control.  
- **`package.json`**: Lists dependencies and project metadata.  
- **`README.md`**: Project documentation.  

## 💡 Usage  

1. **Auto Task Display**: Upon loading, the app displays the pre-existing tasks from the state.  
2. **Add a Task**:  
   - Enter the task name in the input field.  
   - Click the **"+"** button to add the task to your list.  
3. **Delete a Task**:  
   - Click the **trash icon** next to any task to remove it from the list.  

## 🌈 Example
1. Landing on the To-Do List page
A simple interface displays an empty or existing list with an "Add Task" button.
![image](https://github.com/user-attachments/assets/c308d5a0-a55c-4ae7-9466-9fb8d1a41297)

2. Typing "Go shopping"
The user enters "Go shopping" in the input field designed for adding a task.
![image](https://github.com/user-attachments/assets/8ca29485-e9d6-49b2-b571-db5dcafdadc6)

3. Adding the task
After clicking "Add Task", the task "Go shopping" appears in the list.
![image](https://github.com/user-attachments/assets/2245b178-d52e-4943-a97b-50e29275d088)

4. Deleting the task
After clicking on the trash, the task "Go shopping" is removed from the list, and the updated list is displayed.
![image](https://github.com/user-attachments/assets/2c175995-a4d5-48f2-9185-8f15cbab7147)


