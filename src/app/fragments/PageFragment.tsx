export default function PageFragment({ children }: { children: React.ReactNode }) {

  return (
    <div className="row app-module-content">
        <div className="col col-md-10">
            <div className="app-module-view">
            {children}
            </div>
        </div>
    </div>
  )

}