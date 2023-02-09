import React from "react";
import ContentLoader from "react-content-loader"

const CartSkeleton:React.FC = () => {
  return <ContentLoader 
  speed={1}
  width={373}
  height={445}
  viewBox="40 0 373 545"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
<circle cx="155" cy="145" r="125" /> 
    <rect x="0" y="348" rx="0" ry="0" width="353" height="53" /> 
    <rect x="0" y="416" rx="0" ry="0" width="353" height="53" /> 
    <rect x="54" y="310" rx="0" ry="0" width="200" height="36" /> 
    <rect x="22" y="494" rx="0" ry="0" width="70" height="30" /> 
    <rect x="208" y="486" rx="12" ry="12" width="155" height="41" />

</ContentLoader>;
};

export default CartSkeleton;
