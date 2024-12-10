import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import { COLORS, FONTS, SIZES, icons } from '../constants'



export default function Scan({ navigation }) {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'MyMoni App Camera Permission',
          message:
            'MyMoni App needs access to your camera ' +
            'so you can make a payment.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }
  };
  React.useEffect(() => {
    requestCameraPermission()
  }, [])


  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: SIZES.padding * 2,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 15,
              height: 15,
            }}>
            <Image
              source={icons.close}
              resizeMode='contain'
              style={{
                width: "100%",
                height: "100%",
                tintColor: COLORS.lightGray,
              }} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: COLORS.lightGray,
                ...FONTS.body3,
              }}>Scan for payment</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: COLORS.transparent1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.info}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderPaymentMothods() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: COLORS.white,
          height: 220,
          padding: SIZES.padding * 3,
        }}>
        <Text
          style={{
            ...FONTS.h4,
          }}>Another payment methods</Text>
        <View
          style={{
            paddingVertical: SIZES.padding * 2,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => console.log("Phone Number")}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: COLORS.lightpurple,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.phone}
                resizeMode='contain'
                style={{
                  width: '80%',
                  height: '80%',
                  tintColor: COLORS.purple,
                }} />
            </View>
            <Text
              style={{
                ...FONTS.body3,
              }}>Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Barcode")}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.lightGreen,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.barcode}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.green,
                }} />
            </View>
            <Text
              style={{
                ...FONTS.body3,
              }}>Barcode</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderCamera() {

    const device = useCameraDevice("back")

    return (
      <View style={{ flex: 1 }}>
        <Camera
          device={device}
          isActive={true}
          style={{
            flex: 1,
            backgroundColor: COLORS.transparent,
          }} />
        {renderHeader()}
        {renderPaymentMothods()}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderCamera()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  }
})