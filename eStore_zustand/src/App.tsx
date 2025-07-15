import { PRODUCTS_DATA } from "./lib/mockData";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useStore } from "./store/store";
import ChangeQtyButtons from "./components/ChangeQtyButton";
import Cart from "./components/Cart";
import User from "./components/User";
const App = () => {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <div className="flex justify-between items-center">
      <User/>
      <Cart />
      </div>
      <h1 className="text-2xl ">Products: </h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id} />
              ) : (
                <Button onClick={() => addProduct(product)} variant={"default"}>
                  Add To Card
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default App;
