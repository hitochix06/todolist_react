import Card from 'react-bootstrap/Card';
import Task from "../Components/Tache_cours.js";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/App.css';
import '../Style/Tache.css'
import Cards from './Cards'



function App(props) {
  // J'instaure ma variable d'état , cette fois-ci c'est un objet , qui dit objet littéral dit ACCOLADES avec un état prédéfinis en cours
  const [task, setTask] = useState({ task: "", etat: "en cours" });

  // J'instaure ma variable d'état qui sera un tableau, celui-ci va pouvoir contenir mes objets
  const [todoList, setTodoList] = useState([]);

  // je récupère mon objet en changeant uniquement la valeur Task, qui sera ce que j'écris dans mon input, mon état reste ici "en cours" car je ne le touche pas
  const handleInput = (e) => {
    setTask({ ...task, task: e.target.value });
  };

  // je configure ma fonction pour mon bouton valider. ici, je dois enregistrer mon objet task dans mon tableau todoList à chaque fois que je clique
  const AddTask = () => {
    setTodoList([...todoList, task]);
    console.log(todoList);
  };

  // J'utilise mon UseEffect pour mettre à jour mon tableau à chaque fois que je rajoute une tâche dans mon tableau (donc à chaque fois que je click et que j'appelle addTask)
  useEffect(() => console.log(todoList), [todoList]);

  // je créé mes fonctions qui vont récuperer mon tableau pour mettre à jour mon état lorsque je clique sur le bouton
  const switchEnCours = (taskToSwitch) => {
    // je n'oublie pas de rappeler toujours mon parametre lorsque je créé une nouvelle fonction fléchée , le parametre se trouve toujours entre parenthese
    setTodoList((todoList) =>
      todoList.map((item) =>
        // ma condition  SI (item = les éléments de mon tableau) === (tasktoSwitch dans cette fonction représente mon objet à l'instant T) ALORS ...Item => le paramètre qui récupère mon tableau , on change l'état par terminé.
        //SINON si l'état dans mon objet est différent de en cours, je ne le cahnge pas, je le laisse tel quel > : item
        item === taskToSwitch ? { ...item, etat: "terminé" } : item
      )
    );
  };

  const switchTerminé = (taskToSwitch) => {
    setTodoList((todoList) =>
      todoList.map((item) =>
        item === taskToSwitch ? { ...item, etat: "supprimé" } : item
      )
    );
  };

  // Je prépare les fonctions que je vais assigner à mes props pour changer le rendu de mon composant en fonction de l'état (en cours, terminé, supprimé)
  const todoEnCours = () => {
    // je retourne mon tableau todoList qui contient la liste de mes objets par mon .map , je lui assigne un paramètre que j'appelle comme je le souhaite (ici insertTask) vous pouvez être plus fun :)
    return todoList.map((insertTask) => {
      // je lui passe une condition, car je ne veux que les objets "en cours" qui apparaitront dans ma colonne tâche à faire
      if (insertTask.etat === "en cours") {
        // je retourne mes objets qui contiennent l'état en cours
        //je retourne la tâche  .task , puis l'état que j'insere dans mon bouton.
        // Je n'oublie pas de lui assigner sa fonction switch (quelque chose) en cours en lui assignant mon paramètre insertTask qui permettra de changer uniquement les objets présents dans mon return
        return (
          <div>
            <p>{insertTask.task}</p>
            <button onClick={() => switchEnCours(insertTask)}>
              {insertTask.etat}
            </button>
          </div>
        );
      } else {
        return <div></div>;
      }
    });
  };

  const todoTerminee = () => {
    return todoList.map((insert) => {
      if (insert.etat === "terminé") {
        return (
          <div>
            <p>{insert.task}</p>
            <button onClick={() => switchTerminé(insert)}>{insert.etat}</button>
          </div>
        );
      }
    });
  };

  const todoSupprimee = () => {
    return todoList.map((done) => {
      if (done.etat === "supprimé") {
        return (
          <div>
            <p>{done.task}</p>
          </div>
        );
      }
    });
  };

  return (
    <div className="App">
      <h1>ToDoliste</h1>
      <Card className='container' >
        <Form>
          <Form.Group className="mb-3 p-5" controlId="notreTache">
            <Form.Control onChange={handleInput} type="Text" placeholder="Votre tâche" />
            <Button className='boutonValide' variant="outline-primary" onClick={AddTask}>Valider</Button>
          </Form.Group>
        </Form>
      </Card>

      <div>
        <Task
          task={todoEnCours()}
          taskDone={todoTerminee()}
          taskDead={todoSupprimee()}
        />
      </div>
    </div>
  );
}



export default App;
