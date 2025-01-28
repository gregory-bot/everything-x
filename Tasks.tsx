import React, { useState } from 'react';
import { Plus, CheckCircle, Circle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Complete project proposal', completed: false, dueDate: '2024-03-20' },
    { id: 2, title: 'Review code changes', completed: true, dueDate: '2024-03-18' },
    { id: 3, title: 'Team meeting', completed: false, dueDate: '2024-03-19' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
      dueDate: new Date().toISOString().split('T')[0],
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>

      {/* Add Task */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="divide-y">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 flex items-center space-x-4">
              <button
                onClick={() => toggleTask(task.id)}
                className="text-gray-400 hover:text-indigo-600"
              >
                {task.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </button>
              <div className="flex-1">
                <p className={`text-sm font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                  {task.title}
                </p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;