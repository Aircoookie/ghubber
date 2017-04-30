// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { Home, ProfileScreen, RepositoryScreen } from 'containers';

export const AppNavigator = StackNavigator({
    Home: { screen: Home },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile'
        },
    },
    Repository: {
        screen: RepositoryScreen,
        navigationOptions: {
            title: 'Repository'
        },
    },
});

const AppWithNavigationState = ({ dispatch, navigation }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

const mapStateToProps = state => ({
    navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);
