import { CoffeeList } from "./components/coffee-list";
import { Intro } from "./components/intro";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Intro />
            <CoffeeList />
        </HomeContainer>
    )
}