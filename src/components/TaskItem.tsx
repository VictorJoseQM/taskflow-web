import { Trash2, CheckCircle, Circle } from "lucide-react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      <button onClick={() => onToggle(task.id)} className="icon-btn">
        {task.isCompleted ? (
          <CheckCircle
            size={24}
            color="#8284FA"
            fill="#8284FA"
            stroke="var(--bg-card)"
          />
        ) : (
          <Circle size={24} color="#3b82f6" />
        )}
      </button>

      <span className="task-text">{task.title}</span>

      <button onClick={() => onDelete(task.id)} className="icon-btn delete">
        <Trash2 size={20} />
      </button>
    </div>
  );
}
