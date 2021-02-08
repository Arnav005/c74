import React from 'react';
import { FlatList, Text, View } from 'react-native';
import dB from '../config.js';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTransactions:[]
    }
  }

  componentDidMount = async() =>{
    const query=await dB.collection("transactions").get(
      query.docs.map((doc)=>{
        this.setState({
          allTransactions:[this.state.allTransactions,doc.data()]
        })
      })
    )
    
  }
    render() {
      return (
      <ScrollView>
        {this.state.allTransactions.map((transaction,index)=>{
          return(
            <FlatList>
              data={this.state.allTransactions}
              renderItem= {({item}) =>(
                <View  key={index} style = {
           {borderBottomWidth:2}}>
            <Text>{"BookId: "+transaction.bookId}</Text>
            <Text>{"StudentId: "+transaction.studentId}</Text>
            <Text>{"transactionType: " + transaction.transactionType}</Text>
            <Text>{"Date: " + transaction.date.toDate()}</Text>
              </View>
              )}
              keyExtractor ={(item,index) =>index.toString()}
            </FlatList>
                     );
          })
        }
        </ScrollView>
      )
      
       }
  }