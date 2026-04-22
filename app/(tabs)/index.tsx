import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { BANNERS } from '@/assets/assets'

const {width} = Dimensions.get("window")

export default function Home() {
  return (
    <SafeAreaView className='flex-1' edges={['top']}>
      <Header title='Satisfied Kitchen' showMenu showCart showLogo showBack/>

      <ScrollView className='flex-1 px-4'
        showsVerticalScrollIndicator={false}>
          {/* Banner Slider */}
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} className='w-full h-48 roounded-xl'
          scrollEventThrottle={16}>
            {BANNERS.map((banner, index)=>(
              <View key={index} className='relative w-full h-48bg-gray-200 overflow-hidden' style={{width: width - 32}}>
                <Image source={{uri:banner.image}} className='w-full h-full' resizeMode='cover'/>

                <View>
                  <Text>{banner.title}</Text>
                  <Text>{banner.subtitle}</Text>
                  <TouchableOpacity>
                    <Text>Get Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}