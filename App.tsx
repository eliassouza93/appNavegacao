import { NativeBaseProvider } from "native-base";
import Rotas from "./src/utils/Rotas";



export default function App() {
  return (
    <NativeBaseProvider>
      <Rotas />
    </NativeBaseProvider>

  );
}

