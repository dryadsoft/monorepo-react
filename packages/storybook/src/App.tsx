import { Layout } from "./components/atoms/layout/Layout";
import { Footer } from "./components/molecules/Footer";
import { Header } from "./components/organisms/Header";

function App() {
  return (
    <Layout>
      <Header />
      <main className="mb-16 overflow-y-auto bg-green-400 scrollbar-hide">
        <div className="h-20 bg-green-400">sas</div>
      </main>
      <Footer position="absolute">
        © 2023 LINK MEDIA. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default App;
