document.addEventListener('DOMContentLoaded', function () { // console.log('DOM ok')

    var btnAddTask = document.getElementById('addTaskButton');
    var list = document.getElementById('taskList'); // console.log(list);

    var counter = 0;
    var count = document.createElement('p');
    count.innerText = counter;
    list.appendChild(count);

    var addTask = btnAddTask.addEventListener('click', function () {


        // console.log('click addTask');
        var text = document.getElementById('taskInput'); // console.log(text);
        // console.log(text.value);
        var newEl = document.createElement('li'); // console.log(newEl);
        var h1 = document.createElement('h1'); // console.log(h1);
        h1.innerText = text.value;
        // console.log('---> ' + text.value.length);

        if (text.value.length > 5 && text.value.length < 100) {
            text.value = '';

            counter++;
            // console.log(counter);
            count.innerText = counter;

            var btnDelete = document.createElement('button'); // console.log(btnDelete);
            btnDelete.innerText = 'Delete';
            var btnComplete = document.createElement('button');
            //console.log(btnComplete);
            btnComplete.innerText = 'Complete';

            newEl.appendChild(h1); // console.warn(newEl);
            newEl.appendChild(btnDelete); // console.error(newEl);
            newEl.appendChild(btnComplete); // console.error(newEl);
            list.appendChild(newEl);
            //console.log(list);

            btnComplete.addEventListener('click', function () {

                // counter--; console.log(counter);
                // count.innerText = counter;

                // console.warn(newEl.hasAttribute('class'));
                // console.log('click complete');
                // newEl.classList.add('done'); console.log(list);
                newEl.hasAttribute('class') ? newEl.removeAttribute('class') : newEl.classList.add('done');
                newEl.hasAttribute('class') ? counter-- : counter++;
                newEl.hasAttribute('class') ? count.innerText = counter : count.innerText = counter;
                //console.log(list);

            });

            btnDelete.addEventListener('click', function () {
                // console.log('delete click');
                newEl.parentElement.removeChild(newEl);
            })

        } else {
            //console.log('A task can be added only if its content has more than five and less than one hundred characters.');
            count.innerText = 'A task can be added only if its content has more than five and less than one hundred characters.';
        }
    });

    var btnRemoveAll = document.getElementById('removeFinishedTasksButton');


    btnRemoveAll.addEventListener('click', function () {

        var toDel = list.querySelectorAll('.done');
        //console.log(toDel);
        for (var i = 0; i < toDel.length; i++) {
            toDel[i].parentElement.removeChild(toDel[i]);
        }

    });


});

// TODO Dla chętnych (z gwiazdką): Dokończyć!!! Gdy znajdę chwilę czasu ;)






