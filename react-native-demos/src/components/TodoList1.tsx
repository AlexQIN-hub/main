import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

'Diff: File' // Diff the current file against another one



// add a message

interface todo {
    id : string;
    text : string;
}

interface TodoItemProp {
    item : todo;
}

const TodoList = () => {

    const [text,setText] = useState<string>("");
    
    const [todos,setTodos] = useState<todo[]>([]);

    const addTodo = () => {
        if(text.trim()) {
            setTodos([...todos,{id : Date.now().toString(),text}]);
            setText("");
        }
    }

    const handleSubmit = () => {
        addTodo();
    }

    const removeTodo = (id : string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const renderTodo = ({item} : TodoItemProp) => {
        
        <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.todoItem}>
            <Text style={styles.todoItem}>{item.text}</Text>
        </TouchableOpacity>

    }

  return (
    <View>
      <Text style={styles.header}>TodoList</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a New Task"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
       />

       <Button title="Add Task" onPress={addTodo} />

       <FlatList 
        data={todos} 
        keyExtractor={(item) => item.id} 
        renderItem={renderTodo}
        
       />

    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        fontSize : 24,
        fontWeight : "bold",
        marginBottom : 20,
    },

    input : {
        height : 40,
        borderColor : "gray",
        borderWidth : 1,
        marginBottom : 10,
        paddingHorizontal : 10,
    },

    todoItem : {
        fontSize : 18,
    },

    todoText : {
        fontSize : 18,
    },
})

export default TodoList