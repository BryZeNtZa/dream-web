
import SearchResultBar from "./SearchResultBar";
import Card from "./Card";
import TopNavigationBar from "./TopNavigationBar";
import SearchResult from "./SearchResult";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fill">
      <TopNavigationBar>

      </TopNavigationBar>
      <div className="flex flex-row">
        <div className="p-4 w-64">
          <Card>
            <p>Le savoir est une arme alors soyons armés jusqu'aux dents</p>
          </Card>
        </div>
        <div className="w-full">
          <SearchResultBar>

          </SearchResultBar>
          <SearchResult>
            
          </SearchResult>
        </div>
      </div>
    </div>
  )
}
