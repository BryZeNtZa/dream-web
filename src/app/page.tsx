import Card from "./Card";
import TopNavigationBar from "./TopNavigationBar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNavigationBar>

      </TopNavigationBar>

      <div className="p-6 w-min">
        <Card>
          <p>Le savoir est une arme alors soyons armés jusqu'aux dents</p>
        </Card>
      </div>

    </div>
  )
}
