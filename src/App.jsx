// App.jsx
import React from "react";
import OuterRing from "./components/OuterRing";
import TopHalfStar from "./components/TopHalfStar";
import BottomHalfStar from "./components/BottomHalfStar";
import ElevateText from "./components/ElevateText";

export default function App() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Background Effect */}
      <OuterRing />

      {/* Animated Top Half of the Star */}
      <TopHalfStar />

      {/* Animated Bottom Half of the Star */}
      <BottomHalfStar />

      {/* "ELEVATE" Text with Shine Effect */}
      <ElevateText />
    </div>
  );
}
