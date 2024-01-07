import { Button } from "./components/atoms/buttons/Button";

function App() {
  return (
    <div className="text-red-400">
      <Button
        bgColor="primary"
        bgHover="primary"
        label="primary"
        labelColor="primary"
        labelSize="lg"
        rounded="md"
      />
    </div>
  );
}

export default App;
