import React, {useContext, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import {RootStackParams} from '../navigators/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface SlideInterface {
  title: string;
  desc: string;
  img: ImageSourcePropType; // para realizar el img: require('........'),
}

const slicesData: SlideInterface[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
  {
    title: 'Titulo 4',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 5',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface SlideTutorialScreenProps
  extends StackScreenProps<RootStackParams, 'SlideTutorialScreen'> {}

export const SlideTutorialScreen = ({navigation}: SlideTutorialScreenProps) => {
  const [activeSliceIndex, setActiveSliceIndex] = useState(0);
  const {theme} = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  const progressValue = useSharedValue<number>(0);

  const RenderSliceItem = (sliceItem: SlideInterface) => {
    return (
      <View
        style={{
          ...styles.sliceContainer,
          flexDirection:
            dimensions.height > dimensions.width ? 'column' : 'row',
          width: dimensions.height > dimensions.width ? '100%' : '100%',
        }}>
        <Image
          source={sliceItem.img}
          style={{
            ...styles.sliceImg,
            width: dimensions.height > dimensions.width ? '100%' : '50%',
            height: dimensions.height > dimensions.width ? '50%' : '90%',
          }}
        />

        <View
          style={{
            ...styles.sliceInfoContainer,
            width: dimensions.height > dimensions.width ? '100%' : '50%',
          }}>
          <Text
            style={{...styles.sliceTitle, color: theme.colorsExtra.iconsColor}}>
            {sliceItem.title}
          </Text>
          <Text style={{...styles.sliceText, color: theme.colors.primary}}>
            {sliceItem.desc}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top + 15,
        marginBottom: insets.bottom + 15,
        // marginLeft: insets.left + 15,
        // marginRight: insets.right + 15,
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: theme.colors.primary,
          textAlign: 'center',
          marginBottom: -50,
        }}>
        Slide Tutorial Component
      </Text>

      <Carousel
        data={slicesData}
        renderItem={({item}) => RenderSliceItem(item)}
        style={{
          width: dimensions.width,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        width={dimensions.width}
        height={
          dimensions.height > dimensions.width
            ? dimensions.height * 0.8
            : dimensions.height * 0.6
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9, // How the "main" item will look
          parallaxScrollingOffset:
            dimensions.height > dimensions.width ? 40 : 140, // How separate the adjacent items will be
          parallaxAdjacentItemScale:
            dimensions.height > dimensions.width ? 0.7 : 0.65, // How big the adjacent items will look compared to the "main" item
        }}
        loop={true}
        autoPlay={true}
        scrollAnimationDuration={2000}
        pagingEnabled={true} // false permite hace scroll largo y true solo puede pasar de uno en uno
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        windowSize={dimensions.width > dimensions.height ? 4 : 2}
        snapEnabled={true} // the snap helps to stop exactly in 1 item, no in the middle of two
        onSnapToItem={index => {
          setActiveSliceIndex(index);
        }}
        defaultIndex={activeSliceIndex}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 50,
        }}>
        {!!progressValue && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              gap: 15,
            }}>
            {slicesData.map((_, index) => {
              return (
                <PaginationItem
                  animValue={progressValue}
                  index={index}
                  key={index}
                  length={slicesData.length}
                  setActiveSliceIndex={setActiveSliceIndex}
                />
              );
            })}
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            backgroundColor: theme.colors.primary,
            width: 160,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colorsExtra.btnTxt,
              fontSize: 20,
              fontWeight: '600',
              marginTop: -3,
            }}>
            Enter App
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={30}
            color={theme.colorsExtra.iconsColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sliceContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 15,
    // borderRadius: 30,
    // backgroundColor: 'rgba(200, 200, 200, 0.2)',
  },
  sliceImg: {
    marginVertical: 30,
    // borderRadius: 20,
    resizeMode: 'contain',
  },
  sliceInfoContainer: {
    justifyContent: 'center',
    gap: 8,
  },
  sliceTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  sliceText: {
    fontSize: 20,
  },
});

/* **************************************************************************** */
/* **************************************************************************** */
/* **************************************************************************** */
interface PaginationItemInterface {
  index: number;
  length: number;
  animValue: SharedValue<number>;
  setActiveSliceIndex: (index: number) => void;
}
const PaginationItem = ({
  animValue,
  index,
  length,
  setActiveSliceIndex,
}: PaginationItemInterface) => {
  const {theme} = useContext(ThemeContext);
  const widthDot = 12;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-widthDot, 0, widthDot];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-widthDot, 0, widthDot];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <TouchableOpacity
      onPress={() => setActiveSliceIndex(index)}
      activeOpacity={0.6}>
      <Animated.View
        style={{
          backgroundColor: 'rgba(180, 180, 180, 0.6)',
          width: widthDot,
          height: widthDot,
          borderRadius: 50,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor: theme.colors.primary,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
