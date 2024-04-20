import { useState } from "react";
// @ts-expect-error
import VisitorAPI from "visitorapi";

export default () => {
  const [visitor, setVisitor] = useState();
  const [visitorLoading, setLoading] = useState(true);

  return {
    visitor,
    visitorLoading,
    getVisitor: async () => {
      try {
        setLoading(true);
        VisitorAPI(process.env.NEXT_PUBLIC_VISITOR, (data: any) =>
          setVisitor(data)
        );
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
  };
};
