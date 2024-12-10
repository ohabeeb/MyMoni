import { StyleSheet, Text, FlatList, View, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, SIZES, icons, images } from '../../constants'

export default function SignUp({ navigation }) {
  const [secureTextEntry, setsecureTextEntry] = React.useState(true)

  const [area, setArea] = React.useState([])
  const [selectedArea, setSelectedArea] = React.useState(null)
  const [modalVisibility, setModalVisibility] = React.useState(false)


  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/subregion/western%20africa")
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            name: item.name.common,
            code: item.cca3,
            callingCode: `${item.idd.root}${item.idd.suffixes}`,
            flags: item.flags.png,
          }
        })

        setArea(areaData)

        if (areaData.length > 0) {
          let defaultData = areaData.filter(n => n.code == "NGA")
          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0])
          }
        }
      })
  }, [])

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding * 2
        }}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
          }}>
          <Image
            source={icons.back}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%',
              tintColor: COLORS.lightGreen,
            }} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.h4 }}>Sign Up</Text>
        </View>
      </View>
    )
  }
  function renderLogo() {
    return (
      <View
        style={{
          height: 200,
          paddingHorizontal: SIZES.padding * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.mymoniLogo}
          resizeMode='contain'
          style={{
            width: "70%",
          }} />
      </View>
    )
  }
  function renderForm() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding * 3,
          marginTop: SIZES.padding,
        }}>
        {/* Full Name  */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.lightGreen,
          }}>
          <Text
            style={{
              color: COLORS.lightGreen,
            }}>Full Name</Text>
          <TextInput
            placeholder='Enter Full Name'
            placeholderTextColor={COLORS.lightGreen}
            cursorColor={COLORS.lightGreen}
            selectionColor={COLORS.lightGreen}
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3
            }} />
        </View>
        {/* Phone Number  */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}>
          <Text
            style={{
              color: COLORS.lightGreen,
              paddingVertical: SIZES.padding,
            }}>Phone Number</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
            }}>
            {/* Country Code  */}
            <TouchableOpacity
              onPress={() => setModalVisibility(true)}
              style={{
                flex: 0.4,
                borderBottomWidth: 1,
                borderColor: COLORS.lightGreen,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <Image
                    source={icons.down}
                    style={{
                      width: 12,
                      height: 12,
                      tintColor: COLORS.lightGreen,
                      alignSelf: 'center',
                    }} />
                  <Image
                    source={{ uri: selectedArea?.flags }}
                    style={{
                      width: 25,
                      height: 20,
                    }} />
                </View>
                <Text
                  style={{
                    color: COLORS.lightGreen,
                    ...FONTS.body3,
                  }}>{selectedArea?.code}</Text>
                <Text
                  style={{
                    color: COLORS.lightGreen,
                    ...FONTS.body3,
                  }}>{selectedArea?.callingCode}</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.6,
                borderBottomWidth: 1,
                borderColor: COLORS.lightGreen,
              }}>
              <TextInput
                placeholder='Enter Phone Number'
                placeholderTextColor={COLORS.lightGreen}
                cursorColor={COLORS.lightGreen}
                selectionColor={COLORS.lightGreen}
                style={{
                  color: COLORS.lightGreen,
                  ...FONTS.body3,
                }} />
            </View>
          </View>
        </View>
        {/* Password */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.lightGreen,
            marginTop: SIZES.padding * 2,
          }}>
          <Text
            style={{
              color: COLORS.lightGreen,
            }}>Password</Text>
          <TextInput
            placeholder='Enter Password'
            placeholderTextColor={COLORS.lightGreen}
            cursorColor={COLORS.lightGreen}
            selectionColor={COLORS.lightGreen}
            secureTextEntry={secureTextEntry}
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3
            }} />
          <TouchableOpacity
            onPress={() => setsecureTextEntry(!secureTextEntry)}
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              right: 0,
              bottom: 10,
            }}>
            <Image
              source={secureTextEntry ? icons.eye : icons.disable_eye}
              resizeMode='contain'
              style={{
                width: '100%',
                height: '100%',
                tintColor: COLORS.white,
              }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderCountinueButton() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={{
            flex: 1,
            backgroundColor: COLORS.black,
            paddingVertical: SIZES.padding * 1.8,
            borderRadius: SIZES.padding * 2,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.lightGreen,
              textAlign: 'center',
              ...FONTS.body2,
            }}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function renderAreaCodeModel() {
    function renderItem({ item }) {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 15,
            padding: SIZES.padding,
          }}
          onPress={() => {
            setSelectedArea(item)
            setModalVisibility(false)
          }}>
          <View
            style={{
              width: 30,
              height: 30,
            }}>
            <Image
              source={{ uri: item.flags }}
              resizeMode='cover'
              style={{
                width: '100%',
                height: '100%'
              }} />
          </View>
          <Text
            style={{
              ...FONTS.body2,
            }}>{item.name}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <Modal
        visible={modalVisibility}
        animationType="slide"
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => setModalVisibility(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: SIZES.width * 0.8,
                height: 400,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius,
              }}>
              <FlatList
                data={area}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                contentContainerStyle={{
                  paddingBottom: SIZES.padding,
                }}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}>
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderCountinueButton()}
        </ScrollView>
      </LinearGradient>
      {renderAreaCodeModel()}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({}) 