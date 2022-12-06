import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config'
import firebase from 'firebase'
 
export default class WriteComplaint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            name: '',
            query: '',
        }
    }

    submitQuery = ()=>{
        db.collection("complaints").add({
            title : this.state.title,
            name: this.state.name,
            query: this.state.query

        })
        this.setState({
            title :'',
            name:'',
            query:''
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'#f75d04'}
                     centerComponent = {{
                        text : 'Complaint Forum',
                        style : { color: 'black', fontSize: 20,fontWeight:'bold'}
                    }}
                />
        <TouchableOpacity style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}>
           

            <Text
              style={{
                fontSize: RFValue(15),
                fontWeight: "bold",
                marginLeft: RFValue(30),
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
                <TextInput 
                    placeholder="Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            name: text
                        })
                    }}
                    value={this.state.name}
                    style={styles.author} />
                <TextInput 
                    placeholder="Your Complaint/Query"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            query: text
                        })
                    }}
                    value={this.state.query}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   onPress = {this.submitQuery}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9d872',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#f79a4f',
      width: 80,
      height: 40,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white"
  }
});
