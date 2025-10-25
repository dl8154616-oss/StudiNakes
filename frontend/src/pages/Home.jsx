import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeCardKategoriBimbel from '../components/Home/HomeCardKategoriBimbel'
import HomeCardFeaturedTrainings from '../components/Home/HomeCardFeaturedTrainings'


export default function Home(){
    return (
        <>
        <HomeHeader/>
        <HomeCardKategoriBimbel/>
        <HomeCardFeaturedTrainings/>
        </>
    )
}