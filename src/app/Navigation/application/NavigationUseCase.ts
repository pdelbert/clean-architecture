import {NavigationArray} from "../domain/Navigation";
import { NavigationRepository } from "../domain/NavigationRepository";
import NavigationRepositoryImpl from "../infrastructure/NavigationRepositoryImpl";

const navigationUseCase = (): NavigationRepository  => ({
    getNavigation: ():NavigationArray => {
        const navigationRepository = NavigationRepositoryImpl();
        return navigationRepository.getNavigation();
    }
})

export default navigationUseCase;
