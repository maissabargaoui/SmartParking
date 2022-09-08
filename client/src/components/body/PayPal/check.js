
import Checkout from "./Checkout";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

 function Check() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
    <div className="Check">
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
        </Routes>
      </Router>
    </div>
    </PayPalScriptProvider>
  );
}
export default Check;