
import SearchResultBar from "./SearchResultBar";
import Card from "./Card";
import TopNavigationBar from "./TopNavigationBar";
import SearchResult from "./SearchResult";
import LeftBar from "./LeftBar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fill">
      <TopNavigationBar/>
      <div className="flex flex-row">
        <div className="p-4 w-80">
          <Card>
            <LeftBar/>
          </Card>
        </div>
        <div className="w-full">
          <SearchResultBar/>
          <SearchResult/>
        </div>
      </div>
    </div>
  )
}
