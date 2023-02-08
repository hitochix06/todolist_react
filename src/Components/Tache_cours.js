import "../Style/Tache_cours.css";


function Task(props) {
  return (
    <div>
      <div className="DivColonne">
        <div className="Colonne">
          <h1>Tâche à faire</h1>
          <div>{props.task}</div>

        </div>
        <div className="Colonne">
          <h1>Tâche en cours</h1>
          <div>{props.taskDone}</div>
        </div>

        <div>
          <h1>Tâches terminées</h1>
          <div>{props.taskDead}</div>
        </div>
      </div>
    </div>
  );
}

export default Task;