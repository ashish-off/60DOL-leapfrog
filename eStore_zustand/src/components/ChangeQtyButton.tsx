import { useStore } from "@/store/store";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const ChangeQtyButtons = ({ productId }: { productId: string }) => {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    //   products: state.products,
    }))
  );

    const product = getProductById(productId);
// every component instance recalculates the total upon rerender
//     useEffect(() => {
//       setTotal(products.reduce((acc, item) => acc + item.price * item.qty, 0));
//   }, [products, setTotal])

// better approach is to use zustand's subscribe method
  useEffect(() => {
    const unSub = useStore.subscribe(
        (state) => state.products,
        (products) => {
            setTotal(products.reduce((acc, item) => acc + item.price * item.qty, 0))
        }, {
            fireImmediately: true
        }
    );
    return unSub;
  }, [setTotal])

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQty(productId)} size={"icon"}>
            <Minus />
          </Button>
          <p>{product.qty}</p>
          <Button onClick={() => incQty(productId)} size={"icon"}>
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyButtons;
