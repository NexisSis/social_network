let renderEntireTree = () => {}

let state = {

    profilePage: {
        postData:  [
            {id:1, name: "Егор почти Крид", text_post:'я наконец-то свободен от блэкстар', time: "сегодня в 20:31", likes_q: 201},
            {id:2, name: "Егор почти Крид", text_post:'да здравствует реакт', time: "сегодня в 20:12", likes_q: 7},
            {id:3, name: "Егор почти Крид", text_post:'да здравствует реакт2', time: "сегодня в 20:12", likes_q: 7}
          ],

          friendData:  [
            {id:1, name: "Егор", surname: "Крид"},
            {id:2, name: "Edem", surname: "Qirimli"},
            {id:3, name: "Витя", surname: "Витя"},
            {id:4, name: "Гектор", surname: "Гик"},
            {id:5, name: "Климентий", surname: "Ворошилов"},
            {id:6, name: "Апостол", surname: "Первый"},
          ],

          newPostText: 'Anchor Value 1',
          
    },

    dialogPage: {
        dialogsData: [
            {id:1, name:'Edem Qirimli', text:'Че делаешь?'},
            {id:2, name:'Гектор Гик', text:'Почти смешно'},
            {id:3, name:'Павел Дуров', text:'Как успехи?'},
            {id:4, name:'Витя Витя', text:'ээ'},
            {id:5, name:'Алукард Вульф', text:'не понял'},
          ],
    
          messagesData: [
            {id:1, text_message: "Здравствуй!" , time: "20:51:20"},
            {id:2, text_message: "все продвигается довольно легко?" , time: "20:51:25"},
            {id:3, text_message: "еще бы" , time: "20:51:32" },
            {id:4, text_message: "ведь реакт для этого и создан)" , time: "20:51:34" },
            {id:5, text_message: "holder" , time: "давно" }, 
        ],
        aloneMessage: "hello",
    },


    }



export const addPost = () => {
  let newPost = {
    id: 4,
    name: "Егор почти Крид",
    text_post: state.profilePage.newPostText,
    time: "13:31",
    likes_q: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);


}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}


export const newMessageInDialog = () => {
  let newMessage = {
    id:5, 
    text_message: state.dialogPage.aloneMessage, 
    time: "давно" 
  };
  state.dialogPage.messagesData.push(newMessage);
  renderEntireTree(state);
}

export const updateDialogsMessage = (newTextM) => {
  state.dialogPage.aloneMessage = newTextM;
  renderEntireTree(state);
}

export const subscriber = (observer) => {
  renderEntireTree = observer
}

export default state;