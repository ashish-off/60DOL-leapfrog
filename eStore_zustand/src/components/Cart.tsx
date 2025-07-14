import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ChangeQtyButtons from "./ChangeQtyButton";

const Cart = () => {
  const { reset, products, removeProduct, total, address } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
      address: state.address,
    }))
  );


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll space-y-2 w-96">
        <div className="felx gap-2 text-lg items-center ">
          <h1>Cart:</h1>
          <Button
            onClick={reset}
            variant={"destructive"}
            className="hover:opacity-80 active:opacity-100"
          >
            <h1>Remove All</h1>
          </Button>
        </div>

        <div className="space-y-2">
          {products.map((product) => (
            <Card className="felx flex-row items-center gap-2" key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <Button
                  onClick={() => removeProduct(product.id)}
                  size={"icon"}
                  variant={"destructive"}
                >
                  <Trash2 />
                </Button>
              </CardHeader>
              <CardContent>{product.price}</CardContent>
              <CardFooter>
                <ChangeQtyButtons productId={product.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: {total}$</p>
        <p>Address: {address}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
