import { Header } from "../components/Header";
import { TaskInput } from "../components/TaskInput";
import { TaskItem } from "../components/TaskItem";
import { useTasks } from "../hooks/useTasks";

export function Home() {
  const { tasks, addTask, toggleTask, deleteTask, isLoading } = useTasks();

  const taskCount = tasks.length;
  const completedCount = tasks.filter((t) => t.isCompleted).length;

  return (
    <div className="container">
      <Header />

      <TaskInput onAddTask={addTask} />

      <div className="tasks-info">
        <span>
          Criadas: <strong>{taskCount}</strong>
        </span>
        <span>
          Concluídas:{" "}
          <strong>
            {completedCount} de {taskCount}
          </strong>
        </span>
      </div>

      <div className="task-list">
        {isLoading && <p className="loading-text">Carregando tarefas...</p>}

        {!isLoading && tasks.length === 0 && (
          <div className="empty-state">
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
