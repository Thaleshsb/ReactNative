import * as React from 'react';
import {View, Text,Image,Button ,TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./src/components/Main/styleMain"



export default function App() {

  // Main -----------------------------------------------------------------------------

  function HomeScreen() {
    return (
      <View style={styles.boxMain}>
           <Header/>
            <ScrollView >
                <Text>Bem vindo!</Text>
            </ScrollView>
           <Footer/>
      </View>
    );
  }

  // Header -----------------------------------------------------------------------------

  function Header(){

    return(
        <View style={styles.boxHeader}>
            <Image 
                style={styles.iconHeader}
                source={require('my-app/assets/logotipo.png')}
            />
        </View>
    );
  }

  
  // Footer ------------------------------------------------------------------------------
  function Footer(){

    const navigation = useNavigation(); 

    return(
        <View style={styles.boxFooter}>
            <View style={styles.separaFooter}>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('Home')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/home.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=> navigation.navigate('Cadastrar')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/mais.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=> navigation.navigate('Editar')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/edit.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/tables.png')}
                    />
                </TouchableOpacity>   
            </View>
        </View>
    );
  }
  

  // Form -----------------------------------------------------------------------------------

  function FormScreen(){

    /* possivel metodo pra armazear ainda em reforma

    const [nomeGestor, setNomeGestor] = useState(null)
    const [nomeUsina, setNomeUsina] = useState(null)
    const [endere??o, setEndere??o] = useState(null)
    const [dados, setDados] = useState(null)

    function salvaDados(){
    
        if(nomeGestor != null && nomeUsina != null && endere??o != null){

        return setDados('Gestor: "'+nomeGestor+'", '+'Usina: "' +nomeUsina+'", ' +'Endere??o: "'+ endere??o+'"')
        }
    }
    */
    return(
        <View>
            <Header/>
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>
                    Informe os Dados da Usina:
                </Text>

                <Text style={styles.textForm}>Nome do Gestor:</Text>
                <TextInput
                    style={styles.inputForm}
                    //onChangeText={setNomeGestor}
                   // value={nomeGestor}
                    placeholder="Ex.: Jo??o da Silva"
                ></TextInput>

                <Text style={styles.textForm}>Nome da Usina:</Text>
                <TextInput
                    style={styles.inputForm}
                   // onChangeText={setNomeUsina}
                   // value={nomeUsina}
                    placeholder="Ex.:Santa Clara"
                ></TextInput>

                <Text style={styles.textForm}>Endere??o:</Text>
                <TextInput
                    style={styles.inputForm}
                   // onChangeText={setEndere??o}
                   // value={endere??o}
                    placeholder="Ex.: 85170-000, Pinh??o - PR"
                ></TextInput>
                <View style={styles.buttonForm}>
                  <TouchableOpacity>
                    <Button
                        
                      // onPress={()=> salvaDados()}
                        title="Cadastrar"
                    />
                  </TouchableOpacity>
                </View>
            </View>
            <Footer/>
        </View>
    );
  }

  // Areas  --------------------------------------------------------------------------------------

  function AreasScreen() {
      return(
          <View>
              <Header/>
              <View style={styles.TheBigBoxArea}>
              <View style={styles.BigBoxArea}>
                      <View style={styles.boxAreaL}>
                          
                          <View style={styles.blocoArea1}>   
                              <TouchableOpacity>
                                  <Image
                                      style={styles.iconArea1}
                                      source={require('my-app/assets/eng.png')}
                                  />
                                  <Text style={styles.textArea}>
                                      Arquitetura Tecnol??gica
                                  </Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.blocoArea2}>
                              <TouchableOpacity>
                                  <Image
                                  
                                      style={styles.iconArea2}
                                      source={require('my-app/assets/stock.png')}
                                  />
                                  <Text style={styles.textArea}>
                                      Invent??rio de Ativos
                                  </Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.blocoArea3}>
                              <TouchableOpacity>
                                  <Image
                                      style={styles.iconArea3}
                                      source={require('my-app/assets/key.png')}
                                  />
                                  <Text style={styles.textArea}>
                                      Gest??o de Acessos
                                  </Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                      </View>
                      <View style={styles.BigBoxArea}>
                      
                      <View style={styles.boxAreaD}>
                          <View style={styles.blocoArea4}>
                              <TouchableOpacity>
                                  <Image
                                      style={styles.iconArea4}
                                      source={require('my-app/assets/conect.png')}
                                  />
                                  <Text style={styles.textArea}>
                                      Governan??a de Seguran??a da Informa????o
                                  </Text>
                              </TouchableOpacity>
                          </View>
                <View style={styles.blocoArea5}>
                  <TouchableOpacity>
                    <Image
                      style={styles.iconArea5}
                      source={require('my-app/assets/safe.png')}
                    />
                    <Text style={styles.textArea}>
                      Gest??o de Vulnerabilidades
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.blocoArea6}>
                  <TouchableOpacity>
                    <Image
                      style={styles.iconArea6}
                      source={require('my-app/assets/eye.png')}
                    />
                    <Text style={styles.textArea}>
                      Monitoramento e Respostas a Incidentes
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        <Footer/>
      </View>
    );
  }

  // React Navegatio ------------------------------------------------------------------------------

  const Stack = createNativeStackNavigator();
 

 return( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }}/>
        <Stack.Screen name="Cadastrar" component={FormScreen}/>
        <Stack.Screen name="Editar"   component={AreasScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
 )
}
