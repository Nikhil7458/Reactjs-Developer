import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BookingForm from "./components/BookingForm/BookingForm";
import ClinicFinder from "./components/ClinicFinder/ClinicFinder";
import WhistleAligners from "./components/WhistleAligners/WhistleAligners";

import useLandingData from "./hooks/useLandingData";
import ResultsYouLove from "./components/ResultsYouLove/ResultsYouLove";

function App() {

  const { data, loading, error } = useLandingData();

  if (loading) {

    return <h2>Loading...</h2>;

  }

  if (error) {

    return <h2>{error}</h2>;

  }

  return (
    <>
      <Navbar data={data.navbar} />

      <Hero data={data.hero} />

      <BookingForm />

      <ClinicFinder />

      <WhistleAligners data={data.pricing} />

      <ResultsYouLove/>
    </>
  );

}

export default App;