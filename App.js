import { StyleSheet, View, Text, Image, StatusBar, ScrollView, Button } from 'react-native';
import { TouchableHighlight, TouchableOpacity, } from 'react-native';
import { Global } from './globalStyles/Global'

export default function App() {
  return(
    <>
      <StatusBar />
      <View style = {{flex: 1, backgroundColor: '#fff'}}>
        <View style = {{flex: .7, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center',}}>
          <View style = {{flex: .07, flexDirection: 'column', alignItems: 'center',}}>
          <TouchableOpacity><View style = {Global.Header}></View>
            <View style = {Global.Header}></View>
            <View style = {Global.Header}></View></TouchableOpacity>
          </View>
          <View style = {{flex: .1,}}></View>
          <View style = {{flex: .1,}}></View>
          <View style = {{flex: 1, marginLeft: -22,}}><Text style = {Global.title}>Dev<Text style = {Global.title2}>Portal</Text></Text></View>
          <View style = {{marginRight: 4}}>
            <TouchableOpacity>
              <Text style = {{fontSize: 11, borderWidth: 1, borderRadius: 19, paddingTop: 1, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, color: '#111', borderColor: '#111', fontWeight: "bold",}}>BSSM <View style = {{ fontSize: 16 }}><Text style = {{fontWeight: "bold",}}>^</Text></View></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{flex: 1.5, backgroundColor: '#fff',}}>
          <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
          <Image source={require('./assets/Avatar.jpg')} style = {{height: 90, width: 90, borderRadius: 50,}} />
          </View>
          <View style = {{flex: .7, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {{fontSize: 13-1, fontWeight: "700",}}>@M.P.Moleli</Text>
          </View>
          <View style = {{flex: .1 + .1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <Text style = {{fontSize: 11 - 1, fontWeight: "bold",}}>ID: 901013925</Text>
          </View>
          
          <View style = {Global.Profile}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Year: 2</Text><Text style = {{fontSize: 13-1, fontWeight: "bold",}}>Active</Text></View>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text style = {{ borderColor: '#555',borderLeftWidth: 1, borderRightWidth: 1, paddingLeft: '19%', paddingRight: '19%' }}>Semester: 2</Text><Text style = {{fontSize: 13-1, fontWeight: "bold",}}>Active</Text></View>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Class: 33</Text><Text style = {{fontSize: 13-1, fontWeight: "bold",}}>Part</Text></View>
          </View>
        </View>
        <View style = {{flex: 3, backgroundColor: 'white',}}>
          <ScrollView>
            <TouchableOpacity><View style = {Global.fast}>
              <View style = {{ flex: .1,justifyContent: 'center', alignItems: 'center'}}><Text style = {{color: 'white', fontWeight: 'bold',}}>Year: 1</Text></View><Text style = {{fontWeight: "bold", color: 'white'}}>GPA: 3.4</Text><Text style = {{fontWeight: "bold", color: 'white'}}>CGPA: 3.26</Text>
            </View></TouchableOpacity>
            <TouchableOpacity><View style = {Global.fast}>
              <View style = {{ flex: .1,justifyContent: 'center', alignItems: 'center'}}><Text style = {{color: '#444', fontWeight: 'bold',}}>Year: 2</Text></View><Text style = {{fontWeight: "bold", color: 'white'}}>GPA: 2.84</Text><Text style = {{fontWeight: "bold", color: 'white'}}>CGPA: Current</Text>
            </View></TouchableOpacity>
            <TouchableOpacity><View style = {Global.fast}>
              <View style = {{ flex: .1,justifyContent: 'center', alignItems: 'center'}}><Text style = {{color: 'white', fontWeight: 'bold',}}>Year: 3</Text></View><Text style = {{fontWeight: "bold", color: 'white'}}>GPA: NULL</Text><Text style = {{fontWeight: "bold", color: 'white'}}>CGPA: NULL</Text>
            </View></TouchableOpacity>
            <TouchableOpacity><View style = {Global.fast}>
              <View style = {{ flex: .1,justifyContent: 'center', alignItems: 'center'}}><Text style = {{color: 'white', fontWeight: 'bold',}}>Year: 4</Text></View><Text style = {{fontWeight: "bold", color: 'white'}}>GPA: NULL</Text><Text style = {{fontWeight: "bold", color: 'white'}}>CGPA: NULL</Text>
            </View></TouchableOpacity>
            <TouchableOpacity><View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <View style = {Global.fast}><Text>Full Details</Text></View>
            </View></TouchableOpacity>
          </ScrollView>
        </View>
        <View style = {{flex: .7, width: "100%", bottom: 0, borderColor: '#111', backgroundColor: '#fff',}}>
          <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <View style = {Global.Circle}><TouchableOpacity><Image source={require('./assets/home.png')} style = {{height: 41 - 6, width: 41 - 6,}} /><View style = {{marginTop: 1,}}><Text style = {{}}>Home</Text></View></TouchableOpacity></View>
            <View style = {Global.Circle}><TouchableOpacity><Image source={require('./assets/class.png')} style = {{height: 31 - 9, width: 31 - 9,}} /><View style = {{marginTop: 8}}><Text style = {{}}>Class</Text></View></TouchableOpacity></View>
            <View style = {Global.Circle}><TouchableOpacity><Image source={require('./assets/explore.png')} style = {{height: 31 - 9, width: 31 - 9,}} /><View style = {{marginTop: 8}}><Text style = {{}}>Explore</Text></View></TouchableOpacity></View>
            
          </View>
          
        </View>
        
      </View>
    </>
  );
}