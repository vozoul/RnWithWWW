import {AppRegistry, Platform} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);

/**
 * @format { OS } string 
 */
if(Platform.OS === 'web'){
    AppRegistry.runApplication(appName, {
        rootTag: document.getElementById('main')
    })
}
