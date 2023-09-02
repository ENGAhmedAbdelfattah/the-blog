"use client";
import ReactQueryProv from "./ReactQueryProv";
import ReduxProv from "./ReduxProv";
import ThemeProv from "./ThemeProv";

type props = {
  children: React.ReactNode;
};

function Providers({ children }: props) {
  return (
    <ReduxProv>
      <ThemeProv>
        <ReactQueryProv>{children}</ReactQueryProv>
      </ThemeProv>
    </ReduxProv>
  );
}

export default Providers;
