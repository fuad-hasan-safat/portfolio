// Import Redux-related functions and actions
"use client"
import { useSelector, useDispatch, RootState } from "../../lib/store";
import { increment, decrement } from "@/lib/features/counter/counterSlice"; 
import Button from "@/components/Button";
import { useAppSelector } from "@/lib/hooks";



const Home: React.FC = () => {
  // Initialize useDispatch to dispatch Redux actions
  const dispatch = useDispatch();

  // Select the 'cardDetails' data from the Redux store using useSelector
  const { count } = useSelector((state) => state.count);

 

  // JSX for the main component
  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <p>{count}</p>

    </main>
  );
};

// Export the Home component as the default export
export default Home;