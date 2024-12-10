import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { featuresData, specialPromoData } from '../constants/data'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'

export default function Dashboard() {
  const [features, setFeatures] = React.useState(featuresData)
  const [specialPromo, setSpecialPromo] = React.useState(specialPromoData)

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: SIZES.padding * 2,
          justifyContent: 'space-between'
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              ...FONTS.h1,
            }}>Hello!</Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body2,
            }}>O. Habeeb</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Notification")}
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.lightGray,
          }}>
          <Image
            source={icons.bell}
            resizeMode='contain'
            style={{
              width: '95%',
              height: '95%',
            }} />
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: -5,
              width: 10,
              height: 10,
              borderRadius: 100,
              backgroundColor: COLORS.red,
            }} />
        </TouchableOpacity>
      </View>
    )
  }
  function renderBanner() {
    return (
      <View
        style={{
          height: 120,
          marginBottom: 5,
        }}>
        <Image
          source={images.banner}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }} />
      </View>
    )
  }

  function renderFeatures() {

    function Header() {
      return (
        <View
          style={{ flex: 1, }}>
          <Text
            style={{
              ...FONTS.h3,
            }}>Features</Text>
        </View>
      )
    }

    function renderItem({ item }) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => console.log(item.description)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item.icon}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: item.color,
                }} />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.body4
              }}>{item.description}</Text>
          </View>
        </View>
      )
    }

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        style={{
          marginTop: SIZES.padding * 2,
          gap: 20,
        }}
      />
    )
  }

  function renderPromoHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          marginTop: SIZES.padding  * 3,
          paddingVertical: SIZES.padding,
        }}>
          <Text
          style={{
            ...FONTS.h3,
          }}>Special Promo</Text>
          <TouchableOpacity>
            <Text
            style={{
              ...FONTS.body3,
            }}>View all</Text>
          </TouchableOpacity>
      </View>
    )
  }
  function renderPromo() {

    function HeaderComponent() {
      return (
        <View>
          {renderHeader()}
          {renderBanner()}
          {renderFeatures()}
          {renderPromoHeader()}
        </View>
      )
    }

    function renderItem({ item }) {
      return (
        <TouchableOpacity
          style={{
            marginVertical: SIZES.base,
            width: SIZES.width / 2.4,
          }}
          onPress={() => console.log(item.title)}>
          <View
            style={{
              height: 80,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: COLORS.primary,
            }}>
            <Image
              source={images.promoBanner}
              resizeMode='cover'
              style={{
                width: '100%',
                height: '100%',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }} />
          </View>
          <View
            style={{
              padding: SIZES.padding,
              backgroundColor: COLORS.lightGray,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <Text
              style={{
                ...FONTS.h4,
              }}>{item.title}</Text>
            <Text
              style={{
                ...FONTS.body4,
              }}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={specialPromo}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 2 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={renderItem}
        ListFooterComponent={<View style={{marginBottom: 80}} />}
      />
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderPromo()}
    </SafeAreaView>
  )
}