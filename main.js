// 登録ボタン
const addButton = document.querySelector('#addButton')

// 一覧表示用連番
let id = 1;

let inputObj = document.querySelector('#taskText')
let inputDescription = inputObj.value


/**
 * form必須入力チェック
 */
 const checkInput = value => {
    if (value === ''){
        document.getElementById( 'notice' ).style.display = "block";
    } else {
        document.getElementById( 'notice' ).style.display = "none";

        addTask(inputObj.value);
    }
}

/**
 * 登録ボタン押下時の処理
 */
addButton.addEventListener('click', () => {
    // 入力チェック
    checkInput(inputObj.value)
    // 入力フォームを初期化する
    inputObj.value = ''
})

/**
 * 登録処理
 */
const addTask = description => {
    // タスクオブジェクト
    const task = {
        id: id,
        description: description,
        done: false
    }
    
    alert(`${task.description}を登録しますか？`)

    let status;
    status = task.done ? '完了': '未完了'

    const tablerow = document.getElementById('tablerow')
    tablerow.insertAdjacentHTML(
        'afterbegin',
        `<tr class="taskList${task.id}">
          <th scope="row">${task.id}</th>
          <td class="taskDescription">${task.description}</td>
          <td>${status}</td>
          <td><button type="button" id="deleteButton" onclick="testFunc()">削除する</button></td>
        </tr>`
    )
    id ++;
    
}

/**
 * 削除ボタン押下時の処理
 */
const testFunc = () => {
    // 削除ボタン
    const deleteButton = document.getElementById('deleteButton')
    // 削除対象のテーブル要素
    const deleteTask = deleteButton.parentNode.parentNode;
    
    alert('このタスクを削除しますか？')
    
    tablerow.removeChild(deleteTask)

}
