import Header from "@/components/Header";
import { getItemList } from "@/lib/items";
import React, { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import Results from "./Results";
import Footer from "./Footer";

export interface Step {
  first: string;
  second: string;
  result: string;
}

async function App({ item }: { item?: string }) {
  const items = await getItemList();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header items={items} item={item} />

        {item && (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <Skeleton className="w-[500px] h-[300px] animate-pulse" />
              </div>
            }
          >
            <Results item={item} />
          </Suspense>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;