import { useParams } from "react-router-dom";
import { getUseEffect } from "./UseEffectData";

const UseEffect = () => {
  const params = useParams();
  const useeffect = getUseEffect(parseInt(params.useeffectId, 10));

  return (
    <section style={{ paddingTop: "30px", marginLeft: "40px" }}>
      {useeffect.element}
    </section>
  );
};
export default UseEffect;