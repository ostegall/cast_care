import React from "react";
import Home from "../src/screens/HomeScreen";
import WorsePain from '../src/screens/WorsePainNumbness';
import Pain from '../src/screens/Pain';
import CastBreaking from '../src/screens/CastBreaking';
import Loose from '../src/screens/Loose';
import Rash from '../src/screens/Rash';
import Smells from '../src/screens/Smells';
import Soiled from '../src/screens/Soiled';
import SomethingInCast from '../src/screens/SomethingInCast';
import Tight from '../src/screens/Tight';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: Home
        },
        WorsePain: {
            screen: WorsePain
        },
        Pain: {
            screen: Pain
        },
        CastBreaking: {
            screen: CastBreaking
        },
        Loose: {
            screen: Loose
        },
        Rash: {
            screen: Rash
        },
        Smells: {
            screen: Smells
        },
        Soiled: {
            screen: Soiled
        },
        SomethingInCast: {
            screen: SomethingInCast
        },
        Tight: {
            screen: Tight
        },
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(SwitchNavigator);