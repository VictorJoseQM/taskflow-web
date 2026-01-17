import { useState } from "react";
import { PlusCircle } from "lucide-react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit() {
    onAddTask(newTitle);
    setNewTitle("");
  }

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit} className="create-btn">
        Criar <PlusCircle size={18} />
      </button>
    </div>
  );
}
