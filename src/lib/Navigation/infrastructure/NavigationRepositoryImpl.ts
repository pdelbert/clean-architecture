import { NavigationArray } from "../domain/Navigation";
import { NavigationRepository } from "../domain/NavigationRepository";

const data:NavigationArray = [
    {
        href: "/",
        title: "Page One",
        className: "page-one"
    },
    {
        href: "/page-two",
        title: "Page Two",
        className: "page-two"
    },
    {
        href: "/page-three",
        title: "Page Three",
        className: "page-three"
    }
] 

const NavigationRepositoryImpl = (): NavigationRepository => ({
    getNavigation: ():NavigationArray => {
        return data;
    }
})

export default NavigationRepositoryImpl;