import { useEffect, useState } from "react";
import { getLandingData } from "../services/api";
import { transformLandingData } from "../utils/transformData";

export default function useLandingData() {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadData() {

      try {

        setLoading(true);

        const response = await getLandingData();

        const transformed = transformLandingData(response.products);

        setData(transformed);

      } catch (err) {

        setError("Unable to load website data.");

      } finally {

        setLoading(false);

      }

    }

    loadData();

  }, []);

  return {
    data,
    loading,
    error,
  };

}