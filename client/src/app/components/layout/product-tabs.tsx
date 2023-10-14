import React from "react";
import { TabsContent } from "../ui/tabs";
import { useApp } from "../../context/app-context";
import Map from "../googleMap/map";
import { Listing } from "../../types/listing";

interface Props {
  list: Listing[];
  Component: any;
  value: string;
}

export default function ProductTabs(props: Props) {
  const { toggleShowMap }: any = useApp();

  return (
    <TabsContent
      value={props.value}
      className="w-full flex py-0 space-x-2 items-center px-2"
    >
      {!toggleShowMap ? (
        <section className="h-[820px] w-full flex gap-x-2 gap-y-4 items-center flex-wrap overflow-y-auto mx-auto justify-center">
          {props.list.length !== 0 ? (
            props.list.map((payload: Listing, id: number) => (
              <props.Component key={id} {...payload} />
            ))
          ) : (
            <>No Available products yet</>
          )}
        </section>
      ) : (
        <div className="bg-primary w-full h-full">
          <Map width="100%" height="820px" />
        </div>
      )}
    </TabsContent>
  );
}
