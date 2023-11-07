import { enc, HmacSHA256 } from "crypto-js";

const Index = ({ foo }: { foo: string }) => {
  return <div>Hello {foo}!</div>;
};

const createHmacString = (privateKey: string, message: string) => {
  const key = enc.Utf8.parse(privateKey);
  const timestamp = enc.Utf8.parse(message);
  const hmac = enc.Hex.stringify(HmacSHA256(timestamp, key));

  return hmac;
};

Index.getInitialProps = () => {
  const foo = createHmacString("foo", "bar");
  return {
    foo,
  };
};

export default Index;
