import RouterURLS from "./RouterURL";
import { Layout } from "antd";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Content>
        <RouterURLS />
      </Content>
    </Layout>
  );
};

export default App;
