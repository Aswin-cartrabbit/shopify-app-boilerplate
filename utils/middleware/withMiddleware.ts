import { label } from "next-api-middleware";
import verifyHmac from "./verifyHmac";
import verifyProxy from "./verifyProxy";
import verifyRequest from "./verifyRequest";
import verifyCheckout from "./verifyCheckout";

const withMiddleware = label({
  verifyRequest: verifyRequest,
  verifyProxy: verifyProxy,
  verifyHmac: verifyHmac,
  verifyCheckout: verifyCheckout,
});

export default withMiddleware;
