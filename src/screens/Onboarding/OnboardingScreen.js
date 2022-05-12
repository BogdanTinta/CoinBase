import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Onboarding from 'react-native-onboarding-swiper'

import ThemeImage from '../../components/ThemeImage/ThemeImage'
import GradientButton from '../../components/GradientButton/GradientButton'
import Quote from '../../components/Quote/Quote'

import { onboardingStyle } from './styles'
import { onboardings } from '../../constants/arrays'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

const OnboardingScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={onboardingStyle.container}>
            <Onboarding
                bottomBarColor={colors.appBackground}
                onSkip={() => navigation.navigate('Navigation')}
                onDone={() => navigation.navigate('Navigation')}
                pages={[
                    {
                        backgroundColor: colors.appBackground,
                        image:
                            <View>
                                <ThemeImage
                                    image={require('../../../assets/images/theme_images/onboarding1.png')}
                                    title={'Exchange Bitcoin\n& Ethereum For Money'}
                                    addStyle={onboardingStyle.image}
                                />
                                <Quote
                                    style={onboardingStyle.quote}
                                    fontSize={metrics.size15}
                                    text={'Provide us with the necessary\nrequired information and let us do\nthe convertion asap!!!'} />
                            </View>,
                        title: '',
                        subtitle: '',
                    },
                    {
                        backgroundColor: colors.appBackground,
                        image:
                            <View>
                                <ThemeImage
                                    image={require('../../../assets/images/theme_images/onboarding2.png')}
                                    title={'Got Giftcards you\nwant to redeem for\ncash?'}
                                    addStyle={onboardingStyle.image}
                                />
                                <Quote
                                    style={onboardingStyle.quote}
                                    fontSize={metrics.size15}
                                    text={'Provide us with the necessary\nrequired information and let us do\nthe convertion asap!!!'} />
                            </View>,
                        title: '',
                        subtitle: '',
                    },
                    {
                        backgroundColor: colors.appBackground,
                        image:
                            <View>
                                <ThemeImage
                                    image={require('../../../assets/images/theme_images/onboarding3.png')}
                                    title={`You're One Step\nCloser to Cashing Out\nYour Exchange`}
                                    addStyle={onboardingStyle.image}
                                />
                                <Quote
                                    style={onboardingStyle.quote}
                                    fontSize={metrics.size15}
                                    text={'Provide us with the necessary\nrequired information and let us do\nthe convertion asap!!!'} />
                            </View>,
                        title: '',
                        subtitle: '',
                    }
                ]}
            />
        </View>
    )
}

export default OnboardingScreen