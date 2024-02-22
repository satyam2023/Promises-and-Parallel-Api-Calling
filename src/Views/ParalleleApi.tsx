import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {fetchDataAll,fetchDataAllSettled,fetchDataAny,fetchDataRace} from "../Apis/Api";
const ParallelApi=()=>{
  const [FirstApiResponse,setFirstApiResponse]=useState<any>(null);
  const [SecondApiResponse,setSecondApiResponse]=useState<any>(null);
  const [ThirdApiResponse,setThirdApiResponse]=useState<any>(null);

    return(
          <SafeAreaView style={{flex:1}}>
            <Text style={{fontSize:20,fontWeight:'600'}}>Parallel API Calling...</Text>
             <TouchableOpacity onPress={fetchDataAll} style={{marginTop:50,backgroundColor:'#E7E7E7',padding:30,alignSelf:'center',borderRadius:30}}>
                <Text> Execute Promise All() method</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={fetchDataAllSettled} style={{marginTop:50,backgroundColor:'#E7E7E7',padding:30,alignSelf:'center',borderRadius:30}}>
                <Text> Execute Promise AllSettled() method</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={fetchDataRace} style={{marginTop:50,backgroundColor:'#E7E7E7',padding:30,alignSelf:'center',borderRadius:30}}>
                <Text>Execute Promise Race() method</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={fetchDataAny} style={{marginTop:50,backgroundColor:'#E7E7E7',padding:30,alignSelf:'center',borderRadius:30}}>
                <Text>Execute Promise Any()method</Text>
             </TouchableOpacity>
          </SafeAreaView>
    );
};

export default ParallelApi