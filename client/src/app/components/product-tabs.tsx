import React from "react";
import { TabsContent } from "./ui/tabs";
import { AppContext } from "../context/app-context";
import Map from "./googleMap/map";

interface listProps {
  image: string[];
  address: string;
  location: string;
  availability: "AVAILABLE" | "NOT AVAILABLE";
  rooms: number;
  bathrooms: number;
  cost: string;
  liked?: boolean;
  area: number;
}

interface Props {
  list: listProps[];
  Component: any;
  value: string;
}

export default function ProductTabs(props: Props) {
  const { toggleShowMap }: any = React.useContext(AppContext);

  return (
    <TabsContent
      value={props.value}
      className="w-full flex py-0 space-x-2 items-center px-2"
    >
      <section className="h-[620px] w-full flex gap-x-2 gap-y-4 items-center flex-wrap overflow-y-auto mx-auto justify-center">
        {props.list.length !== 0 ? (
          props.list.map((payload: any, id: any) => (
            <props.Component key={id} {...payload} />
          ))
        ) : (
          <>No Available products yet</>
        )}
      </section>
      {toggleShowMap && (
        <div className="bg-primary w-full h-full">
          <Map width="100%" height="620px" />
        </div>
      )}
    </TabsContent>
  );
}
