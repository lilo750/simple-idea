import router from "@mongez/react-router";
import App from "./App";
import About from "./Components/About";
import ProductInfo from "./Components/ProductInfo";

router.add("/", App);
router.add("/about", About);
router.add("/product/:id", ProductInfo);
