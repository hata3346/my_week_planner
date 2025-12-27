const ajouterBtn = document.getElementById('ajouter');
const tasksList = document.getElementById('tasks-list');

ajouterBtn.addEventListener('click', () => {
    const matiere = document.getElementById('matiere').value.trim();
    const tache = document.getElementById('tache').value.trim();
    const duree = document.getElementById('duree').value.trim();

    if (matiere && tache && duree) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <span>${matiere}: ${tache} (${duree}h)</span>
            <button class="delete-btn">❌</button>
        `;
        tasksList.appendChild(taskDiv);

        // Supprimer la tâche
        taskDiv.querySelector('.delete-btn').addEventListener('click', () => {
            tasksList.removeChild(taskDiv);
        });

        // Reset les champs
        document.getElementById('matiere').value = '';
        document.getElementById('tache').value = '';
        document.getElementById('duree').value = '';
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});
