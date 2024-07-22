import { useEffect, useState } from 'react';
import navigationUseCase from '../application/NavigationUseCase';
import { NavigationArray } from '../domain/Navigation';
import NavigationView from './NavigationView';

interface NavigationProps {
  navigation: NavigationArray;
}

const Rendernavigation: React.FC<NavigationProps> = (data) => {
  const {navigation} = data
  
  const navItems = navigation.map((item, index) => {
    return <li key={index} className={item.className}> <a href={item.href}>{item.title} </a> </li>
  })

  return <ul className="navigation">{navItems}</ul>
}

const NavigationContainer = () => {
  const [navigation, setNavigation] = useState<NavigationArray>([]);

  useEffect(() => {
     (async () => {
        const navigation = navigationUseCase();
        const navigationArray:NavigationArray = navigation.getNavigation();
        setNavigation(navigationArray);
    })();
    
  }, []);

  return <NavigationView className="nav-container"><Rendernavigation navigation={navigation} /></NavigationView>
};

export default NavigationContainer;